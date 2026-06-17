// Dummy data untuk Stok Bahan Ajar
const stokBahanAjar = [
    { id: 1, kodeMK: "MATA4110", namaMK: "Matematika Dasar", kategori: "MIPA", upbjj: "UPBJJ-UT Jakarta", lokasiRak: "Rak A1", qty: 120, safety: 50, catatanHTML: "<i>Stok aman</i>" },
    { id: 2, kodeMK: "BING4210", namaMK: "Bahasa Inggris", kategori: "Pendidikan", upbjj: "UPBJJ-UT Surabaya", lokasiRak: "Rak B2", qty: 30, safety: 40, catatanHTML: "<b>Menipis!</b>" },
    { id: 3, kodeMK: "EKON4310", namaMK: "Pengantar Ekonomi", kategori: "Ekonomi", upbjj: "UPBJJ-UT Jakarta", lokasiRak: "Rak C3", qty: 0, safety: 20, catatanHTML: "<span style='color:red'>Habis</span>" },
    { id: 4, kodeMK: "SOSI4210", namaMK: "Sosiologi", kategori: "Ilmu Sosial", upbjj: "UPBJJ-UT Bandung", lokasiRak: "Rak D4", qty: 75, safety: 30, catatanHTML: "Normal" },
    { id: 5, kodeMK: "FISIK4110", namaMK: "Fisika Dasar", kategori: "MIPA", upbjj: "UPBJJ-UT Surabaya", lokasiRak: "Rak E5", qty: 45, safety: 50, catatanHTML: "<i>Segera re-order</i>" }
];

// Daftar UT-Daerah (upbjjList)
const upbjjList = [
    "UPBJJ-UT Jakarta",
    "UPBJJ-UT Surabaya",
    "UPBJJ-UT Bandung",
    "UPBJJ-UT Medan"
];

// Daftar Kategori Mata Kuliah
const kategoriList = [
    "MIPA", "Pendidikan", "Ekonomi", "Ilmu Sosial"
];

// Daftar Paket Bahan Ajar untuk Tracking DO
const paketList = [
    { kodePaket: "PAKET1", namaPaket: "Paket Reguler A", harga: 150000, detail: "Buku Matematika, Bahasa Inggris, Sosiologi" },
    { kodePaket: "PAKET2", namaPaket: "Paket Ekspres B", harga: 250000, detail: "Semua modul + CD interaktif" },
    { kodePaket: "PAKET3", namaPaket: "Paket Hemat C", harga: 75000, detail: "Hanya modul wajib" }
];

// Daftar Ekspedisi
const ekspedisiList = ["JNE Regular", "JNE Express"];

// Data awal Delivery Order (untuk tracking)
let deliveryOrders = [
    { id: 1, nomorDO: "DO2025-001", nim: "12345678", nama: "Andi Wijaya", ekspedisi: "JNE Regular", paket: paketList[0], tanggalKirim: "2025-03-01", totalHarga: 150000 },
    { id: 2, nomorDO: "DO2025-002", nim: "87654321", nama: "ZyanX", ekspedisi: "JNE Express", paket: paketList[1], tanggalKirim: "2025-03-05", totalHarga: 250000 }
];