import React from 'react';
import { Users, Award, Shield, Briefcase } from 'lucide-react';
import { Director } from '@/types/builder';

interface DirectorsSectionProps {
  directors: Director[];
}

export const DirectorsSection: React.FC<DirectorsSectionProps> = ({ directors }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 md:p-6 shadow-sm space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">Board of Directors & Executive Leadership</h2>
            <p className="text-[11px] text-slate-500">
              Key management personnel and certified DIN credentials
            </p>
          </div>
        </div>
        <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
          {directors.length} Board Members
        </span>
      </div>

      {/* Directors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {directors.map((director) => (
          <div
            key={director.id}
            className="p-4 rounded-xl bg-slate-50/70 hover:bg-slate-50 border border-slate-200/80 transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start gap-3.5 mb-3">
                {/* Director Avatar / Placeholder */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  {director.name
                    .split(' ')
                    .map((n) => n[0])
                    .filter((_, i) => i < 2)
                    .join('')}
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-xs font-bold text-slate-900 leading-tight">
                    {director.name}
                  </h3>
                  <p className="text-[11px] font-semibold text-blue-600">
                    {director.designation}
                  </p>
                  {director.din && (
                    <span className="inline-block text-[10px] font-mono font-medium text-slate-500">
                      DIN: {director.din}
                    </span>
                  )}
                </div>
              </div>

              {director.experience && (
                <div className="mb-2.5 flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                  <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{director.experience}</span>
                </div>
              )}

              {director.bio && (
                <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-3">
                  {director.bio}
                </p>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-600">
              <span className="flex items-center gap-1 font-semibold text-emerald-700">
                <Shield className="w-3 h-3 text-emerald-600" />
                MCA Verified Director
              </span>
              <span className="font-semibold text-slate-500">Active Status</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
