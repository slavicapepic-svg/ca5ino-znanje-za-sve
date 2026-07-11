import expert1 from "@/assets/expert-1.jpg";
import expert2 from "@/assets/expert-2.jpg";
import expert3 from "@/assets/expert-3.jpg";
import expert4 from "@/assets/expert-4.jpg";

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
  org: string;
  bio: string;
  linkedin: string;
  photo: string;
  /** Short teaser quote for the home page (1–2 sentences, izvod iz odgovora). */
  pullQuote: string;
  /** If true, prikazuje se u home page teaser sekciji. */
  featured?: boolean;
  questions: ExpertQA[];
};

export const experts: Expert[] = [
  {
    id: "marko-petrovic",
    name: "Dr Marko Petrović",
    title: "Pravnik, specijalista za regulativu",
    org: "Univerzitet u Beogradu",
    linkedin: "#",
    photo: expert1,
    featured: true,
    bio: "Deset godina prati sporove između igrača i operatera i savetuje o pravima igrača u regulativama EU tržišta.",
    pullQuote:
      "Najveći broj sporova nastaje zato što igrači ne pročitaju uslove bonusa. Dva minuta čitanja danas štedi nedelje frustracije sutra.",
    questions: [
      {
        slug: "kako-pisati-reklamaciju",
        question: "Kako pravilno pisati reklamaciju operateru?",
        date: "1. jul 2026.",
        answer:
          "U poslednjih deset godina pratim sporove između igrača i operatera i obrazac je gotovo uvek isti — igrač prihvati bonus bez čitanja uslova, naiđe na uslov klađenja x40 ili maksimalan ulog tokom bonusa, i tek tada otkrije pravila.\n\nMoj savet je jednostavan: pre svake uplate pročitajte tri stvari — uslov klađenja, maksimalan ulog dok je bonus aktivan i rok za ispunjenje. Dva minuta čitanja danas štedi nedelje frustracije sutra i, što je važnije, čuva vaš novac.\n\nAko dođe do spora, reklamacija mora biti pisana, sa jasnim datumom, ID nalogom, redosledom događaja i priloženim ekran-snimcima. Uvek zahtevajte pisan odgovor i rok — kod većine regulatora operater ima 8 do 15 dana da odgovori.",
      },
    ],
  },
  {
    id: "jelena-kostic",
    name: "Jelena Kostić",
    title: "Klinička psihološkinja",
    org: "Centar za mentalno zdravlje",
    linkedin: "#",
    photo: expert2,
    featured: true,
    bio: "Radi sa klijentima koji imaju problem sa kockanjem i istražuje ponašajne obrasce zavisnosti u digitalnim okruženjima.",
    pullQuote:
      "Igre na sreću dizajnirane su da održe pažnju. Postavljanje limita nije znak slabosti — to je znak da razumete kako mehanizam funkcioniše.",
    questions: [
      {
        slug: "zasto-limit-nije-slabost",
        question: "Zašto postavljanje limita nije znak slabosti?",
        date: "28. jun 2026.",
        answer:
          "Slotovi, live igre i sportske kvote koriste iste principe koji drže pažnju kao i društvene mreže — promenljive nagrade, zvučne i vizuelne potvrde, osećaj „skoro pa dobitak”. To nije slučajnost, to je dizajn.\n\nKada postavite dnevni ili nedeljni limit, vi ne priznajete slabost — vi koristite alat koji je napravljen baš zato što i sami operateri znaju koliko je teško prestati u trenutku.\n\nNajzdraviji odnos sa igrom je onaj u kome unapred odlučite koliko trošite, a ne u trenutku kada ste u igri.",
      },
    ],
  },
  {
    id: "stefan-ilic",
    name: "Stefan Ilić",
    title: "Analitičar iGaming industrije",
    org: "iGaming Insight",
    linkedin: "#",
    photo: expert3,
    featured: true,
    bio: "Analizira poslovne modele operatera, akviziciju i retenciju igrača i mehanizme optimizacije bonusa.",
    pullQuote:
      "RTP, volatilnost i hit-frequency — tri broja koja vam govore više o slotu nego ijedan rivju. Naučite ih i nikad više nećete birati naslepo.",
    questions: [
      {
        slug: "sta-znace-tri-broja-u-info-panelu",
        question: "Šta znače tri broja u info panelu slota?",
        date: "20. jun 2026.",
        answer:
          "Kada birate slot, ne tražite onaj sa najlepšom grafikom — tražite tri broja u info panelu.\n\nRTP (Return to Player) vam govori koliko se prosečno vraća igračima na dugi rok; sve ispod 96% je ispod proseka tržišta.\n\nVolatilnost vam govori kako se taj povraćaj raspoređuje — visoka znači retke ali velike dobitke, niska znači česte ali male.\n\nHit-frequency je procenat okretaja koji uopšte daju neki dobitak. Kombinacija ova tri broja vam tačno govori kakvo iskustvo da očekujete — bez iznenađenja.",
      },
    ],
  },
  {
    id: "vera-novkovic",
    name: "Vera Novković",
    title: "Master psiholog istraživač",
    org: "Nezavisni istraživač",
    linkedin: "https://www.linkedin.com/in/vera-novkovi%C4%877/",
    photo: expert4,
    featured: false,
    bio: "Verino polje profesionalnog interesovanja je psihologija više kognicije, specifično donošenje odluka u uslovima rizika. Pored ove akademske podloge, radila je i u iGaming industriji, i svoje znanje iz oba polja nastoji da primeni u edukativne svrhe, podizanjem svesti o načinu na koji naš mozak percipira i reaguje na iGaming.",
    pullQuote:
      "Igrači koji su izgubili mnogo novca teže odustaju — mozak preveliki značaj pridaje uloženom trudu, i to je greška u razmišljanju, ne slabost karaktera.",
    questions: [
      {
        slug: "sunk-cost-fallacy",
        question: "Objasnite Sunk Cost Fallacy (Pritisak uloženog truda)",
        date: "8. jul 2026.",
        answer:
          "Pritisak uloženog truda je fenomen da osoba preveliki značaj pridaje uloženom trudu ili ceni koju je platila da dođe do tačke u kojoj se nalazi, bez obzira na to koliko joj je taj trud ili plaćena cena dobra donela.\n\nOvu pojavu je najlakše objasniti u terminima kockanja, pošto je tu prvi put i primećena: igrači koji su izgubili mnogo novca na igrama na sreću teže odustaju od tih istih igara kada gube, jer se osećaju kao da su previše para dali da bi mogli da prestanu pre nego što taj gubitak povrate.\n\nU stručnom psihološkom žargonu, sunk cost fallacy je kognitivna pristrasnost — pravilna greška u razmišljanju koja ima svrhu u drugim kontekstima, ali ne kada nas tera da donosimo pogrešne odluke. U nekoj drugoj situaciji dobro je da ne odustajemo lako, ali u situaciji kockanja fokusiranje na do sada izgubljen novac gotovo isključivo dovodi do toga da igrač pravi sve više pogrešnih odluka uz sve veće gubitke.",
      },
      {
        slug: "gubitak-maskiran-u-dobitak",
        question: "Kako psihologija objašnjava fenomen „gubitka maskiranog u dobitak“?",
        date: "3. jul 2026.",
        answer:
          "„Gubitak maskiran u dobitak“ je naziv koji kazini koriste da bi situacije koje su objektivan novčani gubitak za igrača predstavili kao da su dobitak vredan slavljenja.\n\nGubici se „maskiraju“ tako što se bilo šta sem totalnog gubitka novca predstavlja kao da je igrač „dobio“ nešto nazad. Na primer, ako osoba uplati 50 dinara na slot, povuče virtuelnu ručicu i simboli se poklope tako da „osvoji“ 35 dinara, slot igrica će tih 35 dinara prikazati kao nešto što je igrač dobio. U realnosti, igrač je izgubio 15 dinara, ali zbog toga što je ono što mu se vratilo prikazano kao dobitak, pokreću se isti procesi u mozgu kao da je stvarno osvojio više nego što je dao.\n\nSvrha ovog trika je da u mozgu igrača okine salvu dopamina, sličnu onoj koju izazivaju pravi dobici, što je ključno za formiranje i održavanje zavisnosti.",
      },
      {
        slug: "telefon-u-mraku-vs-kazino",
        question: "Da li je lakše izgubiti kontrolu kada klikćemo na ekran telefona u mraku svoje sobe, nego kada fizički menjamo papirni novac za žetone u kazinu?",
        date: "25. jun 2026.",
        answer:
          "Psihološka istraživanja dosledno pokazuju da online kockanje izaziva veći stepen zavisnosti nego kockanje u fizičkim kazinima — dva do četiri puta više ljudi koji se kockaju online postaju zavisnici. Kockanje je još rizičnije preko telefona: simptomi zavisničkog ponašanja pojavljuju se brže i češće kod ljudi koji igraju na telefonu, a gubitak kontrole nad dužinom i učestalošću igranja je osnovni simptom.\n\nUz sve rasprostranjeniju pojavu „doomscrollinga“, kada se vezanost za telefon ukrsti sa efektima online kockanja, osoba lako izgubi sate (i hiljade dinara) kockajući se na telefonu.\n\nFizička kazina zapravo teže sličnom efektu — zamračene prostorije bez dnevne svetlosti, hrana i piće, sve da se igraču spuste inhibicije. Ali prag koji treba preći da bi se kockalo uživo je znatno veći: treba naći vreme, obući se, izaći, doći do kazina, uplatiti. Mnogo je lakše otvoriti aplikaciju u vožnji, između dva zadatka ili na kauču — pa gubitak kontrole ima mnogo više prilika da se desi.",
      },
    ],
  },
];

export const featuredExperts = experts.filter((e) => e.featured);

export function findExpertQA(slug: string) {
  for (const e of experts) {
    const q = e.questions.find((q) => q.slug === slug);
    if (q) return { expert: e, question: q };
  }
  return undefined;
}
