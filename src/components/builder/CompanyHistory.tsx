import React from 'react';
import { History, Target, Compass, Sparkles, Building, CheckCircle } from 'lucide-react';
import { CompanyInfo } from '@/types/builder';

interface CompanyHistoryProps {
  company: CompanyInfo;
}

export const CompanyHistory: React.FC<CompanyHistoryProps> = ({ company }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 md:p-6 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
            <History className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">About & Company History</h2>
            <p className="text-[11px] text-slate-500">
              Corporate background, heritage and foundational principles
            </p>
          </div>
        </div>
        <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
          Established in {company.foundedYear}
        </span>
      </div>

      {/* Description / Story */}
      <div className="prose prose-sm max-w-none text-slate-700 leading-relaxed text-xs md:text-sm">
        <p className="leading-relaxed">{company.description}</p>
      </div>

      {/* Vision & Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        {company.vision && (
          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50/50 to-indigo-50/30 border border-blue-100 space-y-1.5">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-xs">
              <Compass className="w-4 h-4" />
              <span>Corporate Vision</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {company.vision}
            </p>
          </div>
        )}

        {company.mission && (
          <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/30 border border-emerald-100 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
              <Target className="w-4 h-4" />
              <span>Corporate Mission</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {company.mission}
            </p>
          </div>
        )}
      </div>

      {/* Core Heritage Pillars */}
      <div className="pt-2 border-t border-slate-100">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
          Foundational Operational Principles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              Timely Delivery Track
            </div>
            <p className="text-[11px] text-slate-600 mt-1">
              Zero tolerance for delivery delays with in-house EPC execution frameworks.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
              Structural Precision
            </div>
            <p className="text-[11px] text-slate-600 mt-1">
              MIVAN aluminum formwork and monolithic shear walls conforming to seismic codes.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-purple-600" />
              RERA Transparency
            </div>
            <p className="text-[11px] text-slate-600 mt-1">
              100% compliant project escrow accounts and quarterly statutory filings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
