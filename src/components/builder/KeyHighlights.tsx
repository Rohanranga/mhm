import React from 'react';
import {
  Activity,
  Award,
  Building,
  Maximize2,
  MapPin,
  Smile,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';
import { Highlights } from '@/types/builder';

interface KeyHighlightsProps {
  highlights: Highlights;
}

export const KeyHighlights: React.FC<KeyHighlightsProps> = ({ highlights }) => {
  const cards = [
    {
      label: 'Industry Legacy',
      value: highlights.yearsExperience,
      subtext: 'Operational Excellence',
      icon: Award,
      color: 'from-blue-600 to-indigo-600',
      textColor: 'text-blue-600'
    },
    {
      label: 'Projects Delivered',
      value: highlights.projectsDelivered,
      subtext: 'Iconic Landmarks',
      icon: Building,
      color: 'from-emerald-600 to-teal-600',
      textColor: 'text-emerald-600'
    },
    {
      label: 'Area Developed',
      value: highlights.areaDeveloped,
      subtext: 'Built-up Real Estate',
      icon: Maximize2,
      color: 'from-indigo-600 to-purple-600',
      textColor: 'text-indigo-600'
    },
    {
      label: 'Cities Presence',
      value: highlights.citiesPresence.split(',')[0],
      subtext: highlights.citiesPresence,
      icon: MapPin,
      color: 'from-amber-600 to-orange-600',
      textColor: 'text-amber-600'
    },
    {
      label: 'Happy Families',
      value: highlights.happyFamilies,
      subtext: 'Satisfied Customers',
      icon: Smile,
      color: 'from-rose-600 to-pink-600',
      textColor: 'text-rose-600'
    },
    {
      label: 'Execution Track',
      value: highlights.onTimeDeliveryRate || '99% On-Time',
      subtext: 'Project Completion Rate',
      icon: TrendingUp,
      color: 'from-cyan-600 to-blue-600',
      textColor: 'text-cyan-600'
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 md:p-6 shadow-sm space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">Key Track Record & Performance Highlights</h2>
            <p className="text-[11px] text-slate-500">
              Verified construction milestones and customer footprint
            </p>
          </div>
        </div>
        <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Audited Metrics
        </span>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-50/80 hover:bg-slate-50 border border-slate-200/80 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    {card.label}
                  </span>
                  <Icon className={`w-4 h-4 ${card.textColor}`} />
                </div>
                <div className="text-base md:text-lg font-black text-slate-900 tracking-tight">
                  {card.value}
                </div>
              </div>
              <div className="mt-2 text-[10px] font-medium text-slate-600 truncate" title={card.subtext}>
                {card.subtext}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
