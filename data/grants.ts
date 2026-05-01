import type { Grant } from "./types";

export const grants: Grant[] = [
  {
    year: "2024",
    role: "Principal Investigator",
    title: "Sindh Research Support Programme",
    agency: "Sindh Higher Education Commission",
    amount: "PKR 2.4 million",
    summary:
      "Awarded for advanced sensor and materials research, strengthening the institutional base for flexible sensing and electronic materials.",
    themeIds: ["flexible-sensors", "printed-soft-electronics"]
  },
  {
    year: "2019",
    role: "Co-Principal Investigator",
    title: "Start-up Research Grant",
    agency: "HEC Pakistan",
    summary:
      "Brain-computer interface project using EEG signal processing to support paralysis patients.",
    themeIds: ["health-hmi", "systems"]
  },
  {
    year: "2018",
    role: "Principal Investigator",
    title: "Start-up Research Grant",
    agency: "HEC Pakistan",
    summary:
      "Flexible sensors based on nanomaterials, establishing a research line in flexible sensor fabrication and characterization.",
    themeIds: ["flexible-sensors", "printed-soft-electronics"]
  },
  {
    year: "2013",
    role: "Investigator",
    title: "Sustainable Energy Project",
    agency: "ICT R&D Fund",
    summary:
      "Alternative-energy system for street lighting, residential power, and road parking energy needs, aimed at reducing dependence on thermal generation.",
    themeIds: ["systems", "energy-harvesting"]
  }
];
