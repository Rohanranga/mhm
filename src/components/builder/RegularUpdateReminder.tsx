import React from 'react';
import { BellRing, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface RegularUpdateReminderProps {
  builderName: string;
}

export const RegularUpdateReminder: React.FC<RegularUpdateReminderProps> = ({ builderName }) => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-2xl p-5 md:p-6 text-white shadow-md relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-white/10 text-blue-300 border border-white/10 shrink-0">
            <BellRing className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                Statutory Compliance Alert
              </span>
              <span className="text-xs text-slate-300 font-semibold">• 90-Day Periodic Cycle</span>
            </div>
            <h3 className="text-base font-bold text-white">
              Maintain Active TS-RERA & Property Portal Verification
            </h3>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Real estate buyers and institutional lending banks rely on authentic quarterly milestones. Keep <span className="text-white font-semibold">{builderName}</span>&apos;s unit price sheets and project drone videos updated to maintain Tier-1 verification.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-xs shadow-md transition">
            <span>Upload Quarterly Milestone</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
