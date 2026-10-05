'use client';

import React from 'react';
import {
  Building,
  LayoutDashboard,
  Users,
  FolderGit2,
  Sparkles,
  CheckCircle2,
  Hammer,
  TrendingUp,
  FileText,
  ShieldCheck,
  Award,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Home
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onSelectSection,
  isOpenMobile = false,
  onCloseMobile
}) => {
  const navGroups = [
    {
      group: 'Core Navigation',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
        { id: 'company-profile', label: 'Company Profile', icon: Building, badge: 'Verified' },
      ]
    },
    {
      group: 'Builder Assets',
      items: [
        { id: 'directors', label: 'Directors', icon: Users, badge: null },
        { id: 'projects', label: 'Projects', icon: FolderGit2, badge: null },
        { id: 'quality-details', label: 'Quality Details', icon: Sparkles, badge: null },
        { id: 'amenities', label: 'Amenities', icon: CheckCircle2, badge: null },
      ]
    },
    {
      group: 'Live Feeds & Updates',
      items: [
        { id: 'construction-updates', label: 'Construction Updates', icon: Hammer, badge: 'Live' },
        { id: 'price-updates', label: 'Price Updates', icon: TrendingUp, badge: 'Active' },
      ]
    },
    {
      group: 'Compliance & Legal',
      items: [
        { id: 'documents', label: 'Documents', icon: FileText, badge: null },
        { id: 'rera-certificates', label: 'RERA Certificates', icon: ShieldCheck, badge: 'TS-RERA' },
        { id: 'profile-completion', label: 'Profile Completion', icon: Award, badge: '98%' },
      ]
    }
  ];

  const handleItemClick = (id: string) => {
    onSelectSection(id);
    if (onCloseMobile) {
      onCloseMobile();
    }
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col w-64 bg-slate-900 text-slate-300 border-r border-slate-800 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="flex items-center justify-between h-16 px-5 border-b border-slate-800/80 bg-slate-950/40">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white font-black shadow-md shadow-blue-500/20 tracking-wider">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-extrabold tracking-wider text-white flex items-center gap-1.5">
                PROMPUBI
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  PRO
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">Builder Dashboard</p>
            </div>
          </div>
        </div>

        {/* Navigation items */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6 scrollbar-thin scrollbar-thumb-slate-800">
          {navGroups.map((group, idx) => (
            <div key={idx} className="space-y-1">
              <div className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                {group.group}
              </div>
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all duration-150 group ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30 font-bold'
                        : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon
                        className={`w-4 h-4 transition-colors ${
                          isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-400'
                        }`}
                      />
                      <span className="truncate">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-tight ${
                          isActive
                            ? 'bg-blue-700 text-white'
                            : 'bg-slate-800 text-blue-300 border border-slate-700'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Sidebar Footer Card */}
        <div className="p-3 border-t border-slate-800/80 bg-slate-950/30">
          <div className="p-3 rounded-xl bg-gradient-to-br from-slate-800/90 to-slate-900 border border-slate-700/60 text-slate-300">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-white flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
                TS-RERA Compliance
              </span>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800/50">
                Active
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mb-2.5 leading-relaxed">
              Quarterly return filings are synced with Telangana RERA registry.
            </p>
            <a
              href="https://rera.telangana.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-2.5 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 text-[11px] font-semibold transition"
            >
              <span>TS-RERA Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
