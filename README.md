<div align="center">

# Mochammad Gendry Afriansyah
### Artificial Intelligence & Software Engineer

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-CNN-FF6F00?style=flat-square&logo=tensorflow&logoColor=white)](https://tensorflow.org/)
[![OpenCV](https://img.shields.io/badge/OpenCV-Computer_Vision-5C3EE8?style=flat-square&logo=opencv&logoColor=white)](https://opencv.org/)
[![MSIB](https://img.shields.io/badge/MSIB-Orbit_Future_Academy-007ACC?style=flat-square)](https://kampusmerdeka.kemdikbud.go.id/)

<p align="center">
  <b>Portofolio web modern berbasis React.js dengan tema Machine Learning & Software Engineering.</b><br />
  Repositori resmi portofolio Mochammad Gendry Afriansyah: <a href="https://github.com/gendryafriansyah/Portofolio">github.com/gendryafriansyah/Portofolio</a>
</p>

[🌐 Live Demo](#-panduan-menjalankan-proyek) • [📂 Proyek Unggulan](#-proyek-portofolio-cv) • [🎓 Pendidikan & Pengalaman](#-pengalaman--pendidikan) • [📬 Hubungi Saya](#-kontak)

---

</div>

## 📌 Ringkasan Profil

> **"Fresh graduate Teknik Informatika Universitas Muhammadiyah Jakarta yang berfokus pada bidang Artificial Intelligence dan Software Engineering."**

Berpengalaman dalam riset dan implementasi model **Machine Learning**, **Computer Vision**, serta integrasi perangkat lunak menggunakan **Python, TensorFlow/Keras, OpenCV, dan Java**. Terbiasa bekerja secara kolaboratif dalam merancang solusi cerdas mulai dari pengumpulan dataset, pra-pemrosesan citra, rekayasa fitur, hingga *on-device deployment* (inferensi lokal *offline* pada platform Android).

- 🎓 **Pendidikan:** S1 Teknik Informatika, Universitas Muhammadiyah Jakarta (**IPK: 3.51 / 4.00**)
- 🏛️ **Program Khusus:** Peserta Studi Independen Bersertifikat (MSIB) — *AI for Jobs* (Orbit Future Academy)
- 🎯 **Fokus Keahlian:** Deep Learning (CNN), Facial Recognition (k-NN), On-Device Edge AI, Software Architecture & Web Development

---

## 🚀 Fitur Unggulan Website Portofolio

1. **Terminal Interaktif Hero Section (`gendry@ml-edge:~$`)**
   - Terminal virtual bergaya UNIX yang mendukung *tab switching*:
     - `infer_model.py`: Menampilkan alur eksekusi inferensi model TFLite pada perangkat Android, ukuran bobot model (4.2 MB), dan status *offline*.
     - `ai_pipeline.sh`: Rincian 6 tahapan *AI Project Cycle* standar industri.
     - `profile.json`: Metadata profil terstruktur kandidat dan metrik akademik.

2. **Simulasi Inferensi AI Interaktif (*Live ML Workbench* di `#ai-demo`)**
   - **Mode HerbalAI (CNN):** Pengunjung dapat memilih sampel daun herbal Indonesia (*Daun Sirih, Daun Kelor, Daun Binahong, Daun Jahe*), memantau simulasi aktivasi layer neural network (`Conv2D -> ReLU -> MaxPool -> Dense Softmax`), serta membaca rekomendasi herbal untuk gejala penyakit ringan.
   - **Mode Face Recognition (k-NN):** Simulasi ekstraksi vektor embedding wajah 128 dimensi dan verifikasi presensi otomatis dengan tingkat akurasi 99.4%.

3. **Kartu Proyek Berbingkai Browser macOS**
   - Menampilkan bingkai browser bergaya macOS dengan *window dots* (merah, kuning, hijau), *address bar pill*, dan label metrik machine learning.
   - Dilengkapi **Modal Detail Interaktif** untuk membaca spesifikasi teknis, arsitektur, dan library yang digunakan.

4. **Tema Gelap & Terang (Dark / Light Theme)**
   - Menggunakan palet gelap modern (*Dark Mode*) secara default dengan tombol toggle mulus ke mode terang (*Light Mode*), preferensi disimpan secara persisten di `localStorage`.

5. **Hub Kontak 4 Tombol Aksi**
   - Tombol unduh berkas asli PDF CV (*Curriculum Vitae.pdf*).
   - Tautan langsung ke Gmail (`gendryap@gmail.com`), GitHub (`github.com/gendryafriansyah`), dan LinkedIn (`linkedin.com/in/mgendrya`).
   - Tombol salin informasi kontak (*Click to Copy*) dengan indikator toast instan.

---

## 💼 Proyek Portofolio (Sesuai CV)

### 1. HerbalAI (Android) — *Indonesian Herbal Leaf Classifier & Health Advisor*
- **Kategori:** *Android & Edge AI Deployment*
- **Teknologi:** `Convolutional Neural Network (CNN)`, `TensorFlow / Keras`, `OpenCV`, `Android`, `Edge AI`, `Java`
- **Deskripsi:**
  - Merancang dan melatih arsitektur Convolutional Neural Network (CNN) untuk mengklasifikasikan aneka daun tanaman herbal asli Indonesia.
  - Membangun aplikasi Android mandiri untuk inferensi *on-device* berkecepatan tinggi tanpa ketergantungan pada koneksi internet atau database eksternal.
  - Mengintegrasikan sistem rekomendasi pengobatan alami dan dosis herbal untuk penanganan gejala penyakit ringan.
- **Metrik:** Akurasi Model **98.6%** | Latensi Inferensi **12.4 ms** | Mode Operasional **100% Offline**.

---

### 2. Sistem Pengenalan Wajah Presensi Otomatis — *Capstone Project (Orbit Future Academy)*
- **Kategori:** *Machine Learning & Computer Vision*
- **Teknologi:** `Computer Vision`, `OpenCV`, `k-Nearest Neighbors (k-NN)`, `Python`, `Scikit-Learn`, `Web Platform`
- **Deskripsi:**
  - Berperan sebagai **Data Scientist & Machine Learning Engineer** dalam merancang sistem presensi otomatis berbasis web.
  - Mengelola akuisisi data biometrik, augmentasi citra wajah, pra-pemrosesan pencahayaan, dan ekstraksi embedding wajah 128 dimensi.
  - Melatih model k-Nearest Neighbors (k-NN) yang menghasilkan verifikasi identitas real-time yang akurat dan minim *false accept*.
- **Metrik:** Akurasi Validasi **99.4%** | Latensi Deteksi **16 ms/frame** | False Acceptance Rate **< 0.05%**.

---

### 3. Pengembangan Game Edukasi Interaktif Berbasis Python — *Proyek Pengabdian Masyarakat*
- **Kategori:** *Software Engineering & Digital Literacy*
- **Teknologi:** `Python`, `Pygame`, `Object-Oriented Programming (OOP)`, `Computational Thinking`, `UI/UX Design`
- **Deskripsi:**
  - Memimpin inisiatif tim rekayasa perangkat lunak untuk mengembangkan permainan edukasi logika berbasis Python.
  - Merancang logika algoritma, *state machine* modular, dan tata letak antarmuka yang intuitif bagi pengguna pemula.
  - Mengedukasi literasi digital serta melatih kemampuan *computational problem-solving* bagi generasi muda.

---

## 🏢 Pengalaman & Pendidikan

| Periode | Peran / Posisi | Institusi / Organisasi | Deskripsi Singkat |
| :--- | :--- | :--- | :--- |
| **Sep 2024 – Des 2024** | **Peserta Studi Independen Bersertifikat (Mitra MSIB)** | **Orbit Future Academy** — *Artificial Intelligence for Jobs* | Program intensif perancangan, implementasi, dan tata kelola solusi AI dengan metodologi *AI Project Cycle*. Mengembangkan model ML, Computer Vision, dan proyek akhir sistem presensi wajah. |
| **Sep 2022 – Agu 2026** | **S1 Teknik Informatika (IPK: 3.51 / 4.00)** | **Universitas Muhammadiyah Jakarta** | Terlibat aktif dalam pembelajaran AI, Machine Learning, Computer Vision, dan Rekayasa Perangkat Lunak. Mengimplementasikan Python, Java, C/C++, TensorFlow, dan OpenCV. |
| **2024** | **Software Engineering Lead** | **Proyek Pengabdian Masyarakat (UMJ)** | Memimpin pengembangan arsitektur game edukasi interaktif berbasis Python berorientasi OOP untuk pengenalan logika komputasi pemula. |

---

## 🛠️ Matriks Keahlian (Skills)

### Hard Skills
- **Artificial Intelligence & Deep Learning:** Machine Learning, Convolutional Neural Networks (CNN), Computer Vision, OpenCV, k-Nearest Neighbors (k-NN), Scikit-Learn, AI Project Cycle, Model Evaluation.
- **Bahasa Pemrograman & Software Engineering:** Python, Java, JavaScript (ES6+), React.js, C/C++, HTML5 & Modern CSS, Tailwind CSS, RESTful APIs, Object-Oriented Programming (OOP).
- **Deployment & Komputasi:** Android Deployment, Edge AI / On-Device TFLite Inference, Local Offline Processing, Git & GitHub, Google Colab, Kaggle.

### Soft Skills
- Problem Solving, Critical Thinking, Project Management, Leadership, Growth Mindset, Adaptability, Resilience, Collaborative Teamwork.

---

## 📜 Sertifikasi & Kredensial Resmi

1. **Magang & Studi Independen Bersertifikat (MSIB) — AI for Jobs**
   - **Penerbit:** Orbit Future Academy & Kemendikbudristek (2024)
   - **Verifikasi Online:** [tinyurl.com/mu4axv3w](https://tinyurl.com/mu4axv3w)
   - **ID Sertifikat:** `MSIB-OFA/2024/AI4J-0824`
2. **AI Project Cycle & Machine Learning Competency**
   - **Penerbit:** Orbit Future Academy (2024)
   - **Cakupan:** *Problem Scoping, Data Acquisition, Exploration, Modelling (CNN & k-NN), Evaluation*
3. **Pencapaian Akademik S1 Teknik Informatika (IPK 3.51 / 4.00)**
   - **Penerbit:** Universitas Muhammadiyah Jakarta (2022 – 2026)
   - **Fokus Keilmuan:** *Artificial Intelligence & Software Engineering*

---

## 💻 Panduan Menjalankan Proyek Secara Lokal

### Prasyarat
- [Node.js](https://nodejs.org/) versi 18 atau lebih baru.
- npm / pnpm / yarn.

### 1. Kloning Repositori
```bash
git clone https://github.com/gendryafriansyah/Portofolio.git
cd Portofolio
```

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan (Dev Mode)
```bash
npm run dev
```
Buka browser dan akses alamat: `http://localhost:5173`

### 4. Membangun Berkas Produksi (Production Build)
```bash
npm run build
```
Hasil kompilasi siap publikasi akan disimpan dalam folder `dist/`.

### 5. Menguji Hasil Build (Preview)
```bash
npm run preview
```

---

## 🌐 Panduan Publikasi (Deployment)

Portofolio ini siap di-deploy secara instan ke berbagai penyedia layanan hosting modern:

### Vercel (Rekomendasi)
Proyek ini sudah dilengkapi berkas `vercel.json`:
1. Push repositori ke akun GitHub Anda.
2. Buka dashboard [Vercel](https://vercel.com/) dan impor repositori.
3. Vercel akan otomatis mengenali framework Vite dan menyelesaikan deployment dalam hitungan detik.

---

## 📬 Kontak

Jika Anda tertarik untuk berdiskusi, bekerja sama, atau membuka kesempatan karir di bidang Machine Learning dan Software Engineering, jangan ragu untuk menghubungi:

- 📧 **Email:** [gendryap@gmail.com](mailto:gendryap@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/mgendrya](https://www.linkedin.com/in/mgendrya)
- 🐙 **GitHub:** [github.com/gendryafriansyah](https://github.com/gendryafriansyah)
- 📱 **Telepon:** +62 851-1167-1109
- 📄 **Curriculum Vitae:** [Unduh Berkas PDF](public/credentials/Curriculum%20Vitae.pdf)

---

<div align="center">
  <sub>Didesain dan dikembangkan dengan ❤️ menggunakan <b>React 19</b>, <b>Vite</b>, dan <b>Tailwind CSS</b>.</sub><br />
  <sub>&copy; 2026 Mochammad Gendry Afriansyah. All rights reserved.</sub>
</div>
