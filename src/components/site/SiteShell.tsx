import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FollowUs } from "./FollowUs";
import { ResponsibleGamingBar } from "./ResponsibleGamingBar";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <FollowUs />
      <ResponsibleGamingBar />
      <Footer />
    </div>
  );
}
