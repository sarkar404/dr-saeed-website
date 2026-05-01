import {
  Activity,
  BrainCircuit,
  Cpu,
  Droplets,
  Leaf,
  RadioTower,
  Zap
} from "lucide-react";
import type { ResearchTheme } from "./types";

export const researchThemes: ResearchTheme[] = [
  {
    id: "flexible-sensors",
    title: "Flexible Sensors Based on Carbon Nanomaterials",
    shortTitle: "Flexible Sensors",
    summary:
      "Design and fabrication of flexible and stretchable sensors using carbon nanotubes, microstructured interfaces, and thin-film materials for pressure, strain, motion, and tactile sensing.",
    keywords: [
      "carbon nanotubes",
      "strain sensors",
      "pressure sensors",
      "flexible substrates",
      "thin films"
    ],
    applications: [
      "human motion",
      "robotic sensing",
      "wearable monitoring",
      "tactile interfaces"
    ],
    methods: ["CVD", "EB-PVD", "SEM", "XRD", "parameter analysis"],
    icon: Cpu
  },
  {
    id: "thermogalvanic",
    title: "Thermogalvanic Hydrogels and Self-Powered Biosensing",
    shortTitle: "Thermogalvanic Hydrogels",
    summary:
      "Thermoelectric gel and organohydrogel systems that convert body or ambient heat gradients into sensing signals for respiratory monitoring, facial perception, posture, smart writing, and on-hand interfaces.",
    keywords: [
      "thermogalvanic gels",
      "hydrogels",
      "self-powered sensors",
      "thermoelectric response",
      "organohydrogels"
    ],
    applications: [
      "respiration",
      "facial expression",
      "posture",
      "smart pen",
      "virtual interface"
    ],
    methods: ["gel networks", "temperature gradients", "deep-learning-assisted sensing"],
    icon: Droplets
  },
  {
    id: "energy-harvesting",
    title: "Triboelectric Nanogenerators and Hybrid Energy Harvesting",
    shortTitle: "Energy Harvesting",
    summary:
      "Self-powered devices that harvest mechanical, sliding, contact, solar, and low-frequency vibration energy for small electronics, emergency systems, and distributed sensing.",
    keywords: [
      "triboelectric nanogenerators",
      "hybrid nanogenerators",
      "solar integration",
      "body motion",
      "low-frequency vibration"
    ],
    applications: [
      "small electronics",
      "field survival",
      "wireless locating",
      "wearables",
      "sustainable power"
    ],
    methods: ["contact-mode TENG", "slide-mode TENG", "hybrid energy systems"],
    icon: Zap
  },
  {
    id: "printed-soft-electronics",
    title: "Printed and Soft Electronics with EHD Fabrication",
    shortTitle: "Printed Electronics",
    summary:
      "Electrohydrodynamic jet printing, PDMS device fabrication, and soft electronic processes for transparent, flexible, and conductive electronic devices.",
    keywords: [
      "EHD jet printing",
      "PDMS",
      "inkjet EHD",
      "soft electronics",
      "transparent devices"
    ],
    applications: [
      "conductive devices",
      "device prototyping",
      "soft sensors",
      "flexible substrates"
    ],
    methods: ["EHD", "3D printing", "PDMS printing", "fluid-flow analysis"],
    icon: RadioTower
  },
  {
    id: "health-hmi",
    title: "Wearable Health, HMI, Respiration, Posture, and Agriculture",
    shortTitle: "Health and HMI",
    summary:
      "Application-focused work connecting materials research to health monitoring, human-machine interfaces, respiration sensing, smart agriculture, posture recognition, and assistive communication.",
    keywords: [
      "wearable biosensing",
      "HMI",
      "respiration",
      "posture",
      "smart agriculture"
    ],
    applications: [
      "health monitoring",
      "aphasic patient support",
      "agriculture",
      "identity recognition",
      "posture assessment"
    ],
    methods: ["signal processing", "machine learning", "wearable integration"],
    icon: Activity
  },
  {
    id: "systems",
    title: "Sustainable Energy and Engineering Systems",
    shortTitle: "Engineering Systems",
    summary:
      "Applied engineering systems work informed by industrial electrical and instrumentation practice, including sustainable energy projects and biomedical signal-processing systems.",
    keywords: [
      "sustainable energy",
      "EEG signal processing",
      "instrumentation",
      "alternative energy",
      "engineering systems"
    ],
    applications: [
      "street lighting",
      "residential energy",
      "BCI support",
      "engineering education"
    ],
    methods: ["MATLAB", "LabVIEW", "Python", "C++", "control systems"],
    icon: Leaf
  },
  {
    id: "leadership",
    title: "Engineering Education, Accreditation, and Quality Systems",
    shortTitle: "Education Leadership",
    summary:
      "Academic leadership in outcome-based education, quality assurance, accreditation, rankings, governance, editorial service, and faculty development.",
    keywords: ["OBE", "QEC", "accreditation", "HEC rankings", "quality assurance"],
    applications: [
      "curriculum systems",
      "program review",
      "ranking evidence",
      "faculty training"
    ],
    methods: ["self-assessment", "audits", "benchmarking", "evidence portfolios"],
    icon: BrainCircuit
  }
];

export const themeById = Object.fromEntries(
  researchThemes.map((theme) => [theme.id, theme])
);

