import { skillCategories } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function CategoryIcon({ type }) {
  if (type === 'brain') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"/>
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"/>
      </svg>
    )
  }
  if (type === 'code') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  }
  if (type === 'smartphone') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
        <path d="M12 18h.01"/>
      </svg>
    )
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  )
}

function SkillCard({ category, index }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal bg-white dark:bg-[#14171D] border border-[#e5e7eb] dark:border-[#252A33] rounded-2xl p-6 transition-all duration-200 hover:border-emerald-500/40 hover:shadow-lg dark:hover:shadow-black/50 flex flex-col justify-between"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-[#f3f4f6] dark:bg-[#1C2028] flex items-center justify-center">
            <CategoryIcon type={category.icon} />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#111] dark:text-white">
              {category.title}
            </h3>
            {category.description && (
              <p className="text-[11px] text-[#6b7280] dark:text-[#9CA3AF] mt-0.5">
                {category.description}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-[#f9fafb] dark:bg-[#0E1015] border border-[#e5e7eb] dark:border-[#272B33] rounded-lg text-xs font-medium text-[#4b5563] dark:text-[#D1D5DB] transition-all duration-150 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-[#111] dark:hover:text-white cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useReveal()
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal mb-12">
          <p className="text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
            Expertise
          </p>
          <h2 className="text-3xl font-bold text-[#111] dark:text-white">
            Tech Stack &amp; Core Competencies
          </h2>
          <p className="text-sm text-[#4b5563] dark:text-[#D1D5DB] mt-2 max-w-2xl">
            A comprehensive overview of programming languages, machine learning frameworks, computer vision libraries, and software engineering methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
