export type FAQItem = { q: string; a: string; author?: string };

export const publishedQuestions: FAQItem[] = [
  {
    q: "Mogu li operateri da promene uslove bonusa nakon što sam ga prihvatio?",
    a: "Najčešće ne mogu retroaktivno — uslovi važe u trenutku prihvatanja bonusa. Ali pažnja: ako bonus „obnovite“ ili uzmete dodatnu promociju, mogu se primeniti novi uslovi.",
    author: "Pitanje od korisnika · Beograd",
  },
  {
    q: "Šta da uradim ako mi operater ne isplaćuje dobitak duže od 7 dana?",
    a: "Prvo proverite da li je verifikacija završena (KYC). Ako jeste, podnesite zvaničnu reklamaciju operateru u pisanoj formi, pa ako rešenje izostane — žalba se podnosi nadležnom regulatoru u vašoj zemlji.",
    author: "Pitanje od korisnika · Novi Sad",
  },
  {
    q: "Da li je samoisključenje trajno?",
    a: "Ne mora biti. Možete izabrati period (24h, 7 dana, 30 dana, 6 meseci ili trajno). Pre isteka roka nalog se ne može reaktivirati — to je ključna razlika u odnosu na običnu „pauzu“.",
    author: "Pitanje od korisnika · Niš",
  },
  {
    q: "Da li je bonus na svaku uplatu isplativ?",
    a: "Zavisi od odnosa iznosa bonusa i uslova klađenja. Bonus x40 na 1.000 RSD znači promet od 40.000 RSD pre isplate. Ako igrate slotove sa RTP 96%, matematički očekivan gubitak tokom ispunjenja je oko 1.600 RSD.",
    author: "Pitanje od korisnika · Kragujevac",
  },
  {
    q: "Kartica na koju sam uplatio je istekla — mogu li da podignem novac?",
    a: "Ne na tu karticu. Većina operatera vraća novac istim putem kojim je došao (Closed Loop princip). Kontaktirajte podršku sa zahtevom za alternativu — obično traže dokaz da je kartica bila vaša.",
    author: "Pitanje od korisnika · Subotica",
  },
];
