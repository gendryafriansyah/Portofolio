import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#e5e7eb] dark:border-[#22272E] text-xs font-mono text-[#6b7280] dark:text-[#9CA3AF]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <span>Built with React 19 &bull; Vite &bull; Tailwind CSS</span>
          <span>&bull;</span>
          <span className="text-emerald-500">Latency: 12ms</span>
        </div>
      </div>
    </footer>
  )
}
