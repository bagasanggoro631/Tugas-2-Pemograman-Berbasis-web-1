new Vue({
    el: '#appTracking',
    data: {
        daftarDO: deliveryOrders,  // dari dataBahanAjar.js
        paketList: paketList,
        ekspedisiList: ekspedisiList,
        formDO: {
            nim: '', nama: '', ekspedisi: 'JNE Regular', paket: paketList[0], tanggalKirim: new Date().toISOString().slice(0,10)
        },
        errorsDO: []
    },
    computed: {
        // Menghasilkan nomor DO otomatis berdasarkan data terakhir
        nomorDOBaru() {
            if (this.daftarDO.length === 0) return `DO${new Date().getFullYear()}-001`;
            const lastDO = this.daftarDO[this.daftarDO.length - 1].nomorDO;
            const lastNumber = parseInt(lastDO.split('-')[1]);
            const newNumber = (lastNumber + 1).toString().padStart(3, '0');
            return `DO${new Date().getFullYear()}-${newNumber}`;
        }
    },
    watch: {
        // Watcher 1: Memantau perubahan paket yang dipilih untuk validasi harga (bisa juga untuk update field lain)
        'formDO.paket': function(newPaket, oldPaket) {
            console.log(`Paket berubah dari ${oldPaket?.namaPaket} ke ${newPaket.namaPaket}`);
            // Bisa tambahkan logika lain, misal menampilkan notifikasi
        },
        // Watcher 2: Memantau panjang daftarDO untuk memicu efek samping (misal simpan ke localStorage)
        daftarDO: {
            handler(newList) {
                console.log('Daftar DO berubah, total: ' + newList.length);
                // Simulasi penyimpanan
                // localStorage.setItem('deliveryOrders', JSON.stringify(newList));
            },
            deep: true
        }
    },
    methods: {
        formatRupiah(angka) {
            return 'Rp ' + angka.toLocaleString('id-ID');
        },
        tambahDO() {
            this.errorsDO = [];
            if (!this.formDO.nim || !this.formDO.nama) {
                this.errorsDO.push('NIM dan Nama harus diisi');
                return;
            }
            if (!this.formDO.tanggalKirim) {
                this.errorsDO.push('Tanggal Kirim harus diisi');
                return;
            }
            const newDO = {
                id: this.daftarDO.length + 1,
                nomorDO: this.nomorDOBaru,
                nim: this.formDO.nim,
                nama: this.formDO.nama,
                ekspedisi: this.formDO.ekspedisi,
                paket: this.formDO.paket,
                tanggalKirim: this.formDO.tanggalKirim,
                totalHarga: this.formDO.paket.harga
            };
            this.daftarDO.push(newDO);
            // Reset form, tanggal tetap hari ini, paket default pertama
            this.formDO = {
                nim: '', nama: '', ekspedisi: 'JNE Regular', paket: this.paketList[0], tanggalKirim: new Date().toISOString().slice(0,10)
            };
        }
    }
});