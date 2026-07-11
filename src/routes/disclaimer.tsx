import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Ca5ino ZaštoZato" },
      { name: "description", content: "Ca5ino ZaštoZato je edukativni projekat. Ne organizujemo igre na sreću niti primamo uplate." },
    ],
  }),
  component: () => (
    <LegalPage title="Disclaimer" breadcrumbLabel="Disclaimer">
      <p>
        Ca5ino ZaštoZato je edukativni i informativni projekat namenjen boljem razumevanju online igara
        na sreću, njihovih pravila, mehanizama i uticaja na igrače. Sadržaj predstavlja mišljenja autora,
        stručne analize i edukativne informacije zasnovane na iskustvu i javno dostupnim izvorima.
      </p>
      <p>
        Informacije ne predstavljaju pravni, finansijski ili stručni savet i ne mogu se smatrati garancijom
        ishoda u sporovima sa kazinima, kladionicama ili drugim operaterima. Svaki slučaj je jedinstven.
      </p>
      <p>
        Ca5ino ZaštoZato ne organizuje igre na sreću, ne prima uplate, ne obrađuje isplate i ne pruža
        usluge klađenja ili kockanja. Naš cilj je isključivo edukacija, informisanje i podizanje svesti o
        odgovornom pristupu igrama na sreću.
      </p>
    </LegalPage>
  ),
});
