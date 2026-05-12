<#
.SYNOPSIS
  Securely prepare and push a Next.js website project to a private GitHub repository.

.DESCRIPTION
  Run this script from the VS Code terminal while you are inside the website project folder
  (for example: D:\Dr_Saeed). It checks prerequisites, adds safe .gitignore rules,
  runs gallery import/build checks when available, initializes Git, commits changes,
  and pushes to the GitHub repository URL you provide.

.USAGE
  PowerShell:
    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
    .\push_github_secure_preview.ps1

  Or run the included batch launcher:
    run_push_github_secure_preview.bat
#>

param(
  [string]$RepositoryUrl = "",
  [string]$CommitMessage = "Initial academic website preview",
  [switch]$SkipInstall,
  [switch]$SkipBuild,
  [switch]$SkipGalleryImport,
  [switch]$NoPause
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Write-Section {
  param([string]$Text)
  Write-Host ""
  Write-Host "============================================================" -ForegroundColor Cyan
  Write-Host $Text -ForegroundColor Cyan
  Write-Host "============================================================" -ForegroundColor Cyan
}

function Write-Warn {
  param([string]$Text)
  Write-Host "WARNING: $Text" -ForegroundColor Yellow
}

function Stop-WithMessage {
  param([string]$Text)
  Write-Host "ERROR: $Text" -ForegroundColor Red
  if (-not $NoPause) { Read-Host "Press Enter to exit" | Out-Null }
  exit 1
}

function Assert-Command {
  param([string]$CommandName, [string]$InstallHint)
  if (-not (Get-Command $CommandName -ErrorAction SilentlyContinue)) {
    Stop-WithMessage "$CommandName was not found. $InstallHint"
  }
}

function Add-IgnoreRule {
  param([string]$Path, [string]$Rule)
  $content = ""
  if (Test-Path $Path) { $content = Get-Content $Path -Raw }
  $escaped = [regex]::Escape($Rule.Trim())
  if ($content -notmatch "(?m)^$escaped\s*$") {
    Add-Content -Path $Path -Value $Rule
  }
}

function Confirm-Step {
  param([string]$Question)
  $answer = Read-Host "$Question Type YES to continue"
  return ($answer -eq "YES")
}

Write-Section "Secure GitHub push helper for Next.js website"

$projectRoot = (Get-Location).Path
Write-Host "Project directory: $projectRoot"

if (-not (Test-Path (Join-Path $projectRoot "package.json"))) {
  Stop-WithMessage "package.json not found. Open the VS Code terminal in the project root, for example D:\Dr_Saeed, then run the script again."
}

Assert-Command "git" "Install Git for Windows from https://git-scm.com/download/win"
Assert-Command "node" "Install Node.js LTS from https://nodejs.org/"
Assert-Command "npm" "Install Node.js LTS from https://nodejs.org/ because npm is bundled with Node.js."

Write-Section "Adding safe .gitignore rules"
$gitignore = Join-Path $projectRoot ".gitignore"
if (-not (Test-Path $gitignore)) {
  New-Item -ItemType File -Path $gitignore | Out-Null
}

$rules = @(
  "",
  "# --- Secure preview deployment ignore rules ---",
  "node_modules/",
  ".next/",
  "out/",
  "npm-debug.log*",
  "yarn-debug.log*",
  "yarn-error.log*",
  "pnpm-debug.log*",
  ".env",
  ".env.local",
  ".env.development.local",
  ".env.test.local",
  ".env.production.local",
  ".DS_Store",
  "Thumbs.db",
  "desktop.ini",
  "*.tmp",
  "*.temp",
  "photos/",
  "docs/website-strategy/"
)

foreach ($rule in $rules) {
  if ($rule -eq "") { Add-Content -Path $gitignore -Value ""; continue }
  Add-IgnoreRule -Path $gitignore -Rule $rule
}

Write-Host ".gitignore checked and updated."

Write-Section "Privacy pre-check"
Write-Host "Anything inside the public folder can become visible on the deployed website. Review these files carefully."

if (Test-Path (Join-Path $projectRoot "public")) {
  Write-Host ""
  Write-Host "Files currently under public/:" -ForegroundColor Gray
  Get-ChildItem -Path (Join-Path $projectRoot "public") -Recurse -File |
    Sort-Object FullName |
    ForEach-Object { Write-Host ("  " + $_.FullName.Replace($projectRoot + [IO.Path]::DirectorySeparatorChar, "")) }

  $suspicious = Get-ChildItem -Path (Join-Path $projectRoot "public") -Recurse -File |
    Where-Object {
      $_.Name -match "(?i)(details|secret|private|reference|passport|id|cnic|\.env)" -or
      $_.Extension -match "(?i)\.(txt|docx|xlsx|pptx)$"
    }

  if ($suspicious) {
    Write-Host ""
    Write-Warn "Potentially sensitive or non-web files found under public/:"
    $suspicious | ForEach-Object { Write-Host ("  " + $_.FullName.Replace($projectRoot + [IO.Path]::DirectorySeparatorChar, "")) -ForegroundColor Yellow }
  }
} else {
  Write-Warn "No public folder found. This is unusual for a Next.js site."
}

if (-not (Confirm-Step "Have you reviewed public/ and confirmed it is safe to push/deploy?")) {
  Stop-WithMessage "Stopped before Git operations. Remove sensitive files, then run again."
}

Write-Section "Install dependencies"
if ($SkipInstall) {
  Write-Host "Skipping npm install because -SkipInstall was provided."
} else {
  if (-not (Test-Path (Join-Path $projectRoot "node_modules"))) {
    Write-Host "node_modules not found. Running npm install..."
    npm install
  } else {
    Write-Host "node_modules exists. Running npm install to make sure dependencies are current..."
    npm install
  }
}

$packageJsonText = Get-Content (Join-Path $projectRoot "package.json") -Raw

Write-Section "Import gallery assets if script exists"
if ($SkipGalleryImport) {
  Write-Host "Skipping gallery import because -SkipGalleryImport was provided."
} elseif ($packageJsonText -match '"import:gallery"') {
  Write-Host "Found npm script import:gallery. Running it..."
  npm run import:gallery
} else {
  Write-Host "No import:gallery script found. Skipping gallery import."
}

Write-Section "Build check"
if ($SkipBuild) {
  Write-Host "Skipping npm run build because -SkipBuild was provided."
} else {
  if ($packageJsonText -match '"build"') {
    npm run build
  } else {
    Stop-WithMessage "No build script found in package.json. Add a build script before deployment."
  }
}

Write-Section "Optional checks"
if ($packageJsonText -match '"lint"') {
  Write-Host "Running npm run lint..."
  npm run lint
} else {
  Write-Host "No lint script found. Skipping."
}

if ($packageJsonText -match '"typecheck"') {
  Write-Host "Running npm run typecheck..."
  npm run typecheck
} else {
  Write-Host "No typecheck script found. Skipping."
}

Write-Section "Initialize Git and review files"
if (-not (Test-Path (Join-Path $projectRoot ".git"))) {
  git init
}

git branch -M main

Write-Host ""
Write-Host "Git status before add:" -ForegroundColor Gray
git status --short

if (-not (Confirm-Step "Do you want to stage and commit these files?")) {
  Stop-WithMessage "Stopped before commit. Review files and run again."
}

git add .

Write-Host ""
Write-Host "Git status after add:" -ForegroundColor Gray
git status --short

$pending = git status --porcelain
if ($pending) {
  git commit -m $CommitMessage
} else {
  Write-Host "No changes to commit."
}

Write-Section "Configure GitHub remote"
$existingOrigin = ""
try {
  $existingOrigin = git remote get-url origin 2>$null
} catch {
  $existingOrigin = ""
}

if ([string]::IsNullOrWhiteSpace($RepositoryUrl)) {
  if (-not [string]::IsNullOrWhiteSpace($existingOrigin)) {
    Write-Host "Existing origin remote: $existingOrigin"
    $useExisting = Read-Host "Use this origin? Type YES to use it, or press Enter to enter a new URL"
    if ($useExisting -eq "YES") {
      $RepositoryUrl = $existingOrigin
    }
  }
}

if ([string]::IsNullOrWhiteSpace($RepositoryUrl)) {
  Write-Host "Create a PRIVATE empty repository on GitHub first, then paste its HTTPS URL."
  Write-Host "Example: https://github.com/sarkar404/dr-saeed-website.git"
  $RepositoryUrl = Read-Host "GitHub repository URL"
}

if ([string]::IsNullOrWhiteSpace($RepositoryUrl)) {
  Stop-WithMessage "Repository URL was not provided."
}

if ([string]::IsNullOrWhiteSpace($existingOrigin)) {
  git remote add origin $RepositoryUrl
} elseif ($existingOrigin -ne $RepositoryUrl) {
  git remote set-url origin $RepositoryUrl
}

Write-Section "Push to GitHub"
git push -u origin main

Write-Section "Done"
Write-Host "Your project has been pushed to GitHub."
Write-Host "Next step: connect this GitHub repo to Cloudflare Pages, then protect it with Cloudflare Access."
Write-Host "Recommended Cloudflare Pages build settings:"
Write-Host "  Framework preset: Next.js or Next.js Static HTML Export, depending on your project configuration"
Write-Host "  Build command: npm run build"
Write-Host "  Output directory: out for static export, or use the Cloudflare Next.js/Workers adapter if not static"

if (-not $NoPause) { Read-Host "Press Enter to exit" | Out-Null }
