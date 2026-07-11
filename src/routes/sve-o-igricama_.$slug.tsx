import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/CategoryTemplates";

export const Route = createFileRoute("/sve-o-igricama_/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  return <ArticlePage categorySlug="sve-o-igricama" articleSlug={slug} />;
}
