import { useState, useEffect } from 'react'

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'ML Demo', href: '#ai-demo' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Credentials', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ dark, setDark }) {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 90
      if (isAtBottom) {
        setActive('contact')
        return
      }

      const sections = links.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom > 80) {
            setActive(sections[i])
            return
          }
        }
      }
      setActive('')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setMobileOpen(false)
    setActive(href.slice(1))
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0B0C0E]/95 backdrop-blur-md border-b border-[#e5e7eb] dark:border-[#22272E]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo: ~/gendry */}
        <a
          href="#"
          className="text-base sm:text-lg font-bold tracking-tight text-[#111] dark:text-white flex items-center gap-1.5 group"
        >
          <span className="font-mono text-emerald-500 font-bold">
            ~/
          </span>
          <span className="font-mono group-hover:text-emerald-500 transition-colors">gendry.ai</span>
          <span className="inline-block w-1.5 h-3.5 bg-emerald-500/80 animate-pulse ml-0.5"></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-7">
            {links.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => handleClick(href)}
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    active === href.slice(1)
                      ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                      : 'text-[#4b5563] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Status indicator */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Available for Hire</span>
            </div>

            {/* Dark/Light toggle */}
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-[#6b7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white hover:bg-[#f3f4f6] dark:hover:bg-[#1A1D24] transition-colors cursor-pointer border border-transparent hover:border-[#e5e7eb] dark:hover:border-[#2E3238]"
            >
              {dark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-[#6b7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white hover:bg-[#f3f4f6] dark:hover:bg-[#1A1D24] transition-colors cursor-pointer"
          >
            {dark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open menu"
            className="p-2 rounded-lg text-[#6b7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white hover:bg-[#f3f4f6] dark:hover:bg-[#1A1D24] transition-colors cursor-pointer"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12h16M4 6h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0B0C0E]/95 backdrop-blur-xl border-b border-[#e5e7eb] dark:border-[#22272E] px-6 py-5 shadow-2xl animate-in fade-in duration-200">
          <ul className="flex flex-col gap-4">
            {links.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => handleClick(href)}
                  className={`text-base font-medium block w-full text-left py-1 cursor-pointer ${
                    active === href.slice(1)
                      ? 'text-emerald-500 font-bold'
                      : 'text-[#4b5563] dark:text-[#9CA3AF]'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
