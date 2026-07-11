import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ChevronDown, Youtube, Instagram, Linkedin, ShieldCheck, Sparkles, Wallet, Dice5, Gavel,
  HeartHandshake, Menu, X,
} from "lucide-react";
import { Logo } from "./Logo";
import { TikTokIcon } from "./icons";
import { activeSocials } from "@/content/socials";

export const eduItems = [
  { label: "Registracija & Verifikacija", to: "/registracija-verifikacija", icon: ShieldCheck },
  { label: "Bonus uslovi", to: "/bonus-uslovi", icon: Sparkles },
  { label: "Uplate & Isplate", to: "/uplate-isplate", icon: Wallet },
  { label: "Sve o igricama", to: "/sve-o-igricama", icon: Dice5 },
  { label: "Svet & regulative", to: "/svet-regulative", icon: Gavel },
  { label: "Odgovorna igra i alati", to: "/odgovorna-igra", icon: HeartHandshake },
] as const;

const topNav = [
  { label: "O nama", to: "/o-nama" as const },
  { label: "Reč stručnjaka", to: "/rec-strucnjaka" as const },
  { label: "Vesti i Mediji", to: "/vesti-mediji" as const },
  { label: "Vaša pitanja", to: "/postavi-pitanje" as const },
  { label: "Pomoć", to: "/pomoc" as const },
];

const socialIcon = {
  youtube: Youtube,
  instagram: Instagram,
  tiktok: TikTokIcon,
  linkedin: Linkedin,
} as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [eduOpen, setEduOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Logo variant="white" />

        <nav className="hidden items-center gap-1 lg:flex">
          <Link to="/o-nama" className="rounded-lg px-3 py-2 text-sm font-medium text-text-body hover:bg-blue-50 hover:text-brand">
            O nama
          </Link>

          <div className="relative" onMouseEnter={() => setEduOpen(true)} onMouseLeave={() => setEduOpen(false)}>
            <button className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-text-body hover:bg-blue-50 hover:text-brand">
              Edukacija <ChevronDown className="h-4 w-4" />
            </button>
            {eduOpen && (
              <div className="absolute left-0 top-full w-[420px] pt-2">
                <div className="rounded-2xl border border-border bg-white p-3 shadow-card">
                  <div className="grid grid-cols-1 gap-1">
                    {eduItems.map((it) => (
                      <Link key={it.label} to={it.to} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-text-body hover:bg-blue-50">
                        <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-brand">
                          <it.icon className="h-4 w-4" />
                        </span>
                        <span className="font-medium text-text-strong">{it.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/rec-strucnjaka" className="rounded-lg px-3 py-2 text-sm font-medium text-text-body hover:bg-blue-50 hover:text-brand">Reč stručnjaka</Link>
          <Link to="/vesti-mediji" className="rounded-lg px-3 py-2 text-sm font-medium text-text-body hover:bg-blue-50 hover:text-brand">Vesti i Mediji</Link>
          <Link to="/postavi-pitanje" className="rounded-lg px-3 py-2 text-sm font-medium text-text-body hover:bg-blue-50 hover:text-brand">Vaša pitanja</Link>
          <Link to="/pomoc" className="rounded-lg px-3 py-2 text-sm font-medium text-text-body hover:bg-blue-50 hover:text-brand">Pomoć</Link>
        </nav>

        {activeSocials.length > 0 && (
          <div className="ml-auto flex items-center gap-0.5 sm:gap-1 lg:ml-0">
            {activeSocials.map((s) => {
              const Icon = socialIcon[s.key];
              return (
                <a key={s.key} aria-label={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full text-text-muted hover:bg-blue-50 hover:text-brand">
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        )}

        <button className="grid h-10 w-10 place-items-center rounded-lg border border-border lg:hidden" aria-label="Meni" onClick={() => setMobileOpen((v) => !v)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3">
            {topNav.map((l) => (
              <Link key={l.label} to={l.to} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-text-body hover:bg-blue-50">
                {l.label}
              </Link>
            ))}
            <p className="mt-3 px-3 text-xs font-semibold uppercase tracking-wider text-text-muted">Edukacija</p>
            {eduItems.map((it) => (
              <Link key={it.label} to={it.to} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text-body hover:bg-blue-50">
                <it.icon className="h-4 w-4 text-brand" />
                {it.label}
              </Link>
            ))}
            {activeSocials.length > 0 && (
              <div className="mt-3 flex items-center gap-2 px-3">
                {activeSocials.map((s) => {
                  const Icon = socialIcon[s.key];
                  return (
                    <a key={s.key} aria-label={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-blue-50 text-brand">
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
