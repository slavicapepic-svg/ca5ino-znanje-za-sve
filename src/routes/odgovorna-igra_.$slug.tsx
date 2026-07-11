import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/CategoryTemplates";

export const Route = createFileRoute("/odgovorna-igra/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  return <ArticlePage categorySlug="odgovorna-igra" articleSlug={slug} />;
}
