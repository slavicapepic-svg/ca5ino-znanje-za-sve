import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/uslovi-koriscenja")({
  head: () => ({
    meta: [
      { title: "Uslovi korišćenja — Ca5ino ZaštoZato" },
      { name: "description", content: "Uslovi pod kojima koristite platformu Ca5ino ZaštoZato." },
    ],
  }),
  component: () => (
    <LegalPage title="Uslovi korišćenja" breadcrumbLabel="Uslovi korišćenja">
      <p>Pristupanjem sajtu Ca5ino ZaštoZato prihvatate uslove korišćenja navedene u nastavku.</p>
      <h2>Namena sajta</h2>
      <p>Sajt je edukativnog karaktera. Ne omogućava učešće u igrama na sreću niti preporučuje operatere.</p>
      <h2>Ograničenje odgovornosti</h2>
      <p>Sadržaj se dostavlja „takav kakav jeste“, bez garancija tačnosti ili potpunosti za specifične situacije.</p>
      <h2>Izmene uslova</h2>
      <p>Zadržavamo pravo izmene uslova; nastavkom korišćenja sajta prihvatate ažuriranu verziju.</p>
    </LegalPage>
  ),
});
