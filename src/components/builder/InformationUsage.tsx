import React from 'react';
import { HelpCircle, Share2, BadgeDollarSign, FileCheck, CheckCircle2 } from 'lucide-react';
import { InformationUsageItem } from '@/types/builder';

interface InformationUsageProps {
  items: InformationUsageItem[];
}

export const InformationUsage: React.FC<InformationUsageProps> = ({ items }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Share2':
        return <Share2 className="w-5 h-5 text-blue-600" />;
      case 'BadgeDollarSign':
        return <BadgeDollarSign className="w-5 h-5 text-emerald-600" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-purple-600" />;
      default:
        return <Share2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 md:p-6 shadow-sm space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">How This Information Is Used</h2>
            <p className="text-[11px] text-slate-500">
              Syndication across homebuyer portals, mortgage banks, and regulatory registries
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Usage items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 space-y-2.5"
          >
            <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 inline-block shadow-xs">
              {getIcon(item.icon)}
            </div>
            <h3 className="text-xs font-bold text-slate-900 leading-snug">
              {item.title}
            </h3>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
