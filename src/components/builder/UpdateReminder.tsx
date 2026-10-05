import React from 'react';
import { AlertCircle, ArrowRight, Clock, RefreshCw } from 'lucide-react';

interface UpdateReminderProps {
  builderName: string;
  lastUpdated?: string;
}

export const UpdateReminder: React.FC<UpdateReminderProps> = ({
  builderName,
  lastUpdated = '18 Sep 2024'
}) => {
  return (
    <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-200 rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-start gap-3.5">
        <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 shrink-0 mt-0.5">
          <AlertCircle className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xs font-bold text-amber-950 uppercase tracking-wider">
              Quarterly Filing & Price Update Reminder
            </h2>
            <span className="text-[10px] font-bold bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded-full">
              Q3 Cycle Active
            </span>
          </div>
          <p className="text-xs text-amber-900/90 mt-1 leading-relaxed">
            Please ensure latest construction milestone photos, inventory availability, and TS-RERA quarterly returns are uploaded for <span className="font-bold">{builderName}</span>.
          </p>
          <div className="flex items-center gap-2 mt-2 text-[11px] text-amber-800 font-medium">
            <Clock className="w-3.5 h-3.5 text-amber-700" />
            <span>Last synchronized: {lastUpdated}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
        <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-amber-950 bg-amber-200 hover:bg-amber-300 border border-amber-300/80 rounded-xl transition">
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Sync Updates</span>
        </button>
      </div>
    </div>
  );
};
