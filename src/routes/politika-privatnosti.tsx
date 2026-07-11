import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/politika-privatnosti")({
  head: () => ({
    meta: [
      { title: "Politika privatnosti — Ca5ino ZaštoZato" },
      { name: "description", content: "Kako čuvamo i obrađujemo vaše podatke na platformi Ca5ino ZaštoZato." },
    ],
  }),
  component: () => (
    <LegalPage title="Politika privatnosti" breadcrumbLabel="Politika privatnosti">
      <p>Poštujemo vašu privatnost i minimizujemo prikupljanje podataka na neophodan minimum.</p>
      <h2>Koje podatke prikupljamo</h2>
      <p>Osnovne analitičke podatke o poseti (anonimno) i nadimak koji sami unosite kada postavljate pitanje.</p>
      <h2>Kako koristimo podatke</h2>
      <p>Isključivo za unapređenje sadržaja i objavljivanje odgovora na pitanja.</p>
      <h2>Kontakt</h2>
      <p>Za pitanja o privatnosti pišite nam preko forme na stranici Postavi pitanje.</p>
    </LegalPage>
  ),
});
