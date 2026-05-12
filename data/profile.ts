import type { LinkItem, Metric, NavItem } from "./types";

export const siteUrl = "https://saeed-ahmed-khan.example.edu";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Leadership", href: "/leadership" },
  { label: "Teaching", href: "/teaching" },
  { label: "Updates & Gallery", href: "/updates-gallery" },
  { label: "Contact", href: "/contact" }
];

export const profile = {
  name: "Saeed Ahmed Khan",
  honorific: "Prof.",
  credentials: "Ph.D. | Senior Member IEEE | National Certified Reviewer (Sindh HEC)",
  currentTitle: "Dean, Faculty of Engineering and Technology",
  department: "Department of Electrical Engineering",
  institution: "Sukkur IBA University",
  location: "Sindh, Pakistan",
  email: "saeed.abro@iba-suk.edu.pk",
  phone: "+92 333 7111 092",
  address:
    "Department of Electrical Engineering, Sukkur IBA University, Sindh, Pakistan",
  tagline:
    "Flexible electronics, self-powered sensors, thermogalvanic hydrogels, nanogenerators, and engineering-education leadership.",
  imagePath: "/images/profile/main-profile.jpg",
  positioning:
    "Engineering academic and materials-sensing researcher advancing flexible, wearable, self-powered, and thermogalvanic sensing systems while leading engineering education, accreditation, and quality enhancement at institutional scale. National Certified Reviewer of Higher Education Institutions (Sindh HEC, 100-hour formal review training).",
  shortBio:
    "Prof. Saeed Ahmed Khan is Dean of the Faculty of Engineering and Technology at Sukkur IBA University. His research bridges nanomaterials, flexible electronics, self-powered sensing, thermogalvanic hydrogels, triboelectric nanogenerators, and energy-harvesting systems. His leadership portfolio spans quality assurance, accreditation, HEC and international rankings (THE Impact, THE World, UI GreenMetric), editorial service for an HEC-recognized journal, and conference leadership across three editions of iCoMET.",
  cvPath: "/documents/Saeed-Ahmed-Khan-CV.pdf"
};

export const profileLinks: LinkItem[] = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=0k-E_IAAAAAJ&hl=en",
    external: true
  },
  {
    label: "Scopus",
    href: "https://www.scopus.com/authid/detail.uri?authorId=55735625200",
    external: true
  },
  {
    label: "Email",
    href: "mailto:saeed.abro@iba-suk.edu.pk"
  }
];

export const metrics: Metric[] = [
  {
    value: "~1,000",
    label: "Google Scholar citations",
    note: "Approximate metric listed in CV"
  },
  {
    value: "60+",
    label: "Peer-reviewed publications",
    note: "Journal, conference, and book chapter output"
  },
  {
    value: "18+",
    label: "Years of experience",
    note: "Academia, research, and engineering practice"
  },
  {
    value: "5",
    label: "Countries of research practice",
    note: "Pakistan, China, South Korea, Croatia/EU, and collaborations"
  },
  {
    value: "9",
    label: "Theses supervised",
    note: "Undergraduate, master, and Ph.D. research supervision"
  },
  {
    value: "30+",
    label: "Review roles",
    note: "Journals, conferences, and fellowship review"
  }
];

export const audienceCards = [
  {
    title: "For collaborators",
    text: "Research alignment across thermogalvanic hydrogels, flexible sensors, self-powered systems, printed electronics, and health-monitoring devices.",
    href: "/research"
  },
  {
    title: "For students",
    text: "Supervision areas include sensors, nanomaterials, energy harvesting, electronic devices, signal processing, and engineering systems.",
    href: "/teaching"
  },
  {
    title: "For institutions",
    text: "Leadership in accreditation, OBE, quality enhancement, HEC rankings, international ranking submissions, and engineering faculty development.",
    href: "/leadership"
  }
];

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  honorificPrefix: "Prof.",
  jobTitle: profile.currentTitle,
  worksFor: {
    "@type": "CollegeOrUniversity",
    name: profile.institution
  },
  affiliation: {
    "@type": "Organization",
    name: "Faculty of Engineering and Technology, Sukkur IBA University"
  },
  email: "mailto:" + profile.email,
  telephone: profile.phone,
  address: profile.address,
  sameAs: profileLinks.filter((link) => link.external).map((link) => link.href),
  alumniOf: [
    "University of Electronic Science and Technology of China",
    "Mehran University of Engineering and Technology",
    "University of Zagreb"
  ],
  knowsAbout: [
    "Flexible electronics",
    "Wearable sensors",
    "Self-powered sensing",
    "Triboelectric nanogenerators",
    "Thermogalvanic hydrogels",
    "Energy harvesting",
    "Engineering education",
    "Quality assurance",
    "Accreditation",
    "HEC rankings"
  ]
};
