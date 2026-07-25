import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Ca5ino ZaštoZato" },
      { name: "description", content: "Odricanje od odgovornosti platforme Ca5ino ZaštoZato — edukativni, ne kockarski sadržaj." },
      { property: "og:title", content: "Odricanje od odgovornosti — Ca5ino ZaštoZato" },
      { property: "og:description", content: "Sadržaj Ca5ino ZaštoZato je isključivo edukativan i ne predstavlja pravni, finansijski ili stručni savet." },
    ],
  }),
  component: () => (
    <LegalPage title="Odricanje od odgovornosti (Disclaimer)" breadcrumbLabel="Disclaimer">
      <p>Ca5inoZaštoZato je edukativni i informativni projekat namenjen boljem razumevanju online igara na sreću, njihovih pravila, mehanizama i uticaja na igrače. Sadržaj objavljen na ovom sajtu predstavlja mišljenja autora, stručne analize i edukativne informacije zasnovane na iskustvu i javno dostupnim izvorima.</p>
      <p>Informacije objavljene na sajtu ne predstavljaju pravni, finansijski ili stručni savet i ne mogu se smatrati garancijom ishoda u sporovima sa kazinima, kladionicama ili drugim operaterima. Svaki slučaj je jedinstven i zavisi od konkretnih okolnosti, kao i od pravila i uslova korišćenja određenog operatera.</p>
      <p>Ca5inoZaštoZato ne organizuje igre na sreću, ne prima uplate, ne obrađuje isplate i ne pruža usluge klađenja ili kockanja. Naš cilj je isključivo edukacija, informisanje i podizanje svesti o odgovornom pristupu igrama na sreću.</p>
    </LegalPage>
  ),
});
