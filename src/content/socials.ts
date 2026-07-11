/**
 * Social profiles — single source of truth. Header i Footer prikazuju samo
 * ikonice čiji URL postoji (nema više href="#" placeholder-a).
 * Popuni prave URL-ove kada budu poznati.
 */
export type SocialLink = {
  key: "youtube" | "instagram" | "tiktok" | "linkedin";
  label: string;
  url?: string;
};

export const socials: SocialLink[] = [
  { key: "youtube", label: "YouTube" },
  { key: "instagram", label: "Instagram" },
  { key: "tiktok", label: "TikTok" },
  { key: "linkedin", label: "LinkedIn" },
];

export const activeSocials = socials.filter((s): s is Required<SocialLink> => Boolean(s.url));
