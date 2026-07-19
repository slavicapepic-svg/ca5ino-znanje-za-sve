import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/politika-privatnosti")({
  head: () => ({
    meta: [
      { title: "Politika privatnosti — Ca5ino ZaštoZato" },
      { name: "description", content: "Politika privatnosti platforme Ca5ino ZaštoZato." },
    ],
  }),
  component: () => (
    <LegalPage title="Politika privatnosti" breadcrumbLabel="Politika privatnosti">
      <></>
    </LegalPage>
  ),
});
