import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/urednicka-politika")({
  head: () => ({
    meta: [
      { title: "Uređivačka politika — Ca5ino ZaštoZato" },
      { name: "description", content: "Uređivačka politika platforme Ca5ino ZaštoZato." },
    ],
  }),
  component: () => (
    <LegalPage title="Uređivačka politika" breadcrumbLabel="Uređivačka politika">
      <></>
    </LegalPage>
  ),
});
