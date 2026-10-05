import React from 'react';
import { Award, CheckCircle2, TrendingUp, AlertTriangle } from 'lucide-react';
import { ProfileCompletion as ProfileCompletionType } from '@/types/builder';
import { CompletionDonut } from '../charts/CompletionDonut';

interface ProfileCompletionProps {
  completion: ProfileCompletionType;
}

export const ProfileCompletion: React.FC<ProfileCompletionProps> = ({ completion }) => {
  const metrics = [
    { label: 'Directors & Leadership', value: completion.directors, weight: '20%' },
    { label: 'Quality & Material Specs', value: completion.materials, weight: '20%' },
    { label: 'Active & Delivered Projects', value: completion.projects, weight: '25%' },
    { label: 'Amenities & Club Details', value: completion.amenities, weight: '15%' },
    { label: 'TS-RERA & Legal Documents', value: completion.documents, weight: '20%' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 md:p-6 shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">Profile Completion Index</h2>
            <p className="text-[11px] text-slate-500">
              Verified statutory & technical data audit score
            </p>
          </div>
        </div>
        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Tier-1 Verified Developer
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Donut Chart */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center p-4 bg-slate-50/70 rounded-2xl border border-slate-100">
          <CompletionDonut
            percentage={completion.overall}
            size={135}
            strokeWidth={12}
            color={completion.overall >= 95 ? '#10b981' : '#2563eb'}
            label="Verified"
          />
          <div className="mt-3 text-center">
            <span className="text-xs font-bold text-slate-800 block">
              {completion.overall >= 98 ? 'All Essential Fields Complete' : 'Profile Nearly Complete'}
            </span>
            <span className="text-[10px] text-slate-500 font-medium">
              Last audited: {completion.lastUpdated}
            </span>
          </div>
        </div>

        {/* Right: Breakdown Progress Meters */}
        <div className="lg:col-span-8 space-y-3">
          {metrics.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  {item.label}
                  <span className="text-[10px] text-slate-600 font-normal">({item.weight})</span>
                </span>
                <span className="font-bold text-slate-900">{item.value}%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    item.value === 100
                      ? 'bg-emerald-500'
                      : item.value >= 90
                      ? 'bg-blue-600'
                      : 'bg-amber-500'
                  }`}
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
