// Edit file ini untuk mengubah isi website. Tidak perlu menyentuh index.html.
//
// Video Referensi YouTube (ditampilkan di atas bagian lagu):
// Format: ["Judul / Keterangan Video", "Link YouTube atau Video ID", "Catatan singkat (opsional)"]
var YOUTUBE_REFS = [
  ["Referensi MV 1", "https://youtu.be/hdSPhGHJ18E", ""],
  ["Referensi MV 2", "https://youtu.be/UzHvLgYwc4g", ""]
];

// Tiap lirik: [nomor, bagian, waktu, lirik, storyboard, footage, ada audio?, grid?, [referensi]]
//  - bagian: 0 Verse 1, 1 Pre-Chorus, 2 Chorus, 3 Verse 2, 4 Outro
//  - audio: kalau true, file audio/NN.m4a dipakai (mis. audio/07.m4a)
//  - referensi: daftar file di folder refs/ (jpg, png, webp untuk gambar; mp4, webm untuk video)
//    Boleh kosong [], satu, atau banyak. Contoh: ["refs/07-a.jpg", "refs/07-b.mp4"]
//    Link video langsung (https://...mp4) juga boleh. Kalau kosong, bagian referensi tidak ditampilkan.

var SECTIONS = ["Verse 1", "Pre-Chorus", "Chorus", "Verse 2", "Outro"];

var LYRICS = [
["1", 0, "0:01", "Oh Matahari, Laskar Nusantara", "Menampilkan keberagaman awardee dari berbagai daerah", "Peserta di lokasi khas daerahnya", "01.m4a", false, []],
["2", 0, "0:10", "Bersama melangkah", "Perjalanan bersama meski berjauhan", "Footage berjalan dengan komposisi seragam", "02.m4a", false, []],
["3", 0, "0:16", "Merajut asa, membawa mimpi", "Menunjukkan impian dan persiapan studi", "Belajar, laptop, buku, menulis", "03.m4a", false, []],
["4", 0, "0:24", "Kembali memberi arti", "Alasan pengabdian", "Masyarakat, UMKM, petani, nelayan", "04.m4a", false, []],
["5", 1, "0:30", "Jutaan harapan, juga doa dan cita", "Harapan keluarga dan masyarakat", "Keluarga, doa, video call", "05.m4a", false, []],
["6", 1, "0:37", "Belajar dan bertekun senantiasa", "Proses belajar", "Riset, membaca, kelas", "06.m4a", false, []],
["7", 1, "0:44", "Dengan satu tekad kita", "Kesamaan tujuan", "Peserta berbagai daerah dengan pose seragam", "07.m4a", true, ["refs/07-grid-pose.jpg"]],
["8", 1, "0:47", "Bersinar tuk Indonesia", "Visi Indonesia masa depan", "Timelapse kota dan pembangunan", "08.m4a", false, []],
["9–10", 2, "0:52", "Bila nanti tlah tiba waktunya,<br>Kita kembali ke tanah tercinta", "Persiapan keberangkatan, lalu Indonesia sebagai tujuan akhir", "Packing, paspor, koper; landscape dan masyarakat Indonesia", "09-10.m4a", false, []],
["11–12", 2, "0:59", "Membawa ilmu, mengukir karya,<br>Kita abdikan bagi sesama", "Bidang kontribusi, lalu dampak kepada masyarakat", "Profesi dan aktivitas masing-masing; pelayanan publik dan edukasi", "11-12.m4a", false, []],
["13–14", 2, "1:06", "Langkah bersama merangkai cita,<br>untuk masa depan Indonesia", "Kolaborasi nasional, lalu awardee memandang bendera Indonesia", "Split screen banyak peserta; kamera dari belakang awardee, bergerak zoom in ke bendera", "13-14.m4a", false, []],
["15", 3, "1:16", "Oh Manggala Arkatama", "Identitas angkatan", "Nama, daerah, aktivitas PK", "15.m4a", false, []],
["16", 3, "1:24", "Sang Matahari untuk negeri", "Semangat pengabdian", "Peserta bekerja di bidangnya", "16.m4a", false, []],
["17", 3, "1:30", "Cahayanya jatuh di atas titi", "", "", "17.m4a", false, []],
["18", 3, "1:37", "Ilmu ditimba, elok dikongsi", "Berbagi pengetahuan", "Mentoring, mengajar, presentasi", "18.m4a", false, []],
];
