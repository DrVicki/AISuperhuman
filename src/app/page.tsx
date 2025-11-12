'use client';

import { MissionsSection } from '@/components/missions-section';
import { ThreatAnalysisSection } from '@/components/threat-analysis-section';
import { ContactSection } from '@/components/contact-section';
import { Sidebar } from '@/components/ui/sidebar';
import { DashboardHeader } from '@/components/dashboard-header';
import { DashboardNav } from '@/components/dashboard-nav';


export default function Home() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar>
          <DashboardNav />
      </Sidebar>
      <div className="flex flex-col w-full">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 space-y-8">
            {/* All sections are temporarily removed to debug a rendering error */}
            <h1 className="text-2xl font-bold">Diagnostics Page</h1>
            <p>If you see this, the basic page layout is working. The error is inside one of the section components.</p>
        </main>
      </div>
    </div>
  );
}
