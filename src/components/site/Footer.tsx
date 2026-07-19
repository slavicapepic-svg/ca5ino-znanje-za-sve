import { Link } from "@tanstack/react-router";
import { Youtube, Instagram, Linkedin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { TikTokIcon } from "./icons";
import { activeSocials } from "@/content/socials";

const socialIcon = { youtube: Youtube, instagram: Instagram, tiktok: TikTokIcon, linkedin: Linkedin } as const;




const footerCols = [
  {
    title: "Edukacija",
    links: [
      { label: "Bonus uslovi", to: "/bonus-uslovi" },
      { label: "Sve o igricama", to: "/sve-o-igricama" },
      { label: "Uplate & Isplate", to: "/uplate-isplate" },
      { label: "Svet & regulative", to: "/svet-regulative" },
      { label: "Reč stručnjaka", to: "/rec-strucnjaka" },
      { label: "Odgovorna igra", to: "/odgovorna-igra" },
    ],
  },
  {
    title: "Informacije",
    links: [
      { label: "Vesti i Mediji", to: "/vesti-mediji" },
      { label: "O nama", to: "/o-nama" },
      { label: "Postavi pitanje", to: "/postavi-pitanje" },
    ],
  },
] as const;

const legalLinks = [
  { label: "Uslovi korišćenja", to: "/uslovi-koriscenja" },
  { label: "Politika privatnosti", to: "/politika-privatnosti" },
  { label: "Politika kolačića", to: "/politika-kolacica" },
  { label: "Uređivačka politika", to: "/urednicka-politika" },
  { label: "Disclaimer", to: "/disclaimer" },
] as const;

export function Footer() {
  return (
    <footer id="kontakt" className="bg-[color:var(--brand-primary-deep)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <Logo variant="white" />
          <p className="mt-4 max-w-xs text-sm text-white/70">
            Edukativna platforma o mehanizmima iGaming industrije i odgovornoj igri.
          </p>
          {activeSocials.length > 0 && (
            <div className="mt-5 flex items-center gap-2">
              {activeSocials.map((s) => {
                const Icon = socialIcon[s.key];
                return (
                  <a key={s.key} aria-label={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-accent hover:text-accent-foreground">
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          )}
        </div>


        {footerCols.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-bold uppercase tracking-wider text-white">{col.title}</p>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-white/75 transition hover:text-accent">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-white">Zatražite pomoć</p>
          <div className="mt-5 rounded-2xl border border-white/15 bg-white/[0.04] p-5 text-sm leading-relaxed text-white/85">
            Imate problem sa kontrolom igranja? Besplatan broj za savetovanje je{" "}
            <a href="tel:0800110011" className="font-extrabold text-accent hover:underline">0800-110-011</a>{" "}
            i radi radnim danima od 7 do 22h. Za mobilne telefone pozovite{" "}
            <a href="tel:09003090007" className="font-extrabold text-accent hover:underline">0900-3090-007</a>.
          </div>
          <Link to="/pomoc" className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-2 text-xs font-bold text-accent-foreground transition hover:opacity-90">
            <Phone className="h-3.5 w-3.5" /> Sve institucije i kontakti
          </Link>
        </div>


      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-white/70 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <Link key={l.label} to={l.to} className="hover:text-accent">{l.label}</Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-extrabold text-accent-foreground">18+ 🔞</span>
            <span>Igre na sreću mogu izazvati zavisnost. Igrajte odgovorno.</span>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-8 text-xs text-white/50 md:px-6">
          © 2026 ca<span className="logo-five">5</span>ino Zašto Zato. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
}
