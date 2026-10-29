import { useState } from 'react'
import { projects } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function ProjectCard({ project, index, onSelect }) {
  const ref = useReveal()
  const isGithub = project.isGithub

  return (
    <div ref={ref} className="reveal h-full" style={{ transitionDelay: `${index * 80}ms` }}>
      <div
        onClick={() => onSelect(project)}
        className="flex flex-col justify-between bg-white dark:bg-[#14171D] border border-[#e5e7eb] dark:border-[#252A33] rounded-2xl overflow-hidden transition-all duration-250 hover:-translate-y-1 hover:border-emerald-500/50 dark:hover:border-emerald-500/40 hover:shadow-xl dark:hover:shadow-black/60 cursor-pointer h-full group"
      >
        <div>
          {/* Header Bar with Mac-style window controls */}
          <div className="bg-[#f3f4f6] dark:bg-[#0E1015] border-b border-[#e5e7eb] dark:border-[#252A33] px-3.5 py-2.5 flex items-center justify-between">
            {/* Window Dots */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80"></span>
            </div>

            {/* Address Bar Pill */}
            <div className="flex-1 max-w-[240px] sm:max-w-[280px] bg-white dark:bg-[#1A1D24] border border-[#e5e7eb] dark:border-[#2E3238] rounded-md px-2.5 py-0.5 flex items-center justify-between text-[11px] font-mono text-[#6b7280] dark:text-[#9CA3AF]">
              <div className="flex items-center gap-1.5 truncate">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className="text-[#111] dark:text-white shrink-0">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="truncate">{project.domain}</span>
              </div>
            </div>

            {/* External Link Icon */}
            <div className="text-[#6b7280] dark:text-[#9CA3AF] group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </div>

          {/* Visual Preview Banner */}
          <div className="relative aspect-[16/10] bg-[#f9fafb] dark:bg-[#0A0C10] overflow-hidden border-b border-[#e5e7eb] dark:border-[#252A33] flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
            {/* Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-4">
              <span className="text-white text-xs font-mono font-medium flex items-center gap-1.5">
                <span>Click to inspect details</span>
                <span className="text-emerald-400">&rarr;</span>
              </span>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-6">
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono font-semibold">
                {project.label}
              </span>
              <span className="text-xs text-[#6b7280] dark:text-[#9CA3AF] font-medium flex items-center gap-1 group-hover:text-[#111] dark:group-hover:text-white transition-colors">
                <span>View Details</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>

            <h3 className="text-lg font-bold text-[#111] dark:text-white mb-2.5 leading-snug group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-sm text-[#4b5563] dark:text-[#D1D5DB] leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Quick Metrics Tag */}
            {project.metrics && (
              <div className="grid grid-cols-2 gap-2 p-2.5 mb-2 rounded-lg bg-[#f9fafb] dark:bg-[#0D0F13] border border-[#e5e7eb] dark:border-[#22272E] text-[11px] font-mono">
                {Object.entries(project.metrics).slice(0, 2).map(([key, val]) => (
                  <div key={key}>
                    <span className="text-[#6b7280] dark:text-[#9CA3AF] capitalize">{key}: </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Tech Stack Pills Footer */}
        <div className="px-6 pb-6 pt-0">
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#f0f0f0] dark:border-[#20232A]">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 bg-[#f9fafb] dark:bg-[#0D0F14] border border-[#e5e7eb] dark:border-[#252A33] rounded-md text-[11px] text-[#4b5563] dark:text-[#9CA3AF] font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectDetailModal({ project, onClose }) {
  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#14171D] border border-[#e5e7eb] dark:border-[#272B33] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e7eb] dark:border-[#252A33] bg-[#fafafa] dark:bg-[#0F1116]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold uppercase bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
              {project.label}
            </span>
            <span className="text-xs text-[#6b7280] dark:text-[#9CA3AF] font-mono">
              {project.domain}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#6b7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white hover:bg-[#e5e7eb] dark:hover:bg-[#20232A] transition-colors cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="w-full aspect-[16/9] bg-[#0A0C10] rounded-xl overflow-hidden border border-[#e5e7eb] dark:border-[#252A33]">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#111] dark:text-white mb-3">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-[#4b5563] dark:text-[#D1D5DB] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && (
            <div>
              <h4 className="text-xs uppercase font-mono font-semibold text-[#6b7280] dark:text-[#9CA3AF] mb-3 tracking-wider">
                Key Technical Highlights
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#374151] dark:text-[#D1D5DB]">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#f9fafb] dark:bg-[#0D0F13] border border-[#e5e7eb] dark:border-[#252A33]">
              {Object.entries(project.metrics).map(([k, v]) => (
                <div key={k}>
                  <div className="text-[11px] font-mono text-[#6b7280] dark:text-[#9CA3AF] uppercase">{k}</div>
                  <div className="text-sm font-mono font-bold text-emerald-500 mt-0.5">{v}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs uppercase font-mono font-semibold text-[#6b7280] dark:text-[#9CA3AF] mb-3 tracking-wider">
              Technologies &amp; Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-[#f3f4f6] dark:bg-[#1A1D24] border border-[#e5e7eb] dark:border-[#2E3238] rounded-md text-xs font-mono text-[#111] dark:text-[#D1D5DB]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-6 py-4 border-t border-[#e5e7eb] dark:border-[#252A33] bg-[#fafafa] dark:bg-[#0F1116] flex justify-end gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Visit Repository</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useReveal()
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal mb-12">
          <p className="text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111] dark:text-white">
            Featured AI &amp; Software Projects
          </h2>
          <p className="text-sm text-[#4b5563] dark:text-[#D1D5DB] mt-2 max-w-2xl">
            Selected engineering work spanning Deep Learning (CNN), edge on-device inference on Android, Computer Vision with OpenCV, and educational software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
