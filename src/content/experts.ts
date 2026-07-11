import expert1 from "@/assets/expert-1.jpg";
import expert2 from "@/assets/expert-2.jpg";
import expert3 from "@/assets/expert-3.jpg";

export type ExpertQA = {
  slug: string;
  question: string;
  answer: string;
  date: string;
};

export type Expert = {
  id: string;
  name: string;
  title: string;
  bio: string;
  linkedin: string;
  photo: string;
  questions: ExpertQA[];
};

export const experts: Expert[] = [
  {
    id: "vera-novkovic",
    name: "Vera Novković",
    title: "Master psiholog istraživač",
    linkedin: "https://www.linkedin.com/in/vera-novkovi7",
    photo: expert1,
    bio: "Verino polje interesovanja je psihologija više kognicije, specifično donošenje odluka u uslovima rizika. Radila je i u iGaming industriji.",
    questions: [
      {
        slug: "sunk-cost-fallacy",
        question: "Objasnite Sunk Cost Fallacy (Pritisak uloženog truda)",
        date: "8. jul 2026.",
        answer:
          "Sunk Cost Fallacy je kognitivna zamka u kojoj nastavljamo neku aktivnost samo zato što smo u nju već uložili vreme, novac ili energiju — iako bi racionalna odluka bila da stanemo. U kontekstu igara: „Uložio sam 5.000 dinara, ne mogu sada da odustanem“ — to je tipičan primer. Uloženo je već izgubljeno; sledeća odluka bi trebalo da zavisi isključivo od budućih šansi, ne od prošlih troškova.",
      },
      {
        slug: "gubitak-maskiran-u-dobitak",
        question: "Kako psihologija objašnjava fenomen „gubitka maskiranog u dobitak“?",
        date: "3. jul 2026.",
        answer:
          "„Gubitak maskiran u dobitak“ (Losses Disguised as Wins) nastaje kada spin donese dobitak manji od uloga — na primer, uložite 100, a osvojite 40. Slot ipak pušta zvučne i vizuelne signale slavlja. Mozak registruje pozitivan signal iako je to matematički gubitak od 60. Ovo je jedan od najbolje dokumentovanih mehanizama koji održavaju igrače u igri.",
      },
      {
        slug: "telefon-u-mraku-vs-kazino",
        question: "Da li je lakše izgubiti kontrolu na telefonu u mraku nego menjajući novac za žetone u kazinu?",
        date: "25. jun 2026.",
        answer:
          "Kognitivno — da. Fizička razmena novca za žetone uvodi tzv. frikciju: pauza u kojoj mozak ima priliku da preispita odluku. Online igranje na telefonu, pogotovo noću, tu frikciju uklanja: pritisak dugmeta „Deposit“, jedan tap, nema svedoka, nema zvučne potvrde od kasira. Zato mnogi ljudi opisuju da su „izgubili osećaj vremena i novca“ — jer nema spoljnih ograničenja da ih vrate u realnost.",
      },
    ],
  },
  {
    id: "marko-petrovic",
    name: "Dr Marko Petrović",
    title: "Pravnik, specijalista za regulativu",
    linkedin: "#",
    photo: expert2,
    bio: "Deset godina prati sporove između igrača i operatera i savetuje o pravima igrača u regulativama EU tržišta.",
    questions: [
      {
        slug: "kako-pisati-reklamaciju",
        question: "Kako pravilno pisati reklamaciju operateru?",
        date: "1. jul 2026.",
        answer:
          "Reklamacija mora biti pisana, sa jasnim datumom, ID nalogom, redosledom događaja i priloženim ekran-snimcima. Uvek zahtevajte pisan odgovor i rok — kod većine regulatora operater ima 8 do 15 dana da odgovori.",
      },
    ],
  },
  {
    id: "stefan-ilic",
    name: "Stefan Ilić",
    title: "Analitičar iGaming industrije",
    linkedin: "#",
    photo: expert3,
    bio: "Analizira poslovne modele operatera, akviziciju i retenciju igrača i mehanizme optimizacije bonusa.",
    questions: [
      {
        slug: "sta-znace-tri-broja-u-info-panelu",
        question: "Šta znače tri broja u info panelu slota?",
        date: "20. jun 2026.",
        answer:
          "RTP kaže koliko se prosečno vraća igračima na dugi rok. Volatilnost kaže kako se taj povraćaj raspoređuje (retki veliki dobici vs. česti mali). Hit-frequency je procenat spinova sa bilo kakvim dobitkom. Ova tri broja zajedno definišu kakvo iskustvo očekivati — bez iznenađenja.",
      },
    ],
  },
];

export function findExpertQA(slug: string) {
  for (const e of experts) {
    const q = e.questions.find((q) => q.slug === slug);
    if (q) return { expert: e, question: q };
  }
  return undefined;
}
