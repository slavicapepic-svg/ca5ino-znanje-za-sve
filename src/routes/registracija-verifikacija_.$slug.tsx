import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/CategoryTemplates";

export const Route = createFileRoute("/registracija-verifikacija_/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  return <ArticlePage categorySlug="registracija-verifikacija" articleSlug={slug} />;
}
