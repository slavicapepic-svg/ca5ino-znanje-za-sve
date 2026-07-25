import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/rec-strucnjaka")({
  component: RecStrucnjakaLayout,
});

function RecStrucnjakaLayout() {
  return <Outlet />;
}
