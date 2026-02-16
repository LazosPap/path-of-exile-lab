import { Link } from "@tanstack/react-router";

import { PoeLabLogo } from "@/assets/images";
import { MotionDiv } from "@/components/motion";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/shadcn/sidebar";

import type { ReactNode } from "react";

export type SidebarDashboardProps = {
  children?: ReactNode;
};

export function SidebarDashboard({ children }: SidebarDashboardProps) {
  return (
    <Sidebar className="flex h-screen flex-col" collapsible="icon">
      <MotionDiv
        className="flex h-full flex-col"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link to="/">
                  <div
                    className="text-primary-foreground flex aspect-square size-12 items-center
                      justify-center"
                  >
                    <img src={PoeLabLogo} className="h-fit dark:invert" alt={"Logo"} />
                  </div>
                  <div
                    className="text-bold text-secondary-foreground grid flex-1 text-left text-sm
                      leading-tight"
                  >
                    <span className="text-primary truncate font-semibold">Poe Lab</span>
                    <span className="text-foreground truncate text-xs font-semibold">
                      Categories
                    </span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className="flex-1 overflow-auto">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>{children}</SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </MotionDiv>
    </Sidebar>
  );
}
