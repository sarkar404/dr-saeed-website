import type { LucideIcon } from "lucide-react";

export type Metric = {
  label: string;
  value: string;
  note: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type TimelineItem = {
  title: string;
  organization: string;
  location?: string;
  period: string;
  description?: string;
  highlights?: string[];
  type?: "role" | "education" | "industry" | "international";
};

export type ResearchTheme = {
  id: string;
  title: string;
  shortTitle: string;
  summary: string;
  keywords: string[];
  applications: string[];
  methods: string[];
  icon: LucideIcon;
};

export type PublicationType = "journal" | "conference" | "book";

export type Publication = {
  id: string;
  title: string;
  authors: string;
  year: number;
  venue: string;
  type: PublicationType;
  url?: string;
  doi?: string;
  volume?: string;
  pages?: string;
  themeIds: string[];
  tags: string[];
  selected?: boolean;
  summary?: string;
};

export type Grant = {
  year: string;
  role: string;
  title: string;
  agency: string;
  amount?: string;
  summary: string;
  themeIds: string[];
};

export type NewsItem = {
  date: string;
  title: string;
  summary: string;
  href?: string;
  tag: string;
};

export type ServiceGroup = {
  title: string;
  items: string[];
};

