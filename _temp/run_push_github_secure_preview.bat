@echo off
setlocal

echo ============================================================
echo Secure GitHub Push Helper for Prof. Saeed Website
echo ============================================================
echo.
echo Run this file from the VS Code terminal while you are inside
 echo the project folder, for example: D:\Dr_Saeed
echo.

if not exist "package.json" (
  echo ERROR: package.json was not found in this folder.
  echo Open VS Code in the project root, then run this script again.
  pause
  exit /b 1
)

if not exist "push_github_secure_preview.ps1" (
  echo ERROR: push_github_secure_preview.ps1 was not found beside this BAT file.
  echo Copy both files into the project root folder and run again.
  pause
  exit /b 1
)

powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0push_github_secure_preview.ps1"

endlocal
