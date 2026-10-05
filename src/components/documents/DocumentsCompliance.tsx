import React from 'react';
import {
  FileText,
  ShieldCheck,
  Download,
  ExternalLink,
  CheckCircle2,
  FileCheck2,
  Lock,
  QrCode
} from 'lucide-react';
import { ComplianceDocument, RERAInfo } from '@/types/builder';

interface DocumentsComplianceProps {
  documents: ComplianceDocument[];
  rera: RERAInfo;
}

export const DocumentsCompliance: React.FC<DocumentsComplianceProps> = ({
  documents,
  rera
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 md:p-6 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">TS-RERA Compliance & Regulatory Documents</h2>
            <p className="text-[11px] text-slate-500">
              Statutory permissions, environmental approvals, and fire safety NOCs
            </p>
          </div>
        </div>
        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" />
          100% Verified Legal Records
        </span>
      </div>

      {/* RERA Master Banner */}
      <div className="p-4 md:p-5 rounded-xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-500/30 shrink-0">
            <QrCode className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                {rera.stateAuthority}
              </span>
              <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                Active Certification
              </span>
            </div>
            <p className="text-xs font-mono font-bold text-blue-300 mt-1">
              {rera.registrationNumber}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-300 mt-1">
              <span>{rera.validity}</span>
              <span>•</span>
              <span className="text-emerald-400">{rera.lastQuarterFiling}</span>
            </div>
          </div>
        </div>

        <a
          href={rera.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-sm transition shrink-0"
        >
          <span>Verify on TS-RERA</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Documents Table / Grid */}
      <div className="overflow-x-auto rounded-xl border border-slate-200/80">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              <th className="py-3 px-4">Document Title</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Issuing Authority</th>
              <th className="py-3 px-4">Issue & Validity</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {documents.map((doc) => (
              <tr key={doc.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4">
                  <div className="font-bold text-slate-900 text-xs flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{doc.title}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 block ml-6">
                    File Size: {doc.fileSize}
                  </span>
                </td>

                <td className="py-3.5 px-4 font-semibold text-slate-700">
                  {doc.documentType}
                </td>

                <td className="py-3.5 px-4 text-slate-700">
                  {doc.issuedBy}
                </td>

                <td className="py-3.5 px-4 text-slate-700">
                  <div className="font-medium text-slate-900">{doc.validTill}</div>
                  <span className="text-[10px] text-slate-500">Issued: {doc.issueDate}</span>
                </td>

                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" />
                    {doc.verificationStatus}
                  </span>
                </td>

                <td className="py-3.5 px-4 text-right">
                  <button
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-[11px] font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
