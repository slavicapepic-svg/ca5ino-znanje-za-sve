import newsBonus from "@/assets/news-bonus.jpg";
import newsRegulation from "@/assets/news-regulation.jpg";
import newsSlots from "@/assets/news-slots.jpg";
import newsPayments from "@/assets/news-payments.jpg";
import eduRtp from "@/assets/edu-rtp.jpg";
import eduResponsible from "@/assets/edu-responsible.jpg";

export type RelatedArticleRef = {
  /** Prikazni tekst linka ispod videa, npr. "Pročitaj ceo tekst". */
  label: string;
  /** Interna URL putanja članka na sajtu (npr. /sve-o-igricama/sta-je-rtp). */
  href: string;
};

export type MediaItem = {
  slug: string;
  /** "video" i "news" idu svuda; "blog" je posebna vrsta teksta u Vestima i medijima. */
  type: "video" | "news" | "blog";
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
  /** Kada video/reel ima prateći članak na sajtu, prikazujemo link ispod videa. */
  relatedArticle?: RelatedArticleRef;
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
    relatedArticle: { label: "Pročitaj ceo tekst: Šta je RTP", href: "/sve-o-igricama/sta-je-rtp" },
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
      "Nove EU smernice unose harmonizaciju u domenu KYC provera i standardizaciju alata za odgovornu igru. Operateri koji posluju u više zemalja moraju uskladiti limite, samoisključenja i izveštavanje regulatorima.\n\n## Šta se konkretno menja\n\nRegulator traži jedinstven format izveštavanja i brži prenos podataka između nadzornih tela. To znači da će prekogranične licence imati manje sivih zona.\n\n- Ujednačeni KYC pragovi za depozite preko 2.000 EUR\n- Obavezni alati za samoisključenje sa jedinstvenim registrom\n- Standardizovano prijavljivanje sumnjivih obrazaca igre\n\n## Šta to znači za igrače\n\nZa igrače u regionu, ovo donosi konkretniju zaštitu — pre svega jasnije rokove za isplate i lakše podnošenje reklamacija ako operater ne poštuje sopstvene uslove.\n\n> Ako operater posluje u više zemalja, ne može više birati koja pravila mu odgovaraju — mora primeniti najstrožu praksu."
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
    body:
      "Uslovi klađenja (wagering) su najčešće x30 do x45 iznosa bonusa. Pre nego što aktivirate bonus, proverite tri stvari: wagering, maksimalni ulog po spinu i rok za ispunjenje.\n\n## Tri stavke koje uvek pročitajte\n\n- Wagering koeficijent — koliko puta morate „provrteti" bonus\n- Max bet — najveći dozvoljen ulog dok je bonus aktivan\n- Rok — obično od 7 do 30 dana od aktivacije\n\n## Najčešća zamka\n\nAko pređete maksimalni ulog samo jednom, operater može poništiti sav dobitak iz bonusa. Zato je važno da limit ostavite ispod dozvoljenog i pre nego što krenete.\n\n> Bonus nije poklon — to je marketinški alat sa jasnim pravilima. Kada ih razumete, znate i da li vam se uopšte isplati."
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
  {
    slug: "kako-sam-prekinuo-lanac-gubitaka",
    type: "blog",
    title: "Kako sam prekinuo lanac gubitaka — lična priča jednog igrača",
    excerpt: "Jedan igrač opisuje kako je prepoznao obrazac i šta mu je zaista pomoglo da napravi pauzu.",
    thumbnail: newsPayments,
    date: "15. jun 2026.",
    author: "Anonimni saradnik",
    read: "9",
    body:
      "Blogovi na Ca5ino ZaštoZato nisu saveti za pobedu. Oni su priče koje pomažu da razumete kako igra na sreću funkcioniše u realnom životu. U ovom tekstu jedan igrač opisuje kako je shvatio da 'samo još jedan spin' nije strategija, već mehanizam koji održava igru u toku.\n\nKljučni trenutak bio je kada je počeo da beleži svaku uplatu i isplatu. Brojevi su bili nedvosmisleni. Tek tada je mogao da vidi obrazac, a ne samo emociju trenutka.\n\nAko prepoznajete neki od ovih obrazaca, razgovor sa stručnom osobom može biti korak koji menja situaciju — bez osude, bez pritiska, sa fokusom na tome šta vama zaista pomaže.",
  },
];

export function findMediaBySlug(slug: string) {
  return mediaFeed.find((m) => m.slug === slug);
}
