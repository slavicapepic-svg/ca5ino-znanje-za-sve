import newsBonus from "@/assets/news-bonus.jpg";
import newsRegulation from "@/assets/news-regulation.jpg";
import newsSlots from "@/assets/news-slots.jpg";
import newsPayments from "@/assets/news-payments.jpg";
import eduRtp from "@/assets/edu-rtp.jpg";
import eduResponsible from "@/assets/edu-responsible.jpg";

export type MediaItem = {
  slug: string;
  type: "video" | "news";
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
  author: string;
  read: string;
  youtubeId?: string;
  keyPoints?: string[];
  guestBio?: string;
  body?: string;
};

export const mediaFeed: MediaItem[] = [
  {
    slug: "rtp-za-4-minuta",
    type: "video",
    title: "Objašnjeno za 4 minuta: šta je RTP i zašto je važan",
    excerpt: "Kratko i jasno — šta se krije iza broja RTP na svakoj slot mašini.",
    thumbnail: eduRtp,
    date: "20. jun 2026.",
    author: "Tim ZZ",
    read: "4",
    youtubeId: "dQw4w9WgXcQ",
    guestBio: "Gostuje analitičar iGaming industrije koji objašnjava zašto RTP nije garancija, već statistika.",
    keyPoints: [
      "RTP je prosek izmeren na milionima spinova, ne na vašoj sesiji.",
      "Sve ispod 96% je ispod tržišnog proseka.",
      "Bonus igre često imaju viši doprinos RTP-u — proverite info ekran.",
    ],
  },
  {
    slug: "nove-eu-smernice-2026",
    type: "news",
    title: "Šta donose nove EU smernice za online operatere u 2026.",
    excerpt: "Jedinstvena pravila za prekogranične licence i strožija provera odgovorne igre.",
    thumbnail: newsRegulation,
    date: "18. jun 2026.",
    author: "Stefan Jovanović",
    read: "8",
    body:
      "Nove EU smernice unose harmonizaciju u domenu KYC provera i standardizaciju alata za odgovornu igru. Operateri koji posluju u više zemalja moraju uskladiti limite, samoisključenja i izveštavanje regulatorima.",
  },
  {
    slug: "regulatori-objasnjeni",
    type: "video",
    title: "Ko vas zapravo štiti? Regulatori objašnjeni",
    excerpt: "Šta može UKGC, a šta MGA — koje su zaista granice njihove moći.",
    thumbnail: newsRegulation,
    date: "2. jun 2026.",
    author: "Tim ZZ",
    read: "5",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    slug: "welcome-bonus-pod-lupom",
    type: "news",
    title: "Welcome bonus pod lupom: kako čitati uslove klađenja",
    excerpt: "Objašnjavamo šta piše sitnim slovima na svakom bonusu dobrodošlice.",
    thumbnail: newsBonus,
    date: "24. jun 2026.",
    author: "Milica Pavlović",
    read: "6",
    body: "Uslovi klađenja (wagering) su najčešće x30 do x45 iznosa bonusa. Pre nego što aktivirate bonus proverite tri stvari: wagering, max bet i rok.",
  },
  {
    slug: "rtp-i-mit-o-vrucoj-masini",
    type: "news",
    title: "RTP, volatilnost i mit o „vrućoj“ mašini — šta kažu podaci",
    excerpt: "Slotovi ne pamte prethodne spinove — evo kako se to matematički pokazuje.",
    thumbnail: newsSlots,
    date: "12. jun 2026.",
    author: "Ana Radović",
    read: "5",
  },
  {
    slug: "e-novcanici-vs-bankovni-prenos",
    type: "news",
    title: "E-novčanici vs. bankovni prenos: gde nestaju isplate",
    excerpt: "Koje metode isplate zaista rade brzo, a gde se novac zaustavlja i zašto.",
    thumbnail: newsPayments,
    date: "5. jun 2026.",
    author: "Nikola Marković",
    read: "7",
  },
  {
    slug: "limit-alati-vodic",
    type: "video",
    title: "Alati za odgovornu igru — praktičan vodič",
    excerpt: "Kako postaviti dnevni limit, samoisključenje i reality check.",
    thumbnail: eduResponsible,
    date: "28. maj 2026.",
    author: "Tim ZZ",
    read: "6",
    youtubeId: "dQw4w9WgXcQ",
  },
];

export function findMediaBySlug(slug: string) {
  return mediaFeed.find((m) => m.slug === slug);
}
