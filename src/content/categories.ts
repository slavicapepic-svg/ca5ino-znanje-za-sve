import newsBonus from "@/assets/news-bonus.jpg";
import newsRegulation from "@/assets/news-regulation.jpg";
import newsSlots from "@/assets/news-slots.jpg";
import newsPayments from "@/assets/news-payments.jpg";
import eduResponsible from "@/assets/edu-responsible.jpg";
import eduRtp from "@/assets/edu-rtp.jpg";

export type Article = {
  slug: string;
  title: string;
  excerpt?: string;
  image: string;
  author: string;
  date: string;
  read: string;
  group?: string;
};

export type Category = {
  slug: string;
  path: string;
  title: string;
  eyebrow: string;
  intro: string;
  infoBlocks?: { title: string; body: string }[];
  articles: Article[];
};

const A = (slug: string, title: string, group?: string, image = eduRtp): Article => ({
  slug, title, group, image,
  author: "Redakcija ZZ",
  date: "10. jul 2026.",
  read: "4",
  excerpt: title,
});

export const categories: Category[] = [
  {
    slug: "registracija-verifikacija",
    path: "/registracija-verifikacija",
    title: "Registracija & Verifikacija",
    eyebrow: "Edukacija · Nalog",
    intro:
      "Registracija naloga traje nekoliko minuta. Rešavanje problema nastalih zbog pogrešne registracije nekada traje nedeljama. U ovoj rubrici pronaći ćete vodiče, savete i objašnjenja vezana za otvaranje naloga, verifikaciju identiteta, potrebnu dokumentaciju i najčešće greške koje mogu usporiti ili otežati isplatu dobitaka. Malo pažnje na početku može vas poštedeti mnogo problema kasnije.",
    articles: [
      A("kako-otvoriti-nalog", "Kako pravilno otvoriti nalog", "Registracija naloga", newsPayments),
      A("najcesce-greske-registracija", "Najčešće greške pri registraciji", "Registracija naloga", newsPayments),
      A("nadimak-lazni-podaci", "Nadimak ili lažni podaci?", "Registracija naloga", newsPayments),
      A("podaci-identicni-dokumentima", "Zašto podaci moraju biti identični dokumentima", "Registracija naloga", newsPayments),
      A("pogresno-ime-datum-rodjenja", "Pogrešno ime ili datum rođenja", "Registracija naloga", newsPayments),
      A("jedan-nalog-po-osobi", "Jedan nalog po osobi", "Registracija naloga", newsPayments),
      A("pep-izlozeni-funkcioneri", "PEP (izloženi funkcioneri)", "Registracija naloga", newsPayments),
      A("sta-je-kyc", "Šta je KYC verifikacija", "Verifikacija identiteta", newsRegulation),
      A("kada-se-trazi-kyc", "Kada operater traži KYC", "Verifikacija identiteta", newsRegulation),
      A("koja-dokumenta-za-kyc", "Koja dokumenta prihvataju operateri", "Verifikacija identiteta", newsRegulation),
      A("kako-fotografisati-dokumenta", "Kako pravilno fotografisati dokumenta", "Verifikacija identiteta", newsRegulation),
      A("selfie-sa-dokumentom", "Selfie sa dokumentom — kako izgleda pravilan", "Verifikacija identiteta", newsRegulation),
      A("koliko-traje-kyc", "Koliko traje KYC provera", "Verifikacija identiteta", newsRegulation),
      A("kako-ubrzati-kyc", "Kako ubrzati verifikaciju", "Verifikacija identiteta", newsRegulation),
      A("razlozi-odbijanja-verifikacije", "Najčešći razlozi odbijanja verifikacije", "Razlozi odbijanja"),
      A("mutne-isecene-fotografije", "Mutne ili isečene fotografije dokumenta", "Razlozi odbijanja"),
      A("istekao-dokument", "Istekao dokument", "Razlozi odbijanja"),
      A("podaci-se-ne-poklapaju", "Podaci se ne poklapaju sa nalogom", "Razlozi odbijanja"),
      A("adresa-nije-ista", "Adresa nije ista kao na dokumentu", "Razlozi odbijanja"),
      A("dokument-nije-prihvacen", "Dokument nije prihvaćen", "Razlozi odbijanja"),
      A("los-selfie", "Loš selfie — najčešće greške", "Razlozi odbijanja"),
      A("vpn-i-verifikacija", "VPN i zašto blokira verifikaciju", "Razlozi odbijanja"),
      A("zabranjena-drzava", "Zabranjena država — šta to zapravo znači", "Razlozi odbijanja"),
      A("verifikacija-adrese", "Verifikacija adrese: koji dokumenti važe", "Verifikacija adrese", newsRegulation),
      A("bankovni-izvod-adresa", "Bankovni izvod kao dokaz adrese", "Verifikacija adrese", newsRegulation),
      A("racun-za-telefon-adresa", "Račun za telefon kao dokaz adrese", "Verifikacija adrese", newsRegulation),
      A("starost-dokumenta-adresa", "Starost dokumenta — zašto je važna", "Verifikacija adrese", newsRegulation),
      A("verifikacija-platnih-metoda", "Verifikacija platnih metoda", "Platne metode", newsPayments),
      A("fotografija-kartice", "Fotografija kartice — kako sakriti broj", "Platne metode", newsPayments),
      A("sredstva-na-vase-ime", "Sredstva moraju biti na vaše ime", "Platne metode", newsPayments),
      A("tudja-kartica", "Tuđa kartica — zašto je problem", "Platne metode", newsPayments),
      A("istekla-kartica", "Istekla kartica u toku igre", "Platne metode", newsPayments),
      A("e-wallet-vlasnistvo", "E-wallet i vlasništvo naloga", "Platne metode", newsPayments),
      A("sta-je-aml", "Šta je AML i zašto vas se tiče", "AML provere", newsRegulation),
      A("odakle-vam-novac", "Odakle vam novac — Source of Funds", "AML provere", newsRegulation),
      A("dodatna-dokumenta-aml", "Dodatna dokumenta na AML zahtev", "AML provere", newsRegulation),
      A("enhanced-due-diligence", "Enhanced Due Diligence — pojačana provera", "AML provere", newsRegulation),
      A("blokirani-nalozi", "Zašto se nalozi blokiraju", "Blokirani nalozi", newsRegulation),
      A("suspendovan-nalog", "Suspendovan vs. blokiran nalog", "Blokirani nalozi", newsRegulation),
      A("privremena-blokada", "Privremena blokada — koliko traje", "Blokirani nalozi", newsRegulation),
      A("vracanje-pristupa", "Vraćanje pristupa nalogu", "Blokirani nalozi", newsRegulation),
      A("trajno-zatvaranje", "Trajno zatvaranje naloga", "Blokirani nalozi", newsRegulation),
      A("isplata-nakon-verifikacije", "Isplata nakon verifikacije", "Isplata", newsPayments),
      A("isplata-na-cekanju", "Isplata je „na čekanju“ — šta znači", "Isplata", newsPayments),
      A("verifikacija-pre-prve-isplate", "Zašto verifikacija ide pre prve isplate", "Isplata", newsPayments),
      A("trajanje-odobravanja-isplate", "Koliko traje odobravanje isplate", "Isplata", newsPayments),
      A("multi-accounting", "Multi-accounting: dva naloga na istoj osobi", "Multi-accounting", newsRegulation),
      A("porodica-sa-iste-adrese", "Porodica sa iste adrese — šta je pravilo", "Multi-accounting", newsRegulation),
      A("isti-wifi-isti-racunar", "Isti Wi-Fi i isti računar", "Multi-accounting", newsRegulation),
      A("najcesce-greske-igraca", "Najčešće greške igrača — kompletan pregled", "Najčešće greške", newsRegulation),
      A("zasto-kazino-nece-da-isplati", "Zašto kazino neće da mi isplati dobitak?", "SEO rubrika", newsPayments),
    ],
  },
  {
    slug: "bonus-uslovi",
    path: "/bonus-uslovi",
    title: "Anatomija bonusa: Šta vam zapravo nude?",
    eyebrow: "Edukacija · Bonusi",
    intro:
      "Bonus je virtuelni novac koji vam kladionica ili online kazino daju kao dodatak na vašu uplatu ili kao nagradu za aktivnost. Primarni cilj tog dodatnog novca jeste da vas uvede u sistem i pretvori u aktivnog korisnika.",
    infoBlocks: [
      {
        title: "Glavni tipovi bonusa",
        body: "Welcome / First Deposit, Reload, Cashback, Free Spins, Free Bet — svaki ima različitu logiku i različite uslove za isplatu.",
      },
      {
        title: "Bonus je dug, a ne poklon",
        body: "Iza svakog bonusa stoji: minimalna uplata, uslov klađenja (wagering), vremensko ograničenje, maksimalna isplata, dozvoljene i zabranjene igre.",
      },
      {
        title: "Bonus je udica za vaš mozak",
        body: "Strah od gubitka, Sunk Cost efekat i navika — bonusi koriste iste psihološke mehanizme koji pokreću zavisnost od igara.",
      },
    ],
    articles: [
      A("sta-je-welcome-bonus", "Šta je bonus dobrodošlice", undefined, newsBonus),
      A("minimalni-depozit-bonus", "Minimalni depozit za aktiviranje bonusa", undefined, newsBonus),
      A("maksimalni-bonus-cap", "Maksimalni bonus (Cap)", undefined, newsBonus),
      A("paket-bonusi", "Paket bonusi — šta su i kako rade", undefined, newsBonus),
      A("wagering-uslov-kladjenja", "Wagering — uslov klađenja objašnjen", undefined, newsBonus),
      A("bonus-na-bonus-vs-depozit-plus-bonus", "Bonus na bonus vs. depozit + bonus", undefined, newsBonus),
      A("max-bet-tokom-bonusa", "Max Bet — maksimalan ulog dok je bonus aktivan", undefined, newsBonus),
      A("max-cashout", "Max Cashout — koliko možete zaista podići", undefined, newsBonus),
      A("rok-trajanja-bonusa", "Rok trajanja bonusa", undefined, newsBonus),
      A("rok-trajanja-free-spinova", "Rok trajanja free spinova", undefined, newsBonus),
      A("game-weighting", "Game Weighting — igre koje ne broje 100%", undefined, newsBonus),
      A("zabranjene-igre-tokom-bonusa", "Zabranjene igre tokom bonusa", undefined, newsBonus),
      A("rtp-i-bonusi", "RTP i bonusi — kako se seku", undefined, newsBonus),
      A("sticky-vs-non-sticky", "Sticky vs. Non-Sticky bonus", undefined, newsBonus),
      A("bonus-abuse", "Bonus Abuse — šta operater smatra zloupotrebom", undefined, newsBonus),
      A("jedan-bonus-po-domacinstvu", "Jedan bonus po domaćinstvu", undefined, newsBonus),
      A("jedan-bonus-po-ip", "Jedan bonus po IP adresi", undefined, newsBonus),
      A("verifikacija-pre-isplate-bonusa", "Verifikacija pre isplate bonus dobitaka", undefined, newsBonus),
      A("bonus-i-tudje-kartice", "Bonus i tuđe kartice — zašto se briše", undefined, newsBonus),
      A("da-li-se-bonus-isplati", "Da li se bonus zaista isplati", undefined, newsBonus),
      A("sta-kazino-dobija-od-bonusa", "Šta kazino dobija od bonusa", undefined, newsBonus),
      A("kako-citati-bonus-pravila", "Kako pročitati bonus pravila za 5 minuta", undefined, newsBonus),
    ],
  },
  {
    slug: "uplate-isplate",
    path: "/uplate-isplate",
    title: "Uplate & Isplate",
    eyebrow: "Edukacija · Novac",
    intro:
      "Novac najlakše ulazi na kazino nalog. Problemi uglavnom počinju kada treba da izađe sa njega. Objašnjavamo kako funkcionišu uplate i isplate, koje platne metode su najpraktičnije, koja pravila operateri primenjuju i kako da izbegnete greške koje mogu usporiti pristup vašem novcu. Najlakši deo je uplata. Test počinje kada zatražite isplatu.",
    articles: [
      A("greske-zbog-kojih-isplata-kasni", "Najčešće greške zbog kojih isplata kasni", undefined, newsPayments),
      A("limiti-isplate", "Limiti isplate — dnevni, nedeljni, mesečni", undefined, newsPayments),
      A("idealan-put-do-isplate", "Idealan put do isplate", undefined, newsPayments),
      A("zasto-isplata-kasni-a-uplata-je-instant", "Zašto se isplata proverava danima, a uplata prođe za 5 sekundi", undefined, newsPayments),
      A("da-li-je-kripto-anoniman", "Da li je kripto zaista anoniman?", undefined, newsPayments),
      A("closed-loop-princip", "Closed Loop princip — vraćanje novca istim putem", undefined, newsPayments),
      A("chargeback", "Chargeback — kada i kako se koristi", undefined, newsPayments),
      A("selfi-sa-karticom", "Selfie sa karticom — zašto se traži", undefined, newsPayments),
      A("moze-li-kazino-odbiti-isplatu", "Može li kazino da odbije isplatu", undefined, newsPayments),
      A("neaktivna-kartica", "Neaktivna kartica u trenutku isplate", undefined, newsPayments),
      A("source-of-funds", "Source of Funds — dokaz porekla novca", undefined, newsPayments),
      A("kako-izabrati-platnu-metodu", "Kako izabrati platnu metodu", undefined, newsPayments),
      A("zajednicki-bankovni-racun", "Zajednički bankovni račun — dozvoljen ili ne", undefined, newsPayments),
      A("e-walleti", "E-walleti: Skrill, Neteller, MiFinity", undefined, newsPayments),
      A("veliki-jackpot-isplata", "Veliki jackpot — kako se isplaćuje", undefined, newsPayments),
      A("zasto-paypal-cesto-nije-dostupan", "Zašto PayPal često nije dostupan za kazino", undefined, newsPayments),
    ],
  },
  {
    slug: "sve-o-igricama",
    path: "/sve-o-igricama",
    title: "Sve o igricama",
    eyebrow: "Edukacija · Igre",
    intro:
      "U ovoj rubrici rastavljamo online igre na proste delove. Objašnjavamo kako funkcionišu slotovi, live kazino, rulet, blackjack i crash games. Šta znače RTP i volatilnost, kako nastaju dobici i zbog čega kazino dugoročno uvek ima prednost. Pre nego što pritisnete Spin ili postavite opkladu, vredi znati šta se dešava u pozadini.",
    articles: [
      A("sta-je-rtp", "Šta je RTP i zašto je važan", "Osnovni koncepti", eduRtp),
      A("vruci-hladni-slotovi", "Mit o „vrućim“ i „hladnim“ slotovima", "Osnovni koncepti", newsSlots),
      A("sta-je-rng", "Šta je RNG (generator slučajnih brojeva)", "Osnovni koncepti", eduRtp),
      A("house-edge", "House Edge — prednost kuće", "Osnovni koncepti", eduRtp),
      A("volatilnost-slotova", "Volatilnost slotova", "Osnovni koncepti", newsSlots),
      A("nezavisnost-spina", "Nezavisnost svakog spina", "Osnovni koncepti", newsSlots),
      A("kako-kazino-odredjuje-isplate", "Kako kazino određuje isplate", "Osnovni koncepti", eduRtp),
      A("moderni-slotovi", "Kako izgleda moderan slot", "Slotovi", newsSlots),
      A("bonus-buy", "Bonus Buy funkcija", "Slotovi", newsSlots),
      A("megaways", "Megaways mehanika", "Slotovi", newsSlots),
      A("progresivni-jackpotovi", "Progresivni jackpotovi", "Slotovi", newsSlots),
      A("info-ekran-slota", "Info ekran slota — šta obavezno pročitati", "Slotovi", newsSlots),
      A("rulet-varijante", "Evropski, francuski i američki rulet", "Rulet", newsSlots),
      A("zelena-nula", "Zelena nula — matematika kuće", "Rulet", newsSlots),
      A("strategije-ruleta", "Strategije ruleta — šta radi, a šta ne", "Rulet", newsSlots),
      A("blackjack-house-edge", "Blackjack: house edge", "Blackjack", newsSlots),
      A("blackjack-osnovna-strategija", "Blackjack: osnovna strategija", "Blackjack", newsSlots),
      A("brojanje-karata-online", "Brojanje karata online — da li je moguće", "Blackjack", newsSlots),
      A("kako-funkcionise-live-kazino", "Kako funkcioniše live kazino", "Live kazino", newsSlots),
      A("sanse-u-live-kazinu", "Šanse u live kazino igrama", "Live kazino", newsSlots),
      A("game-show-igre", "Game show igre — Monopoly, Crazy Time i sl.", "Live kazino", newsSlots),
      A("crash-games-mehanika", "Crash Games — mehanika", "Crash Games", newsSlots),
      A("crash-games-strategija", "Crash Games — strategije", "Crash Games", newsSlots),
      A("provably-fair", "Provably Fair — kako se proverava fer igra", "Crash Games", newsSlots),
      A("near-miss", "Near Miss — „skoro pa dobitak“", "Psihologija igara", eduResponsible),
      A("chasing-losses", "Chasing Losses — jurenje gubitaka", "Psihologija igara", eduResponsible),
      A("psihologija-rizika", "Psihologija rizika u igrama", "Psihologija igara", eduResponsible),
      A("zvukovi-i-dopamin", "Zvukovi, animacije i dopamin", "Psihologija igara", eduResponsible),
      A("velicina-uloga", "Veličina uloga u odnosu na budžet", "Upravljanje novcem", eduResponsible),
      A("odvajanje-budzeta", "Odvajanje budžeta za igru", "Upravljanje novcem", eduResponsible),
      A("kada-stati", "Kada stati — pravila unapred", "Upravljanje novcem", eduResponsible),
    ],
  },
  {
    slug: "svet-regulative",
    path: "/svet-regulative",
    title: "Svet & regulative",
    eyebrow: "Edukacija · Regulative",
    intro:
      "Analiziramo najvažnije regulatorne sisteme iz celog sveta — od Velike Britanije i Malte do Švedske, Nemačke i Holandije. Objašnjavamo kako funkcionišu licence, obaveze operatera, prava igrača i mehanizmi zaštite. Saznaćete zašto negde postoji ograničenje depozita a negde ne, zašto neka kazina traže detaljnu verifikaciju a druga dozvoljavaju igranje odmah, i zašto neka tržišta imaju stroga pravila o bonusima.",
    articles: [
      A("uk-gambling-commission", "Velika Britanija: UK Gambling Commission", undefined, newsRegulation),
      A("malta-mga", "Malta: MGA licenca", undefined, newsRegulation),
      A("svedska-spelinspektionen", "Švedska: Spelinspektionen", undefined, newsRegulation),
      A("nemacka-gluecksspielstaatsvertrag", "Nemačka: Glücksspielstaatsvertrag", undefined, newsRegulation),
      A("holandija-ksa", "Holandija: KSA", undefined, newsRegulation),
      A("italija-adm", "Italija: ADM", undefined, newsRegulation),
      A("spanija-dgoj", "Španija: DGOJ", undefined, newsRegulation),
      A("dansk-spillemyndigheden", "Danska: Spillemyndigheden", undefined, newsRegulation),
      A("kanada-provincije", "Kanada: regulisano po provincijama", undefined, newsRegulation),
      A("gibraltar-kirasao", "Gibraltar i Kirasao — offshore licence", undefined, newsRegulation),
    ],
  },
  {
    slug: "odgovorna-igra",
    path: "/odgovorna-igra",
    title: "Odgovorna igra i alati",
    eyebrow: "Edukacija · Odgovorna igra",
    intro:
      "Odgovorno igranje podrazumeva zadržavanje kontrole nad vremenom, novcem i odlukama tokom igre. Objašnjavamo alate za odgovorno igranje: limite, pauze, samoisključenja i druge mehanizme, prepoznavanje rizičnih obrazaca ponašanja i strategije za racionalnije odluke.",
    articles: [
      A("limit-depozita", "Dnevni, nedeljni i mesečni limit depozita", undefined, eduResponsible),
      A("limit-uloga", "Limit uloga po opkladi", undefined, eduResponsible),
      A("limit-gubitka", "Limit gubitka", undefined, eduResponsible),
      A("vremenski-limit", "Vremenski limit sesije", undefined, eduResponsible),
      A("reality-check", "Reality Check — automatska upozorenja", undefined, eduResponsible),
      A("cooling-off", "Cooling Off — kratka pauza", undefined, eduResponsible),
      A("samoiskljucenje", "Samoisključenje — kako i koliko traje", undefined, eduResponsible),
      A("nacionalni-registri", "Nacionalni registri samoisključenih igrača", undefined, eduResponsible),
      A("prepoznavanje-problema", "Kako prepoznati problem sa igranjem", undefined, eduResponsible),
      A("linkovi-za-pomoc", "Gde potražiti pomoć", undefined, eduResponsible),
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getArticle(categorySlug: string, articleSlug: string) {
  const cat = getCategoryBySlug(categorySlug);
  if (!cat) return undefined;
  const article = cat.articles.find((a) => a.slug === articleSlug);
  if (!article) return undefined;
  return { category: cat, article };
}
