import pptxgen from 'pptxgenjs';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Initialize Presentation
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_16x9'; // 10.0 x 5.625 inches
pptx.title = 'Mochammad Gendry Afriansyah - AI & Software Engineer Portfolio';
pptx.author = 'Mochammad Gendry Afriansyah';
pptx.company = 'Universitas Muhammadiyah Jakarta';
pptx.subject = 'Artificial Intelligence, Machine Learning & Software Engineering Portfolio';

// Color Palette Definition (Executive Dark Cyber / Tech Theme)
const COLORS = {
  bg: '0B0F17',          // Deep Midnight Slate
  cardBg: '131926',      // Primary Card Container
  cardBgAlt: '172033',   // Elevated Card Container
  border: '1F293D',      // Subtle Card Border
  borderHighlight: '2D3E5F',
  emerald: '10B981',     // Vibrant ML Green
  emeraldLight: '34D399',
  emeraldDark: '064E3B',
  cyan: '0284C7',        // Computer Vision Blue
  cyanLight: '38BDF8',
  amber: 'F59E0B',       // Milestone Gold
  purple: '8B5CF6',      // Community / OOP Purple
  textPrimary: 'F8FAFC', // Crisp Off-White
  textSecondary: '94A3B8', // Muted Slate
  textMuted: '64748B',   // Caption Slate
};

// Helper to add common slide background and top/bottom chrome
function applySlideTemplate(slide, slideIndex, sectionName) {
  // Background
  slide.background = { color: COLORS.bg };

  // Top Section Pill / Breadcrumb
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.8, y: 0.35, w: 2.8, h: 0.28,
    fill: { color: '0F172A' },
    line: { color: COLORS.border, width: 1 },
    rectRadius: 0.08
  });

  slide.addText(sectionName, {
    x: 0.8, y: 0.35, w: 2.8, h: 0.28,
    fontSize: 8.5, fontFace: 'Consolas',
    color: COLORS.emeraldLight, bold: true,
    align: 'center', valign: 'middle'
  });

  // Footer Divider Line
  slide.addShape(pptx.ShapeType.line, {
    x: 0.8, y: 5.2, w: 8.4, h: 0,
    line: { color: COLORS.border, width: 1 }
  });

  // Footer Info Left
  slide.addText('Mochammad Gendry Afriansyah  |  AI & Software Engineer Portfolio', {
    x: 0.8, y: 5.25, w: 6.0, h: 0.3,
    fontSize: 8, fontFace: 'Calibri',
    color: COLORS.textMuted, valign: 'middle'
  });

  // Footer Info Right (Slide Number)
  slide.addText(`${slideIndex} / 9`, {
    x: 8.0, y: 5.25, w: 1.2, h: 0.3,
    fontSize: 8.5, fontFace: 'Consolas',
    color: COLORS.emeraldLight, align: 'right', valign: 'middle', bold: true
  });
}

// Helper to create title area on slides
function addSlideHeader(slide, title, subtitle) {
  slide.addText(title, {
    x: 0.8, y: 0.72, w: 8.4, h: 0.42,
    fontSize: 18, fontFace: 'Segoe UI',
    color: COLORS.textPrimary, bold: true, valign: 'middle'
  });

  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.8, y: 1.14, w: 8.4, h: 0.26,
      fontSize: 9.5, fontFace: 'Calibri',
      color: COLORS.textSecondary, valign: 'top'
    });
  }
}

console.log('Script initialized. Generating slides...');

/* ==========================================================
   SLIDE 1: COVER SLIDE
   ========================================================== */
{
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  // Left Section Container Card
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.8, y: 0.8, w: 5.7, h: 4.1,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.border, width: 1 },
    rectRadius: 0.15
  });

  // Category Pill Tag
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 1.15, y: 1.1, w: 2.5, h: 0.3,
    fill: { color: COLORS.emeraldDark },
    line: { color: COLORS.emerald, width: 1 },
    rectRadius: 0.08
  });
  slide.addText('AI & MACHINE LEARNING ENGINEER', {
    x: 1.15, y: 1.1, w: 2.5, h: 0.3,
    fontSize: 8.5, fontFace: 'Consolas',
    color: COLORS.emeraldLight, bold: true, align: 'center', valign: 'middle'
  });

  // Main Candidate Name
  slide.addText([
    { text: 'Mochammad Gendry\n', options: { fontSize: 26, bold: true, color: COLORS.textPrimary } },
    { text: 'Afriansyah', options: { fontSize: 26, bold: true, color: COLORS.emeraldLight } }
  ], {
    x: 1.15, y: 1.48, w: 5.0, h: 1.1,
    fontFace: 'Segoe UI', valign: 'top'
  });

  // Subtitle
  slide.addText('Computer Vision • Edge AI On-Device • Software Architecture', {
    x: 1.15, y: 2.58, w: 5.0, h: 0.3,
    fontSize: 11, fontFace: 'Segoe UI', color: COLORS.cyanLight, bold: true
  });

  // Bio Description
  slide.addText(
    'Fresh graduate Teknik Informatika Universitas Muhammadiyah Jakarta yang berfokus pada pengembangan model cerdas, pemrosesan citra komputer (OpenCV), serta deployment inferensi lokal pada perangkat Android secara efisien, aman, dan 100% offline.',
    {
      x: 1.15, y: 2.92, w: 5.0, h: 0.95,
      fontSize: 9.5, fontFace: 'Calibri', color: COLORS.textSecondary,
      lineSpacingMultiple: 1.15
    }
  );

  // Bottom Metadata Badges
  const badges = [
    { text: '🎓 UMJ Informatika (IPK 3.51)', color: COLORS.cyanLight },
    { text: '⚡ MSIB Orbit Future Academy', color: COLORS.emeraldLight },
    { text: '🌐 github.com/gendryafriansyah', color: COLORS.amber }
  ];

  badges.forEach((b, idx) => {
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 1.15 + (idx * 1.68), y: 4.15, w: 1.6, h: 0.42,
      fill: { color: '0A0E17' },
      line: { color: COLORS.border, width: 1 },
      rectRadius: 0.08
    });
    slide.addText(b.text, {
      x: 1.15 + (idx * 1.68), y: 4.15, w: 1.6, h: 0.42,
      fontSize: 7.5, fontFace: 'Consolas', color: b.color,
      align: 'center', valign: 'middle', bold: true
    });
  });

  // Right Side Profile Card
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 6.8, y: 0.8, w: 2.4, h: 4.1,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.border, width: 1 },
    rectRadius: 0.15
  });

  // Photo Frame
  const photoPath = path.join(rootDir, 'public', 'profile_clean.png');
  if (fs.existsSync(photoPath)) {
    slide.addImage({
      path: photoPath,
      x: 7.05, y: 1.05, w: 1.9, h: 2.3,
      rectRadius: 0.1
    });
  }

  // Identity Mini Details
  slide.addText('Gendry Afriansyah', {
    x: 6.9, y: 3.45, w: 2.2, h: 0.28,
    fontSize: 12, fontFace: 'Segoe UI', color: COLORS.textPrimary,
    bold: true, align: 'center'
  });

  slide.addText('gendryap@gmail.com\n+62 851-1167-1109', {
    x: 6.9, y: 3.72, w: 2.2, h: 0.42,
    fontSize: 8.5, fontFace: 'Consolas', color: COLORS.textSecondary,
    align: 'center'
  });

  // Status Indicator
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 7.15, y: 4.25, w: 1.7, h: 0.32,
    fill: { color: '062419' },
    line: { color: COLORS.emerald, width: 1 },
    rectRadius: 0.08
  });
  slide.addText('● Open to Opportunities', {
    x: 7.15, y: 4.25, w: 1.7, h: 0.32,
    fontSize: 7.5, fontFace: 'Consolas', color: COLORS.emeraldLight,
    bold: true, align: 'center', valign: 'middle'
  });
}

/* ==========================================================
   SLIDE 2: EXECUTIVE SUMMARY & PROFILE
   ========================================================== */
{
  const slide = pptx.addSlide();
  applySlideTemplate(slide, 2, '02 / EXECUTIVE SUMMARY');
  addSlideHeader(
    slide,
    'Bridging Machine Learning Research with Practical Software Engineering',
    'Fokus keilmuan, rekam jejak akademik, dan prinsip pengembangan solusi cerdas'
  );

  // Left Narrative Card
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.8, y: 1.5, w: 5.2, h: 3.45,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.border, width: 1 },
    rectRadius: 0.12
  });

  slide.addText('PROFESSIONAL STATEMENT & PHILOSOPHY', {
    x: 1.1, y: 1.75, w: 4.6, h: 0.25,
    fontSize: 9, fontFace: 'Consolas', color: COLORS.emeraldLight, bold: true
  });

  slide.addText([
    {
      text: 'Fresh graduate Teknik Informatika Universitas Muhammadiyah Jakarta dengan konsentrasi pada Artificial Intelligence dan Software Engineering. Berpengalaman dalam merancang, melatih, dan mengevaluasi model Machine Learning serta Computer Vision menggunakan Python, TensorFlow, dan OpenCV.\n\n',
      options: { fontSize: 9.5, color: COLORS.textPrimary }
    },
    {
      text: 'Bukan sekadar melatih model di cloud, keahlian utama berakar pada integrasi dan optimasi model untuk on-device deployment—memungkinkan inferensi lokal yang cepat, mandiri, dan aman tanpa memerlukan ketergantungan koneksi server eksternal.\n\n',
      options: { fontSize: 9.5, color: COLORS.textSecondary }
    },
    {
      text: 'Terbiasa bekerja secara kolaboratif lintas disiplin mulai dari tahap formulasi masalah (problem scoping), akuisisi & kurasi dataset, hingga menghasilkan perangkat lunak yang scalable dan berorientasi pengguna.',
      options: { fontSize: 9.5, color: COLORS.textSecondary }
    }
  ], {
    x: 1.1, y: 2.05, w: 4.6, h: 2.7,
    fontFace: 'Calibri', lineSpacingMultiple: 1.12
  });

  // Right Metrics Cards (4 key highlights)
  const metrics = [
    {
      title: '3.51 / 4.00',
      label: 'IPK AKADEMIK SARJANA',
      desc: 'Universitas Muhammadiyah Jakarta (Predikat Sangat Memuaskan)',
      color: COLORS.amber
    },
    {
      title: '98.6% & 99.4%',
      label: 'AKURASI MODEL TERUJI',
      desc: 'CNN Herbal Classifier & k-NN Facial Biometrics',
      color: COLORS.emeraldLight
    },
    {
      title: '12.4 ms',
      label: 'EDGE INFERENCE SPEED',
      desc: 'Kuantisasi TFLite FP16 pada CPU mobile Android offline',
      color: COLORS.cyanLight
    },
    {
      title: 'MSIB Certified',
      label: 'KOMPETENSI RESMI NASIONAL',
      desc: 'AI for Jobs — Orbit Future Academy & Kemendikbudristek',
      color: COLORS.purple
    }
  ];

  metrics.forEach((m, idx) => {
    const row = Math.floor(idx / 2);
    const col = idx % 2;
    const xPos = 6.2 + (col * 1.55);
    const yPos = 1.5 + (row * 1.75);

    slide.addShape(pptx.ShapeType.roundRect, {
      x: xPos, y: yPos, w: 1.45, h: 1.6,
      fill: { color: COLORS.cardBg },
      line: { color: COLORS.border, width: 1 },
      rectRadius: 0.1
    });

    slide.addText(m.title, {
      x: xPos + 0.1, y: yPos + 0.15, w: 1.25, h: 0.35,
      fontSize: 14, fontFace: 'Segoe UI', color: m.color,
      bold: true, align: 'center', valign: 'middle'
    });

    slide.addText(m.label, {
      x: xPos + 0.08, y: yPos + 0.52, w: 1.29, h: 0.25,
      fontSize: 6.5, fontFace: 'Consolas', color: COLORS.textMuted,
      bold: true, align: 'center', valign: 'middle'
    });

    slide.addText(m.desc, {
      x: xPos + 0.1, y: yPos + 0.8, w: 1.25, h: 0.65,
      fontSize: 7.5, fontFace: 'Calibri', color: COLORS.textSecondary,
      align: 'center', valign: 'top'
    });
  });
}

/* ==========================================================
   SLIDE 3: FEATURED PROJECT #1 — HERBALAI (ANDROID & CNN)
   ========================================================== */
{
  const slide = pptx.addSlide();
  applySlideTemplate(slide, 3, '03 / FLAGSHIP PROJECT • EDGE AI');
  addSlideHeader(
    slide,
    'HerbalAI — Indonesian Herbal Leaf Classifier & Health Advisor',
    'Aplikasi Android mandiri untuk klasifikasi daun tanaman obat Indonesia berbasis CNN on-device offline'
  );

  // Left Details Card
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.8, y: 1.5, w: 4.8, h: 3.45,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.border, width: 1 },
    rectRadius: 0.12
  });

  slide.addText('ARSITEKTUR & IMPLEMENTASI REKAYASA', {
    x: 1.05, y: 1.7, w: 4.3, h: 0.22,
    fontSize: 8.5, fontFace: 'Consolas', color: COLORS.emeraldLight, bold: true
  });

  const herbalBullets = [
    {
      title: 'Model Convolutional Neural Network (CNN):',
      desc: 'Melatih arsitektur deep learning menggunakan TensorFlow dan OpenCV untuk mengekstrak fitur morfologi unik daun herbal nusantara (Sirih, Kelor, Binahong, Jahe).'
    },
    {
      title: 'On-Device Edge Deployment (Offline Mode):',
      desc: 'Model dikonversi ke format TensorFlow Lite FP16 (4.2 MB) untuk dieksekusi langsung pada CPU perangkat Android tanpa ketergantungan koneksi internet dan cloud latency.'
    },
    {
      title: 'Zero External Database Dependency:',
      desc: 'Penyimpanan katalog rekomendasi kesehatan dan inferensi diproses 100% lokal di perangkat, memastikan keamanan privasi dan aksesibilitas di area pedesaan / pelosok.'
    },
    {
      title: 'Intelligent Symptom Recommendation Engine:',
      desc: 'Menghubungkan hasil prediksi daun dengan khasiat medis terverifikasi untuk penanganan gejala penyakit ringan (antiseptik, radang, daya tahan tubuh).'
    }
  ];

  let yOffset = 1.95;
  herbalBullets.forEach((item) => {
    slide.addText([
      { text: `● ${item.title} `, options: { bold: true, color: COLORS.textPrimary } },
      { text: item.desc, options: { color: COLORS.textSecondary } }
    ], {
      x: 1.05, y: yOffset, w: 4.3, h: 0.58,
      fontSize: 8.5, fontFace: 'Calibri', lineSpacingMultiple: 1.1
    });
    yOffset += 0.62;
  });

  // Tech Pills at bottom of left card
  const herbalTech = ['CNN', 'TensorFlow', 'OpenCV', 'Android Java', 'TFLite FP16', 'Offline'];
  herbalTech.forEach((tech, idx) => {
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 1.05 + (idx * 0.72), y: 4.5, w: 0.68, h: 0.26,
      fill: { color: '0B0F17' },
      line: { color: COLORS.border, width: 1 },
      rectRadius: 0.06
    });
    slide.addText(tech, {
      x: 1.05 + (idx * 0.72), y: 4.5, w: 0.68, h: 0.26,
      fontSize: 7, fontFace: 'Consolas', color: COLORS.emeraldLight,
      align: 'center', valign: 'middle', bold: true
    });
  });

  // Right Visual Card
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 5.8, y: 1.5, w: 3.4, h: 3.45,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.border, width: 1 },
    rectRadius: 0.12
  });

  const herbalImgPath = path.join(rootDir, 'public', 'projects', 'herbalai.png');
  if (fs.existsSync(herbalImgPath)) {
    slide.addImage({
      path: herbalImgPath,
      x: 6.0, y: 1.7, w: 3.0, h: 1.88,
      rectRadius: 0.08
    });
  }

  // 3 Mini Benchmarks inside Right Card
  const herbalStats = [
    { label: 'ACCURACY', val: '98.6%', color: COLORS.emeraldLight },
    { label: 'LATENCY', val: '12.4 ms', color: COLORS.cyanLight },
    { label: 'NETWORK', val: 'OFFLINE', color: COLORS.amber }
  ];

  herbalStats.forEach((s, idx) => {
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 6.0 + (idx * 1.03), y: 3.75, w: 0.94, h: 0.95,
      fill: { color: '0E1420' },
      line: { color: COLORS.border, width: 1 },
      rectRadius: 0.08
    });
    slide.addText(s.val, {
      x: 6.0 + (idx * 1.03), y: 3.85, w: 0.94, h: 0.35,
      fontSize: 12, fontFace: 'Segoe UI', color: s.color,
      bold: true, align: 'center', valign: 'middle'
    });
    slide.addText(s.label, {
      x: 6.0 + (idx * 1.03), y: 4.25, w: 0.94, h: 0.3,
      fontSize: 7, fontFace: 'Consolas', color: COLORS.textMuted,
      bold: true, align: 'center', valign: 'top'
    });
  });
}

/* ==========================================================
   SLIDE 4: FEATURED PROJECT #2 — FACE RECOGNITION ATTENDANCE
   ========================================================== */
{
  const slide = pptx.addSlide();
  applySlideTemplate(slide, 4, '04 / CAPSTONE PROJECT • COMPUTER VISION');
  addSlideHeader(
    slide,
    'Automated Attendance via Biometric Face Recognition',
    'Capstone Project di Orbit Future Academy — Sistem presensi otomatis berbasis pengenalan wajah'
  );

  // Left Details Card
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.8, y: 1.5, w: 4.8, h: 3.45,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.border, width: 1 },
    rectRadius: 0.12
  });

  slide.addText('PERAN: DATA SCIENTIST & ML ENGINEER', {
    x: 1.05, y: 1.7, w: 4.3, h: 0.22,
    fontSize: 8.5, fontFace: 'Consolas', color: COLORS.cyanLight, bold: true
  });

  const faceBullets = [
    {
      title: 'Akuisisi Data & Kurasi Dataset Biometrik:',
      desc: 'Mengelola pengumpulan dataset citra wajah dengan berbagai variasi pose, ekspresi, dan pencahayaan untuk memastikan generalisasi model yang robust.'
    },
    {
      title: 'Deteksi Wajah Real-Time & Landmark Alignment:',
      desc: 'Memanfaatkan OpenCV Haar Cascades / DNN face detector untuk pelacakan wajah multi-frame dari input live feed kamera secara instan.'
    },
    {
      title: 'Ekstraksi 128-D Facial Embedding Vectors:',
      desc: 'Mengekstraksi representasi fitur biometrik wajah berdimensi tinggi yang unik dan tahan terhadap variasi sudut pencahayaan.'
    },
    {
      title: 'Klasifikasi k-NN (k-Nearest Neighbors):',
      desc: 'Mengimplementasikan k-NN (k=3) dengan metrik jarak Euclidean L2 untuk pencocokan wajah super cepat dan False Acceptance Rate sangat minim (<0.05%).'
    }
  ];

  let yOffset = 1.95;
  faceBullets.forEach((item) => {
    slide.addText([
      { text: `● ${item.title} `, options: { bold: true, color: COLORS.textPrimary } },
      { text: item.desc, options: { color: COLORS.textSecondary } }
    ], {
      x: 1.05, y: yOffset, w: 4.3, h: 0.58,
      fontSize: 8.5, fontFace: 'Calibri', lineSpacingMultiple: 1.1
    });
    yOffset += 0.62;
  });

  // Tech Pills
  const faceTech = ['Computer Vision', 'OpenCV', 'k-NN', 'Scikit-Learn', 'Python', 'Web Portal'];
  faceTech.forEach((tech, idx) => {
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 1.05 + (idx * 0.72), y: 4.5, w: 0.68, h: 0.26,
      fill: { color: '0B0F17' },
      line: { color: COLORS.border, width: 1 },
      rectRadius: 0.06
    });
    slide.addText(tech, {
      x: 1.05 + (idx * 0.72), y: 4.5, w: 0.68, h: 0.26,
      fontSize: 6.8, fontFace: 'Consolas', color: COLORS.cyanLight,
      align: 'center', valign: 'middle', bold: true
    });
  });

  // Right Visual Card
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 5.8, y: 1.5, w: 3.4, h: 3.45,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.border, width: 1 },
    rectRadius: 0.12
  });

  const faceImgPath = path.join(rootDir, 'public', 'projects', 'face-recognition.png');
  if (fs.existsSync(faceImgPath)) {
    slide.addImage({
      path: faceImgPath,
      x: 6.0, y: 1.7, w: 3.0, h: 1.88,
      rectRadius: 0.08
    });
  }

  // 3 Mini Benchmarks inside Right Card
  const faceStats = [
    { label: 'ACCURACY', val: '99.4%', color: COLORS.emeraldLight },
    { label: 'THROUGHPUT', val: '16 ms', color: COLORS.cyanLight },
    { label: 'FAR RATE', val: '< 0.05%', color: COLORS.purple }
  ];

  faceStats.forEach((s, idx) => {
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 6.0 + (idx * 1.03), y: 3.75, w: 0.94, h: 0.95,
      fill: { color: '0E1420' },
      line: { color: COLORS.border, width: 1 },
      rectRadius: 0.08
    });
    slide.addText(s.val, {
      x: 6.0 + (idx * 1.03), y: 3.85, w: 0.94, h: 0.35,
      fontSize: 12, fontFace: 'Segoe UI', color: s.color,
      bold: true, align: 'center', valign: 'middle'
    });
    slide.addText(s.label, {
      x: 6.0 + (idx * 1.03), y: 4.25, w: 0.94, h: 0.3,
      fontSize: 7, fontFace: 'Consolas', color: COLORS.textMuted,
      bold: true, align: 'center', valign: 'top'
    });
  });
}

/* ==========================================================
   SLIDE 5: FEATURED PROJECT #3 — PYTHON EDUCATIONAL GAME
   ========================================================== */
{
  const slide = pptx.addSlide();
  applySlideTemplate(slide, 5, '05 / SOFTWARE ENG & COMMUNITY');
  addSlideHeader(
    slide,
    'Computational Logic Quest — Python Educational Game',
    'Proyek Pengabdian Masyarakat UMJ — Mempromosikan literasi digital dan keterampilan problem solving'
  );

  // Left Details Card
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.8, y: 1.5, w: 4.8, h: 3.45,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.border, width: 1 },
    rectRadius: 0.12
  });

  slide.addText('PERAN: LEAD SOFTWARE ENGINEER', {
    x: 1.05, y: 1.7, w: 4.3, h: 0.22,
    fontSize: 8.5, fontFace: 'Consolas', color: COLORS.purple, bold: true
  });

  const eduBullets = [
    {
      title: 'Inisiatif Rekayasa Perangkat Lunak:',
      desc: 'Memimpin inisiatif tim mahasiswa dalam merancang dan mengembangkan game edukasi interaktif sederhana berbasis Python untuk kalangan pelajar pemula.'
    },
    {
      title: 'Arsitektur Modular Berorientasi Objek (OOP):',
      desc: 'Menyusun kode terstruktur dengan prinsip OOP modular: pemisahan logika game loop, state management, sprite rendering, dan audio-visual controller.'
    },
    {
      title: 'Pedagogi Berpikir Komputasional (Computational Thinking):',
      desc: 'Merancang mekanik tantangan teka-teki logika yang merepresentasikan konsep dekomposisi masalah, pengenalan pola, percabangan logika (if-else), dan perulangan (loops).'
    },
    {
      title: 'Dampak Sosial & Literasi Digital:',
      desc: 'Mendapat apresiasi positif dari peserta dan instruktur sebagai jembatan interaktif dalam memperkenalkan rekayasa kode secara menyenangkan bagi pemula.'
    }
  ];

  let yOffset = 1.95;
  eduBullets.forEach((item) => {
    slide.addText([
      { text: `● ${item.title} `, options: { bold: true, color: COLORS.textPrimary } },
      { text: item.desc, options: { color: COLORS.textSecondary } }
    ], {
      x: 1.05, y: yOffset, w: 4.3, h: 0.58,
      fontSize: 8.5, fontFace: 'Calibri', lineSpacingMultiple: 1.1
    });
    yOffset += 0.62;
  });

  // Tech Pills
  const eduTech = ['Python 3', 'Pygame', 'OOP Architecture', 'State Pattern', 'Game Design'];
  eduTech.forEach((tech, idx) => {
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 1.05 + (idx * 0.85), y: 4.5, w: 0.8, h: 0.26,
      fill: { color: '0B0F17' },
      line: { color: COLORS.border, width: 1 },
      rectRadius: 0.06
    });
    slide.addText(tech, {
      x: 1.05 + (idx * 0.85), y: 4.5, w: 0.8, h: 0.26,
      fontSize: 6.8, fontFace: 'Consolas', color: COLORS.purple,
      align: 'center', valign: 'middle', bold: true
    });
  });

  // Right Visual Card
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 5.8, y: 1.5, w: 3.4, h: 3.45,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.border, width: 1 },
    rectRadius: 0.12
  });

  const eduImgPath = path.join(rootDir, 'public', 'projects', 'edu-game.png');
  if (fs.existsSync(eduImgPath)) {
    slide.addImage({
      path: eduImgPath,
      x: 6.0, y: 1.7, w: 3.0, h: 1.88,
      rectRadius: 0.08
    });
  }

  // 3 Mini Impact Highlights inside Right Card
  const eduStats = [
    { label: 'TARGET', val: 'Pelajar', color: COLORS.cyanLight },
    { label: 'FRAMEWORK', val: 'OOP', color: COLORS.purple },
    { label: 'OUTCOME', val: 'Literasi', color: COLORS.emeraldLight }
  ];

  eduStats.forEach((s, idx) => {
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 6.0 + (idx * 1.03), y: 3.75, w: 0.94, h: 0.95,
      fill: { color: '0E1420' },
      line: { color: COLORS.border, width: 1 },
      rectRadius: 0.08
    });
    slide.addText(s.val, {
      x: 6.0 + (idx * 1.03), y: 3.85, w: 0.94, h: 0.35,
      fontSize: 12, fontFace: 'Segoe UI', color: s.color,
      bold: true, align: 'center', valign: 'middle'
    });
    slide.addText(s.label, {
      x: 6.0 + (idx * 1.03), y: 4.25, w: 0.94, h: 0.3,
      fontSize: 7, fontFace: 'Consolas', color: COLORS.textMuted,
      bold: true, align: 'center', valign: 'top'
    });
  });
}

/* ==========================================================
   SLIDE 6: METHODOLOGY — THE AI PROJECT CYCLE
   ========================================================== */
{
  const slide = pptx.addSlide();
  applySlideTemplate(slide, 6, '06 / ENGINEERING FRAMEWORK');
  addSlideHeader(
    slide,
    'End-to-End AI Project Cycle in Engineering Practice',
    'Siklus pengembangan terstruktur berstandar industri yang dipelajari dan diterapkan di Orbit Future Academy'
  );

  const stages = [
    {
      num: '01',
      title: 'Problem Scoping',
      color: COLORS.cyanLight,
      desc: 'Identifikasi kebutuhan riil, perumusan batasan teknis komputasi lokal, serta penentuan target output model berbasis dampak bisnis.'
    },
    {
      num: '02',
      title: 'Data Acquisition',
      color: COLORS.emeraldLight,
      desc: 'Pengumpulan dataset citra primer & sekunder, anotasi bounding box/landmark, penyeimbangan kelas, dan eliminasi data korup.'
    },
    {
      num: '03',
      title: 'Data Exploration',
      color: COLORS.amber,
      desc: 'Analisis histogram warna, filtering noise spasial via OpenCV, augmentasi data (rotasi, shear, zoom) untuk mencegah bias.'
    },
    {
      num: '04',
      title: 'Modelling & Tuning',
      color: COLORS.purple,
      desc: 'Perancangan topologi CNN dan k-NN, seleksi fungsi aktivasi (ReLU/Softmax), regularisasi Dropout, dan eksperimen hyperparameter.'
    },
    {
      num: '05',
      title: 'Evaluation & Deploy',
      color: COLORS.emeraldLight,
      desc: 'Validasi akurasi, confusion matrix, kuantisasi model FP16 TFLite, serta deployment langsung ke aplikasi Android offline mandiri.'
    }
  ];

  stages.forEach((stage, idx) => {
    const xPos = 0.8 + (idx * 1.72);
    slide.addShape(pptx.ShapeType.roundRect, {
      x: xPos, y: 1.5, w: 1.58, h: 2.5,
      fill: { color: COLORS.cardBg },
      line: { color: COLORS.border, width: 1 },
      rectRadius: 0.1
    });

    // Step Number Badge
    slide.addShape(pptx.ShapeType.roundRect, {
      x: xPos + 0.12, y: 1.65, w: 0.45, h: 0.32,
      fill: { color: '0E1420' },
      line: { color: stage.color, width: 1 },
      rectRadius: 0.06
    });
    slide.addText(stage.num, {
      x: xPos + 0.12, y: 1.65, w: 0.45, h: 0.32,
      fontSize: 9, fontFace: 'Consolas', color: stage.color,
      bold: true, align: 'center', valign: 'middle'
    });

    slide.addText(stage.title, {
      x: xPos + 0.12, y: 2.05, w: 1.34, h: 0.45,
      fontSize: 10.5, fontFace: 'Segoe UI', color: COLORS.textPrimary,
      bold: true, valign: 'top'
    });

    slide.addText(stage.desc, {
      x: xPos + 0.12, y: 2.55, w: 1.34, h: 1.35,
      fontSize: 8, fontFace: 'Calibri', color: COLORS.textSecondary,
      lineSpacingMultiple: 1.15, valign: 'top'
    });
  });

  // Bottom Takeaway Box
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.8, y: 4.15, w: 8.4, h: 0.8,
    fill: { color: '081F17' },
    line: { color: COLORS.emerald, width: 1 },
    rectRadius: 0.1
  });

  slide.addText([
    { text: 'KEY ENGINEERING TAKEAWAY:  ', options: { bold: true, color: COLORS.emeraldLight } },
    {
      text: 'Penerapan metodologi terstruktur ini membuktikan kemampuan merancang sistem cerdas tidak hanya secara teoritis di laboratorium riset, namun siap diterapkan sebagai produk perangkat lunak tangguh dengan performa komputasi terukur.',
      options: { color: COLORS.textPrimary }
    }
  ], {
    x: 1.05, y: 4.25, w: 7.9, h: 0.6,
    fontSize: 8.5, fontFace: 'Calibri', lineSpacingMultiple: 1.15, valign: 'middle'
  });
}

/* ==========================================================
   SLIDE 7: TECH STACK & CORE COMPETENCIES
   ========================================================== */
{
  const slide = pptx.addSlide();
  applySlideTemplate(slide, 7, '07 / TECHNICAL CAPABILITIES');
  addSlideHeader(
    slide,
    'Comprehensive Tech Stack & Engineering Competencies',
    'Kombinasi kemampuan mendalam machine learning, rekayasa perangkat lunak, dan soft skills teruji'
  );

  const pillars = [
    {
      title: 'Machine Learning & Vision',
      color: COLORS.emeraldLight,
      badge: 'CORE EXPERTISE',
      skills: [
        'Artificial Intelligence',
        'Deep Learning (CNN)',
        'Computer Vision (OpenCV)',
        'TensorFlow & Keras',
        'k-Nearest Neighbors (k-NN)',
        'Scikit-Learn',
        'AI Project Cycle Method',
        'Feature Engineering & Normalization',
        'Model Evaluation & Confusion Matrix'
      ]
    },
    {
      title: 'Software Engineering',
      color: COLORS.cyanLight,
      badge: 'LANGUAGES & ARCHITECTURE',
      skills: [
        'Python 3',
        'Java (Android Core)',
        'JavaScript (ES6+)',
        'React.js',
        'C / C++',
        'RESTful APIs & JSON Schema',
        'Object-Oriented Programming (OOP)',
        'State Management & Modular Code',
        'Tailwind CSS & Modern UI'
      ]
    },
    {
      title: 'Deployment & Edge Tools',
      color: COLORS.amber,
      badge: 'INFRASTRUCTURE & DEPLOY',
      skills: [
        'Android Offline Deployment',
        'Edge AI / TFLite FP16 Quant',
        'Zero-External DB Architecture',
        'Git & GitHub Version Control',
        'Google Colab GPU Instances',
        'Kaggle Datasets & Kernels',
        'Linux Terminal & Bash Commands',
        'Vite & Modern Frontend Tooling'
      ]
    },
    {
      title: 'Engineering Mindset',
      color: COLORS.purple,
      badge: 'LEADERSHIP & MINDSET',
      skills: [
        'Analytical Problem Solving',
        'Critical Thinking',
        'Project Management Lifecycle',
        'Collaborative Team Leadership',
        'Growth Mindset & Curiosity',
        'Adaptability in New Technologies',
        'Resilience & Tenacity',
        'Computational Logic Pedagogy'
      ]
    }
  ];

  pillars.forEach((p, idx) => {
    const xPos = 0.8 + (idx * 2.15);
    slide.addShape(pptx.ShapeType.roundRect, {
      x: xPos, y: 1.5, w: 2.0, h: 3.45,
      fill: { color: COLORS.cardBg },
      line: { color: COLORS.border, width: 1 },
      rectRadius: 0.12
    });

    slide.addText(p.badge, {
      x: xPos + 0.1, y: 1.68, w: 1.8, h: 0.18,
      fontSize: 6.5, fontFace: 'Consolas', color: p.color,
      bold: true
    });

    slide.addText(p.title, {
      x: xPos + 0.1, y: 1.9, w: 1.8, h: 0.42,
      fontSize: 10.5, fontFace: 'Segoe UI', color: COLORS.textPrimary,
      bold: true, valign: 'top'
    });

    slide.addShape(pptx.ShapeType.line, {
      x: xPos + 0.1, y: 2.38, w: 1.8, h: 0,
      line: { color: COLORS.border, width: 1 }
    });

    // Skill pills
    let pillY = 2.48;
    p.skills.forEach((skill) => {
      slide.addShape(pptx.ShapeType.roundRect, {
        x: xPos + 0.1, y: pillY, w: 1.8, h: 0.24,
        fill: { color: '0D131F' },
        line: { color: COLORS.border, width: 1 },
        rectRadius: 0.05
      });
      slide.addText(skill, {
        x: xPos + 0.15, y: pillY, w: 1.7, h: 0.24,
        fontSize: 7.2, fontFace: 'Calibri', color: COLORS.textPrimary,
        valign: 'middle'
      });
      pillY += 0.27;
    });
  });
}

/* ==========================================================
   SLIDE 8: FORMAL EDUCATION & CREDENTIALS
   ========================================================== */
{
  const slide = pptx.addSlide();
  applySlideTemplate(slide, 8, '08 / VERIFIED CREDENTIALS');
  addSlideHeader(
    slide,
    'Formal Education, Academic Honors & Certified Programs',
    'Pengakuan institusi resmi atas dedikasi dan keahlian di bidang kecerdasan buatan'
  );

  const credCards = [
    {
      title: 'S1 Teknik Informatika',
      org: 'Universitas Muhammadiyah Jakarta',
      period: '2022 – 2026',
      badge: 'IPK: 3.51 / 4.00',
      badgeColor: COLORS.amber,
      image: path.join(rootDir, 'public', 'credentials', 'umj-degree.png'),
      desc: 'Kurikulum sarjana berfokus pada AI, Machine Learning, Computer Vision, dan Rekayasa Perangkat Lunak. Menyelesaikan tugas akhir dan proyek tim dengan predikat Sangat Memuaskan.'
    },
    {
      title: 'Studi Independen (MSIB) AI',
      org: 'Orbit Future Academy & Kemendikbud',
      period: 'Sep – Des 2024',
      badge: 'ID: MSIB-OFA/2024/AI4J-0824',
      badgeColor: COLORS.emeraldLight,
      image: path.join(rootDir, 'public', 'credentials', 'orbit-msib.png'),
      desc: 'Program intensif resmi nasional yang berfokus pada perancangan, implementasi, dan tata kelola solusi berbasis AI menggunakan metode AI Project Cycle.'
    },
    {
      title: 'AI Project Cycle Mastery',
      org: 'Orbit Future Academy',
      period: 'Tahun 2024',
      badge: 'Capstone: Face Attendance',
      badgeColor: COLORS.cyanLight,
      image: path.join(rootDir, 'public', 'credentials', 'orbit-ai-cycle.png'),
      desc: 'Sertifikasi keahlian siklus penuh AI dari Problem Scoping, Data Acquisition, Data Exploration, Modeling (CNN, k-NN), hingga validasi performa di dunia kerja.'
    }
  ];

  credCards.forEach((c, idx) => {
    const xPos = 0.8 + (idx * 2.86);
    slide.addShape(pptx.ShapeType.roundRect, {
      x: xPos, y: 1.5, w: 2.7, h: 3.45,
      fill: { color: COLORS.cardBg },
      line: { color: COLORS.border, width: 1 },
      rectRadius: 0.12
    });

    // Preview Image
    if (fs.existsSync(c.image)) {
      slide.addImage({
        path: c.image,
        x: xPos + 0.15, y: 1.65, w: 2.4, h: 1.5,
        rectRadius: 0.08
      });
    }

    // Badge Pill
    slide.addShape(pptx.ShapeType.roundRect, {
      x: xPos + 0.15, y: 3.25, w: 2.4, h: 0.26,
      fill: { color: '0A101D' },
      line: { color: c.badgeColor, width: 1 },
      rectRadius: 0.06
    });
    slide.addText(c.badge, {
      x: xPos + 0.15, y: 3.25, w: 2.4, h: 0.26,
      fontSize: 7.5, fontFace: 'Consolas', color: c.badgeColor,
      bold: true, align: 'center', valign: 'middle'
    });

    slide.addText(c.title, {
      x: xPos + 0.15, y: 3.58, w: 2.4, h: 0.28,
      fontSize: 11, fontFace: 'Segoe UI', color: COLORS.textPrimary,
      bold: true
    });

    slide.addText(`${c.org} • ${c.period}`, {
      x: xPos + 0.15, y: 3.86, w: 2.4, h: 0.22,
      fontSize: 7.5, fontFace: 'Consolas', color: COLORS.textMuted
    });

    slide.addText(c.desc, {
      x: xPos + 0.15, y: 4.1, w: 2.4, h: 0.75,
      fontSize: 8, fontFace: 'Calibri', color: COLORS.textSecondary,
      lineSpacingMultiple: 1.15
    });
  });
}

/* ==========================================================
   SLIDE 9: CONCLUSION & CONTACT
   ========================================================== */
{
  const slide = pptx.addSlide();
  applySlideTemplate(slide, 9, '09 / OPPORTUNITY & COLLABORATION');
  addSlideHeader(
    slide,
    "Let's Build Intelligent & Impactful Systems Together",
    'Siap berkontribusi secara profesional dalam tim Machine Learning & Software Engineering'
  );

  // Left Value Summary Card
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.8, y: 1.5, w: 5.2, h: 3.45,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.border, width: 1 },
    rectRadius: 0.12
  });

  slide.addText('MENGAPA BERKOLABORASI DENGAN GENDRY?', {
    x: 1.05, y: 1.7, w: 4.6, h: 0.22,
    fontSize: 8.5, fontFace: 'Consolas', color: COLORS.emeraldLight, bold: true
  });

  const valueProps = [
    {
      title: 'Pemahaman Menyeluruh (End-to-End Delivery):',
      desc: 'Terbiasa menangani siklus lengkap dari formulasi masalah matematis, kurasi dataset, perancangan neural network, hingga membungkusnya dalam antarmuka aplikasi Android/Web.'
    },
    {
      title: 'Spesialisasi On-Device Edge AI:',
      desc: 'Fokus kuat pada efisiensi komputasi lokal, pemrosesan citra offline, dan kuantisasi model yang ramah sumber daya perangkat bergerak.'
    },
    {
      title: 'Etika Kerja Kolaboratif & Teruji:',
      desc: 'Rekam jejak kepemimpinan proyek pengabdian masyarakat, kelulusan MSIB di Orbit Future Academy, dan IPK 3.51 mencerminkan ketekunan, kemampuan adaptasi, dan komitmen tinggi.'
    }
  ];

  let valY = 1.95;
  valueProps.forEach((v) => {
    slide.addText([
      { text: `✔ ${v.title}\n`, options: { bold: true, color: COLORS.textPrimary } },
      { text: v.desc, options: { color: COLORS.textSecondary } }
    ], {
      x: 1.05, y: valY, w: 4.6, h: 0.65,
      fontSize: 8.5, fontFace: 'Calibri', lineSpacingMultiple: 1.15
    });
    valY += 0.72;
  });

  // Call to action note
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 1.05, y: 4.2, w: 4.6, h: 0.6,
    fill: { color: '0A121E' },
    line: { color: COLORS.border, width: 1 },
    rectRadius: 0.08
  });
  slide.addText(
    '“Terbuka untuk posisi Artificial Intelligence Engineer, Machine Learning Specialist, Computer Vision Engineer, maupun Software Engineer.”',
    {
      x: 1.15, y: 4.23, w: 4.4, h: 0.54,
      fontSize: 8, fontFace: 'Calibri', color: COLORS.emeraldLight,
      italic: true, valign: 'middle'
    }
  );

  // Right Contact Channels
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 6.2, y: 1.5, w: 3.0, h: 3.45,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.border, width: 1 },
    rectRadius: 0.12
  });

  slide.addText('HUBUNGI LANGSUNG', {
    x: 6.4, y: 1.7, w: 2.6, h: 0.22,
    fontSize: 8.5, fontFace: 'Consolas', color: COLORS.cyanLight, bold: true
  });

  const contacts = [
    { label: 'EMAIL RESMI', val: 'gendryap@gmail.com', color: COLORS.textPrimary },
    { label: 'LINKEDIN', val: 'linkedin.com/in/mgendrya', color: COLORS.cyanLight },
    { label: 'GITHUB PROFILE', val: 'github.com/gendryafriansyah', color: COLORS.textPrimary },
    { label: 'REPOSITORI PORTOFOLIO', val: 'github.com/gendryafriansyah/Portofolio', color: COLORS.emeraldLight },
    { label: 'KONTAK / TELEPON', val: '+62 851-1167-1109', color: COLORS.textPrimary }
  ];

  let cY = 2.0;
  contacts.forEach((c) => {
    slide.addText(c.label, {
      x: 6.4, y: cY, w: 2.6, h: 0.16,
      fontSize: 6.5, fontFace: 'Consolas', color: COLORS.textMuted, bold: true
    });
    slide.addText(c.val, {
      x: 6.4, y: cY + 0.16, w: 2.6, h: 0.25,
      fontSize: 8, fontFace: 'Consolas', color: c.color, bold: true
    });
    cY += 0.44;
  });

  // CV Download Note Box
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 6.4, y: 4.25, w: 2.6, h: 0.55,
    fill: { color: '071E14' },
    line: { color: COLORS.emerald, width: 1 },
    rectRadius: 0.08
  });
  slide.addText('📄 Berkas Asli CV (PDF)\nTersedia di repositori GitHub', {
    x: 6.4, y: 4.25, w: 2.6, h: 0.55,
    fontSize: 7.5, fontFace: 'Calibri', color: COLORS.emeraldLight,
    align: 'center', valign: 'middle', bold: true
  });
}

// Write the PPTX files
const outputPath = path.join(rootDir, 'Portofolio_Mochammad_Gendry_Afriansyah.pptx');
const publicOutputPath = path.join(rootDir, 'public', 'Portofolio_Mochammad_Gendry_Afriansyah.pptx');

await pptx.writeFile({ fileName: outputPath });
console.log('Saved main presentation to:', outputPath);

// Also copy to public/ so the user can easily download or access it via web
fs.copyFileSync(outputPath, publicOutputPath);
console.log('Copied presentation to public folder:', publicOutputPath);
