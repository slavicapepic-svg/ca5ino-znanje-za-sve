import { useState, useId } from "react";
import { Link } from "@tanstack/react-router";
import { Linkedin, Quote, RotateCw, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { Expert, ExpertQA } from "@/content/experts";

type BaseProps = {
  expert: Expert;
};

type TeaserProps = BaseProps & {
  variant: "teaser";
};

type FullProps = BaseProps & {
  variant: "full";
  question: ExpertQA;
};

export type ExpertCardProps = TeaserProps | FullProps;

/**
 * Unified expert card. Isti dizajn jezik (navy + gold, portret, quote motiv).
 * - variant="teaser" — home page: veliki portret, pullQuote, flip na navy sa bio-om i LinkedIn CTA.
 * - variant="full"   — /rec-strucnjaka: portret + pitanje kao naslov, accordion otvara pun odgovor + bio + LinkedIn.
 */
export function ExpertCard(props: ExpertCardProps) {
  if (props.variant === "teaser") return <ExpertCardTeaser expert={props.expert} />;
  return <ExpertCardFull expert={props.expert} question={props.question} />;
}

function ExpertCardTeaser({ expert }: { expert: Expert }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flip-card h-[460px]">
      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        aria-pressed={flipped}
        aria-label={`${expert.name} — ${flipped ? "sakrij" : "prikaži"} pun citat`}
        className={`flip-inner block h-full w-full text-left cursor-pointer ${flipped ? "is-flipped" : ""}`}
      >
        {/* FRONT */}
        <article className="flip-face flex h-full flex-col overflow-hidden border border-border bg-white shadow-soft transition hover:shadow-card">
          <div className="relative aspect-[4/3] overflow-hidden bg-blue-50">
            <img
              src={expert.photo}
              alt={expert.name}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-brand shadow-soft">
              <RotateCw className="h-3 w-3" /> Pročitaj odgovor
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-lg font-bold text-text-strong">{expert.name}</h3>
            <p className="mt-1 text-sm font-medium text-brand">{expert.title}</p>
            <p className="mt-0.5 text-xs text-text-muted">{expert.org}</p>
            <blockquote className="mt-4 border-l-2 border-[color:var(--brand-accent)] pl-4 text-sm leading-relaxed text-text-body">
              „{expert.pullQuote}”
            </blockquote>
              <a
                href={expert.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(ev) => ev.stopPropagation()}
                aria-label={`LinkedIn profil — ${expert.name}`}
                className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-brand/20 px-3 py-1.5 text-xs font-semibold text-brand hover:bg-brand/5"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn profil
              </a>
          </div>
        </article>

        {/* BACK */}
        <article className="flip-face flip-back flex h-full flex-col overflow-hidden border border-[color:var(--brand-primary-deep)] bg-[color:var(--brand-primary-deep)] p-6 text-white shadow-card">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-lg font-bold text-white">{expert.name}</h3>
              <p className="mt-0.5 text-sm font-medium text-[color:var(--brand-accent)]">{expert.title}</p>
              <p className="mt-0.5 text-xs text-white/60">{expert.org}</p>
            </div>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-[color:var(--brand-accent)]">
              <Quote className="h-4 w-4" />
            </span>
          </div>
          <blockquote className="mt-4 flex-1 overflow-auto border-l-2 border-[color:var(--brand-accent)] pl-4 text-sm leading-relaxed text-white/90">
            „{expert.pullQuote}”
            {expert.bio && <span className="mt-3 block text-xs text-white/70">{expert.bio}</span>}
          </blockquote>
          <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
            {expert.questions[0] && (
              <Link
                to="/rec-strucnjaka/$slug"
                params={{ slug: expert.questions[0].slug }}
                onClick={(ev) => ev.stopPropagation()}
                className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--brand-accent)] px-3 py-1.5 text-xs font-bold text-[color:var(--brand-primary-deep)] hover:brightness-95"
              >
                Pročitaj pun odgovor <ArrowRight className="h-3 w-3" />
              </Link>
            )}
                          <a
                href={expert.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(ev) => ev.stopPropagation()}
                aria-label={`LinkedIn profil — ${expert.name}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/10"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn profil
              </a>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[color:var(--brand-accent)]">
              <RotateCw className="h-3 w-3" /> Zatvori
            </span>
          </div>
        </article>
      </button>
    </div>
  );
}

function ExpertCardFull({ expert, question }: { expert: Expert; question: ExpertQA }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="group flex flex-col overflow-hidden border border-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          className="flex w-full flex-1 flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-blue-50">
            <img
              src={expert.photo}
              alt={expert.name}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-brand shadow-soft">
              Pročitaj odgovor
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-lg font-bold text-text-strong">{expert.name}</h3>
            <p className="mt-1 text-sm font-medium text-brand">{expert.title}</p>
            <p className="mt-0.5 text-xs text-text-muted">{expert.org}</p>
            <blockquote className="mt-4 border-l-2 border-[color:var(--brand-accent)] pl-4 text-sm leading-snug text-text-strong">
              <span className="mb-1 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand">
                <Quote className="h-3 w-3" /> Pitanje
              </span>
              <span className="block text-base font-bold leading-snug">„{question.question}”</span>
              {question.date && (
                <span className="mt-2 block text-[11px] text-text-muted">{question.date}</span>
              )}
            </blockquote>
            <div className="mt-auto flex flex-wrap items-center gap-3 pt-4">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand">
                Pročitaj odgovor <ArrowRight className="h-3 w-3" />
              </span>
              <a
                href={expert.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(ev) => ev.stopPropagation()}
                aria-label={`LinkedIn profil — ${expert.name}`}
                className="ml-auto inline-flex items-center gap-2 rounded-full border border-brand/20 px-3 py-1.5 text-xs font-semibold text-brand hover:bg-brand/5"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn profil
              </a>
            </div>
          </div>
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-w-3xl gap-0 overflow-hidden border-0 bg-white p-0 sm:rounded-2xl"
        >
          <div className="grid max-h-[85vh] grid-cols-1 md:grid-cols-[240px_1fr]">
            {/* Sidebar: portrait + meta */}
            <aside className="hidden bg-[color:var(--brand-primary-deep)] p-6 text-white md:block">
              <div className="aspect-square overflow-hidden rounded-xl bg-white/10">
                <img src={expert.photo} alt={expert.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 text-base font-bold text-white">{expert.name}</h3>
              <p className="mt-1 text-xs font-medium text-[color:var(--brand-accent)]">{expert.title}</p>
              <p className="mt-0.5 text-[11px] text-white/60">{expert.org}</p>
              <p className="mt-4 text-xs leading-relaxed text-white/80">{expert.bio}</p>
              <a
                href={expert.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-white/10"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
            </aside>

            {/* Content */}
            <div className="relative flex min-h-0 flex-col overflow-hidden">


              {/* Mobile-only header */}
              <div className="flex items-center gap-3 border-b border-border bg-bg-soft p-4 md:hidden">
                <img src={expert.photo} alt={expert.name} className="h-12 w-12 rounded-full object-cover" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-text-strong">{expert.name}</p>
                  <p className="truncate text-xs text-brand">{expert.title}</p>
                </div>
              </div>

              <div className="overflow-y-auto p-6 sm:p-8">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
                  <Quote className="h-3 w-3" /> Pitanje
                </span>
                <DialogTitle className="mt-3 text-xl font-extrabold leading-snug text-text-strong sm:text-2xl">
                  „{question.question}”
                </DialogTitle>
                {question.date && (
                  <DialogDescription className="mt-2 text-xs text-text-muted">
                    {question.date}
                  </DialogDescription>
                )}

                <div className="mt-6 space-y-4 border-l-2 border-[color:var(--brand-accent)] pl-4 text-sm leading-relaxed text-text-body sm:text-base">
                  {question.answer.split("\n\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {/* Mobile bio */}
                <div className="mt-8 rounded-2xl border border-border bg-bg-soft p-4 md:hidden">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-brand">
                    O stručnjaku
                  </p>
                  <p className="text-xs leading-relaxed text-text-body">{expert.bio}</p>
                  <a
                    href={expert.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-brand/20 px-3 py-1.5 text-[11px] font-semibold text-brand hover:bg-brand/5"
                  >
                    <Linkedin className="h-3.5 w-3.5" /> LinkedIn profil
                  </a>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-border pt-4">
                  <Link
                    to="/rec-strucnjaka/$slug"
                    params={{ slug: question.slug }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
                  >
                    Otvori kao stranicu <ArrowRight className="h-3 w-3" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--brand-primary-deep)] px-4 py-2 text-xs font-semibold text-white hover:brightness-110"
                  >
                    <RotateCw className="h-3 w-3" /> Zatvori
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

