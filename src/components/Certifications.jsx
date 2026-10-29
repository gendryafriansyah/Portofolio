import { useState } from 'react'
import { certifications } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import CredentialModal from './CredentialModal'

const categories = [
  { id: 'all', label: 'All Credentials', count: 3 },
  { id: 'ai_ml', label: 'AI & Machine Learning', count: 2 },
  { id: 'academic', label: 'Academic & University', count: 1 },
]

function CredentialCard({ cert, index, onPreview }) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className="reveal flex flex-col justify-between bg-white dark:bg-[#14171D] border border-[#e5e7eb] dark:border-[#252A33] rounded-2xl overflow-hidden transition-all duration-250 hover:border-emerald-500/40 hover:shadow-xl dark:hover:shadow-black/50 group"
      style={{ transitionDelay: `${(index % 6) * 50}ms` }}
    >
      <div>
        {/* Certificate Preview Banner */}
        <div
          onClick={() => onPreview(cert)}
          className="relative h-48 sm:h-52 w-full bg-[#f9fafb] dark:bg-[#0A0C10] overflow-hidden border-b border-[#e5e7eb] dark:border-[#252A33] cursor-pointer flex items-center justify-center p-3 select-none"
        >
          <img
            src={cert.image}
            alt={cert.name}
            className="w-full h-full object-contain transition-transform duration-250 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-250 pointer-events-none"></div>

          {/* Quick Preview Pill Button */}
          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/80 text-white text-[11px] font-mono flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity shadow-sm pointer-events-none">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <span>Preview</span>
          </div>

          {/* Type Pill (Top Left) */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 text-white text-[10px] font-mono uppercase tracking-wide">
            {cert.type}
          </div>
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="flex items-center justify-between text-xs text-[#6b7280] dark:text-[#9CA3AF] mb-2 font-mono">
            <span>{cert.provider}</span>
            <span>{cert.year}</span>
          </div>

          <h3 className="text-base font-bold text-[#111] dark:text-white mb-2 leading-snug group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
            {cert.name}
          </h3>

          <p className="text-xs text-[#4b5563] dark:text-[#9CA3AF] leading-relaxed line-clamp-2">
            {cert.description}
          </p>
        </div>
      </div>

      {/* Footer Link */}
      <div className="px-6 pb-6 pt-0">
        <div className="pt-3 border-t border-[#f0f0f0] dark:border-[#20232A] flex items-center justify-between">
          <span className="text-[11px] font-mono text-[#6b7280] dark:text-[#9CA3AF]">
            {cert.credentialId}
          </span>
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Verify</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

export default function Certifications() {
  const ref = useReveal()
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedCert, setSelectedCert] = useState(null)

  const filtered = activeCategory === 'all'
    ? certifications
    : certifications.filter((c) => c.category === activeCategory)

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal mb-10">
          <p className="text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
            Verified Credentials
          </p>
          <h2 className="text-3xl font-bold text-[#111] dark:text-white">
            Certifications &amp; Degrees
          </h2>
          <p className="text-sm text-[#4b5563] dark:text-[#D1D5DB] mt-2 max-w-xl">
            Official government, institutional, and academic credential authentications in Artificial Intelligence and Software Engineering.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                activeCategory === c.id
                  ? 'bg-[#111] dark:bg-white text-white dark:text-[#111] shadow-sm font-semibold'
                  : 'bg-white dark:bg-[#14171D] border border-[#e5e7eb] dark:border-[#252A33] text-[#6b7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white'
              }`}
            >
              {c.label} ({c.count})
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, i) => (
            <CredentialCard
              key={cert.id}
              cert={cert}
              index={i}
              onPreview={setSelectedCert}
            />
          ))}
        </div>
      </div>

      {selectedCert && (
        <CredentialModal
          credential={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  )
}
