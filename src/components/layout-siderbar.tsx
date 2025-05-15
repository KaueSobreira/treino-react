import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar";
import Header from "./header";
import React from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <SidebarProvider>
      <div className="">
        <AppSidebar />
        <main>
          <Header />
          <div className="items-center">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
