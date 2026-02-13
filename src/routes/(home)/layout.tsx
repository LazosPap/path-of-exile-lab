import { createFileRoute, Outlet } from "@tanstack/react-router";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

import type { ReactNode } from "react";

export const Route = createFileRoute("/(home)")({
  component: HomeLayout,
});

export function HomeLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="container mx-auto flex min-h-screen flex-col px-4">
      <Navbar />

      <main className="w-full grow">{children ?? <Outlet />}</main>

      <Footer />
    </div>
  );
}
