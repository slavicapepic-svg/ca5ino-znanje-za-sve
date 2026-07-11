export type HelpOrg = {
  name: string;
  description: string;
  phone?: string;
  link?: string;
};

export const helpOrgs: HelpOrg[] = [
  {
    name: "SOS linija za zavisnike od igara na sreću",
    description: "Anonimni razgovor sa savetnicima 24/7. Prvi korak ka razgovoru o problemu.",
    phone: "0800 000 000",
  },
  {
    name: "Klinika za bolesti zavisnosti",
    description: "Stručna medicinska pomoć i grupna terapija za osobe sa problematičnim igranjem.",
    phone: "011 000 000",
    link: "https://example.org",
  },
  {
    name: "Anonimni kockari Srbije",
    description: "Podrška po modelu 12 koraka. Redovni sastanci uživo i online.",
    phone: "064 000 0000",
    link: "https://example.org",
  },
  {
    name: "Onlajn savetovanje — chat podrška",
    description: "Poverljiv razgovor sa psihologom putem čata, bez zakazivanja.",
    link: "https://example.org",
  },
];
