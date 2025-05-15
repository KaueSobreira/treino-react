import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar";
import Header from "./header";

export default function AdminLayout() {
  return (
    <SidebarProvider>
      <div className="">
        <AppSidebar />
        <main className="">
          <div>
            <Header />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
