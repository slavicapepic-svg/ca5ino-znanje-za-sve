import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/CategoryTemplates";

export const Route = createFileRoute("/svet-regulative/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  return <ArticlePage categorySlug="svet-regulative" articleSlug={slug} />;
}
