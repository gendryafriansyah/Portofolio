const fs = require('fs');
const path = require('path');

const publicProjectsDir = path.join(__dirname, '..', 'public', 'projects');
const publicCredsDir = path.join(__dirname, '..', 'public', 'credentials');

if (!fs.existsSync(publicProjectsDir)) fs.mkdirSync(publicProjectsDir, { recursive: true });
if (!fs.existsSync(publicCredsDir)) fs.mkdirSync(publicCredsDir, { recursive: true });

const herbalAiSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#061c14"/>
      <stop offset="50%" stop-color="#0a2a1e"/>
      <stop offset="100%" stop-color="#03120c"/>
    </linearGradient>
    <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" stroke-width="0.75" opacity="0.12"/>
    </pattern>
  </defs>
  
  <rect width="800" height="500" fill="url(#bg)"/>
  <rect width="800" height="500" fill="url(#grid)"/>

  <circle cx="280" cy="240" r="180" fill="#10b981" opacity="0.12"/>
  <circle cx="600" cy="260" r="140" fill="#065f46" opacity="0.2"/>

  <!-- Left Side: Android Mobile Frame with Scanner -->
  <g transform="translate(70, 45)">
    <!-- Phone Body -->
    <rect x="0" y="0" width="240" height="410" rx="32" fill="#0f1715" stroke="#1e3a30" stroke-width="3"/>
    <rect x="10" y="10" width="220" height="390" rx="24" fill="#07130e"/>
    
    <!-- Phone Notch / Camera -->
    <rect x="85" y="16" width="70" height="14" rx="7" fill="#1e2925"/>
    <circle cx="140" cy="23" r="3" fill="#10b981"/>

    <!-- App Header -->
    <text x="25" y="55" fill="#a7f3d0" font-family="monospace" font-size="12" font-weight="bold">HerbalAI • CNN Mobile</text>
    <rect x="165" y="44" width="55" height="16" rx="4" fill="#065f46"/>
    <text x="170" y="56" fill="#6ee7b7" font-family="monospace" font-size="9">OFFLINE</text>

    <!-- Camera Viewport with Leaf Scanning Target -->
    <rect x="20" y="70" width="200" height="200" rx="14" fill="#020a06" stroke="#059669" stroke-width="1.5"/>
    
    <!-- Stylized Leaf Vector -->
    <path d="M 120 100 C 170 120 190 170 170 210 C 150 250 120 260 120 260 C 120 260 90 250 70 210 C 50 170 70 120 120 100 Z" fill="url(#leafGrad)" opacity="0.85"/>
    <path d="M 120 110 L 120 250 M 120 150 L 155 130 M 120 180 L 160 165 M 120 150 L 85 130 M 120 180 L 80 165 M 120 210 L 150 200 M 120 210 L 90 200" stroke="#022c22" stroke-width="2.5" stroke-linecap="round"/>

    <!-- Scanning Reticle Corners -->
    <path d="M 35 90 L 35 80 L 45 80" stroke="#10b981" stroke-width="3" fill="none"/>
    <path d="M 195 90 L 195 80 L 185 80" stroke="#10b981" stroke-width="3" fill="none"/>
    <path d="M 35 240 L 35 250 L 45 250" stroke="#10b981" stroke-width="3" fill="none"/>
    <path d="M 195 240 L 195 250 L 185 250" stroke="#10b981" stroke-width="3" fill="none"/>
    
    <!-- Laser Scan Bar -->
    <line x1="25" y1="175" x2="215" y2="175" stroke="#34d399" stroke-width="2" stroke-dasharray="6,4" opacity="0.9"/>

    <!-- Prediction Card inside Mobile App -->
    <rect x="20" y="280" width="200" height="105" rx="12" fill="#092117" stroke="#10b981" stroke-width="1"/>
    <text x="32" y="300" fill="#34d399" font-family="sans-serif" font-size="12" font-weight="bold">Daun Sirih (Piper betle)</text>
    <text x="32" y="316" fill="#a7f3d0" font-family="monospace" font-size="10">Model Match: 98.6% (CNN)</text>
    
    <!-- Confidence Bar -->
    <rect x="32" y="324" width="176" height="5" rx="2.5" fill="#042f24"/>
    <rect x="32" y="324" width="173" height="5" rx="2.5" fill="#10b981"/>

    <!-- Health Recommendation Tags -->
    <rect x="32" y="338" width="80" height="18" rx="5" fill="#064e3b"/>
    <text x="38" y="351" fill="#a7f3d0" font-family="sans-serif" font-size="9">Antiseptik Alami</text>
    <rect x="116" y="338" width="65" height="18" rx="5" fill="#064e3b"/>
    <text x="122" y="351" fill="#a7f3d0" font-family="sans-serif" font-size="9">Batuk &amp; Radang</text>
    <text x="32" y="373" fill="#6ee7b7" font-family="sans-serif" font-size="9">✓ On-Device Local Processing</text>
  </g>

  <!-- Right Side: Deep Learning Architecture HUD -->
  <g transform="translate(360, 55)">
    <rect x="0" y="0" width="380" height="190" rx="16" fill="#071812" stroke="#1e3a30" stroke-width="1.5"/>
    <rect x="0" y="0" width="380" height="36" rx="16" fill="#0b241c"/>
    <text x="20" y="23" fill="#ecfdf5" font-family="sans-serif" font-size="13" font-weight="bold">Edge CNN Inference Pipeline</text>
    <circle cx="350" cy="18" r="4" fill="#10b981"/>

    <rect x="18" y="55" width="70" height="60" rx="8" fill="#0a2a1e" stroke="#10b981" stroke-width="1"/>
    <text x="26" y="77" fill="#6ee7b7" font-family="monospace" font-size="10" font-weight="bold">Leaf Img</text>
    <text x="24" y="93" fill="#9ca3af" font-family="monospace" font-size="9">224x224x3</text>
    <text x="28" y="105" fill="#34d399" font-family="monospace" font-size="8">OpenCV</text>

    <path d="M 94 85 L 108 85" stroke="#10b981" stroke-width="2"/>

    <rect x="112" y="55" width="80" height="60" rx="8" fill="#0a2a1e" stroke="#10b981" stroke-width="1"/>
    <text x="120" y="75" fill="#6ee7b7" font-family="monospace" font-size="10" font-weight="bold">Conv2D</text>
    <text x="120" y="89" fill="#9ca3af" font-family="monospace" font-size="9">ReLU • 64f</text>
    <text x="120" y="103" fill="#34d399" font-family="monospace" font-size="8">MaxPool</text>

    <path d="M 198 85 L 212 85" stroke="#10b981" stroke-width="2"/>

    <rect x="216" y="55" width="75" height="60" rx="8" fill="#0a2a1e" stroke="#10b981" stroke-width="1"/>
    <text x="226" y="75" fill="#6ee7b7" font-family="monospace" font-size="10" font-weight="bold">Dense</text>
    <text x="224" y="89" fill="#9ca3af" font-family="monospace" font-size="9">Dropout 0.3</text>
    <text x="226" y="103" fill="#34d399" font-family="monospace" font-size="8">Softmax</text>

    <path d="M 297 85 L 308 85" stroke="#10b981" stroke-width="2"/>

    <rect x="312" y="55" width="55" height="60" rx="8" fill="#10b981" opacity="0.9"/>
    <text x="317" y="80" fill="#022c22" font-family="monospace" font-size="10" font-weight="bold">Class</text>
    <text x="317" y="96" fill="#022c22" font-family="monospace" font-size="10" font-weight="bold">98.6%</text>

    <line x1="20" y1="130" x2="360" y2="130" stroke="#1e3a30" stroke-width="1"/>
    <text x="20" y="152" fill="#9ca3af" font-family="monospace" font-size="10">Quantization: <tspan fill="#34d399">TFLite FP16</tspan></text>
    <text x="20" y="172" fill="#9ca3af" font-family="monospace" font-size="10">Latency: <tspan fill="#34d399">12.4ms</tspan> • Ext. DB: <tspan fill="#34d399">None (100% Offline)</tspan></text>
    <text x="220" y="152" fill="#9ca3af" font-family="monospace" font-size="10">Dataset: <tspan fill="#34d399">Indonesian Herbs</tspan></text>
  </g>

  <!-- Right Side Bottom: Edge Architecture Highlights -->
  <g transform="translate(360, 265)">
    <rect x="0" y="0" width="380" height="185" rx="16" fill="#071812" stroke="#1e3a30" stroke-width="1.5"/>
    <rect x="0" y="0" width="380" height="34" rx="16" fill="#0b241c"/>
    <text x="20" y="22" fill="#ecfdf5" font-family="sans-serif" font-size="12" font-weight="bold">Key Software Engineering Specifications</text>
    
    <g transform="translate(20, 52)">
      <circle cx="8" cy="8" r="4" fill="#10b981"/>
      <text x="22" y="12" fill="#d1fae5" font-family="sans-serif" font-size="11" font-weight="600">On-Device Edge AI Deployment</text>
      <text x="22" y="27" fill="#9ca3af" font-family="sans-serif" font-size="10">Inference executed locally on mobile hardware; zero internet required.</text>
    </g>

    <g transform="translate(20, 95)">
      <circle cx="8" cy="8" r="4" fill="#10b981"/>
      <text x="22" y="12" fill="#d1fae5" font-family="sans-serif" font-size="11" font-weight="600">OpenCV Preprocessing Pipeline</text>
      <text x="22" y="27" fill="#9ca3af" font-family="sans-serif" font-size="10">Histogram equalization, background noise suppression &amp; leaf boundary crop.</text>
    </g>

    <g transform="translate(20, 138)">
      <circle cx="8" cy="8" r="4" fill="#10b981"/>
      <text x="22" y="12" fill="#d1fae5" font-family="sans-serif" font-size="11" font-weight="600">Integrated Herbal Remedy Knowledgebase</text>
      <text x="22" y="27" fill="#9ca3af" font-family="sans-serif" font-size="10">Instantly serves natural treatment guides for mild ailments &amp; symptoms.</text>
    </g>
  </g>
</svg>`;

const faceRecogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="frBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#08101e"/>
      <stop offset="50%" stop-color="#0d1b33"/>
      <stop offset="100%" stop-color="#050a14"/>
    </linearGradient>
    <pattern id="frGrid" width="35" height="35" patternUnits="userSpaceOnUse">
      <path d="M 35 0 L 0 0 0 35" fill="none" stroke="#38bdf8" stroke-width="0.7" opacity="0.12"/>
    </pattern>
  </defs>

  <rect width="800" height="500" fill="url(#frBg)"/>
  <rect width="800" height="500" fill="url(#frGrid)"/>

  <!-- Left Side: Live Webcam Feed UI with Detection Mesh -->
  <g transform="translate(50, 45)">
    <rect x="0" y="0" width="370" height="410" rx="18" fill="#0b1322" stroke="#1e293b" stroke-width="2"/>
    
    <!-- Feed Header -->
    <rect x="0" y="0" width="370" height="40" rx="18" fill="#0f172a"/>
    <circle cx="22" cy="20" r="4" fill="#ef4444"/>
    <text x="35" y="24" fill="#f8fafc" font-family="monospace" font-size="11" font-weight="bold">LIVE CAM 01 • AUTOMATED ATTENDANCE</text>
    <rect x="290" y="10" width="65" height="20" rx="5" fill="#0284c7"/>
    <text x="300" y="24" fill="#ffffff" font-family="monospace" font-size="10">ONLINE</text>

    <!-- Camera Canvas Area -->
    <rect x="15" y="55" width="340" height="270" rx="12" fill="#030712" stroke="#1e293b" stroke-width="1.5"/>
    
    <!-- Face Silhouette -->
    <path d="M 185 110 C 220 110 245 140 245 180 C 245 225 215 255 185 260 C 155 255 125 225 125 180 C 125 140 150 110 185 110 Z" fill="#1e293b" opacity="0.5"/>
    <path d="M 110 320 C 120 280 150 265 185 265 C 220 265 250 280 260 320 Z" fill="#1e293b" opacity="0.4"/>

    <!-- Face Landmark Mesh -->
    <circle cx="165" cy="170" r="3" fill="#38bdf8"/>
    <circle cx="205" cy="170" r="3" fill="#38bdf8"/>
    <circle cx="185" cy="195" r="3" fill="#38bdf8"/>
    <circle cx="175" cy="225" r="2.5" fill="#38bdf8"/>
    <circle cx="195" cy="225" r="2.5" fill="#38bdf8"/>
    <path d="M 165 170 L 185 195 L 205 170 M 185 195 L 175 225 L 195 225 L 185 195 M 165 170 L 175 225 M 205 170 L 195 225" stroke="#38bdf8" stroke-width="1.2" opacity="0.8" fill="none"/>

    <!-- Face Bounding Box with Corner Accents -->
    <rect x="115" y="95" width="140" height="180" rx="6" fill="none" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="8,6"/>
    <path d="M 115 115 L 115 95 L 135 95" stroke="#38bdf8" stroke-width="3" fill="none"/>
    <path d="M 235 95 L 255 95 L 255 115" stroke="#38bdf8" stroke-width="3" fill="none"/>
    <path d="M 115 255 L 115 275 L 135 275" stroke="#38bdf8" stroke-width="3" fill="none"/>
    <path d="M 235 275 L 255 275 L 255 255" stroke="#38bdf8" stroke-width="3" fill="none"/>

    <rect x="115" y="70" width="155" height="22" rx="4" fill="#0284c7"/>
    <text x="122" y="85" fill="#ffffff" font-family="monospace" font-size="10" font-weight="bold">MATCH: 99.4% (k-NN)</text>

    <!-- Scan Line -->
    <line x1="20" y1="185" x2="350" y2="185" stroke="#0ea5e9" stroke-width="2" opacity="0.85"/>

    <!-- Status Notification -->
    <rect x="15" y="338" width="340" height="55" rx="10" fill="#0369a1" opacity="0.2" stroke="#0284c7" stroke-width="1"/>
    <circle cx="35" cy="365" r="10" fill="#10b981"/>
    <path d="M 31 365 L 34 368 L 39 362" stroke="#ffffff" stroke-width="2" fill="none"/>
    <text x="55" y="360" fill="#f8fafc" font-family="sans-serif" font-size="11" font-weight="bold">Presensi Berhasil Divalidasi</text>
    <text x="55" y="376" fill="#93c5fd" font-family="monospace" font-size="9">ID: MGA-0024 • Timestamp: 08:14:22 WIB</text>
  </g>

  <!-- Right Side: Pipeline -->
  <g transform="translate(445, 45)">
    <rect x="0" y="0" width="305" height="195" rx="16" fill="#0b1322" stroke="#1e293b" stroke-width="1.5"/>
    <rect x="0" y="0" width="305" height="36" rx="16" fill="#0f172a"/>
    <text x="18" y="23" fill="#f8fafc" font-family="sans-serif" font-size="12" font-weight="bold">k-NN Classifier &amp; Feature Pipeline</text>

    <g transform="translate(18, 52)">
      <text x="0" y="10" fill="#94a3b8" font-family="monospace" font-size="10">Algorithm: <tspan fill="#38bdf8">k-Nearest Neighbors (k=3)</tspan></text>
      <text x="0" y="30" fill="#94a3b8" font-family="monospace" font-size="10">Distance Metric: <tspan fill="#38bdf8">Euclidean L2 Norm</tspan></text>
      <text x="0" y="50" fill="#94a3b8" font-family="monospace" font-size="10">Vector Embeddings: <tspan fill="#38bdf8">128-D Face Encodings</tspan></text>
      <text x="0" y="70" fill="#94a3b8" font-family="monospace" font-size="10">Inference Speed: <tspan fill="#10b981">16 ms / frame</tspan></text>
      <text x="0" y="90" fill="#94a3b8" font-family="monospace" font-size="10">FAR (False Accept): <tspan fill="#10b981">&lt; 0.05%</tspan></text>
      
      <line x1="0" y1="105" x2="270" y2="105" stroke="#1e293b" stroke-width="1"/>
      <text x="0" y="125" fill="#38bdf8" font-family="monospace" font-size="10">Role: Data Scientist &amp; ML Engineer</text>
    </g>

    <!-- Bottom Card: Real-time Attendance Roster Table -->
    <g transform="translate(0, 215)">
      <rect x="0" y="0" width="305" height="195" rx="16" fill="#0b1322" stroke="#1e293b" stroke-width="1.5"/>
      <rect x="0" y="0" width="305" height="34" rx="16" fill="#0f172a"/>
      <text x="18" y="22" fill="#f8fafc" font-family="sans-serif" font-size="12" font-weight="bold">Recent Verified Logs</text>

      <g transform="translate(18, 52)">
        <rect x="0" y="0" width="270" height="36" rx="6" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
        <text x="10" y="18" fill="#f8fafc" font-family="sans-serif" font-size="10" font-weight="600">M. Gendry Afriansyah</text>
        <text x="10" y="30" fill="#94a3b8" font-family="monospace" font-size="8">Status: HADIR (Ontime)</text>
        <rect x="200" y="8" width="60" height="18" rx="4" fill="#065f46"/>
        <text x="210" y="20" fill="#34d399" font-family="monospace" font-size="8">VERIFIED</text>
      </g>

      <g transform="translate(18, 96)">
        <rect x="0" y="0" width="270" height="36" rx="6" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
        <text x="10" y="18" fill="#f8fafc" font-family="sans-serif" font-size="10" font-weight="600">Ahmad Fauzi</text>
        <text x="10" y="30" fill="#94a3b8" font-family="monospace" font-size="8">Status: HADIR (Ontime)</text>
        <rect x="200" y="8" width="60" height="18" rx="4" fill="#065f46"/>
        <text x="210" y="20" fill="#34d399" font-family="monospace" font-size="8">VERIFIED</text>
      </g>

      <g transform="translate(18, 140)">
        <rect x="0" y="0" width="270" height="36" rx="6" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
        <text x="10" y="18" fill="#f8fafc" font-family="sans-serif" font-size="10" font-weight="600">Nabila Putri</text>
        <text x="10" y="30" fill="#94a3b8" font-family="monospace" font-size="8">Status: HADIR (Ontime)</text>
        <rect x="200" y="8" width="60" height="18" rx="4" fill="#065f46"/>
        <text x="210" y="20" fill="#34d399" font-family="monospace" font-size="8">VERIFIED</text>
      </g>
    </g>
  </g>
</svg>`;

const eduGameSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="egBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#180c2e"/>
      <stop offset="50%" stop-color="#241445"/>
      <stop offset="100%" stop-color="#0f071e"/>
    </linearGradient>
    <pattern id="egGrid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#a855f7" stroke-width="0.7" opacity="0.12"/>
    </pattern>
  </defs>

  <rect width="800" height="500" fill="url(#egBg)"/>
  <rect width="800" height="500" fill="url(#egGrid)"/>

  <!-- Left: Game Engine Viewport -->
  <g transform="translate(60, 45)">
    <rect x="0" y="0" width="400" height="410" rx="18" fill="#130924" stroke="#3b1d6b" stroke-width="2"/>
    
    <rect x="0" y="0" width="400" height="38" rx="18" fill="#1e1038"/>
    <circle cx="20" cy="19" r="5" fill="#ef4444"/>
    <circle cx="36" cy="19" r="5" fill="#f59e0b"/>
    <circle cx="52" cy="19" r="5" fill="#10b981"/>
    <text x="75" y="23" fill="#e9d5ff" font-family="monospace" font-size="11" font-weight="bold">Python EduGame • Computational Logic Quest</text>

    <rect x="16" y="52" width="368" height="260" rx="12" fill="#0a0414" stroke="#2e1065" stroke-width="1.5"/>
    
    <g opacity="0.3">
      <line x1="16" y1="110" x2="384" y2="110" stroke="#7e22ce" stroke-width="1"/>
      <line x1="16" y1="170" x2="384" y2="170" stroke="#7e22ce" stroke-width="1"/>
      <line x1="16" y1="230" x2="384" y2="230" stroke="#7e22ce" stroke-width="1"/>
      <line x1="90" y1="52" x2="90" y2="312" stroke="#7e22ce" stroke-width="1"/>
      <line x1="160" y1="52" x2="160" y2="312" stroke="#7e22ce" stroke-width="1"/>
      <line x1="230" y1="52" x2="230" y2="312" stroke="#7e22ce" stroke-width="1"/>
      <line x1="300" y1="52" x2="300" y2="312" stroke="#7e22ce" stroke-width="1"/>
    </g>

    <!-- Character & Collectible -->
    <rect x="105" y="125" width="38" height="38" rx="8" fill="#a855f7" stroke="#e9d5ff" stroke-width="2"/>
    <circle cx="118" cy="140" r="3" fill="#ffffff"/>
    <circle cx="132" cy="140" r="3" fill="#ffffff"/>
    <rect x="117" y="150" width="16" height="4" rx="2" fill="#3b0764"/>

    <polygon points="265,125 273,142 291,142 277,153 282,170 265,160 248,170 253,153 239,142 257,142" fill="#fbbf24" stroke="#f59e0b" stroke-width="1.5"/>

    <path d="M 143 144 L 245 144" stroke="#c084fc" stroke-width="3" stroke-dasharray="6,4"/>

    <rect x="16" y="325" width="368" height="72" rx="10" fill="#1a0c30" stroke="#4c1d95" stroke-width="1"/>
    <text x="28" y="347" fill="#c084fc" font-family="monospace" font-size="11">while not hero.at_goal():</text>
    <text x="48" y="365" fill="#38bdf8" font-family="monospace" font-size="11">hero.move_forward() <tspan fill="#64748b"># step algorithms</tspan></text>
    <text x="48" y="383" fill="#a855f7" font-family="monospace" font-size="11">hero.collect_gem() <tspan fill="#10b981"># SCORE +100</tspan></text>
  </g>

  <!-- Right: Community Impact -->
  <g transform="translate(485, 45)">
    <rect x="0" y="0" width="265" height="410" rx="18" fill="#130924" stroke="#3b1d6b" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="38" rx="18" fill="#1e1038"/>
    <text x="18" y="24" fill="#f8fafc" font-family="sans-serif" font-size="12" font-weight="bold">Pengabdian Masyarakat</text>

    <g transform="translate(18, 55)">
      <text x="0" y="15" fill="#c084fc" font-family="sans-serif" font-size="12" font-weight="bold">Key Objectives</text>
      
      <g transform="translate(0, 30)">
        <circle cx="6" cy="6" r="4" fill="#a855f7"/>
        <text x="18" y="10" fill="#e9d5ff" font-family="sans-serif" font-size="11" font-weight="600">Computational Thinking</text>
        <text x="18" y="25" fill="#94a3b8" font-family="sans-serif" font-size="10">Decomposition, patterns &amp; logic loops for early learners.</text>
      </g>

      <g transform="translate(0, 85)">
        <circle cx="6" cy="6" r="4" fill="#a855f7"/>
        <text x="18" y="10" fill="#e9d5ff" font-family="sans-serif" font-size="11" font-weight="600">Python OOP Architecture</text>
        <text x="18" y="25" fill="#94a3b8" font-family="sans-serif" font-size="10">Modular game entities, state manager &amp; input controller.</text>
      </g>

      <g transform="translate(0, 140)">
        <circle cx="6" cy="6" r="4" fill="#a855f7"/>
        <text x="18" y="10" fill="#e9d5ff" font-family="sans-serif" font-size="11" font-weight="600">Digital Literacy Advocacy</text>
        <text x="18" y="25" fill="#94a3b8" font-family="sans-serif" font-size="10">Empowering beginner youth to transition from gamers to creators.</text>
      </g>

      <line x1="0" y1="205" x2="230" y2="205" stroke="#3b1d6b" stroke-width="1"/>

      <text x="0" y="230" fill="#94a3b8" font-family="monospace" font-size="10">Tech: <tspan fill="#c084fc">Python 3 • Pygame</tspan></text>
      <text x="0" y="250" fill="#94a3b8" font-family="monospace" font-size="10">Role: <tspan fill="#c084fc">Project Lead &amp; Dev</tspan></text>
      <text x="0" y="270" fill="#94a3b8" font-family="monospace" font-size="10">Target: <tspan fill="#34d399">Beginner Students</tspan></text>
    </g>
  </g>
</svg>`;

const visionLabSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="vlBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a1329"/>
      <stop offset="50%" stop-color="#111f42"/>
      <stop offset="100%" stop-color="#070d1e"/>
    </linearGradient>
    <pattern id="vlGrid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#60a5fa" stroke-width="0.6" opacity="0.12"/>
    </pattern>
  </defs>

  <rect width="800" height="500" fill="url(#vlBg)"/>
  <rect width="800" height="500" fill="url(#vlGrid)"/>

  <g transform="translate(50, 45)">
    <rect x="0" y="0" width="700" height="410" rx="18" fill="#0e172a" stroke="#1e293b" stroke-width="2"/>
    
    <rect x="0" y="0" width="700" height="42" rx="18" fill="#0f172a"/>
    <circle cx="25" cy="21" r="5" fill="#ef4444"/>
    <circle cx="41" cy="21" r="5" fill="#f59e0b"/>
    <circle cx="57" cy="21" r="5" fill="#10b981"/>
    <text x="80" y="25" fill="#f8fafc" font-family="monospace" font-size="12" font-weight="bold">VisionLab Engine • Spatial Transformations &amp; Edge Feature Matrix</text>

    <!-- 4 Filter Viewports -->
    <g transform="translate(25, 60)">
      <rect x="0" y="0" width="150" height="150" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
      <rect x="0" y="0" width="150" height="24" rx="10" fill="#334155"/>
      <text x="10" y="16" fill="#f8fafc" font-family="monospace" font-size="10">1. Raw Input RGB</text>
      <circle cx="75" cy="87" r="40" fill="#3b82f6"/>
      <rect x="55" y="67" width="40" height="40" fill="#ef4444" opacity="0.8"/>
    </g>

    <g transform="translate(190, 60)">
      <rect x="0" y="0" width="150" height="150" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
      <rect x="0" y="0" width="150" height="24" rx="10" fill="#334155"/>
      <text x="10" y="16" fill="#f8fafc" font-family="monospace" font-size="10">2. Gaussian Blur</text>
      <circle cx="75" cy="87" r="40" fill="#94a3b8" opacity="0.6"/>
      <rect x="55" y="67" width="40" height="40" fill="#cbd5e1" opacity="0.6"/>
    </g>

    <g transform="translate(355, 60)">
      <rect x="0" y="0" width="150" height="150" rx="10" fill="#020617" stroke="#3b82f6" stroke-width="1.5"/>
      <rect x="0" y="0" width="150" height="24" rx="10" fill="#1e3a8a"/>
      <text x="10" y="16" fill="#93c5fd" font-family="monospace" font-size="10">3. Canny Edge</text>
      <circle cx="75" cy="87" r="40" fill="none" stroke="#60a5fa" stroke-width="2"/>
      <rect x="55" y="67" width="40" height="40" fill="none" stroke="#93c5fd" stroke-width="2"/>
    </g>

    <g transform="translate(520, 60)">
      <rect x="0" y="0" width="150" height="150" rx="10" fill="#020617" stroke="#10b981" stroke-width="1.5"/>
      <rect x="0" y="0" width="150" height="24" rx="10" fill="#065f46"/>
      <text x="10" y="16" fill="#a7f3d0" font-family="monospace" font-size="10">4. Contours &amp; Hull</text>
      <circle cx="75" cy="87" r="40" fill="none" stroke="#10b981" stroke-width="2"/>
      <rect x="55" y="67" width="40" height="40" fill="none" stroke="#34d399" stroke-width="2"/>
      <circle cx="75" cy="87" r="3" fill="#ef4444"/>
    </g>

    <g transform="translate(25, 235)">
      <rect x="0" y="0" width="645" height="150" rx="12" fill="#020617" stroke="#1e293b" stroke-width="1.5"/>
      <g transform="translate(20, 25)">
        <text x="0" y="12" fill="#60a5fa" font-family="monospace" font-size="12" font-weight="bold">&gt; cv2.morphologyEx(src, cv2.MORPH_OPEN, kernel_5x5)</text>
        <text x="0" y="36" fill="#94a3b8" font-family="monospace" font-size="11">Contours Detected: <tspan fill="#34d399">14 Objects</tspan> • Min Area: 120px • Aspect Ratio: 1.02</text>
        <text x="0" y="58" fill="#94a3b8" font-family="monospace" font-size="11">Processing Throughput: <tspan fill="#38bdf8">142 FPS (Multi-threaded OpenCV)</tspan></text>
        <text x="0" y="80" fill="#94a3b8" font-family="monospace" font-size="11">Spatial Kernel: Gaussian 5x5 (σ=1.4) • Thresholds: Lower 50, Upper 150</text>
        <text x="0" y="104" fill="#a855f7" font-family="monospace" font-size="11">Target: Automated Quality Control &amp; Industrial Computer Vision</text>
      </g>
    </g>
  </g>
</svg>`;

const orbitMsibSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 620" width="100%" height="100%">
  <defs>
    <linearGradient id="certBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a1329"/>
      <stop offset="50%" stop-color="#142142"/>
      <stop offset="100%" stop-color="#070c1a"/>
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
  </defs>

  <rect width="900" height="620" fill="url(#certBg)"/>
  
  <rect x="25" y="25" width="850" height="570" rx="12" fill="none" stroke="url(#gold)" stroke-width="3"/>
  <rect x="35" y="35" width="830" height="550" rx="8" fill="#0d1b33" stroke="#1e3a5f" stroke-width="1.5"/>

  <path d="M 45 65 L 45 45 L 65 45" stroke="url(#gold)" stroke-width="3" fill="none"/>
  <path d="M 855 65 L 855 45 L 835 45" stroke="url(#gold)" stroke-width="3" fill="none"/>
  <path d="M 45 555 L 45 575 L 65 575" stroke="url(#gold)" stroke-width="3" fill="none"/>
  <path d="M 855 555 L 855 575 L 835 575" stroke="url(#gold)" stroke-width="3" fill="none"/>

  <text x="450" y="110" fill="#93c5fd" font-family="sans-serif" font-size="14" font-weight="bold" letter-spacing="4" text-anchor="middle">KEMENTERIAN PENDIDIKAN, KEBUDAYAAN, RISET, DAN TEKNOLOGI</text>
  <text x="450" y="135" fill="#f8fafc" font-family="serif" font-size="16" letter-spacing="2" text-anchor="middle">PROGRAM MAGANG &amp; STUDI INDEPENDEN BERSERTIFIKAT (MSIB)</text>
  
  <text x="450" y="195" fill="url(#gold)" font-family="serif" font-size="34" font-weight="bold" letter-spacing="2" text-anchor="middle">SERTIFIKAT KELULUSAN</text>
  <text x="450" y="225" fill="#94a3b8" font-family="sans-serif" font-size="13" text-anchor="middle">Nomor Verifikasi Resmi: MSIB-OFA/2024/AI4J-0824</text>

  <text x="450" y="275" fill="#cbd5e1" font-family="sans-serif" font-size="14" text-anchor="middle">Diberikan secara terhormat kepada:</text>
  <text x="450" y="320" fill="#ffffff" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">Mochammad Gendry Afriansyah</text>
  <line x1="280" y1="335" x2="620" y2="335" stroke="url(#gold)" stroke-width="2"/>

  <text x="450" y="370" fill="#cbd5e1" font-family="sans-serif" font-size="14" text-anchor="middle">Atas keberhasilan menyelesaikan program pelatihan intensif bersertifikat:</text>
  <text x="450" y="405" fill="#38bdf8" font-family="sans-serif" font-size="20" font-weight="bold" text-anchor="middle">Artificial Intelligence for Jobs (Orbit Future Academy)</text>
  
  <text x="450" y="440" fill="#94a3b8" font-family="sans-serif" font-size="12" text-anchor="middle">Periode: September 2024 – Desember 2024 • Kompetensi: AI Project Cycle, Machine Learning, Computer Vision</text>

  <g transform="translate(450, 510)">
    <circle cx="0" cy="0" r="42" fill="url(#gold)" opacity="0.9"/>
    <circle cx="0" cy="0" r="36" fill="#0d1b33"/>
    <text x="0" y="-8" fill="url(#gold)" font-family="sans-serif" font-size="8" font-weight="bold" text-anchor="middle">MSIB INDONESIA</text>
    <text x="0" y="6" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">VERIFIED</text>
    <text x="0" y="18" fill="url(#gold)" font-family="sans-serif" font-size="8" text-anchor="middle">2024</text>
  </g>

  <g transform="translate(150, 490)">
    <line x1="0" y1="35" x2="180" y2="35" stroke="#475569" stroke-width="1.5"/>
    <text x="90" y="52" fill="#cbd5e1" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Orbit Future Academy</text>
    <text x="90" y="66" fill="#64748b" font-family="sans-serif" font-size="10" text-anchor="middle">Program Director AI for Jobs</text>
  </g>

  <g transform="translate(570, 490)">
    <line x1="0" y1="35" x2="180" y2="35" stroke="#475569" stroke-width="1.5"/>
    <text x="90" y="52" fill="#cbd5e1" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Kampus Merdeka Mandiri</text>
    <text x="90" y="66" fill="#64748b" font-family="sans-serif" font-size="10" text-anchor="middle">Kemendikbudristek RI</text>
  </g>
</svg>`;

const umjCertSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 620" width="100%" height="100%">
  <defs>
    <linearGradient id="umjBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0c172e"/>
      <stop offset="50%" stop-color="#16294e"/>
      <stop offset="100%" stop-color="#091224"/>
    </linearGradient>
  </defs>

  <rect width="900" height="620" fill="url(#umjBg)"/>
  <rect x="25" y="25" width="850" height="570" rx="12" fill="none" stroke="#2563eb" stroke-width="3"/>
  <rect x="35" y="35" width="830" height="550" rx="8" fill="#0b1730" stroke="#1e3a66" stroke-width="1.5"/>

  <text x="450" y="105" fill="#60a5fa" font-family="sans-serif" font-size="16" font-weight="bold" letter-spacing="3" text-anchor="middle">UNIVERSITAS MUHAMMADIYAH JAKARTA</text>
  <text x="450" y="130" fill="#94a3b8" font-family="sans-serif" font-size="13" letter-spacing="1" text-anchor="middle">FAKULTAS TEKNIK • PROGRAM STUDI TEKNIK INFORMATIKA</text>
  
  <text x="450" y="195" fill="#ffffff" font-family="serif" font-size="30" font-weight="bold" text-anchor="middle">TRANSKRIP &amp; PENCAPAIAN AKADEMIK</text>
  <text x="450" y="225" fill="#38bdf8" font-family="monospace" font-size="13" text-anchor="middle">S1 Teknik Informatika • Indeks Prestasi Kumulatif (IPK): 3.51 / 4.00</text>

  <text x="450" y="280" fill="#cbd5e1" font-family="sans-serif" font-size="14" text-anchor="middle">Diberikan kepada mahasiswa:</text>
  <text x="450" y="325" fill="#ffffff" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">Mochammad Gendry Afriansyah</text>
  <line x1="280" y1="340" x2="620" y2="340" stroke="#38bdf8" stroke-width="2"/>

  <text x="450" y="380" fill="#e2e8f0" font-family="sans-serif" font-size="14" text-anchor="middle">Fokus Keilmuan: Artificial Intelligence, Machine Learning &amp; Software Engineering</text>
  <text x="450" y="415" fill="#94a3b8" font-family="sans-serif" font-size="12" text-anchor="middle">Implementasi Bahasa &amp; Framework: Python, Java, C/C++, TensorFlow/Keras, OpenCV</text>
  <text x="450" y="445" fill="#60a5fa" font-family="sans-serif" font-size="12" text-anchor="middle">Periode Studi: September 2022 – Agustus 2026 (Predikat Sangat Memuaskan)</text>

  <g transform="translate(450, 515)">
    <circle cx="0" cy="0" r="40" fill="#1d4ed8"/>
    <circle cx="0" cy="0" r="34" fill="#0b1730"/>
    <text x="0" y="-5" fill="#60a5fa" font-family="sans-serif" font-size="8" font-weight="bold" text-anchor="middle">UMJ INFORMATIKA</text>
    <text x="0" y="10" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">IPK 3.51</text>
  </g>
</svg>`;

const aiProjectCycleSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 620" width="100%" height="100%">
  <defs>
    <linearGradient id="aiBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a1820"/>
      <stop offset="50%" stop-color="#0e2a38"/>
      <stop offset="100%" stop-color="#071218"/>
    </linearGradient>
  </defs>

  <rect width="900" height="620" fill="url(#aiBg)"/>
  <rect x="25" y="25" width="850" height="570" rx="12" fill="none" stroke="#0ea5e9" stroke-width="3"/>
  <rect x="35" y="35" width="830" height="550" rx="8" fill="#0a1a24" stroke="#0284c7" stroke-width="1.5"/>

  <text x="450" y="110" fill="#38bdf8" font-family="sans-serif" font-size="14" font-weight="bold" letter-spacing="4" text-anchor="middle">ORBIT FUTURE ACADEMY • AI CURRICULUM</text>
  <text x="450" y="135" fill="#f8fafc" font-family="serif" font-size="16" letter-spacing="2" text-anchor="middle">CERTIFICATE OF COMPETENCY IN ARTIFICIAL INTELLIGENCE</text>
  
  <text x="450" y="195" fill="#38bdf8" font-family="serif" font-size="32" font-weight="bold" letter-spacing="2" text-anchor="middle">AI PROJECT CYCLE MASTERY</text>
  <text x="450" y="225" fill="#94a3b8" font-family="sans-serif" font-size="13" text-anchor="middle">Problem Scoping • Data Acquisition • Data Exploration • Modelling • Evaluation</text>

  <text x="450" y="275" fill="#cbd5e1" font-family="sans-serif" font-size="14" text-anchor="middle">Proudly presented to:</text>
  <text x="450" y="320" fill="#ffffff" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">Mochammad Gendry Afriansyah</text>
  <line x1="280" y1="335" x2="620" y2="335" stroke="#0ea5e9" stroke-width="2"/>

  <text x="450" y="375" fill="#cbd5e1" font-family="sans-serif" font-size="14" text-anchor="middle">For demonstrating exemplary proficiency in full-lifecycle AI engineering:</text>
  <text x="450" y="405" fill="#67e8f9" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle">Computer Vision, Convolutional Neural Networks &amp; k-NN Modeling</text>
  
  <text x="450" y="440" fill="#94a3b8" font-family="sans-serif" font-size="12" text-anchor="middle">Frameworks: Python, TensorFlow, OpenCV, Scikit-Learn • Year 2024</text>

  <g transform="translate(450, 510)">
    <circle cx="0" cy="0" r="42" fill="#0ea5e9" opacity="0.9"/>
    <circle cx="0" cy="0" r="36" fill="#0a1a24"/>
    <text x="0" y="-8" fill="#38bdf8" font-family="sans-serif" font-size="8" font-weight="bold" text-anchor="middle">ORBIT ACADEMY</text>
    <text x="0" y="6" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">AI CERTIFIED</text>
    <text x="0" y="18" fill="#38bdf8" font-family="sans-serif" font-size="8" text-anchor="middle">2024</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(publicProjectsDir, 'herbalai.svg'), herbalAiSvg);
fs.writeFileSync(path.join(publicProjectsDir, 'face-recognition.svg'), faceRecogSvg);
fs.writeFileSync(path.join(publicProjectsDir, 'edu-game.svg'), eduGameSvg);
fs.writeFileSync(path.join(publicProjectsDir, 'visionlab.svg'), visionLabSvg);
fs.writeFileSync(path.join(publicCredsDir, 'orbit-msib.svg'), orbitMsibSvg);
fs.writeFileSync(path.join(publicCredsDir, 'orbit-ai-cycle.svg'), aiProjectCycleSvg);
fs.writeFileSync(path.join(publicCredsDir, 'umj-degree.svg'), umjCertSvg);

console.log('Successfully generated all SVG visual assets!');
