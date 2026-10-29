import { useState } from 'react'
import { liveModelSamples } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function ModelPlayground() {
  const ref = useReveal()
  const [selectedSample, setSelectedSample] = useState(liveModelSamples[0])
  const [isInferring, setIsInferring] = useState(false)
  const [viewMode, setViewMode] = useState('cnn') // 'cnn' or 'knn'

  const handleSelectSample = (sample) => {
    setIsInferring(true)
    setTimeout(() => {
      setSelectedSample(sample)
      setIsInferring(false)
    }, 280)
  }

  return (
    <section id="ai-demo" className="py-24 px-6 bg-[#f3f4f6]/50 dark:bg-[#0D0F14]/70 border-y border-[#e5e7eb] dark:border-[#22272E]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Interactive Model Simulation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111] dark:text-white">
              Edge AI &amp; Machine Learning Workbench
            </h2>
            <p className="text-sm text-[#4b5563] dark:text-[#D1D5DB] mt-2 max-w-xl">
              Experience real-time simulated on-device inference developed for the HerbalAI Android application and Face Recognition Attendance system.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex bg-white dark:bg-[#16181D] border border-[#e5e7eb] dark:border-[#2E3238] p-1 rounded-xl text-xs font-mono">
            <button
              onClick={() => setViewMode('cnn')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                viewMode === 'cnn'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-[#6b7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white'
              }`}
            >
              HerbalAI (CNN)
            </button>
            <button
              onClick={() => setViewMode('knn')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                viewMode === 'knn'
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'text-[#6b7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white'
              }`}
            >
              Face Recognition (k-NN)
            </button>
          </div>
        </div>

        {viewMode === 'cnn' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: Input Leaf Specimen Selector */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6b7280] dark:text-[#9CA3AF]">
                Select Indonesian Herbal Leaf Sample:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {liveModelSamples.map((sample) => (
                  <button
                    key={sample.id}
                    onClick={() => handleSelectSample(sample)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                      selectedSample.id === sample.id
                        ? 'bg-white dark:bg-[#1A1E26] border-emerald-500 shadow-md ring-1 ring-emerald-500/50'
                        : 'bg-white/70 dark:bg-[#14171D] border-[#e5e7eb] dark:border-[#252A33] hover:border-[#aaa] dark:hover:border-[#4B5563]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-xs font-mono text-emerald-500 font-bold">
                          sample_{sample.id}.jpg
                        </span>
                        {selectedSample.id === sample.id && (
                          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-[#111] dark:text-white">
                        {sample.name}
                      </h4>
                      <p className="text-[11px] text-[#6b7280] dark:text-[#9CA3AF] italic mt-0.5">
                        {sample.family}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-[#f0f0f0] dark:border-[#252A33] flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#6b7280] dark:text-[#9CA3AF]">Confidence</span>
                      <span className="text-emerald-500 font-bold">{sample.confidence}%</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Offline Edge Hardware Info */}
              <div className="mt-auto p-4 rounded-xl bg-white dark:bg-[#14171D] border border-[#e5e7eb] dark:border-[#252A33] text-xs font-mono space-y-1.5">
                <div className="flex items-center justify-between text-[#6b7280] dark:text-[#9CA3AF]">
                  <span>Runtime Environment:</span>
                  <span className="text-[#111] dark:text-white font-semibold">Android Edge / TFLite</span>
                </div>
                <div className="flex items-center justify-between text-[#6b7280] dark:text-[#9CA3AF]">
                  <span>External DB Connection:</span>
                  <span className="text-emerald-500 font-bold">None (100% Local)</span>
                </div>
                <div className="flex items-center justify-between text-[#6b7280] dark:text-[#9CA3AF]">
                  <span>Average Latency:</span>
                  <span className="text-emerald-500 font-semibold">{selectedSample.latency}</span>
                </div>
              </div>
            </div>

            {/* Right: Simulated Inference HUD Card */}
            <div className="lg:col-span-7 bg-[#0E1015] border border-[#252A33] rounded-2xl shadow-xl p-6 text-white font-mono flex flex-col justify-between">
              <div>
                {/* HUD Header */}
                <div className="flex items-center justify-between border-b border-[#252A33] pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                    <span className="text-xs text-white font-bold">CNN PREDICTION MONITOR</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    STATUS: READY
                  </span>
                </div>

                {/* Main Prediction Display */}
                <div className={`transition-opacity duration-200 ${isInferring ? 'opacity-40' : 'opacity-100'}`}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {selectedSample.name}
                    </h3>
                    <div className="text-sm text-emerald-400 font-bold">
                      {selectedSample.confidence}% MATCH
                    </div>
                  </div>

                  {/* Visual Confidence Bar */}
                  <div className="w-full bg-[#1A1E26] h-2.5 rounded-full overflow-hidden mb-5 border border-[#2E3542]">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-500"
                      style={{ width: `${selectedSample.confidence}%` }}
                    />
                  </div>

                  {/* Architecture Flow */}
                  <div className="grid grid-cols-3 gap-2 p-3 bg-[#13161D] rounded-xl border border-[#252A33] text-[11px] mb-5">
                    <div>
                      <span className="text-[#9CA3AF] block text-[10px]">LAYER 1</span>
                      <span className="text-sky-300 font-semibold">Conv2D + ReLU</span>
                    </div>
                    <div>
                      <span className="text-[#9CA3AF] block text-[10px]">LAYER 2</span>
                      <span className="text-amber-300 font-semibold">MaxPool + Drop</span>
                    </div>
                    <div>
                      <span className="text-[#9CA3AF] block text-[10px]">LAYER 3</span>
                      <span className="text-emerald-400 font-semibold">Softmax Dense</span>
                    </div>
                  </div>

                  {/* Herbal Characteristics & Medicinal Advisor */}
                  <div className="space-y-3 text-xs leading-relaxed">
                    <div>
                      <span className="text-emerald-400 font-bold block mb-1">
                        🌿 Karakteristik Morfologi Citra (Feature Vectors):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedSample.features.map((f, i) => (
                          <span key={i} className="px-2 py-1 bg-[#1A1E26] text-[#D1D5DB] rounded border border-[#2E3542] text-[11px]">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3.5 bg-emerald-950/20 border border-emerald-500/30 rounded-xl">
                      <span className="text-emerald-400 font-bold block mb-1">
                        💡 Rekomendasi Medis Herbal (HerbalAI Recommendation Engine):
                      </span>
                      <p className="text-[#D1D5DB] text-xs">
                        {selectedSample.remedy}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Latency & Execution */}
              <div className="pt-4 mt-4 border-t border-[#252A33] flex items-center justify-between text-[11px] text-[#9CA3AF]">
                <span>Inference Engine: TensorFlow Lite 2.14</span>
                <span className="text-emerald-400 font-bold">Execution Time: {selectedSample.latency}</span>
              </div>
            </div>
          </div>
        ) : (
          /* Face Recognition k-NN Mode */
          <div className="bg-[#0E1015] border border-[#252A33] rounded-2xl shadow-xl p-6 text-white font-mono">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs">
                  <span>k-Nearest Neighbors (k-NN) Engine</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Automated Attendance Face Verification
                </h3>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  Capstone project at Orbit Future Academy. Real-time 128-dimensional biometric facial encoding with Euclidean distance clustering.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#252A33]">
                    <span className="text-[#9CA3AF]">Classification Model:</span>
                    <span className="text-sky-300 font-semibold">k-NN (k=3, Euclidean L2)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#252A33]">
                    <span className="text-[#9CA3AF]">Recognition Accuracy:</span>
                    <span className="text-emerald-400 font-bold">99.4% Validated</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#252A33]">
                    <span className="text-[#9CA3AF]">Inference Latency:</span>
                    <span className="text-emerald-400 font-semibold">16ms per frame</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#252A33]">
                    <span className="text-[#9CA3AF]">False Accept Rate (FAR):</span>
                    <span className="text-emerald-400 font-semibold">&lt; 0.05%</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 bg-[#13161D] p-5 rounded-xl border border-[#252A33]">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="text-sky-300 font-bold">Simulated Webcam Feed Verification</span>
                  <span className="text-emerald-400 font-bold">PRESENSI TERCATAT</span>
                </div>

                <div className="p-4 bg-[#0A0C10] rounded-lg border border-[#22272E] space-y-2 text-xs">
                  <p className="text-emerald-400 font-bold">&gt; Face Recognized: Mochammad Gendry Afriansyah</p>
                  <p className="text-[#9CA3AF]">&gt; Student ID / NIK: UMJ-TIF-2022</p>
                  <p className="text-[#9CA3AF]">&gt; Timestamp: 08:00:14 WIB (Status: Ontime)</p>
                  <p className="text-[#9CA3AF]">&gt; Vector Cosine Distance: 0.042 (High Confidence)</p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#252A33] flex justify-between text-[11px] text-[#9CA3AF]">
                  <span>Dataset: Curation &amp; Augmentation by M. Gendry Afriansyah</span>
                  <span className="text-sky-400">Orbit Capstone 2024</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

