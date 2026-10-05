import React from 'react';
import { Award, CheckCircle, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { ProfileCompletion } from '@/types/builder';

interface CompletionOverviewProps {
  completion: ProfileCompletion;
  builderName: string;
}

export const CompletionOverview: React.FC<CompletionOverviewProps> = ({
  completion,
  builderName
}) => {
  const auditItems = [
    {
      section: 'Corporate Identification & DIN Records',
      percentage: completion.directors,
      status: 'Fully Verified',
      details: 'MCA registered Director Identification Numbers & executive governance verified.'
    },
    {
      section: 'Structural Specs & Brand Bill of Materials',
      percentage: completion.materials,
      status: 'Verified',
      details: 'MIVAN aluminum formwork, TMT steel grades, and sanitary brands verified.'
    },
    {
      section: 'Real Estate Projects & Unit Inventory',
      percentage: completion.projects,
      status: 'Fully Verified',
      details: 'All active and delivered residential townships mapped with TS-RERA numbers.'
    },
    {
      section: 'Clubhouse Amenities & Safety Facilities',
      percentage: completion.amenities,
      status: 'Verified',
      details: 'Gated community amenities, sports arenas and emergency backup systems cataloged.'
    },
    {
      section: 'RERA Approvals & Statutory Clearances',
      percentage: completion.documents,
      status: 'Fully Verified',
      details: 'HMDA sanction orders, SEIAA environmental clearances and Fire NOC certificates uploaded.'
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 md:p-6 shadow-sm space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">Profile Completion & Statutory Audit Checklist</h2>
            <p className="text-[11px] text-slate-500">
              Detailed breakdown of data integrity and regulatory transparency
            </p>
          </div>
        </div>
        <span className="text-xs font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">
          Overall Score: {completion.overall}%
        </span>
      </div>

      {/* Checklist items */}
      <div className="space-y-3">
        {auditItems.map((item, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <h3 className="text-xs font-bold text-slate-900">{item.section}</h3>
                <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                  {item.status}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 ml-6">
                {item.details}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 sm:ml-4 pl-6 sm:pl-0">
              <div className="w-24 bg-slate-200 rounded-full h-2 overflow-hidden hidden sm:block">
                <div
                  className="bg-emerald-500 h-full rounded-full"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="text-xs font-bold text-slate-900 w-10 text-right">
                {item.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
