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
    linkedin: "https://www.linkedin.com/in/vera-novkovi%C4%877/",
    photo: expert1,
    bio: "Verino polje profesionalnog interesovanja je psihologija više kognicije, specifično donošenje odluka u uslovima rizika. Pored ove akademske podloge, radila je i u iGaming industriji, i svoje znanje iz oba polja nastoji da primeni u edukativne svrhe, podizanjem svesti o načinu na koji naš mozak percipira i reaguje na iGaming.",
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
