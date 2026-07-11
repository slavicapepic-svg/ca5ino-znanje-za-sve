import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryTemplates";

export const Route = createFileRoute("/uplate-isplate")({
  head: () => ({
    meta: [
      { title: "Uplate & Isplate — Ca5ino ZaštoZato" },
      { name: "description", content: "Kako funkcionišu uplate i isplate, koje platne metode koristiti i kako izbeći kašnjenja isplate." },
      { property: "og:title", content: "Uplate & Isplate" },
      { property: "og:description", content: "Najlakši deo je uplata. Test počinje kada zatražite isplatu." },
    ],
  }),
  component: () => <CategoryPage slug="uplate-isplate" />,
});
