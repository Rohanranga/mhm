import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  Award,
  Layers,
  CheckCircle2,
  HardHat,
  Cpu,
  BadgeCheck
} from 'lucide-react';
import { QualityDetail } from '@/types/builder';

interface QualityDetailsProps {
  qualityDetails: QualityDetail[];
}

export const QualityDetails: React.FC<QualityDetailsProps> = ({ qualityDetails }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 md:p-6 shadow-sm space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">Engineering Quality & Material Specifications</h2>
            <p className="text-[11px] text-slate-500">
              Structural standards, branded fittings, and civil quality certifications
            </p>
          </div>
        </div>
        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
          <BadgeCheck className="w-3.5 h-3.5" />
          Lab Tested Specs
        </span>
      </div>

      {/* Grid of Quality Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {qualityDetails.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-xl bg-slate-50/70 hover:bg-slate-50 border border-slate-200/80 transition flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  {item.category}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>

              <h3 className="text-xs font-bold text-slate-900 leading-tight pt-1">
                {item.title}
              </h3>

              <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 text-[11px] font-semibold text-slate-800">
                <span className="text-slate-600 block text-[10px] uppercase tracking-tight">Approved Spec / Brand</span>
                {item.brandOrSpec}
              </div>

              <p className="text-[11px] text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>

            {item.certification && (
              <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center gap-1.5 text-[10px] font-semibold text-slate-600">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="truncate">Cert: {item.certification}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
