"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/[0.92] text-white backdrop-blur-xl no-print">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          aria-label="Go to home page"
          className="flex min-w-0 items-center gap-3"
          href="/"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-10 w-10 place-items-center rounded-md border border-cyan/40 bg-white/[0.08] text-sm font-bold text-aqua">
            SAK
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold">{profile.name}</span>
            <span className="hidden truncate text-xs text-aqua/80 min-[430px]:block">
              Flexible sensing and engineering leadership
            </span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <Link
              className={cn(
                "rounded-md px-3 py-2 text-sm text-white/[0.78] transition hover:bg-white/10 hover:text-white",
                pathname === item.href && "bg-white/[0.12] text-aqua"
              )}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="rounded-md border border-white/20 p-2 text-white transition hover:bg-white/10 xl:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      {open ? (
        <nav aria-label="Mobile navigation" className="border-t border-white/10 bg-navy px-4 py-4 xl:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 sm:grid-cols-2">
            {navItems.map((item) => (
              <Link
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm text-white/[0.82] transition hover:bg-white/10 hover:text-white",
                  pathname === item.href && "bg-white/[0.12] text-aqua"
                )}
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
