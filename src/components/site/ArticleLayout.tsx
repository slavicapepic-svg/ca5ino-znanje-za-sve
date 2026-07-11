import { Calendar, Clock, User as UserIcon } from "lucide-react";
import type { ReactNode } from "react";
import { CardGrid } from "./CardGrid";
import { CardTile, type CardTileProps } from "./CardTile";

export function ArticleLayout({
  title,
  author,
  date,
  read,
  image,
  children,
  related,
  relatedLabel = "Povezane teme",
}: {
  title: string;
  author?: string;
  date?: string;
  read?: string;
  image?: string;
  children?: ReactNode;
  related?: CardTileProps[];
  relatedLabel?: string;
}) {
  return (
    <>
      <article className="mx-auto max-w-3xl px-4 pt-6 pb-12 md:px-6">
        <h1 className="text-3xl font-extrabold leading-tight text-text-strong sm:text-4xl">{title}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-text-muted">
          {author && <span className="inline-flex items-center gap-1.5"><UserIcon className="h-3.5 w-3.5" />{author}</span>}
          {date && <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{date}</span>}
          {read && <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{read} min čitanja</span>}
        </div>
        {image && (
          <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-soft">
            <img src={image} alt={title} className="block h-auto w-full object-cover" />
          </div>
        )}
        <div className="prose prose-slate mt-8 max-w-none text-text-body [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-text-strong [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-text-strong [&_p]:mt-4 [&_p]:leading-relaxed [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_blockquote]:mt-6 [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:bg-bg-cream [&_blockquote]:p-4 [&_blockquote]:text-text-strong">
          {children ?? (
            <>
              <p>Sadržaj u pripremi. Uskoro objavljujemo detaljan vodič po ovoj temi.</p>
              <h2>Šta ćete naučiti</h2>
              <ul>
                <li>Ključne pojmove i kako ih prepoznati</li>
                <li>Najčešće greške koje igrači prave</li>
                <li>Praktične savete koji vam mogu uštedeti vreme i novac</li>
              </ul>
              <blockquote>Znanje menja pravila igre. Kada razumete sistem, više ne možete biti iznenađeni.</blockquote>
            </>
          )}
        </div>
      </article>

      {related && related.length > 0 && (
        <section className="border-t border-border bg-bg-soft py-14">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="mb-8 text-2xl font-extrabold text-text-strong sm:text-3xl">{relatedLabel}</h2>
            <CardGrid>
              {related.slice(0, 3).map((r) => <CardTile key={r.title} {...r} />)}
            </CardGrid>
          </div>
        </section>
      )}
    </>
  );
}
