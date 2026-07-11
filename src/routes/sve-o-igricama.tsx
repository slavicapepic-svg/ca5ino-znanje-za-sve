import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryTemplates";

export const Route = createFileRoute("/sve-o-igricama")({
  head: () => ({
    meta: [
      { title: "Sve o igricama — Ca5ino ZaštoZato" },
      { name: "description", content: "RTP, volatilnost, RNG, slotovi, rulet, blackjack i crash games — objašnjeni jednostavno." },
      { property: "og:title", content: "Sve o igricama" },
      { property: "og:description", content: "Kako igre zaista rade — pre nego što pritisnete Spin." },
    ],
  }),
  component: () => <CategoryPage slug="sve-o-igricama" />,
});
