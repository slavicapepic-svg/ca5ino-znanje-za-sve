import {
  Children,
  Fragment,
  isValidElement,
  cloneElement,
  type ReactNode,
  type ReactElement,
} from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHeader } from "@/components/site/PageHeader";
import { FileText, Mail, CalendarClock, Check } from "lucide-react";

/* ────────────────────────────────────────────────────────────────
   Auto-linkify: URLs and emails in text become <a>
   ──────────────────────────────────────────────────────────────── */
const URL_RE = /(https?:\/\/[^\s<>()]+[^\s<>().,;:!?])|([\w.+-]+@[\w-]+\.[\w.-]+)/g;

function linkifyString(text: string, keyPrefix: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  URL_RE.lastIndex = 0;
  while ((m = URL_RE.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const raw = m[0];
    const isEmail = !!m[2];
    const href = isEmail ? `mailto:${raw}` : raw;
    out.push(
      <a
        key={`${keyPrefix}-${i++}`}
        href={href}
        target={isEmail ? undefined : "_blank"}
        rel={isEmail ? undefined : "noopener noreferrer"}
        className="font-medium text-brand underline decoration-brand/30 underline-offset-2 transition hover:text-brand-deep hover:decoration-brand/70 break-words"
      >
        {raw}
      </a>,
    );
    last = m.index + raw.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function linkifyNode(node: ReactNode, keyPrefix = "lk"): ReactNode {
  if (typeof node === "string") return <>{linkifyString(node, keyPrefix)}</>;
  if (Array.isArray(node))
    return node.map((n, i) => <Fragment key={i}>{linkifyNode(n, `${keyPrefix}-${i}`)}</Fragment>);
  if (isValidElement(node)) {
    const el = node as ReactElement<any>;
    if (el.type === "a") return el;
    const kids = (el.props as any)?.children;
    if (kids == null) return el;
    return cloneElement(el, el.props, linkifyNode(kids, keyPrefix));
  }
  return node;
}

/* ────────────────────────────────────────────────────────────────
   Prose transformation:
   1. "<p>Intro: A; B; C. Trailing.</p>" → <p>Intro:</p><ul>…</ul><p>Trailing.</p>
   2. Consecutive "<p><em>Label:</em> body</p>" → grouped definition cards
   ──────────────────────────────────────────────────────────────── */

function extractText(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (isValidElement(node)) return extractText((node.props as any).children);
  return "";
}

function splitListParagraph(text: string, key: string): ReactNode | null {
  const colonIdx = text.indexOf(":");
  if (colonIdx <= 0) return null;
  const after = text.slice(colonIdx + 1);
  // Require at least 2 semicolons in the tail to consider it a list
  if ((after.match(/;/g) ?? []).length < 2) return null;

  const before = text.slice(0, colonIdx + 1).trim();
  const parts = after
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean);

  // Try to split trailing sentence from the last item
  let trailing = "";
  const last = parts[parts.length - 1];
  const trailMatch = last.match(/^(.*?[.!?])\s+([A-ZŠĐČĆŽa-zšđčćž].+)$/);
  if (trailMatch) {
    parts[parts.length - 1] = trailMatch[1];
    trailing = trailMatch[2];
  }

  return (
    <div key={key} className="mt-4 first:mt-0">
      <p className="text-text-body">{linkifyString(before, `${key}-h`)}</p>
      <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
        {parts.map((p, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 rounded-lg bg-black/[0.025] px-3 py-2 text-[14px] leading-snug"
          >
            <Check className="mt-[3px] h-3.5 w-3.5 shrink-0 text-brand" />
            <span>{linkifyString(p.replace(/\.$/, ""), `${key}-li-${i}`)}</span>
          </li>
        ))}
      </ul>
      {trailing && (
        <p className="mt-3 text-text-body">{linkifyString(trailing, `${key}-t`)}</p>
      )}
    </div>
  );
}

function asEmLabelParagraph(
  el: ReactElement,
): { label: string; body: ReactNode[] } | null {
  const kids = Children.toArray((el.props as any).children);
  if (kids.length === 0) return null;
  const first = kids[0];
  if (isValidElement(first) && first.type === "em") {
    const labelText = extractText(first).trim();
    if (labelText.endsWith(":")) {
      return { label: labelText.replace(/:\s*$/, ""), body: kids.slice(1) };
    }
  }
  return null;
}

function renderDefinitionGroup(
  items: { label: string; body: ReactNode[] }[],
  key: string,
): ReactNode {
  return (
    <div key={key} className="mt-4 grid gap-3 first:mt-0 md:grid-cols-2">
      {items.map((it, i) => (
        <div
          key={i}
          className="rounded-xl border border-black/[0.06] bg-white p-4 shadow-sm"
        >
          <p className="text-[13px] font-bold uppercase tracking-wide text-brand">
            {it.label}
          </p>
          <p className="mt-1.5 text-[14px] leading-relaxed text-text-body">
            {linkifyNode(it.body, `${key}-${i}`)}
          </p>
        </div>
      ))}
    </div>
  );
}

function transformNodes(nodes: ReactNode[], keyPrefix = "n"): ReactNode[] {
  const out: ReactNode[] = [];
  let emGroup: { label: string; body: ReactNode[] }[] = [];
  const flushEm = () => {
    if (emGroup.length > 0) {
      if (emGroup.length === 1) {
        // Single one — still render as a card for visual distinction
        out.push(renderDefinitionGroup(emGroup, `${keyPrefix}-em-${out.length}`));
      } else {
        out.push(renderDefinitionGroup(emGroup, `${keyPrefix}-em-${out.length}`));
      }
      emGroup = [];
    }
  };

  nodes.forEach((child, idx) => {
    if (isValidElement(child) && child.type === "p") {
      const asEm = asEmLabelParagraph(child);
      if (asEm) {
        emGroup.push(asEm);
        return;
      }
      flushEm();

      const kids = Children.toArray((child.props as any).children);
      const isPureText = kids.every((k) => typeof k === "string");
      if (isPureText) {
        const text = kids.join("");
        const listified = splitListParagraph(text, `${keyPrefix}-p-${idx}`);
        if (listified) {
          out.push(listified);
          return;
        }
      }
      out.push(child);
      return;
    }
    flushEm();
    out.push(child);
  });
  flushEm();
  return out;
}

/* ────────────────────────────────────────────────────────────────
   Section splitting by <h2>
   ──────────────────────────────────────────────────────────────── */
function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

type Section = { id: string; title: string; nodes: ReactNode[] };

function splitSections(children: ReactNode): { intro: ReactNode[]; sections: Section[] } {
  const arr = Children.toArray(children);
  const intro: ReactNode[] = [];
  const sections: Section[] = [];
  let current: Section | null = null;
  for (const child of arr) {
    if (isValidElement(child) && child.type === "h2") {
      const title = String((child.props as any).children ?? "")
        .replace(/^\d+\.\s*/, "")
        .trim();
      current = { id: slugify(title), title, nodes: [] };
      sections.push(current);
    } else {
      if (current) current.nodes.push(child);
      else intro.push(child);
    }
  }
  return { intro, sections };
}

/* ────────────────────────────────────────────────────────────────
   Component
   ──────────────────────────────────────────────────────────────── */
export function LegalPage({
  title,
  intro,
  children,
  breadcrumbLabel,
  updatedAt,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
  breadcrumbLabel: string;
  updatedAt?: string;
}) {
  const { intro: introNodes, sections } = splitSections(children);

  const introTransformed = transformNodes(introNodes, "intro").map((n, i) => (
    <Fragment key={`i-${i}`}>{linkifyNode(n, `i-${i}`)}</Fragment>
  ));

  const sectionsTransformed = sections.map((s) => ({
    ...s,
    nodes: transformNodes(s.nodes, s.id).map((n, i) => (
      <Fragment key={`${s.id}-${i}`}>{linkifyNode(n, `${s.id}-${i}`)}</Fragment>
    )),
  }));

  return (
    <SiteShell>
      <Breadcrumb items={[{ label: "Početna", to: "/" }, { label: breadcrumbLabel }]} />
      <PageHeader eyebrow="Pravno" title={title} intro={intro} />

      <div className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        {/* Meta bar */}
        <div className="mb-8 flex flex-wrap items-center gap-3 rounded-2xl border border-black/[0.06] bg-cream/60 px-4 py-3 text-xs text-text-muted">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 font-semibold text-text-strong">
            <FileText className="h-3.5 w-3.5 text-brand" /> Pravni dokument
          </span>
          {updatedAt && (
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="h-3.5 w-3.5" /> Poslednje ažuriranje:{" "}
              <strong className="text-text-strong">{updatedAt}</strong>
            </span>
          )}
          <span className="ml-auto inline-flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5" />
            <a
              href="mailto:redakcija@ca5inozastozato.rs"
              className="font-medium text-brand hover:text-brand-deep"
            >
              redakcija@ca5inozastozato.rs
            </a>
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* Sticky TOC */}
          {sectionsTransformed.length > 1 && (
            <aside className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-24">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
                  Sadržaj
                </p>
                <nav>
                  <ol className="space-y-0.5 border-l border-black/[0.08]">
                    {sectionsTransformed.map((s, i) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="group flex items-start gap-3 border-l-2 border-transparent py-1.5 pl-4 -ml-px text-sm text-text-body transition hover:border-brand hover:text-brand"
                        >
                          <span className="mt-0.5 w-6 shrink-0 text-xs font-bold tabular-nums text-text-muted group-hover:text-brand">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>{s.title}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </aside>
          )}

          {/* Article */}
          <article
            className={
              (sectionsTransformed.length > 1 ? "lg:col-span-8 xl:col-span-9 " : "") +
              "max-w-none text-[15px] leading-relaxed text-text-body " +
              "[&_p]:mt-3 [&_p]:first:mt-0 " +
              "[&_strong]:text-text-strong"
            }
          >
            {introTransformed.length > 0 && (
              <div className="rounded-2xl border border-brand/10 bg-blue-50/50 p-5 md:p-6">
                {introTransformed}
              </div>
            )}

            {sectionsTransformed.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                className="mt-10 scroll-mt-24 border-t border-black/[0.06] pt-8 first:mt-8"
              >
                <div className="mb-4 flex items-baseline gap-3">
                  <span className="rounded-md bg-brand-accent/80 px-2 py-0.5 text-sm font-bold tabular-nums text-brand-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl font-bold text-text-strong md:text-2xl">
                    {s.title}
                  </h2>
                </div>
                <div className="max-w-3xl">{s.nodes}</div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </SiteShell>
  );
}
