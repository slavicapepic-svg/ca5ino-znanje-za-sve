import { useState } from "react";
import { Check, Copy, Facebook, Linkedin, Share2 } from "lucide-react";

/** Diskretne share dugmadi: kopiraj link, FB, X, LinkedIn, WhatsApp. */
export function ShareButtons({ title, className = "" }: { title: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const url = typeof window !== "undefined" ? window.location.href : "";
  const enc = encodeURIComponent;
  const t = enc(title);
  const u = enc(url);

  const links = [
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${u}`, icon: Facebook },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${u}&text=${t}`,
      icon: (props: { className?: string }) => (
        <svg viewBox="0 0 24 24" className={props.className} fill="currentColor" aria-hidden="true">
          <path d="M18.244 2H21l-6.52 7.45L22 22h-6.797l-4.71-6.16L4.98 22H2.22l6.985-7.98L2 2h6.914l4.253 5.62L18.244 2Zm-2.386 18h1.62L8.24 4H6.5l9.358 16Z" />
        </svg>
      ),
    },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`, icon: Linkedin },
    {
      label: "WhatsApp",
      href: `https://api.whatsapp.com/send?text=${t}%20${u}`,
      icon: (props: { className?: string }) => (
        <svg viewBox="0 0 24 24" className={props.className} fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.9 11.9 0 0 0 12.02 0C5.4 0 .05 5.35.05 11.97c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.62a11.94 11.94 0 0 0 5.82 1.48h.01c6.62 0 11.97-5.35 11.97-11.97 0-3.2-1.24-6.2-3.48-8.41ZM12.03 21.8h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.68.96.98-3.59-.23-.37a9.85 9.85 0 0 1-1.52-5.26c0-5.44 4.43-9.87 9.87-9.87 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.44-4.43 9.87-9.87 9.87Zm5.41-7.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.22 1.35.19 1.86.11.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      ),
    },
  ];

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <span className="mr-1 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-text-muted">
        <Share2 className="h-3.5 w-3.5" /> Podeli
      </span>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-text-strong transition hover:border-brand/40 hover:text-brand"
        aria-label="Kopiraj link"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-brand" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? "Kopirano" : "Kopiraj link"}
      </button>
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Podeli na ${label}`}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white text-text-body transition hover:border-brand/40 hover:text-brand"
        >
          <Icon className="h-3.5 w-3.5" />
        </a>
      ))}
    </div>
  );
}
