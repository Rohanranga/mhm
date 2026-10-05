'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { CompanySummary } from '@/components/builder/CompanySummary';
import { UpdateReminder } from '@/components/builder/UpdateReminder';
import { ProfileCompletion } from '@/components/builder/ProfileCompletion';
import { ProfileTabs } from '@/components/builder/ProfileTabs';
import { CompanyHistory } from '@/components/builder/CompanyHistory';
import { DirectorsSection } from '@/components/directors/DirectorsSection';
import { KeyHighlights } from '@/components/builder/KeyHighlights';
import { ProjectsTable } from '@/components/projects/ProjectsTable';
import { RegularUpdateReminder } from '@/components/builder/RegularUpdateReminder';
import { QualityDetails } from '@/components/quality/QualityDetails';
import { AmenitiesSection } from '@/components/amenities/AmenitiesSection';
import { DocumentsCompliance } from '@/components/documents/DocumentsCompliance';
import { CompletionOverview } from '@/components/builder/CompletionOverview';
import { InformationUsage } from '@/components/builder/InformationUsage';
import { PrivacyNotice } from '@/components/builder/PrivacyNotice';
import { buildersRegistry, buildersList } from '@/data/builders';
import { ShieldCheck, Building2, CheckCircle2, Award, ChevronRight } from 'lucide-react';

export default function BuilderProfilePage() {
  const [selectedBuilderId, setSelectedBuilderId] = useState<string>('my-home-group');
  const [activeSection, setActiveSection] = useState<string>('company-profile');
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState<boolean>(false);

  const currentBuilder = buildersRegistry[selectedBuilderId] || buildersRegistry['my-home-group'];

  // Handle sidebar navigation clicks
  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    // Smoothly scroll to corresponding section if in overview mode or switch tab
    switch (sectionId) {
      case 'directors':
        setActiveTab('directors');
        break;
      case 'projects':
      case 'construction-updates':
      case 'price-updates':
        setActiveTab('projects');
        break;
      case 'quality-details':
        setActiveTab('quality');
        break;
      case 'amenities':
        setActiveTab('amenities');
        break;
      case 'documents':
      case 'rera-certificates':
        setActiveTab('compliance');
        break;
      case 'profile-completion':
        setActiveTab('audit');
        break;
      case 'dashboard':
      case 'company-profile':
      default:
        setActiveTab('overview');
        break;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col antialiased">
      {/* 1. PROMPUBI Fixed Sidebar */}
      <Sidebar
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        isOpenMobile={isSidebarMobileOpen}
        onCloseMobile={() => setIsSidebarMobileOpen(false)}
      />

      {/* Main Content Area (offset by sidebar width on lg screens) */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* 13. Fixed Header & 14. Breadcrumb */}
        <Header
          currentBuilder={currentBuilder}
          onSelectBuilder={(id) => setSelectedBuilderId(id)}
          onToggleSidebarMobile={() => setIsSidebarMobileOpen(!isSidebarMobileOpen)}
        />

        {/* Builder Quick Switcher Bar (Banner for fast inspection across all 10 Hyderabad builders) */}
        <div className="bg-slate-900 text-slate-300 px-4 md:px-8 py-2.5 border-b border-slate-800 flex items-center justify-between overflow-x-auto text-xs gap-3">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">
              Hyderabad Top 10 Builders:
            </span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {buildersList.map((builder) => {
              const isSelected = builder.company.id === currentBuilder.company.id;
              return (
                <button
                  key={builder.company.id}
                  onClick={() => setSelectedBuilderId(builder.company.id)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap transition ${
                    isSelected
                      ? 'bg-blue-600 text-white font-bold shadow-sm'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                  }`}
                >
                  {builder.company.shortName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Page Main Content Container */}
        <main className="flex-1 px-4 md:px-8 py-6 max-w-7xl w-full mx-auto space-y-6">
          {/* 15. Company Information Card */}
          <CompanySummary company={currentBuilder.company} />

          {/* 16. Update Reminder Card */}
          <UpdateReminder
            builderName={currentBuilder.company.name}
            lastUpdated={currentBuilder.profileCompletion.lastUpdated}
          />

          {/* 17. Profile Completion Donut Chart & Progress Bars */}
          <ProfileCompletion completion={currentBuilder.profileCompletion} />

          {/* 18. Overview Navigation Tabs */}
          <ProfileTabs
            activeTab={activeTab}
            onSelectTab={(tabId) => setActiveTab(tabId)}
          />

          {/* Dynamic / Tabbed Content Rendering (Fixed Template Architecture) */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* 21. Key Highlights */}
              <KeyHighlights highlights={currentBuilder.highlights} />

              {/* 19. Company History / About */}
              <CompanyHistory company={currentBuilder.company} />

              {/* 20. Directors Section */}
              <DirectorsSection directors={currentBuilder.directors} />

              {/* 22. Projects Table */}
              <ProjectsTable projects={currentBuilder.projects} />

              {/* 23. Regular Update Reminder Banner */}
              <RegularUpdateReminder builderName={currentBuilder.company.shortName} />

              {/* 24. Quality Details */}
              <QualityDetails qualityDetails={currentBuilder.qualityDetails} />

              {/* 25. Amenities */}
              <AmenitiesSection amenities={currentBuilder.amenities} />

              {/* 26. Documents & Compliance */}
              <DocumentsCompliance
                documents={currentBuilder.documents}
                rera={currentBuilder.rera}
              />

              {/* 27. Profile Completion Overview Checklist */}
              <CompletionOverview
                completion={currentBuilder.profileCompletion}
                builderName={currentBuilder.company.name}
              />

              {/* 28. How Information is Used */}
              <InformationUsage items={currentBuilder.informationUsage} />

              {/* 29. Privacy / Information Disclaimer */}
              <PrivacyNotice
                notice={currentBuilder.privacyNotice}
                builderName={currentBuilder.company.name}
              />
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-6">
              <CompanyHistory company={currentBuilder.company} />
              <KeyHighlights highlights={currentBuilder.highlights} />
              <InformationUsage items={currentBuilder.informationUsage} />
            </div>
          )}

          {activeTab === 'directors' && (
            <div className="space-y-6">
              <DirectorsSection directors={currentBuilder.directors} />
              <CompletionOverview
                completion={currentBuilder.profileCompletion}
                builderName={currentBuilder.company.name}
              />
            </div>
          )}

          {activeTab === 'highlights' && (
            <div className="space-y-6">
              <KeyHighlights highlights={currentBuilder.highlights} />
              <CompanyHistory company={currentBuilder.company} />
              <RegularUpdateReminder builderName={currentBuilder.company.shortName} />
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-6">
              <ProjectsTable projects={currentBuilder.projects} />
              <RegularUpdateReminder builderName={currentBuilder.company.shortName} />
            </div>
          )}

          {activeTab === 'quality' && (
            <div className="space-y-6">
              <QualityDetails qualityDetails={currentBuilder.qualityDetails} />
              <RegularUpdateReminder builderName={currentBuilder.company.shortName} />
            </div>
          )}

          {activeTab === 'amenities' && (
            <div className="space-y-6">
              <AmenitiesSection amenities={currentBuilder.amenities} />
              <InformationUsage items={currentBuilder.informationUsage} />
            </div>
          )}

          {activeTab === 'compliance' && (
            <div className="space-y-6">
              <DocumentsCompliance
                documents={currentBuilder.documents}
                rera={currentBuilder.rera}
              />
              <PrivacyNotice
                notice={currentBuilder.privacyNotice}
                builderName={currentBuilder.company.name}
              />
            </div>
          )}

          {activeTab === 'audit' && (
            <div className="space-y-6">
              <CompletionOverview
                completion={currentBuilder.profileCompletion}
                builderName={currentBuilder.company.name}
              />
              <DocumentsCompliance
                documents={currentBuilder.documents}
                rera={currentBuilder.rera}
              />
              <PrivacyNotice
                notice={currentBuilder.privacyNotice}
                builderName={currentBuilder.company.name}
              />
            </div>
          )}

          {/* 30. Fixed Bottom Footer / Disclaimer */}
          <footer className="pt-8 pb-12 border-t border-slate-200 text-center text-xs text-slate-500 space-y-2">
            <div className="flex items-center justify-center gap-2 font-bold text-slate-700">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>PROMPUBI Builder Dashboard • Hyderabad Real Estate Network</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Data presented is strictly synchronized with official Telangana Real Estate Regulatory Authority (TS-RERA) registrations and public disclosures.
            </p>
            <p className="text-[10px] text-slate-400">
              © {new Date().getFullYear()} PROMPUBI Enterprise Systems. All Rights Reserved.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
