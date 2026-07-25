import { Children } from "react";

/**
 * Adaptivni grid koji se ponaša prema broju blokova:
 *  - 1: jedna centrirana kartica komotne širine
 *  - 2: dva centrirana bloka (šira nego u 3-col), bez praznog trećeg mesta
 *  - 3: klasičan 3-col row, jednake širine
 *  - 4+: responzivni grid (1 → 2 → 3 kolone)
 *
 * Kartice unutar zadržavaju istu visinu zahvaljujući flex/grid stretch-u.
 */
export function AdaptiveGrid({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const items = Children.toArray(children);
  const count = items.length;

  if (count === 0) return null;

  if (count === 1) {
    return (
      <div className={`mx-auto grid max-w-xl grid-cols-1 ${className}`}>
        <div className="h-full">{items[0]}</div>
      </div>
    );
  }

  if (count === 2) {
    return (
      <div className={`mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 ${className}`}>
        {items.map((child, i) => (
          <div key={i} className="h-full">{child}</div>
        ))}
      </div>
    );
  }

  if (count === 3) {
    return (
      <div className={`grid grid-cols-1 gap-6 md:grid-cols-3 ${className}`}>
        {items.map((child, i) => (
          <div key={i} className="h-full">{child}</div>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {items.map((child, i) => (
        <div key={i} className="h-full">{child}</div>
      ))}
    </div>
  );
}
