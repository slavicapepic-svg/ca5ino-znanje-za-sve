import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryTemplates";

export const Route = createFileRoute("/bonus-uslovi")({
  head: () => ({
    meta: [
      { title: "Bonus uslovi — Ca5ino ZaštoZato" },
      { name: "description", content: "Anatomija bonusa: wagering, max bet, max cashout, zabranjene igre i sve što ne piše krupnim slovima." },
      { property: "og:title", content: "Anatomija bonusa" },
      { property: "og:description", content: "Šta vam kazino zaista nudi kroz bonus?" },
    ],
  }),
  component: () => <CategoryPage slug="bonus-uslovi" />,
});
