import { Link } from "@tanstack/react-router";

import PoeLabLogo from "@/assets/images/Poe_lab_logo.svg";
import { MotionDiv } from "@/components/motion";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
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
    <Sidebar collapsible="icon">
      <MotionDiv initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link to="/">
                  <div
                    className="text-primary-foreground flex aspect-square size-12 items-center
                      justify-center"
                  >
                    <img src={PoeLabLogo} className="max-h-16 dark:invert" alt={"Logo"} />
                  </div>
                  <div
                    className="text-bold text-secondary-foreground grid flex-1 text-left text-sm
                      leading-tight"
                  >
                    <span className="text-primary truncate font-semibold">Poe Lab</span>
                    <span className="text-secondary truncate text-xs">Categories</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Select category</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {children}
                {/* {dropdownItems.map(({ url, icon: Icon, label }) => {
                  const isActive =
                    location.pathname === url || location.pathname.startsWith(`${url}/`);
                  return (
                    <SidebarMenuItem key={url}>
                      <SidebarMenuButton asChild isActive={isActive}>
                        <Link to={url}>
                          <div>
                            <Icon className="text-primary" size={18} />
                          </div>
                          <span>{t(label)}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })} */}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </MotionDiv>
    </Sidebar>
  );
}
