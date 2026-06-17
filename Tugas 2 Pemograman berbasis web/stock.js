new Vue({
    el: '#appStok',
    data: {
        stokList: stokBahanAjar,   // dari dataBahanAjar.js
        upbjjList: upbjjList,
        kategoriList: kategoriList,
        filterUpbjj: '',
        filterKategori: '',
        filterReOrder: false,
        sortBy: 'namaMK',
        formMode: 'tambah', // 'tambah' atau 'edit'
        form: {
            id: null,
            kodeMK: '', namaMK: '', kategori: '', upbjj: '', lokasiRak: '', qty: 0, safety: 0, catatanHTML: ''
        },
        errors: []
    },
    computed: {
        filteredAndSortedStok() {
            let result = [...this.stokList];
            // Filter berdasarkan UT-Daerah
            if (this.filterUpbjj) {
                result = result.filter(item => item.upbjj === this.filterUpbjj);
            }
            // Filter berdasarkan Kategori (hanya jika filterUpbjj dipilih)
            if (this.filterUpbjj && this.filterKategori) {
                result = result.filter(item => item.kategori === this.filterKategori);
            }
            // Filter re-order (qty < safety atau qty == 0)
            if (this.filterReOrder) {
                result = result.filter(item => item.qty < item.safety || item.qty === 0);
            }
            // Sorting
            if (this.sortBy === 'namaMK') {
                result.sort((a,b) => a.namaMK.localeCompare(b.namaMK));
            } else if (this.sortBy === 'qty') {
                result.sort((a,b) => a.qty - b.qty);
            }
            return result;
        }
    },
    watch: {
        // Watcher 1: Ketika filterUpbjj berubah, reset filterKategori (dependent options)
        filterUpbjj(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.filterKategori = '';
            }
        },
        // Watcher 2: Memantau perubahan stokList (misalnya untuk menyimpan ke localStorage - demonstrasi)
        stokList: {
            handler(newList) {
                console.log('Stok berubah, bisa simpan ke server/localStorage');
                // Contoh simulasi: localStorage.setItem('stokList', JSON.stringify(newList));
            },
            deep: true
        }
    },
    methods: {
        resetFilters() {
            this.filterUpbjj = '';
            this.filterKategori = '';
            this.filterReOrder = false;
            this.sortBy = 'namaMK';
        },
        editStok(item) {
            this.formMode = 'edit';
            this.form = { ...item };
            this.errors = [];
        },
        saveStok() {
            this.errors = [];
            // Validasi sederhana
            if (!this.form.kodeMK || !this.form.namaMK || this.form.qty < 0 || this.form.safety < 0) {
                this.errors.push('Kode, Nama wajib diisi, stok dan safety tidak boleh negatif');
                return;
            }
            if (this.formMode === 'tambah') {
                const newId = Math.max(...this.stokList.map(s => s.id), 0) + 1;
                this.form.id = newId;
                this.stokList.push({ ...this.form });
            } else {
                const index = this.stokList.findIndex(s => s.id === this.form.id);
                if (index !== -1) {
                    this.stokList.splice(index, 1, { ...this.form });
                }
            }
            this.cancelForm();
        },
        cancelForm() {
            this.formMode = 'tambah';
            this.form = { id: null, kodeMK: '', namaMK: '', kategori: '', upbjj: '', lokasiRak: '', qty: 0, safety: 0, catatanHTML: '' };
            this.errors = [];
        }
    }
});