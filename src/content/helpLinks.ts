export type HelpOrgPhone = {
  number: string;
  note?: string;
};

export type HelpOrg = {
  name: string;
  description: string;
  address?: string;
  phones?: HelpOrgPhone[];
  link?: string;
};

export const helpOrgs: HelpOrg[] = [
  {
    name: "Specijalna bolnica za bolesti zavisnosti Beograd",
    description:
      "Ustanova specijalizovana za lečenje bolesti zavisnosti, uključujući patološko kockanje.",
    address: "Teodora Drajzera 44, Beograd",
    link: "https://www.drajzerova.org.rs",
    phones: [
      { number: "+381 11 3671 429" },
      { number: "+381 11 2662 727" },
    ],
  },
  {
    name: "Institut za mentalno zdravlje",
    description:
      "Institut za dijagnostiku, lečenje i istraživanje mentalnih poremećaja u Beogradu.",
    address: "Milana Kašanina 3, 11000 Beograd",
    link: "https://www.imh.org.rs",
    phones: [{ number: "+381 11 3307 500" }],
  },
  {
    name: "SOS linija Ministarstva zdravlja i Uprave za igre na sreću",
    description:
      "Besplatna i anonimna linija za pomoć osobama sa problemom patološkog kockanja i njihovim porodicama.",
    link: "https://www.uis.gov.rs/rsc",
    phones: [
      { number: "0800-110-011", note: "besplatan poziv, radnim danima 07–22h" },
      { number: "0900-3090-007", note: "za mobilne telefone" },
    ],
  },
];
