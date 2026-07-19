import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/politika-kolacica")({
  head: () => ({
    meta: [
      { title: "Politika kolačića — Ca5ino ZaštoZato" },
      { name: "description", content: "Politika kolačića platforme Ca5ino ZaštoZato." },
    ],
  }),
  component: () => (
    <LegalPage title="Politika kolačića" breadcrumbLabel="Politika kolačića">
      <></>
    </LegalPage>
  ),
});
