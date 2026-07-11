import { Link } from "@tanstack/react-router";

export function ResponsibleGamingBar() {
  return (
    <div className="border-t border-border bg-bg-soft">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 py-4 text-center text-xs text-text-body md:px-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-extrabold text-accent-foreground">18+ 🔞</span>
        <span>
          Igre na sreću mogu izazvati zavisnost. Igrajte odgovorno.{" "}
          <Link to="/pomoc" className="font-semibold text-brand hover:underline">Zatražite pomoć</Link>
          {" · "}
          <Link to="/disclaimer" className="font-semibold text-brand hover:underline">Disclaimer</Link>
        </span>
      </div>
    </div>
  );
}
