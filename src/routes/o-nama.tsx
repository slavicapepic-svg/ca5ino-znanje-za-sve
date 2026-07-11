import { createFileRoute } from "@tanstack/react-router";
import { Gavel, Briefcase } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/o-nama")({
  head: () => ({
    meta: [
      { title: "O nama — Ca5ino ZaštoZato" },
      { name: "description", content: "Nezavisna edukativna platforma o iGaming industriji. Znanje menja pravila igre." },
      { property: "og:title", content: "O nama — Glas struke i edukacije" },
      { property: "og:description", content: "Ko smo, koja je naša misija i zašto radimo ono što radimo." },
    ],
  }),
  component: ONamaPage,
});

function ONamaPage() {
  return (
    <SiteShell>
      <Breadcrumb items={[{ label: "Početna", to: "/" }, { label: "O nama" }]} />
      <PageHeader
        eyebrow="Ko smo mi"
        title="O nama: Glas struke i edukacije u iGaming industriji"
        intro="Iza online igara ne stoji slučajnost — to su optimizovani marketinški alati. Ca5ino ZaštoZato je nezavisna edukativna platforma koja otkriva šta stoji iza fasade iGaming industrije, prevodeći složene mehanizme na jednostavan jezik potkrepljen činjenicama i stručnim izvorima."
      />

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
        <h2 className="text-2xl font-extrabold text-text-strong sm:text-3xl">Naš stručni tim</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-brand">
              <Gavel className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-text-strong">Jovana</h3>
            <p className="text-sm font-medium text-brand">
              Ekspert za medijaciju, zaštitu prava igrača i iGaming regulativu
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-body">
              Godinama radi na medijaciji sporova između igrača i operatera. Specijalnost su joj slučajevi
              blokiranih naloga, osporenih isplata, KYC/AML provera i tumačenje uslova bonusa. Zna kako
              regulatori razmišljaju i kako se pravilno formuliše reklamacija.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-brand">
              <Briefcase className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-text-strong">Lane</h3>
            <p className="text-sm font-medium text-brand">
              Ekspert za biznis razvoj, prodajne strategije i sistemsku analitiku
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-body">
              Poslovne modele operatera, mehanike akvizicije i retencije igrača i budžetiranje promocija
              posmatra iznutra. Objašnjava zašto se određene odluke operatera dešavaju iz ugla brojki i
              kako to utiče na igrača.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
        <div className="rounded-2xl bg-[color:var(--brand-primary-deep)] p-8 text-white shadow-card md:p-12">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Naša misija</h2>
          <p className="mt-4 max-w-3xl text-white/85">
            Održivost kroz znanje — edukovan korisnik ima kontrolu nad odlukama. Verujemo da se odnos
            između igrača i industrije menja isključivo kada igrač razume kako sistem zaista radi.
          </p>
          <p className="mt-6 border-l-4 border-accent pl-4 text-lg italic text-white">
            „Znanje menja pravila igre. Kada razumete sistem, više ne možete biti iznenađeni.”
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <div className="rounded-2xl border border-border bg-bg-soft p-6 text-sm leading-relaxed text-text-body">
          <strong className="text-text-strong">Pravno obaveštenje i odricanje od odgovornosti:</strong>{" "}
          Ca5ino ZaštoZato je edukativni projekat. Ne organizujemo igre na sreću, ne primamo uplate, ne
          obrađujemo isplate i ne pružamo usluge klađenja. Sadržaj je informativnog karaktera i ne
          predstavlja pravni ili finansijski savet.
        </div>
      </section>
    </SiteShell>
  );
}
