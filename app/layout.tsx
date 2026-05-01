import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { jsonLd, profile, siteUrl } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Flexible Electronics, Sensors, Energy Harvesting`,
    template: `%s | ${profile.name}`
  },
  description:
    "Academic website for Prof. Saeed Ahmed Khan, Dean of Engineering and Technology at Sukkur IBA University, focused on flexible electronics, wearable sensors, thermogalvanic hydrogels, triboelectric nanogenerators, energy harvesting, and engineering education leadership.",
  keywords: [
    "Saeed Ahmed Khan",
    "flexible electronics",
    "wearable sensors",
    "thermogalvanic hydrogels",
    "triboelectric nanogenerators",
    "energy harvesting",
    "Sukkur IBA University",
    "engineering education",
    "quality assurance"
  ],
  openGraph: {
    title: `${profile.name} | Flexible Electronics and Engineering Leadership`,
    description:
      "Research and leadership profile for Prof. Saeed Ahmed Khan, Dean of the Faculty of Engineering and Technology at Sukkur IBA University.",
    url: siteUrl,
    siteName: profile.name,
    type: "profile",
    images: [
      {
        url: profile.imagePath,
        width: 303,
        height: 314,
        alt: "Prof. Dr. Saeed Ahmed Khan"
      }
    ]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link no-print" href="#main">
          Skip to main content
        </a>
        <div className="site-shell">
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </div>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}
