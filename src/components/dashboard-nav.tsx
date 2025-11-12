import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Globe, Mail, ShieldCheck, UserCircle, BotMessageSquare, MessageSquare } from "lucide-react";
import Link from 'next/link';

export function DashboardNav() {
  return (
    <>
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2" aria-label="AISuperHuman HQ Home">
            <BotMessageSquare className="w-8 h-8 text-primary" />
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
              <h1 className="text-xl font-headline font-bold text-primary">
                  AISuperHuman HQ
              </h1>
            </div>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Profile">
                <a href="#profile"><UserCircle /><span>Profile</span></a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Missions">
                <a href="#missions"><Globe /><span>Missions</span></a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Threat Analysis">
                <a href="#threat-analysis"><ShieldCheck /><span>Threat Analysis</span></a>
            </SidebarMenuButton>
          </SidebarMenuItem>
           <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Chatbot">
                <a href="#chatbot"><MessageSquare /><span>Chatbot</span></a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Contact">
                <a href="#contact"><Mail /><span>Contact</span></a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </>
  );
}
