import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryTemplates";

export const Route = createFileRoute("/odgovorna-igra")({
  head: () => ({
    meta: [
      { title: "Odgovorna igra i alati — Ca5ino ZaštoZato" },
      { name: "description", content: "Limiti, pauze i samoisključenja — alati za zadržavanje kontrole nad vremenom i novcem." },
      { property: "og:title", content: "Odgovorna igra i alati" },
      { property: "og:description", content: "Kako zadržati kontrolu i prepoznati rizične obrasce." },
    ],
  }),
  component: () => <CategoryPage slug="odgovorna-igra" />,
});
