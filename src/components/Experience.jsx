import { experiences } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function ExpCard({ exp, index }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal flex flex-col sm:flex-row gap-3 sm:gap-6"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 min-w-[140px] pt-1.5 shrink-0">
        {exp.date}
      </div>
      <div className="bg-white dark:bg-[#14171D] border border-[#e5e7eb] dark:border-[#252A33] rounded-2xl p-6 flex-1 transition-all duration-200 hover:border-emerald-500/40 hover:translate-x-1 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <h3 className="text-base sm:text-lg font-bold text-[#111] dark:text-white">
            {exp.role}
          </h3>
          {exp.badge && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              {exp.badge}
            </span>
          )}
        </div>

        <p className="text-xs font-semibold text-[#6b7280] dark:text-[#9CA3AF] mb-3">
          {exp.org}
        </p>

        <p className="text-sm text-[#4b5563] dark:text-[#D1D5DB] leading-relaxed mb-4">
          {exp.description}
        </p>

        {exp.highlights && (
          <ul className="space-y-1.5 pt-2 border-t border-[#f0f0f0] dark:border-[#20232A]">
            {exp.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#4b5563] dark:text-[#9CA3AF]">
                <span className="text-emerald-500 mt-0.5">&bull;</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  const ref = useReveal()
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="reveal mb-12">
          <p className="text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
            Experience &amp; Education
          </p>
          <h2 className="text-3xl font-bold text-[#111] dark:text-white">
            Academic &amp; Professional Journey
          </h2>
          <p className="text-sm text-[#4b5563] dark:text-[#D1D5DB] mt-2">
            Certified study in artificial intelligence, university engineering milestones, and community software initiatives.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <ExpCard key={exp.role} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
