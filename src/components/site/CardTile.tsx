import { Link } from "@tanstack/react-router";
import { Calendar, Clock, User as UserIcon } from "lucide-react";

export type CardTileProps = {
  image: string;
  category?: string;
  title: string;
  author?: string;
  date?: string;
  read?: string;
  to: string;
};

export function CardTile({ image, category, title, author, date, read, to }: CardTileProps) {
  return (
    <Link
      to={to as never}

      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-blue-50">
        <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
        {category && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand shadow-soft">
            {category}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold leading-snug text-text-strong group-hover:text-brand">{title}</h3>
        {(author || date || read) && (
          <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-4 text-xs text-text-muted">
            {author && <span className="inline-flex items-center gap-1.5"><UserIcon className="h-3.5 w-3.5" />{author}</span>}
            {date && <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{date}</span>}
            {read && <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{read} min čitanja</span>}
          </div>
        )}
      </div>
    </Link>
  );
}
