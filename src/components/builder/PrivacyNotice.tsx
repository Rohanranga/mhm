import React from 'react';
import { Lock, Shield, CheckCircle } from 'lucide-react';
import { PrivacyNoticeInfo } from '@/types/builder';

interface PrivacyNoticeProps {
  notice: PrivacyNoticeInfo;
  builderName: string;
}

export const PrivacyNotice: React.FC<PrivacyNoticeProps> = ({ notice, builderName }) => {
  return (
    <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 text-slate-600 text-xs space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
        <div className="flex items-center gap-2 text-slate-800 font-bold">
          <Lock className="w-4 h-4 text-blue-600" />
          <span>Statutory Compliance & Legal Disclaimer</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-slate-600">
          <span>Audited by: {notice.lastAudit}</span>
        </div>
      </div>

      <p className="text-[11px] text-slate-600 leading-relaxed">
        {notice.disclaimer}
      </p>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-[11px] text-slate-600 font-medium">
        <span className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-emerald-600" />
          {notice.complianceStandard}
        </span>
        <span className="flex items-center gap-1.5">
          <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
          256-Bit SSL Encrypted Statutory Transmission
        </span>
      </div>
    </div>
  );
};
