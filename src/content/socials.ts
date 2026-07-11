/**
 * Social profiles — single source of truth. Header, Footer i Follow sekcija
 * prikazuju samo ikonice čiji URL postoji. Zameniti "#" pravim URL-ovima.
 */
export type SocialLink = {
  key: "youtube" | "instagram" | "tiktok" | "linkedin";
  label: string;
  handle: string;
  url?: string;
};

export const socials: SocialLink[] = [
  { key: "youtube", label: "YouTube", handle: "@ca5ino.zastozato", url: "#" },
  { key: "instagram", label: "Instagram", handle: "@ca5ino.zastozato", url: "#" },
  { key: "tiktok", label: "TikTok", handle: "@ca5ino.zastozato", url: "#" },
  { key: "linkedin", label: "LinkedIn", handle: "Ca5ino ZaštoZato", url: "#" },
];

export const activeSocials = socials.filter((s): s is Required<SocialLink> => Boolean(s.url));
