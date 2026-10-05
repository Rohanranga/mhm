'use client';

import React, { useState } from 'react';
import {
  Search,
  Bell,
  ChevronDown,
  Building2,
  Menu,
  Check,
  Shield,
  Download,
  Share2,
  CheckCircle
} from 'lucide-react';
import { BuilderData } from '@/types/builder';
import { buildersList } from '@/data/builders';

interface HeaderProps {
  currentBuilder: BuilderData;
  onSelectBuilder: (builderId: string) => void;
  onToggleSidebarMobile: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentBuilder,
  onSelectBuilder,
  onToggleSidebarMobile
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 md:px-8 bg-white border-b border-slate-200/90 shadow-sm">
      {/* Left: Mobile Toggle & Breadcrumb */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebarMobile}
          className="p-2 -ml-1 text-slate-600 rounded-lg lg:hidden hover:bg-slate-100 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <span className="hover:text-slate-800 cursor-pointer">Dashboard</span>
          <span className="text-slate-300">/</span>
          <span className="hover:text-slate-800 cursor-pointer">Builders Directory</span>
          <span className="text-slate-300">/</span>
          <span className="text-blue-600 font-semibold truncate max-w-[140px] sm:max-w-[240px]">
            {currentBuilder.company.shortName}
          </span>
        </div>
      </div>

      {/* Center/Right: Search, Builder Switcher, Notification & Profile */}
      <div className="flex items-center gap-3">
        {/* Search Bar */}
        <div className="relative hidden md:block w-56 lg:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search projects, RERA, documents..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
          />
        </div>

        {/* Builder Switcher Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 transition"
          >
            <div className="w-5 h-5 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">
              {currentBuilder.company.shortName.charAt(0)}
            </div>
            <span className="hidden sm:inline font-bold text-slate-800">
              {currentBuilder.company.shortName}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsDropdownOpen(false)}
              />
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                <div className="px-3 py-2 border-b border-slate-100">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    Hyderabad Builders ({buildersList.length})
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Select a builder to switch profile data
                  </p>
                </div>
                <div className="max-h-72 overflow-y-auto py-1">
                  {buildersList.map((builder) => {
                    const isSelected = builder.company.id === currentBuilder.company.id;
                    return (
                      <button
                        key={builder.company.id}
                        onClick={() => {
                          onSelectBuilder(builder.company.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs transition ${
                          isSelected
                            ? 'bg-blue-50/80 text-blue-700 font-bold'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-[10px] ${
                            isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {builder.company.shortName.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold leading-tight">{builder.company.shortName}</div>
                            <div className="text-[10px] text-slate-600 font-normal">
                              Est. {builder.company.foundedYear} • {builder.highlights.projectsDelivered}
                            </div>
                          </div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-blue-600 font-bold" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full ring-2 ring-white animate-pulse" />
          </button>

          {showNotifications && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowNotifications(false)}
              />
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 p-3 z-50 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
                  <span className="font-bold text-slate-800">Compliance & Updates</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-semibold">
                    100% Verified
                  </span>
                </div>
                <div className="space-y-2.5">
                  <div className="flex gap-2.5 p-2 rounded-lg bg-blue-50/60 border border-blue-100">
                    <Shield className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-800">TS-RERA Filing Confirmed</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Quarterly progress and escrow returns audited for {currentBuilder.company.shortName}.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2.5 p-2 rounded-lg bg-slate-50">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-800">Direct Banking APF Codes Active</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        SBI, HDFC, and ICICI instant digital loan processing enabled.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* User Profile Avatar */}
        <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-800 to-slate-700 text-white flex items-center justify-center font-bold text-xs shadow-sm">
            TS
          </div>
          <div className="hidden xl:block text-left">
            <div className="text-xs font-bold text-slate-800 leading-tight">Telangana Registry</div>
            <div className="text-[10px] text-slate-600 font-medium">Compliance Officer</div>
          </div>
        </div>
      </div>
    </header>
  );
};
