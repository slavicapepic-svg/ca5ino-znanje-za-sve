import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Ca5ino ZaštoZato" },
      { name: "description", content: "Disclaimer platforme Ca5ino ZaštoZato." },
    ],
  }),
  component: () => (
    <LegalPage title="Disclaimer" breadcrumbLabel="Disclaimer">
      <></>
    </LegalPage>
  ),
});
