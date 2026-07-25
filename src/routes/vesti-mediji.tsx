import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/vesti-mediji")({
  component: VestiMedijiLayout,
});

function VestiMedijiLayout() {
  return <Outlet />;
}
