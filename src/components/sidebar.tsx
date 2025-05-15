// src/components/AppSidebar.tsx
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { Calendar, Home, PersonStanding, Settings } from "lucide-react";

const items = [
  {
    title: "Pagina Inicial",
    url: "/homeAdmin",
    icon: Home,
  },
  {
    title: "Cadastros",
    url: "#",
    icon: PersonStanding,
    subItems: [
      { title: "Barbeiros", url: "/funcionarios" },
      { title: "Serviços", url: "/serviços" },
    ],
  },
  {
    title: "Agendamentos",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Configurações",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="w-68 pt-15">
      <SidebarContent>
        <SidebarGroup>
          <div className="flex items-center space-x-2">
            <SidebarGroupLabel className="text-xl">
              Menu Administrativo
            </SidebarGroupLabel>
            <div className="block lg:hidden">
              <SidebarTrigger className="text-white hover:text-white" />
            </div>
          </div>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const Icon = item.icon;

                return item.subItems ? (
                  <Collapsible key={item.title} className="group/collapsible">
                    <SidebarMenuItem className="!bg-transparent !shadow-none !border-0 !ring-0">
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="!bg-transparent !border-0">
                          <div className="flex items-center space-x-2 text-indigo-500">
                            {Icon && <Icon className="w-4 h-4" />}
                            <span>{item.title}</span>
                          </div>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>

                      <CollapsibleContent className="!bg-transparent">
                        <SidebarMenuSub className="!bg-transparent">
                          {item.subItems.map((sub) => (
                            <SidebarMenuSubItem
                              key={sub.title}
                              className="bg-[color:var(--sidebar-background)] !shadow-none !border-0 !ring-0"
                            >
                              <a
                                href={sub.url}
                                className="block px-4 py-1 text-sm text-[color:var(--sidebar-foreground)] hover:underline"
                              >
                                {sub.title}
                              </a>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className="flex items-center space-x-2 text-[var(--cor-menu)]"
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
