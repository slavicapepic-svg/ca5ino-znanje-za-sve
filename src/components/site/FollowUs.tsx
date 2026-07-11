import { Youtube, Instagram, Linkedin, Mail } from "lucide-react";
import { TikTokIcon } from "./icons";
import { activeSocials } from "@/content/socials";

const socialIcon = {
  youtube: Youtube,
  instagram: Instagram,
  tiktok: TikTokIcon,
  linkedin: Linkedin,
} as const;

const brandClass: Record<string, string> = {
  youtube: "hover:bg-red-500 hover:text-white hover:border-red-500",
  instagram: "hover:bg-pink-500 hover:text-white hover:border-pink-500",
  tiktok: "hover:bg-black hover:text-white hover:border-black",
  linkedin: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]",
};

export function FollowUs() {
  if (activeSocials.length === 0) return null;

  return (
    <section aria-labelledby="follow-us-title" className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-text-muted">
            <Mail className="h-3.5 w-3.5" /> Ostanimo u kontaktu
          </span>
          <h2 id="follow-us-title" className="text-2xl font-extrabold text-text-strong md:text-3xl">
            Zapratite nas na društvenim mrežama
          </h2>
          <p className="max-w-2xl text-sm text-text-body md:text-base">
            Nove epizode, kratki edukativni video-i i odgovori na vaša pitanja stižu prvo na naše kanale.
            Pridružite nam se — objave su besplatne, bez reklama i bez pritiska.
          </p>
          <ul className="mt-2 flex flex-wrap items-center justify-center gap-3">
            {activeSocials.map((s) => {
              const Icon = socialIcon[s.key];
              return (
                <li key={s.key}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} — ${s.handle}`}
                    className={`inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-text-strong shadow-soft transition ${brandClass[s.key] ?? ""}`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{s.label}</span>
                    <span className="text-xs font-normal opacity-80">{s.handle}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
