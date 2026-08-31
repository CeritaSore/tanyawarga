export const provinces = [
    { id: 'dki', name: 'DKI Jakarta' },
    { id: 'jabar', name: 'Jawa Barat' },
    { id: 'jateng', name: 'Jawa Tengah' },
    { id: 'jatim', name: 'Jawa Timur' },
    { id: 'diy', name: 'DI Yogyakarta' },
    { id: 'banten', name: 'Banten' },
    { id: 'bali', name: 'Bali' },
    { id: 'sumut', name: 'Sumatera Utara' },
];

export const regencies = {
    dki: [
        { id: 'jaksel', name: 'Jakarta Selatan' },
        { id: 'jakpus', name: 'Jakarta Pusat' },
        { id: 'jaktim', name: 'Jakarta Timur' },
        { id: 'jakbar', name: 'Jakarta Barat' },
        { id: 'jakut', name: 'Jakarta Utara' },
    ],
    jabar: [
        { id: 'bdg', name: 'Kota Bandung' },
        { id: 'bgr', name: 'Kota Bogor' },
        { id: 'bks', name: 'Kota Bekasi' },
        { id: 'dpk', name: 'Kota Depok' },
        { id: 'cmi', name: 'Kota Cimahi' },
        { id: 'kbb', name: 'Kab. Bandung Barat' },
    ],
    jateng: [
        { id: 'smg', name: 'Kota Semarang' },
        { id: 'slo', name: 'Kota Surakarta' },
        { id: 'mgl', name: 'Kota Magelang' },
        { id: 'bms', name: 'Kab. Banyumas' },
    ],
    jatim: [
        { id: 'sby', name: 'Kota Surabaya' },
        { id: 'mlg', name: 'Kota Malang' },
        { id: 'sda', name: 'Kab. Sidoarjo' },
        { id: 'gry', name: 'Kab. Gresik' },
    ],
    diy: [
        { id: 'yk', name: 'Kota Yogyakarta' },
        { id: 'slm', name: 'Kab. Sleman' },
        { id: 'btl', name: 'Kab. Bantul' },
    ],
    banten: [
        { id: 'tgr', name: 'Kota Tangerang' },
        { id: 'tangsel', name: 'Kota Tangerang Selatan' },
        { id: 'srg', name: 'Kota Serang' },
    ],
    bali: [
        { id: 'dps', name: 'Kota Denpasar' },
        { id: 'bdg_bali', name: 'Kab. Badung' },
        { id: 'gnr', name: 'Kab. Gianyar' },
    ],
    sumut: [
        { id: 'mdn', name: 'Kota Medan' },
        { id: 'ds', name: 'Kab. Deli Serdang' },
    ],
};

export const districts = {
    // Jakarta Selatan
    jaksel: [
        { id: 'kby_baru', name: 'Kebayoran Baru' },
        { id: 'kby_lama', name: 'Kebayoran Lama' },
        { id: 'cilandak', name: 'Cilandak' },
        { id: 'tebet', name: 'Tebet' },
        { id: 'setiabudi', name: 'Setiabudi' },
    ],
    // Jakarta Pusat
    jakpus: [
        { id: 'menteng', name: 'Menteng' },
        { id: 'tanah_abang', name: 'Tanah Abang' },
        { id: 'kemayoran', name: 'Kemayoran' },
    ],
    // Bandung
    bdg: [
        { id: 'coblong', name: 'Coblong' },
        { id: 'sukajadi', name: 'Sukajadi' },
        { id: 'lengkong', name: 'Lengkong' },
    ],
    // Depok
    dpk: [
        { id: 'beji', name: 'Beji' },
        { id: 'pancoran_mas', name: 'Pancoran Mas' },
        { id: 'cimanggis', name: 'Cimanggis' },
    ],
    // Surabaya
    sby: [
        { id: 'gubeng', name: 'Gubeng' },
        { id: 'wonokromo', name: 'Wonokromo' },
        { id: 'tegal_sari', name: 'Tegalsari' },
    ],
    // Sleman
    slm: [
        { id: 'depok_slm', name: 'Depok' },
        { id: 'mlati', name: 'Mlati' },
        { id: 'gamping', name: 'Gamping' },
    ],
    // Tangsel
    tangsel: [
        { id: 'serpong', name: 'Serpong' },
        { id: 'ciputat', name: 'Ciputat' },
        { id: 'pamulang', name: 'Pamulang' },
    ],
};

export const villages = {
    // Kebayoran Baru
    kby_baru: [
        { id: 'senayan', name: 'Senayan' },
        { id: 'selong', name: 'Selong' },
        { id: 'melawai', name: 'Melawai' },
        { id: 'petogogan', name: 'Petogogan' },
        { id: 'gandaria_utara', name: 'Gandaria Utara' },
    ],
    // Tebet
    tebet: [
        { id: 'tebet_barat', name: 'Tebet Barat' },
        { id: 'tebet_timur', name: 'Tebet Timur' },
        { id: 'menteng_dalam', name: 'Menteng Dalam' },
    ],
    // Menteng
    menteng: [
        { id: 'menteng_kel', name: 'Menteng' },
        { id: 'pegangsaan', name: 'Pegangsaan' },
        { id: 'cikini', name: 'Cikini' },
    ],
    // Coblong
    coblong: [
        { id: 'dago', name: 'Dago' },
        { id: 'sadang_serang', name: 'Sadang Serang' },
        { id: 'sekeloa', name: 'Sekeloa' },
    ],
    // Beji
    beji: [
        { id: 'pondok_cina', name: 'Pondok Cina' },
        { id: 'kukusan', name: 'Kukusan' },
        { id: 'kemiri_muka', name: 'Kemiri Muka' },
    ],
    // Gubeng
    gubeng: [
        { id: 'gubeng_kel', name: 'Gubeng' },
        { id: 'mojo', name: 'Mojo' },
        { id: 'airlangga', name: 'Airlangga' },
    ],
    // Serpong
    serpong: [
        { id: 'bsd', name: 'Lengkong Gudang' },
        { id: 'rawabuntu', name: 'Rawa Buntu' },
        { id: 'serpong_kel', name: 'Serpong' },
    ],
    // Depok Sleman
    depok_slm: [
        { id: 'caturtunggal', name: 'Caturtunggal' },
        { id: 'maguwoharjo', name: 'Maguwoharjo' },
        { id: 'condongcatur', name: 'Condongcatur' },
    ],
};

export const sampleOfficials = [
    {
        id: 1,
        role: 'Lurah / Kepala Desa',
        name: 'H. Bambang Sugiarto, S.STP',
        initials: 'BS',
        locationType: 'Rumah Dinas & Kantor Kelurahan',
        address: 'Jl. Praja Utama No. 12',
        gmapsAddress: 'Kantor Kelurahan Senayan Jakarta Selatan',
        phone: '6281234567890',
        displayPhone: '0812-3456-7890',
        services: ['Surat Pengantar Nikah', 'SKTM', 'Surat Domisili'],
    },
    {
        id: 2,
        role: 'Ketua RW 03',
        name: 'Ir. Ahmad Zulkarnaen',
        initials: 'AZ',
        locationType: 'Kediaman / Rumah Ketua RW',
        address: 'Jl. Kutilang Blok C3 No. 8',
        gmapsAddress: 'Jl. Kutilang Blok C3 Kebayoran Baru',
        phone: '6281388991122',
        displayPhone: '0813-8899-1122',
        services: ['Surat Pengantar RT/RW', 'Surat Keterangan Kematian', 'Izin Keramaian'],
    },
    {
        id: 3,
        role: 'Sekretaris Kelurahan (Sekkel)',
        name: 'Dra. Hj. Ratna Wulandari',
        initials: 'RW',
        locationType: 'Kantor Kelurahan',
        address: 'Gedung Pelayanan Lt. 1, Jl. Praja Utama No. 12',
        gmapsAddress: 'Kantor Kelurahan Senayan Jakarta Selatan',
        phone: '6285711223344',
        displayPhone: '0857-1122-3344',
        services: ['Legalisir Dokumen', 'Pendaftaran KTP & KK Baru', 'Ahli Waris'],
    },
    {
        id: 4,
        role: 'Bhabinkamtibmas (Polsek)',
        name: 'Aiptu Agus Setiawan',
        initials: 'AS',
        locationType: 'Pos Kamtibmas / Kediaman Dinas',
        address: 'Pos Polisi Subsektor Wilayah',
        gmapsAddress: 'Pos Polisi Subsektor Kebayoran Baru',
        phone: '6285211223344',
        displayPhone: '0852-1122-3344',
        services: ['Laporan Kehilangan Cepat', 'Mediasi Masalah Warga', 'Keamanan'],
    },
    {
        id: 5,
        role: 'Babinsa (Koramil)',
        name: 'Serka Dedi Kurniawan',
        initials: 'DK',
        locationType: 'Posko Babinsa Wilayah',
        address: 'Jl. Teratai Mas No. 5',
        gmapsAddress: 'Koramil Kebayoran Baru Jakarta Selatan',
        phone: '6287899005544',
        displayPhone: '0878-9900-5544',
        services: ['Ketertiban Lingkungan', 'Bantuan Tanggap Darurat', 'Sosial Warga'],
    },
];
