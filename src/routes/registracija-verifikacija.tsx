import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryTemplates";

export const Route = createFileRoute("/registracija-verifikacija")({
  head: () => ({
    meta: [
      { title: "Registracija & Verifikacija — Ca5ino ZaštoZato" },
      { name: "description", content: "Vodiči za otvaranje naloga, KYC verifikaciju, dokumentaciju i najčešće greške koje usporavaju isplatu." },
      { property: "og:title", content: "Registracija & Verifikacija" },
      { property: "og:description", content: "Kako pravilno otvoriti nalog i proći KYC bez problema." },
    ],
  }),
  component: () => <CategoryPage slug="registracija-verifikacija" />,
});
