'use client';

import React from 'react';
import {
  Building2,
  Users,
  FolderGit2,
  Sparkles,
  CheckCircle2,
  FileText,
  Activity,
  History,
  ShieldCheck
} from 'lucide-react';

interface ProfileTabsProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
}

export const ProfileTabs: React.FC<ProfileTabsProps> = ({ activeTab, onSelectTab }) => {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: Building2 },
    { id: 'history', label: 'Company History', icon: History },
    { id: 'directors', label: 'Directors', icon: Users },
    { id: 'highlights', label: 'Key Highlights', icon: Activity },
    { id: 'projects', label: 'Projects Table', icon: FolderGit2 },
    { id: 'quality', label: 'Quality Details', icon: Sparkles },
    { id: 'amenities', label: 'Amenities', icon: CheckCircle2 },
    { id: 'compliance', label: 'Documents & Compliance', icon: FileText },
    { id: 'audit', label: 'Profile Audit', icon: ShieldCheck },
  ];

  return (
    <div className="border-b border-slate-200 bg-white sticky top-16 z-20 shadow-xs -mx-4 md:-mx-8 px-4 md:px-8">
      <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-1.5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
