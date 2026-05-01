import { copyFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";

/* global console, process */

const projectRoot = process.cwd();
const photosRoot = path.join(projectRoot, "photos");
const profileOutputDir = path.join(projectRoot, "public", "images", "profile");
const galleryOutputDir = path.join(projectRoot, "public", "images", "gallery");

const acceptedImageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

const eventFolders = [
  {
    sourceFolder: "01_Board_of_Meeting",
    title: "Board Meeting",
    slug: "board-meeting"
  },
  {
    sourceFolder: "02_Generative_AI_Workshop",
    title: "Generative AI Workshop",
    slug: "generative-ai-workshop"
  },
  {
    sourceFolder: "03_Quality Enhancement Cell (QEC)",
    title: "Quality Enhancement Cell (QEC)",
    slug: "quality-enhancement-cell"
  },
  {
    sourceFolder: "04_21st Meeting of the Board of Advanced Studies and Research (BASR)",
    title: "21st Meeting of the Board of Advanced Studies and Research (BASR)",
    slug: "basr-21st-meeting"
  },
  {
    sourceFolder: "05_The Industrial Advisory Board (IAB)",
    title: "The Industrial Advisory Board (IAB)",
    slug: "industrial-advisory-board"
  },
  {
    sourceFolder: "06_23rd Syndicate Meeting of Sukkur IBA University",
    title: "23rd Syndicate Meeting of Sukkur IBA University",
    slug: "sukkur-iba-syndicate-23rd-meeting"
  },
  {
    sourceFolder: "07_16th Meeting of the Senate of Sukkur IBA University",
    title: "16th Meeting of the Senate of Sukkur IBA University",
    slug: "sukkur-iba-senate-16th-meeting"
  },
  {
    sourceFolder: "08_Training_&_Conferences",
    title: "Training & Conferences",
    slug: "training-conferences"
  },
  {
    sourceFolder: "09_personal_life_photos",
    title: "Personal Moments",
    slug: "personal-moments"
  }
];

function normalizeFilename(filename, index) {
  const extension = path.extname(filename).toLowerCase();
  const base = path.basename(filename, path.extname(filename));
  const normalizedBase = base
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
  const safeBase = normalizedBase || `photo-${String(index + 1).padStart(2, "0")}`;

  return `${safeBase}${extension}`;
}

async function listDirectoryNames(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
}

async function findChildDirectory(parent, expectedName) {
  const directoryNames = await listDirectoryNames(parent);
  const exactMatch = directoryNames.find((name) => name === expectedName);

  if (exactMatch) {
    return exactMatch;
  }

  return directoryNames.find((name) => name.toLowerCase() === expectedName.toLowerCase());
}

function shouldIgnoreImageCandidate(filename) {
  const lower = filename.toLowerCase();

  return (
    lower === "desktop.ini" ||
    lower.includes("thumb") ||
    lower.endsWith(".tmp") ||
    lower.startsWith("~$")
  );
}

async function copyProfilePhoto() {
  const entries = await readdir(photosRoot, { withFileTypes: true });
  const profilePhoto = entries.find(
    (entry) => entry.isFile() && entry.name.toLowerCase() === "main_profile_photo.jpg"
  );

  if (!profilePhoto) {
    console.warn("Profile photo not found: Main_Profile_Photo.jpg");
    return false;
  }

  await mkdir(profileOutputDir, { recursive: true });
  await copyFile(path.join(photosRoot, profilePhoto.name), path.join(profileOutputDir, "main-profile.jpg"));
  console.log("Profile photo imported -> public/images/profile/main-profile.jpg");

  return true;
}

async function importEventFolder(event) {
  const actualFolder = await findChildDirectory(photosRoot, event.sourceFolder);

  if (!actualFolder) {
    console.warn(`Missing source folder: ${event.sourceFolder}`);
    return {
      ...event,
      actualFolder: null,
      details: false,
      imageCount: 0
    };
  }

  const sourceDir = path.join(photosRoot, actualFolder);
  const outputDir = path.join(galleryOutputDir, event.slug);
  const entries = await readdir(sourceDir, { withFileTypes: true });
  const hasDetails = entries.some((entry) => entry.isFile() && entry.name.toLowerCase() === "details.txt");
  const images = entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((filename) => acceptedImageExtensions.has(path.extname(filename).toLowerCase()))
    .filter((filename) => !shouldIgnoreImageCandidate(filename))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

  await mkdir(outputDir, { recursive: true });

  const usedNames = new Set();

  for (const [index, filename] of images.entries()) {
    const extension = path.extname(filename).toLowerCase();
    const baseName = path.basename(normalizeFilename(filename, index), extension);
    let safeName = `${baseName}${extension}`;
    let suffix = 2;

    while (usedNames.has(safeName)) {
      safeName = `${baseName}-${suffix}${extension}`;
      suffix += 1;
    }

    usedNames.add(safeName);
    await copyFile(path.join(sourceDir, filename), path.join(outputDir, safeName));
  }

  console.log(
    `${event.title}: ${images.length} image${images.length === 1 ? "" : "s"} imported; details.txt ${
      hasDetails ? "found" : "missing"
    }; source folder "${actualFolder}".`
  );

  return {
    ...event,
    actualFolder,
    details: hasDetails,
    imageCount: images.length
  };
}

async function main() {
  console.log(`Importing gallery assets from ${photosRoot}`);
  await mkdir(galleryOutputDir, { recursive: true });

  await copyProfilePhoto();

  const results = [];

  for (const event of eventFolders) {
    results.push(await importEventFolder(event));
  }

  const totalImages = results.reduce((count, result) => count + result.imageCount, 0);
  const withDetails = results.filter((result) => result.details).map((result) => result.title);
  const withoutDetails = results.filter((result) => !result.details).map((result) => result.title);

  console.log("");
  console.log(`Event folders processed: ${results.length}`);
  console.log(`Gallery images imported: ${totalImages}`);
  console.log(`Folders with details.txt: ${withDetails.join(", ") || "none"}`);
  console.log(`Folders without details.txt: ${withoutDetails.join(", ") || "none"}`);
  console.log("Raw details.txt files were not copied into public.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
