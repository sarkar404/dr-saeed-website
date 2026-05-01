import { Download } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

type CVDownloadButtonProps = {
  variant?: "primary" | "secondary";
};

export function CVDownloadButton({ variant = "primary" }: CVDownloadButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
        variant === "primary"
          ? "bg-cyan text-ink shadow-glow hover:bg-aqua"
          : "border border-line bg-white text-ink hover:border-cyan hover:text-blue"
      )}
      href={profile.cvPath}
      download
    >
      <Download aria-hidden="true" size={17} />
      Download CV
    </a>
  );
}

