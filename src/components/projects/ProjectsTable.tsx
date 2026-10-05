import React, { useState } from 'react';
import {
  FolderGit2,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink,
  Shield,
  Search,
  Filter,
  Eye
} from 'lucide-react';
import { Project } from '@/types/builder';

interface ProjectsTableProps {
  projects: Project[];
}

export const ProjectsTable: React.FC<ProjectsTableProps> = ({ projects }) => {
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredProjects = projects.filter((p) => {
    const matchesFilter = filterStatus === 'all' || p.status.toLowerCase().includes(filterStatus.toLowerCase());
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.reraNumber.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Ready to Move':
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3" />
            {status}
          </span>
        );
      case 'Under Construction':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
            <Clock className="w-3 h-3" />
            {status}
          </span>
        );
      case 'Newly Launched':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
            <Sparkles className="w-3 h-3" />
            {status}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden space-y-4 p-5 md:p-6">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">Projects Portfolio & TS-RERA Directory</h2>
            <p className="text-[11px] text-slate-500">
              Approved residential townships, gated communities & commercial assets
            </p>
          </div>
        </div>

        {/* Filter & Search */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search projects..."
              className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-44"
            />
          </div>

          <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-lg border border-slate-200 text-xs">
            {['all', 'Ready to Move', 'Under Construction'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold capitalize transition ${
                  filterStatus === status
                    ? 'bg-white text-blue-600 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {status === 'all' ? 'All Projects' : status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Table (Fixed Template Columns) */}
      <div className="overflow-x-auto rounded-xl border border-slate-200/80">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-50/90 border-b border-slate-200 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              <th className="py-3 px-4">Project Name</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Launch Date</th>
              <th className="py-3 px-4">Expected Completion</th>
              <th className="py-3 px-4">Total Units</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <tr key={project.id} className="hover:bg-slate-50/80 transition-colors">
                  {/* Project Name */}
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-900 text-xs">{project.name}</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[10px] font-mono text-slate-500 flex items-center gap-0.5">
                        <Shield className="w-3 h-3 text-blue-600" />
                        RERA: {project.reraNumber}
                      </span>
                    </div>
                  </td>

                  {/* Location */}
                  <td className="py-3.5 px-4 text-slate-700">
                    <div className="font-medium">{project.location}</div>
                    {project.type && (
                      <span className="text-[10px] text-slate-500 block truncate max-w-[200px]">
                        {project.type}
                      </span>
                    )}
                  </td>

                  {/* Launch Date */}
                  <td className="py-3.5 px-4 text-slate-700 font-medium">
                    {project.launchDate}
                  </td>

                  {/* Expected Completion */}
                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    {project.expectedCompletion}
                  </td>

                  {/* Total Units */}
                  <td className="py-3.5 px-4 text-slate-700">
                    <span className="font-semibold text-slate-800">{project.totalUnits}</span>
                    {project.towers && (
                      <span className="text-[10px] text-slate-500 block">
                        {project.towers}
                      </span>
                    )}
                  </td>

                  {/* Status */}
                  <td className="py-3.5 px-4">
                    {getStatusBadge(project.status)}
                  </td>

                  {/* Action */}
                  <td className="py-3.5 px-4 text-right">
                    <button
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-[11px] font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100/80 rounded-lg transition"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-8 text-center text-slate-500">
                  No projects match the selected filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Table Summary Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 pt-2">
        <span>Showing {filteredProjects.length} of {projects.length} verified projects</span>
        <span className="text-[11px] font-medium text-slate-400">
          Official statutory data synced with TS-RERA records
        </span>
      </div>
    </div>
  );
};
