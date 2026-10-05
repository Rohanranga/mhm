import React from 'react';
import {
  CheckCircle2,
  Building2,
  Waves,
  Activity,
  Dumbbell,
  ShieldCheck,
  Leaf,
  Zap,
  Briefcase,
  ShoppingBag,
  Sparkles
} from 'lucide-react';
import { Amenity } from '@/types/builder';

interface AmenitiesSectionProps {
  amenities: Amenity[];
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ amenities }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'Waves':
        return <Waves className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 md:p-6 shadow-sm space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">Amenities & Gated Community Infrastructure</h2>
            <p className="text-[11px] text-slate-500">
              Clubhouse, fitness pavilions, open green spaces and lifestyle conveniences
            </p>
          </div>
        </div>
        <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
          {amenities.length} Verified Facilities
        </span>
      </div>

      {/* Fixed Amenities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {amenities.map((amenity) => (
          <div
            key={amenity.id}
            className="p-4 rounded-xl bg-slate-50/70 hover:bg-slate-50 border border-slate-200/80 transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                  {getIcon(amenity.icon)}
                </div>
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-slate-200">
                  {amenity.category}
                </span>
              </div>

              <h3 className="text-xs font-bold text-slate-900 leading-snug">
                {amenity.name}
              </h3>

              {amenity.highlight && (
                <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                  {amenity.highlight}
                </p>
              )}
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
              <span className="flex items-center gap-1 font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Available on Site
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
