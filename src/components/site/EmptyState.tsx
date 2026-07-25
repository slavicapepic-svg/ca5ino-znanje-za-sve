import type { LucideIcon } from "lucide-react";
import { Inbox } from "lucide-react";

/**
 * Prijateljski empty state — koristi se svuda gde sadržaj još nije objavljen.
 * Dizajniran tako da grid/list ne kolabira između 0, 1, 2 ili više stavki.
 */
export function EmptyState({
  icon: Icon = Inbox,
  message,
  hint,
  className = "",
}: {
  icon?: LucideIcon;
  message: string;
  hint?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-bg-soft/60 px-6 py-14 text-center ${className}`}
    >
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-brand shadow-soft">
        <Icon className="h-6 w-6" />
      </span>
      <p className="mt-4 max-w-md text-base font-semibold text-text-strong">{message}</p>
      {hint && <p className="mt-2 max-w-md text-sm text-text-muted">{hint}</p>}
    </div>
  );
}
