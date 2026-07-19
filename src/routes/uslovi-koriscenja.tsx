import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/uslovi-koriscenja")({
  head: () => ({
    meta: [
      { title: "Uslovi korišćenja — Ca5ino ZaštoZato" },
      { name: "description", content: "Uslovi korišćenja platforme Ca5ino ZaštoZato." },
    ],
  }),
  component: () => (
    <LegalPage title="Uslovi korišćenja" breadcrumbLabel="Uslovi korišćenja">
      <></>
    </LegalPage>
  ),
});
