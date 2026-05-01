export type GalleryCategory =
  | "Academic Governance"
  | "Workshop"
  | "Quality Assurance"
  | "Advisory Board"
  | "Training & Conferences"
  | "Personal Moments"
  | "University Events"
  | "Other";

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type GalleryEvent = {
  id: string;
  title: string;
  slug: string;
  displayDate?: string;
  sortDate?: string;
  category: GalleryCategory;
  summary: string;
  sourceFolder: string;
  coverImage: string;
  images: GalleryImage[];
  featured?: boolean;
  homepagePreview?: boolean;
};

const imageSeries = (slug: string, count: number, title: string): GalleryImage[] =>
  Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");

    return {
      src: `/images/gallery/${slug}/${number}.jpg`,
      alt: `${title} photo ${index + 1}`,
      caption: `${title}`
    };
  });

export const galleryEvents: GalleryEvent[] = [
  {
    id: "generative-ai-workshop",
    title: "Generative AI Workshop",
    slug: "generative-ai-workshop",
    category: "Workshop",
    summary:
      "The Department of Computer Systems Engineering at Sukkur IBA University organized a Generative AI Workshop led by Engr. Umair Ayaz Kamangar, FYP Coordinator. Students from across the university, including Computer Science, Computer Systems Engineering, and Electrical Engineering, participated in practical sessions, with Prof. Khan present in his dean's role to support the academic initiative.",
    sourceFolder: "02_Generative_AI_Workshop",
    coverImage: "/images/gallery/generative-ai-workshop/01.jpg",
    images: imageSeries("generative-ai-workshop", 4, "Generative AI Workshop"),
    featured: true,
    homepagePreview: true
  },
  {
    id: "basr-21st-meeting",
    title: "21st Meeting of the Board of Advanced Studies and Research (BASR)",
    slug: "basr-21st-meeting",
    displayDate: "March 9, 2026",
    sortDate: "2026-03-09",
    category: "Academic Governance",
    summary:
      "Sukkur IBA University convened the 21st BASR meeting on March 9, 2026, at the Main Campus Boardroom under the guidance of university leadership. The Board reviewed postgraduate progress, evaluation processes, supervisory practices, academic integrity protocols, and support mechanisms for PhD, MS, and MPhil scholars.",
    sourceFolder: "04_21st Meeting of the Board of Advanced Studies and Research (BASR)",
    coverImage: "/images/gallery/basr-21st-meeting/01.jpg",
    images: imageSeries("basr-21st-meeting", 4, "21st BASR Meeting"),
    featured: true,
    homepagePreview: true
  },
  {
    id: "board-meeting",
    title: "Board Meeting",
    slug: "board-meeting",
    displayDate: "February 26, 2026",
    sortDate: "2026-02-26",
    category: "Academic Governance",
    summary:
      "The Board of Faculty meeting of the Faculty of Engineering & Technology was held on February 26, 2026, in the Admin Block board room at Sukkur IBA University. Convened by Dr. Saeed Ahmed Khan as Dean, the meeting reviewed academic matters from the Electrical Engineering and Computer Systems Engineering departments and endorsed recommendations for program development.",
    sourceFolder: "01_Board_oF_Meeting",
    coverImage: "/images/gallery/board-meeting/01.jpg",
    images: imageSeries("board-meeting", 4, "Board Meeting"),
    featured: true
  },
  {
    id: "industrial-advisory-board",
    title: "The Industrial Advisory Board (IAB)",
    slug: "industrial-advisory-board",
    displayDate: "February 3, 2026",
    sortDate: "2026-02-03",
    category: "Advisory Board",
    summary:
      "The Industrial Advisory Board meeting of the Faculty of Engineering & Technology was held on February 3, 2026, at Sukkur IBA University and was convened by Dr. Saeed Ahmed Khan. Academic leaders and industry professionals reviewed curriculum improvements for electrical engineering and computer systems engineering, with discussion on industry alignment, emerging technologies, workforce skills, and SDG integration.",
    sourceFolder: "05_The Industrial Advisory Board (IAB)",
    coverImage: "/images/gallery/industrial-advisory-board/01.jpg",
    images: imageSeries("industrial-advisory-board", 5, "Industrial Advisory Board"),
    featured: true,
    homepagePreview: true
  },
  {
    id: "quality-enhancement-cell",
    title: "Quality Enhancement Cell (QEC)",
    slug: "quality-enhancement-cell",
    displayDate: "January 1, 2026",
    sortDate: "2026-01-01",
    category: "Quality Assurance",
    summary:
      "The Quality Enhancement Cell held the second Institutional Quality Circle meeting on January 1, 2026, chaired by Vice Chancellor Prof. Dr. Asif Ahmed Shaikh and facilitated by Dr. Saeed Ahmed Khan as Director QEC. The forum reviewed preparation for the HEC Quality Assurance Agency's RIPE visit and discussed Fall 2025 online teacher and course evaluation results as part of continuous improvement.",
    sourceFolder: "03_Quality Enhancement Cell (QEC)",
    coverImage: "/images/gallery/quality-enhancement-cell/01.jpg",
    images: imageSeries("quality-enhancement-cell", 4, "Quality Enhancement Cell"),
    featured: true,
    homepagePreview: true
  },
  {
    id: "sukkur-iba-senate-16th-meeting",
    title: "16th Meeting of the Senate of Sukkur IBA University",
    slug: "sukkur-iba-senate-16th-meeting",
    displayDate: "December 30, 2025",
    sortDate: "2025-12-30",
    category: "Academic Governance",
    summary:
      "The 16th Senate meeting of Sukkur IBA University was held on December 30, 2025, under the leadership of Vice Chancellor Prof. Dr. Asif Ahmed Shaikh. The Senate reviewed academic, administrative, and financial matters, including budget estimates, service-related statutes, and the Annual Report 2025, while noting institutional progress in governance and quality.",
    sourceFolder: "07_16th Meeting of the Senate of Sukkur IBA University",
    coverImage: "/images/gallery/sukkur-iba-senate-16th-meeting/01.jpg",
    images: imageSeries("sukkur-iba-senate-16th-meeting", 4, "16th Senate Meeting"),
    featured: true
  },
  {
    id: "sukkur-iba-syndicate-23rd-meeting",
    title: "23rd Syndicate Meeting of Sukkur IBA University",
    slug: "sukkur-iba-syndicate-23rd-meeting",
    displayDate: "December 24, 2025",
    sortDate: "2025-12-24",
    category: "Academic Governance",
    summary:
      "The 23rd Syndicate Meeting of Sukkur IBA University was convened on December 24, 2025, under the leadership of Chairman Syndicate and Vice Chancellor Prof. Dr. Asif Ahmed Shaikh. Members reviewed academic, administrative, financial, establishment, and policy matters, including the Annual Report and proposed statutes supporting university governance.",
    sourceFolder: "06_23rd Syndicate Meeting of Sukkur IBA University",
    coverImage: "/images/gallery/sukkur-iba-syndicate-23rd-meeting/01.jpg",
    images: imageSeries("sukkur-iba-syndicate-23rd-meeting", 5, "23rd Syndicate Meeting"),
    featured: true
  },
  {
    id: "training-conferences",
    title: "Training & Conferences",
    slug: "training-conferences",
    category: "Training & Conferences",
    summary:
      "Selected moments from academic training sessions, professional development activities, conferences, and scholarly engagement. The archive reflects Prof. Khan's broader participation in professional learning and academic exchange.",
    sourceFolder: "08_Training_&_Conferences",
    coverImage: "/images/gallery/training-conferences/01.jpg",
    images: imageSeries("training-conferences", 9, "Training and Conferences"),
    featured: true
  },
  {
    id: "personal-moments",
    title: "Personal Moments",
    slug: "personal-moments",
    category: "Personal Moments",
    summary:
      "Selected personal moments included as part of Prof. Khan's broader academic and professional journey. The gallery is presented in a restrained way alongside the site's primary academic and institutional archive.",
    sourceFolder: "09_personal_life_photos",
    coverImage: "/images/gallery/personal-moments/01.jpg",
    images: imageSeries("personal-moments", 8, "Personal Moments")
  }
];

export const galleryCategories: Array<GalleryCategory | "All"> = [
  "All",
  "Academic Governance",
  "Workshop",
  "Quality Assurance",
  "Advisory Board",
  "Training & Conferences",
  "Personal Moments"
];

export const featuredGalleryEvents = galleryEvents.filter((event) => event.featured);

export const homepageGalleryEvents = galleryEvents.filter((event) => event.homepagePreview);

export const galleryImageCount = galleryEvents.reduce((total, event) => total + event.images.length, 0);
