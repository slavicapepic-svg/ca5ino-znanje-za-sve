import { createFileRoute, Link } from "@tanstack/react-router";
import { Gavel, Briefcase, Quote, Linkedin, ArrowRight, MessageSquare, Users } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import teamJovana from "@/assets/team-jovana.jpg";
import teamLane from "@/assets/team-lane.jpg";

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

type TeamMember = {
  name: string;
  title: string;
  photo: string;
  icon: React.ComponentType<{ className?: string }>;
  bio: string;
  linkedin?: string;
};

const team: TeamMember[] = [
  {
    name: "Jovana",
    title: "Ekspert za medijaciju, zaštitu prava igrača i iGaming regulativu",
    photo: teamJovana,
    icon: Gavel,
    bio: "Godinama radi na medijaciji sporova između igrača i operatera. Specijalnost su joj slučajevi blokiranih naloga, osporenih isplata, KYC/AML provera i tumačenje uslova bonusa. Zna kako regulatori razmišljaju i kako se pravilno formuliše reklamacija.",
    linkedin: "#",
  },
  {
    name: "Lane",
    title: "Ekspert za biznis razvoj, prodajne strategije i sistemsku analitiku",
    photo: teamLane,
    icon: Briefcase,
    bio: "Poslovne modele operatera, mehanike akvizicije i retencije igrača i budžetiranje promocija posmatra iznutra. Objašnjava zašto se određene odluke operatera dešavaju iz ugla brojki i kako to utiče na igrača.",
    linkedin: "#",
  },
];

function ONamaPage() {
  return (
    <SiteShell>
      <Breadcrumb items={[{ label: "Početna", to: "/" }, { label: "O nama" }]} />

      <div className="relative overflow-hidden">
        {/* suptilni akcentni oblici u pozadini hero-a */}
        <span className="blob left-[-4rem] top-[-4rem] h-64 w-64 bg-brand/10" aria-hidden />
        <span className="blob right-[-6rem] top-16 h-80 w-80 bg-[color:var(--brand-accent)]/15" aria-hidden />
        <div className="relative">
          <PageHeader
            eyebrow="Ko smo mi"
            title="O nama: Glas struke i edukacije u iGaming industriji"
            intro="Iza online igara ne stoji slučajnost — to su optimizovani marketinški alati. Ca5ino ZaštoZato je nezavisna edukativna platforma koja otkriva šta stoji iza fasade iGaming industrije, prevodeći složene mehanizme na jednostavan jezik potkrepljen činjenicama i stručnim izvorima."
          />
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
        <Reveal>
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand">
                <Users className="h-3 w-3" /> Tim
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-text-strong sm:text-3xl">
                Naš stručni tim
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {team.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.name} delay={i * 120}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="relative aspect-[4/3] overflow-hidden bg-blue-50">
                    <img
                      src={m.photo}
                      alt={`${m.name} — ${m.title}`}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-xl bg-white/95 text-brand shadow-soft">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-text-strong">{m.name}</h3>
                    <p className="mt-1 text-sm font-medium text-brand">{m.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-text-body">{m.bio}</p>
                    {m.linkedin && (
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn profil — ${m.name}`}
                        className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-brand/20 px-3 py-1.5 text-xs font-semibold text-brand hover:bg-brand/5"
                      >
                        <Linkedin className="h-3.5 w-3.5" /> LinkedIn profil
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-[color:var(--brand-primary-deep)] p-8 text-white shadow-card md:p-12">
            <span className="blob right-[-4rem] top-[-4rem] h-64 w-64 bg-[color:var(--brand-accent)]/25" aria-hidden />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-[color:var(--brand-accent)]">
                  <Quote className="h-4 w-4" />
                </span>
                <h2 className="text-2xl font-extrabold sm:text-3xl">Naša misija</h2>
              </div>
              <p className="mt-4 max-w-3xl text-white/85">
                Održivost kroz znanje — edukovan korisnik ima kontrolu nad odlukama. Verujemo da se odnos
                između igrača i industrije menja isključivo kada igrač razume kako sistem zaista radi.
              </p>
              <p className="mt-6 border-l-4 border-[color:var(--brand-accent)] pl-4 text-lg italic text-white">
                „Znanje menja pravila igre. Kada razumete sistem, više ne možete biti iznenađeni.”
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
        <Reveal>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-soft md:p-8">
            <div className="flex items-center gap-2">
              <span className="text-lg" aria-hidden>⭐</span>
              <h2 className="text-xl font-extrabold text-text-strong sm:text-2xl">Zahvalnica</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-text-body sm:text-base">
              Posebnu zahvalnost dugujemo Slavici Pepić za dizajn, vizuelni identitet i korisničko
              iskustvo sajta. Njen rad pomogao je da Ca5inoZaštoZato dobije prepoznatljiv izgled i
              preglednu strukturu koja naš edukativni sadržaj čini dostupnijim i lakšim za korišćenje.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <span
                  className="grid h-12 w-12 place-items-center rounded-full bg-brand/10 text-base font-bold text-brand"
                  aria-hidden
                >
                  SP
                </span>
                <span className="text-sm font-semibold text-text-strong">Slavica Pepić</span>
              </div>
              <a
                href="https://www.linkedin.com/in/slavica-pepic/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profil — Slavica Pepić"
                className="inline-flex items-center gap-2 rounded-full border border-brand/20 px-3 py-1.5 text-xs font-semibold text-brand hover:bg-brand/5"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn profil
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <Link
              to="/rec-strucnjaka"
              className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand">
                  <Users className="h-3 w-3" /> Stručnjaci
                </span>
                <h3 className="mt-1 text-lg font-bold text-text-strong">Upoznaj naše stručnjake</h3>
                <p className="mt-1 text-sm text-text-body">
                  Pravnici, psiholozi i analitičari koji odgovaraju na najvažnija pitanja igrača.
                </p>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand/10 text-brand transition group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to="/postavi-pitanje"
              className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-transparent bg-[color:var(--brand-primary-deep)] p-6 text-white shadow-card transition-all hover:-translate-y-0.5"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--brand-accent)]">
                  <MessageSquare className="h-3 w-3" /> Pitanja
                </span>
                <h3 className="mt-1 text-lg font-bold">Postavi pitanje</h3>
                <p className="mt-1 text-sm text-white/80">
                  Imaš nedoumicu ili konkretan slučaj? Pošalji pitanje — odgovaraju stručnjaci.
                </p>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--brand-accent)] text-[color:var(--brand-primary-deep)] transition group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <Reveal>
          <div className="rounded-2xl border border-border bg-bg-soft p-6 text-sm leading-relaxed text-text-body">
            <strong className="text-text-strong">Pravno obaveštenje i odricanje od odgovornosti:</strong>{" "}
            Ca5ino ZaštoZato je edukativni projekat. Ne organizujemo igre na sreću, ne primamo uplate, ne
            obrađujemo isplate i ne pružamo usluge klađenja. Sadržaj je informativnog karaktera i ne
            predstavlja pravni ili finansijski savet.
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
}
