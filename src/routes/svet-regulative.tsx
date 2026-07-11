import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryTemplates";

export const Route = createFileRoute("/svet-regulative")({
  head: () => ({
    meta: [
      { title: "Svet & regulative — Ca5ino ZaštoZato" },
      { name: "description", content: "UK, Malta, Švedska, Nemačka, Holandija — kako regulatori štite igrače i zašto se pravila razlikuju." },
      { property: "og:title", content: "Svet & regulative" },
      { property: "og:description", content: "Ko vas štiti i zašto se pravila razlikuju od zemlje do zemlje." },
    ],
  }),
  component: () => <CategoryPage slug="svet-regulative" />,
});
