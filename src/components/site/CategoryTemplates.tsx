import { notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHeader } from "@/components/site/PageHeader";
import { CardGrid } from "@/components/site/CardGrid";
import { CardTile } from "@/components/site/CardTile";
import { ArticleLayout } from "@/components/site/ArticleLayout";
import { getCategoryBySlug, getArticle, type Article } from "@/content/categories";

/** Renders a category (listing) page for one of the 6 education categories. */
export function CategoryPage({ slug }: { slug: string }) {
  const cat = getCategoryBySlug(slug);
  if (!cat) throw notFound();

  // Group articles when they define a `group` field
  const grouped = new Map<string, Article[]>();
  const ungrouped: Article[] = [];
  for (const a of cat.articles) {
    if (a.group) {
      const arr = grouped.get(a.group) ?? [];
      arr.push(a);
      grouped.set(a.group, arr);
    } else {
      ungrouped.push(a);
    }
  }

  return (
    <SiteShell>
      <Breadcrumb items={[{ label: "Početna", to: "/" }, { label: "Edukacija" }, { label: cat.title }]} />
      <PageHeader eyebrow={cat.eyebrow} title={cat.title} intro={cat.intro} />

      {cat.infoBlocks && cat.infoBlocks.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 pb-12 md:px-6">
          <div className="space-y-10">
            {cat.infoBlocks.map((b) => (
              <div key={b.title}>
                <h2 className="text-2xl font-extrabold text-text-strong sm:text-3xl">{b.title}</h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-text-body">
                  {b.body.split("\n\n").map((p, i) => (
                    <p key={i}>
                      {p.split(/(https?:\/\/[^\s]+)/g).map((chunk, j) =>
                        /^https?:\/\//.test(chunk) ? (
                          <a key={j} href={chunk} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline break-all">{chunk}</a>
                        ) : (
                          <span key={j}>{chunk}</span>
                        ),
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-20">
        {ungrouped.length > 0 && (
          <div className="mb-12">
            <CardGrid>
              {ungrouped.map((a) => (
                <CardTile
                  key={a.slug}
                  to={`${cat.path}/${a.slug}`}
                  image={a.image}
                  title={a.title}
                  author={a.author}
                  date={a.date}
                  read={a.read}
                />
              ))}
            </CardGrid>
          </div>
        )}

        {[...grouped.entries()].map(([group, arts]) => (
          <div key={group} className="mb-14">
            <h2 className="mb-6 text-xl font-extrabold text-text-strong sm:text-2xl">{group}</h2>
            <CardGrid>
              {arts.map((a) => (
                <CardTile
                  key={a.slug}
                  to={`${cat.path}/${a.slug}`}
                  image={a.image}
                  title={a.title}
                  author={a.author}
                  date={a.date}
                  read={a.read}
                />
              ))}
            </CardGrid>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}

/** Renders a single article page inside a category. */
export function ArticlePage({ categorySlug, articleSlug }: { categorySlug: string; articleSlug: string }) {
  const found = getArticle(categorySlug, articleSlug);
  if (!found) throw notFound();
  const { category, article } = found;

  const related = category.articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3)
    .map((a) => ({
      to: `${category.path}/${a.slug}`,
      image: a.image,
      title: a.title,
      author: a.author,
      date: a.date,
      read: a.read,
    }));

  return (
    <SiteShell>
      <Breadcrumb
        items={[
          { label: "Početna", to: "/" },
          { label: "Edukacija" },
          { label: category.title, to: category.path },
          { label: article.title },
        ]}
      />
      <ArticleLayout
        title={article.title}
        author={article.author}
        date={article.date}
        read={article.read}
        image={article.image}
        related={related}
      />
    </SiteShell>
  );
}
