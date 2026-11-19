import { useState } from 'react'
import { profile } from '../data/content'

export default function Hero() {
  const [activeTab, setActiveTab] = useState('eval')

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-28 pb-16 overflow-hidden">
      {/* Subtle ambient gradient mesh in the background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-sky-500/10 dark:bg-sky-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline & Bio */}
        <div className="lg:col-span-7">
          {/* Status Pill with Photo Avatar */}
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-[#f3f4f6] dark:bg-[#16181D] border border-[#e5e7eb] dark:border-[#2E3238] mb-6">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-7 h-7 rounded-full object-cover ring-2 ring-emerald-500/40"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
            <div className="flex items-center gap-2 text-xs font-mono text-[#4b5563] dark:text-[#D1D5DB]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-semibold text-[#111] dark:text-white">AI &amp; Software Engineer</span>
              <span className="text-[#9CA3AF]">&bull;</span>
              <span className="text-[#6b7280] dark:text-[#9CA3AF]">Fresh Graduate</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-5">
            <span className="text-[#111] dark:text-white">Mochammad Gendry</span>
            <br />
            <span className="text-[#6b7280] dark:text-[#9CA3AF]">Afriansyah</span>
          </h1>

          <p className="text-base sm:text-lg text-[#4b5563] dark:text-[#D1D5DB] leading-relaxed mb-4 max-w-xl">
            {profile.description}
          </p>

          {/* Education & MSIB Mini Badges */}
          <div className="flex flex-wrap gap-2 text-xs font-mono mb-8 max-w-xl">
            <span className="px-2.5 py-1 rounded-md bg-white dark:bg-[#14171D] border border-[#e5e7eb] dark:border-[#2E3238] text-[#374151] dark:text-[#9CA3AF]">
              🎓 UMJ Teknik Informatika <span className="text-emerald-500 font-bold">(IPK 3.51)</span>
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white dark:bg-[#14171D] border border-[#e5e7eb] dark:border-[#2E3238] text-[#374151] dark:text-[#9CA3AF]">
              ⚡ Orbit Future Academy <span className="text-sky-400">(MSIB Batch)</span>
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex gap-3 sm:gap-4 flex-wrap items-center">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#111] dark:bg-white text-white dark:text-[#0f0f0f] rounded-lg font-semibold text-sm transition-transform duration-200 hover:scale-[1.03] cursor-pointer shadow-md inline-flex items-center gap-2"
            >
              <span>View Projects</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>

            <a
              href={profile.cv}
              download
              className="px-6 py-3 border border-[#e5e7eb] dark:border-[#2E3238] bg-white dark:bg-[#16181D] text-[#111] dark:text-white rounded-lg font-semibold text-sm transition-all duration-200 hover:border-[#999] dark:hover:border-[#9CA3AF] hover:shadow-sm cursor-pointer inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download CV</span>
            </a>

            <a
              href="#ai-demo"
              className="px-4 py-3 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Try Live ML Inference &rarr;</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive ML Terminal Card */}
        <div className="lg:col-span-5 w-full">
          <div className="w-full bg-[#13151A] border border-[#272B33] rounded-2xl shadow-2xl overflow-hidden font-mono text-xs">
            {/* Terminal Top Window Bar */}
            <div className="px-4 py-3 bg-[#0D0E12] border-b border-[#272B33] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ef4444]/80"></span>
                <span className="w-3 h-3 rounded-full bg-[#f59e0b]/80"></span>
                <span className="w-3 h-3 rounded-full bg-[#10b981]/80"></span>
              </div>
              <span className="text-[#9CA3AF] text-[11px] font-medium tracking-tight">gendry@ml-edge:~$</span>
              <div className="w-10"></div>
            </div>

            {/* Interactive Terminal Tabs */}
            <div className="flex border-b border-[#272B33] bg-[#111216] text-[11px]">
              <button
                onClick={() => setActiveTab('eval')}
                className={`px-4 py-2 border-r border-[#272B33] transition-colors cursor-pointer ${
                  activeTab === 'eval'
                    ? 'bg-[#13151A] text-emerald-400 font-semibold'
                    : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                infer_model.py
              </button>
              <button
                onClick={() => setActiveTab('pipeline')}
                className={`px-4 py-2 border-r border-[#272B33] transition-colors cursor-pointer ${
                  activeTab === 'pipeline'
                    ? 'bg-[#13151A] text-sky-400 font-semibold'
                    : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                ai_pipeline.sh
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-4 py-2 transition-colors cursor-pointer ${
                  activeTab === 'profile'
                    ? 'bg-[#13151A] text-amber-400 font-semibold'
                    : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                profile.json
              </button>
            </div>

            {/* Terminal Body Content */}
            <div className="p-5 space-y-3.5 text-[#D1D5DB] leading-relaxed select-text min-h-[300px]">
              {activeTab === 'eval' && (
                <div className="space-y-2.5 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">$</span>
                    <span className="text-white font-medium">python run_inference.py --edge-device android</span>
                  </div>

                  <div className="pl-3 border-l-2 border-emerald-500/40 space-y-1 text-[11px]">
                    <p className="text-[#9CA3AF]">
                      [INIT] Loading <span className="text-emerald-400">HerbalAI_CNN_v2.tflite</span> (4.2 MB)
                    </p>
                    <p className="text-[#9CA3AF]">
                      [CV2] Preprocessing leaf tensor (224, 224, 3) ... OK
                    </p>
                    <p className="text-sky-300 font-semibold">
                      [INFER] Target: "Daun Sirih (Piper betle)"
                    </p>
                    <p className="text-emerald-400 font-bold">
                      [PREDICT] Confidence: 98.6% &bull; Latency: 12.4ms
                    </p>
                    <p className="text-[#9CA3AF]">
                      [REMEDY] Antiseptik alami, batuk, radang gusi
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-emerald-400 font-bold">$</span>
                      <span className="text-white font-medium">check_mode --offline</span>
                    </div>
                    <p className="text-[11px] text-emerald-400 mt-1 pl-3 font-semibold">
                      ✓ Zero external DB required &bull; 100% On-Device Inferencing
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'pipeline' && (
                <div className="space-y-2.5 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2">
                    <span className="text-sky-400 font-bold">$</span>
                    <span className="text-white font-medium">./ai_project_cycle.sh --verbose</span>
                  </div>

                  <div className="pl-3 border-l-2 border-sky-500/40 space-y-1 text-[11px]">
                    <p>
                      <span className="text-sky-300">STAGE 1</span>: Problem Scoping &amp; Use-Case Definition
                    </p>
                    <p>
                      <span className="text-sky-300">STAGE 2</span>: Data Acquisition &amp; Image Annotation
                    </p>
                    <p>
                      <span className="text-sky-300">STAGE 3</span>: Data Exploration &amp; Feature Engineering (OpenCV)
                    </p>
                    <p>
                      <span className="text-sky-300">STAGE 4</span>: Deep CNN &amp; k-NN Modeling (TensorFlow)
                    </p>
                    <p>
                      <span className="text-emerald-400 font-semibold">STAGE 5</span>: Evaluation: Acc 99.4%, F1 0.99
                    </p>
                    <p>
                      <span className="text-amber-300 font-semibold">STAGE 6</span>: Edge Android Offline Deployment
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'profile' && (
                <div className="space-y-2.5 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">$</span>
                    <span className="text-white font-medium">cat engineer_profile.json</span>
                  </div>

                  <div className="pl-3 border-l-2 border-amber-500/40 space-y-1 text-[11px]">
                    <p>
                      <span className="text-sky-300">"candidate"</span>: <span className="text-[#9CA3AF]">"Mochammad Gendry Afriansyah"</span>,
                    </p>
                    <p>
                      <span className="text-sky-300">"focus"</span>: [
                      <span className="text-emerald-300">"Machine Learning"</span>, <span className="text-emerald-300">"Computer Vision"</span>, <span className="text-emerald-300">"Software Eng"</span>],
                    </p>
                    <p>
                      <span className="text-sky-300">"education"</span>: <span className="text-[#9CA3AF]">"Universitas Muhammadiyah Jakarta"</span>,
                    </p>
                    <p>
                      <span className="text-sky-300">"gpa"</span>: <span className="text-emerald-400 font-bold">"3.51 / 4.00"</span>,
                    </p>
                    <p>
                      <span className="text-sky-300">"program"</span>: <span className="text-[#9CA3AF]">"MSIB AI for Jobs (Orbit Future Academy)"</span>,
                    </p>
                    <p>
                      <span className="text-sky-300">"status"</span>: <span className="text-emerald-300 font-semibold">"Ready for Deployment"</span>
                    </p>
                  </div>
                </div>
              )}

              {/* Pulsing prompt */}
              <div className="flex items-center gap-1.5 pt-2 text-[#9CA3AF]">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
