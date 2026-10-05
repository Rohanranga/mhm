import React from 'react';
import {
  Building2,
  MapPin,
  Calendar,
  Globe,
  CheckCircle,
  ExternalLink,
  Phone,
  Mail,
  FileCheck2,
  Edit3
} from 'lucide-react';
import { CompanyInfo } from '@/types/builder';

interface CompanySummaryProps {
  company: CompanyInfo;
}

export const CompanySummary: React.FC<CompanySummaryProps> = ({ company }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left: Company Logo, Name, Meta Badges */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          {/* Logo container */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200/80 flex items-center justify-center p-2 shadow-inner shrink-0 overflow-hidden group">
            <div className="w-full h-full rounded-xl bg-blue-600 text-white flex flex-col items-center justify-center font-black text-2xl shadow-sm">
              <span>{company.shortName.charAt(0)}</span>
              <span className="text-[9px] font-bold uppercase tracking-wider opacity-90">Builder</span>
            </div>
            <div className="absolute top-1 right-1">
              <span className="flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                {company.name}
              </h1>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <CheckCircle className="w-3.5 h-3.5" />
                TS-RERA {company.status}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 text-slate-700">
                <Building2 className="w-4 h-4 text-blue-600" />
                {company.type}
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <MapPin className="w-4 h-4 text-rose-500" />
                {company.location}
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <Calendar className="w-4 h-4 text-amber-500" />
                Est. {company.foundedYear}
              </span>
            </div>

            {company.tagline && (
              <p className="text-xs font-semibold text-blue-700 italic">
                &ldquo;{company.tagline}&rdquo;
              </p>
            )}
          </div>
        </div>

        {/* Right: Contact & Action Links */}
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition"
          >
            <Globe className="w-4 h-4 text-blue-600" />
            <span>Official Website</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <button
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm shadow-blue-500/20 transition"
          >
            <Edit3 className="w-4 h-4" />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      {/* Corporate Metadata Footer */}
      <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
        <div>
          <span className="text-slate-600 block text-[11px] font-medium">Headquarters</span>
          <span className="font-semibold text-slate-800 truncate block" title={company.headquarters}>
            {company.headquarters.split(',')[0]}
          </span>
        </div>
        <div>
          <span className="text-slate-600 block text-[11px] font-medium">Corporate CIN</span>
          <span className="font-semibold text-slate-800 font-mono">
            {company.cin || 'CIN-NOT-APPLICABLE'}
          </span>
        </div>
        <div>
          <span className="text-slate-600 block text-[11px] font-medium">Official Contact</span>
          <span className="font-semibold text-slate-800">
            {company.phone || '+91 40 Verified'}
          </span>
        </div>
        <div>
          <span className="text-slate-600 block text-[11px] font-medium">Compliance Email</span>
          <span className="font-semibold text-slate-800 truncate block">
            {company.email || 'compliance@rera.gov.in'}
          </span>
        </div>
      </div>
    </div>
  );
};
