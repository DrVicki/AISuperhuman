import { DashboardNav } from '@/components/dashboard-nav';
import { ProfileSection } from '@/components/profile-section';
import { MissionsSection } from '@/components/missions-section';
import { ThreatAnalysisSection } from '@/components/threat-analysis-section';
import { ContactSection } from '@/components/contact-section';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { DashboardHeader } from '@/components/dashboard-header';

export default function Home() {
  return (
    <>
      <Sidebar collapsible="icon">
        <DashboardNav />
      </Sidebar>
      <SidebarInset>
        <DashboardHeader />
        <main className="flex-1 space-y-16 p-4 md:p-8 lg:p-10">
          <ProfileSection />
          <MissionsSection />
          <ThreatAnalysisSection />
          <ContactSection />
        </main>
      </SidebarInset>
    </>
  );
}
