import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/kolacici")({
  head: () => ({
    meta: [
      { title: "Politika kolačića — Ca5ino ZaštoZato" },
      { name: "description", content: "Kako sajt koristi kolačiće (cookies)." },
    ],
  }),
  component: () => (
    <LegalPage title="Politika kolačića" breadcrumbLabel="Politika kolačića">
      <p>Sajt koristi tehničke kolačiće neophodne za funkcionisanje i opcione analitičke kolačiće.</p>
      <h2>Tehnički kolačići</h2>
      <p>Omogućavaju osnovne funkcije sajta (pamćenje stanja tabova, forma).</p>
      <h2>Analitički kolačići</h2>
      <p>Prikupljaju anonimne statistike o posetama; možete ih isključiti u podešavanjima pretraživača.</p>
    </LegalPage>
  ),
});
