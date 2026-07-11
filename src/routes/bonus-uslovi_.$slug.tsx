import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/CategoryTemplates";

export const Route = createFileRoute("/bonus-uslovi_/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  return <ArticlePage categorySlug="bonus-uslovi" articleSlug={slug} />;
}
