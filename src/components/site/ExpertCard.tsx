import { useState, useId } from "react";
import { Linkedin, Plus, ArrowRight } from "lucide-react";
import type { Expert, ExpertQA } from "@/content/experts";

export function ExpertCard({ expert, question }: { expert: Expert; question: ExpertQA }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-all duration-300 ${
        open ? "shadow-card sm:col-span-2 lg:col-span-3" : "hover:-translate-y-1 hover:shadow-card"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      >
        <div className="flex items-start gap-4 p-5">
          <img
            src={expert.photo}
            alt={expert.name}
            loading="lazy"
            className="h-16 w-16 flex-shrink-0 rounded-full object-cover ring-2 ring-blue-50"
          />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-text-strong">{expert.name}</p>
            <p className="text-xs text-brand">{expert.title}</p>
            {question.date && (
              <p className="mt-1 text-[11px] text-text-muted">{question.date}</p>
            )}
          </div>
          <span
            className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand transition-transform duration-300 ${
              open ? "rotate-45" : "group-hover:scale-110"
            }`}
            aria-hidden
          >
            <Plus className="h-4 w-4" />
          </span>
        </div>
        <div className="px-5 pb-5">
          <h3 className="text-base font-bold leading-snug text-text-strong transition-colors group-hover:text-brand">
            „{question.question}”
          </h3>
          {!open && (
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand">
              Pročitaj odgovor <ArrowRight className="h-3 w-3" />
            </span>
          )}
        </div>
      </button>

      <div
        id={panelId}
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border px-5 py-6 sm:px-8 sm:py-8">
            <div className="space-y-4 text-sm leading-relaxed text-text-body sm:text-base">
              {question.answer.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-bg-soft p-5 sm:flex-row sm:items-center">
              <img
                src={expert.photo}
                alt={expert.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-text-strong">{expert.name}</p>
                <p className="text-xs text-brand">{expert.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-text-body sm:text-sm">
                  {expert.bio}
                </p>
                {expert.linkedin && expert.linkedin !== "#" && (
                  <a
                    href={expert.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
                  >
                    <Linkedin className="h-3.5 w-3.5" /> LinkedIn profil
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
