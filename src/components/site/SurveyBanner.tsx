import { useState } from "react";
import { CheckCircle2, HelpCircle, RotateCcw } from "lucide-react";

type Step = "question" | "age" | "done";
type Answer = "da" | "ne";
type AgeBand = "ispod-20" | "20-40" | "40+";

export function SurveyBanner() {
  const [step, setStep] = useState<Step>("question");
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [age, setAge] = useState<AgeBand | null>(null);

  const chooseAnswer = (a: Answer) => {
    setAnswer(a);
    setStep("age");
  };
  const chooseAge = (a: AgeBand) => {
    setAge(a);
    setStep("done");
    // NOTE: backend storing (odgovor + starosni raspon + država) — pitanje za dev/backend tim.
  };
  const reset = () => {
    setAnswer(null);
    setAge(null);
    setStep("question");
  };

  return (
    <section aria-label="Kratka anonimna anketa" className="bg-[color:var(--brand-primary-deep)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
        <div className="grid gap-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-accent)]">
              <HelpCircle className="h-3.5 w-3.5" /> Anonimna anketa
            </span>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">
              Vaš glas oblikuje istraživanje.
            </h2>
            <p className="mt-2 text-sm text-white/80">
              Nekoliko sekundi. Bez registracije, bez ličnih podataka.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:p-6">
              {step === "question" && (
                <>
                  <p className="text-lg font-bold leading-snug sm:text-xl">
                    Da li vas osvojeni dobitak motiviše da ponovo uložite novac?
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <button
                      onClick={() => chooseAnswer("da")}
                      className="flex-1 rounded-xl bg-[color:var(--brand-accent)] px-5 py-3 text-base font-bold text-[color:var(--brand-primary-deep)] shadow-cta transition hover:brightness-95"
                    >
                      Da
                    </button>
                    <button
                      onClick={() => chooseAnswer("ne")}
                      className="flex-1 rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-base font-bold text-white transition hover:bg-white/10"
                    >
                      Ne
                    </button>
                  </div>
                </>
              )}

              {step === "age" && (
                <>
                  <p className="text-sm text-white/70">
                    Hvala. Još samo jedno pitanje:
                  </p>
                  <p className="mt-1 text-lg font-bold leading-snug sm:text-xl">
                    Koliko imate godina?
                  </p>
                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {([
                      ["ispod-20", "Ispod 20"],
                      ["20-40", "20–40"],
                      ["40+", "40+"],
                    ] as const).map(([id, label]) => (
                      <button
                        key={id}
                        onClick={() => chooseAge(id)}
                        className="rounded-xl border border-white/25 bg-white/5 px-4 py-3 text-base font-bold text-white transition hover:border-[color:var(--brand-accent)]/60 hover:bg-white/10"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                  <p className="mt-5 text-xs leading-relaxed text-white/70">
                    Anketa je potpuno anonimna. Ne prikupljamo vaše ime, e-mail adresu niti druge podatke koji mogu direktno da vas identifikuju. Beležimo isključivo vaš odgovor, odabrani starosni raspon i državu iz koje učestvujete kako bismo analizirali društvene trendove i razlike između regiona. Podaci se obrađuju isključivo u zbirnom (statističkom) obliku.
                  </p>
                </>
              )}

              {step === "done" && (
                <>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[color:var(--brand-accent)] text-[color:var(--brand-primary-deep)]">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-lg font-bold leading-snug">Hvala što ste učestvovali.</p>
                      <p className="mt-1 text-sm text-white/80">
                        Vaš odgovor{answer ? ` „${answer === "da" ? "Da" : "Ne"}“` : ""}
                        {age ? ` (starosni raspon: ${age === "ispod-20" ? "ispod 20" : age})` : ""} je zabeležen anonimno.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={reset}
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
                  >
                    <RotateCcw className="h-3.5 w-3.5" /> Popuni ponovo
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
