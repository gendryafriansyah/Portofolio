import { useEffect } from 'react'

export default function CredentialModal({ credential, onClose }) {
  if (!credential) return null

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-[#14171D] border border-[#e5e7eb] dark:border-[#272B33] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e7eb] dark:border-[#252A33] bg-[#fafafa] dark:bg-[#0F1116]">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold tracking-wide uppercase bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
              {credential.type}
            </span>
            <span className="text-xs text-[#6b7280] dark:text-[#9CA3AF] font-mono">
              {credential.provider} &bull; {credential.year}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#6b7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white hover:bg-[#e5e7eb] dark:hover:bg-[#20232A] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Content Preview */}
        <div className="relative flex-1 overflow-y-auto p-6 flex flex-col items-center justify-center bg-[#f5f5f5] dark:bg-[#0A0C10] overflow-hidden">
          {/* Ambient blurred reflection */}
          <img
            src={credential.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover filter blur-3xl opacity-20 dark:opacity-30 scale-150 select-none pointer-events-none"
          />

          {/* Main Certificate Frame */}
          <div className="relative z-10 w-full aspect-[16/11] max-w-3xl flex items-center justify-center rounded-2xl overflow-hidden border border-[#e5e7eb] dark:border-[#252A33] bg-white/95 dark:bg-[#14171D]/95 backdrop-blur-xl shadow-2xl p-2 sm:p-4">
            <img
              src={credential.image}
              alt={credential.name}
              className="w-full h-full object-contain select-none"
            />
          </div>
        </div>

        {/* Footer info & verify button */}
        <div className="px-6 py-4 border-t border-[#e5e7eb] dark:border-[#252A33] bg-[#fafafa] dark:bg-[#0F1116] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h4 className="text-sm font-bold text-[#111] dark:text-white">
              {credential.name}
            </h4>
            <p className="text-xs text-[#6b7280] dark:text-[#9CA3AF] font-mono mt-0.5">
              Credential ID: {credential.credentialId}
            </p>
          </div>
          <a
            href={credential.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-mono font-semibold transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Verify Credential Link</span>
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
