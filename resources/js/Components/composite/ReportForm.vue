<script setup>
import { ref, onMounted } from 'vue';
import { Link } from '@inertiajs/vue3';
import {
    provinces,
    regencies,
} from '@/data/indonesiaRegions';

// UI Components
import { Button } from '@/Components/ui/button';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
    SelectGroup,
} from '@/Components/ui/select';

// Icons
import {
    Send,
    RotateCcw,
    CheckCircle2,
    Search,
} from 'lucide-vue-next';

// State form wilayah
const selectedProvince = ref('');
const selectedRegency = ref('');

// State form laporan
const targetOfficial = ref('');
const issueType = ref('Nomor WhatsApp Salah / Tidak Aktif');
const correctionNotes = ref('');
const citizenContact = ref('');

const isSubmitting = ref(false);
const isSubmitted = ref(false);

const issueTypes = [
    'Nomor WhatsApp Salah / Tidak Aktif',
    'Alamat Rumah / Kantor Berpindah',
    'Pejabat Sudah Purna Tugas / Berganti',
    'Jenis Layanan Administrasi Tidak Sesuai',
    'Lainnya',
];

onMounted(() => {
    if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const pejabatParam = params.get('pejabat');
        if (pejabatParam) {
            targetOfficial.value = decodeURIComponent(pejabatParam);
        }
        const wilayahParam = params.get('wilayah');
        if (wilayahParam) {
            correctionNotes.value = `Wilayah terkait: ${decodeURIComponent(wilayahParam)}\n`;
        }
    }
});

const submitReport = () => {
    if (!correctionNotes.value.trim() || !targetOfficial.value.trim()) return;

    isSubmitting.value = true;

    setTimeout(() => {
        isSubmitting.value = false;
        isSubmitted.value = true;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
};

const resetForm = () => {
    targetOfficial.value = '';
    correctionNotes.value = '';
    citizenContact.value = '';
    selectedProvince.value = '';
    selectedRegency.value = '';
    isSubmitted.value = false;
};
</script>

<template>
    <div>
        <!-- Success State Banner -->
        <section
            v-if="isSubmitted"
            class="bg-white rounded-2xl border border-emerald-200 p-6 shadow-xs space-y-4 text-center"
        >
            <div class="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 class="h-6 w-6" />
            </div>
            <div class="space-y-1">
                <h2 class="text-lg font-bold text-slate-900">
                    Laporan Berhasil Terkirim!
                </h2>
                <p class="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                    Terima kasih banyak atas kepedulian Anda. Laporan koreksi data pejabat ini akan segera diverifikasi oleh tim verifikator TanyaWarga.
                </p>
            </div>

            <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                <Button
                    variant="warning"
                    size="sm"
                    @click="resetForm"
                    class="w-full sm:w-auto h-9 text-xs"
                >
                    <RotateCcw class="h-3.5 w-3.5 mr-1" />
                    Kirim Laporan Lainnya
                </Button>

                <Link
                    href="/"
                    class="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 h-9 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition"
                >
                    <Search class="h-3.5 w-3.5" />
                    Kembali ke Pencarian
                </Link>
            </div>
        </section>

        <!-- Report Form Card -->
        <section
            v-else
            class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4"
        >
            <!-- Form Inputs -->
            <div class="space-y-3.5">
                <!-- 1. Pejabat / Lokasi -->
                <div class="space-y-1">
                    <label class="text-xs font-medium text-slate-700 flex items-center justify-between">
                        <span>Nama Pejabat / Jabatan yang Dilaporkan <span class="text-rose-500">*</span></span>
                        <span class="text-[11px] text-slate-400">Wajib</span>
                    </label>
                    <input
                        v-model="targetOfficial"
                        type="text"
                        placeholder="Contoh: Lurah Senayan atau Ketua RW 03"
                        class="w-full h-10 px-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                </div>

                <!-- 2. Wilayah (Opsional) -->
                <div class="space-y-2 pt-1 pb-1 border-y border-slate-100">
                    <span class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                        Pilih Lokasi Wilayah (Opsional)
                    </span>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <Select v-model="selectedProvince">
                            <SelectTrigger class="h-9 text-xs border-slate-200 bg-white">
                                <SelectValue placeholder="Pilih Provinsi..." />
                            </SelectTrigger>
                            <SelectContent class="bg-white">
                                <SelectGroup>
                                    <SelectItem
                                        v-for="prov in provinces"
                                        :key="prov.id"
                                        :value="prov.id"
                                    >
                                        {{ prov.name }}
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Select
                            v-model="selectedRegency"
                            :disabled="!selectedProvince"
                        >
                            <SelectTrigger
                                class="h-9 text-xs border-slate-200 bg-white"
                                :class="!selectedProvince ? 'bg-slate-50 opacity-60' : ''"
                            >
                                <SelectValue placeholder="Pilih Kota/Kab..." />
                            </SelectTrigger>
                            <SelectContent class="bg-white">
                                <SelectGroup>
                                    <SelectItem
                                        v-for="reg in (regencies[selectedProvince] || [])"
                                        :key="reg.id"
                                        :value="reg.id"
                                    >
                                        {{ reg.name }}
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <!-- 3. Jenis Masalah -->
                <div class="space-y-1">
                    <label class="text-xs font-medium text-slate-700">
                        Jenis Masalah Data
                    </label>
                    <Select v-model="issueType">
                        <SelectTrigger class="h-10 text-sm border-slate-200 bg-white">
                            <SelectValue placeholder="Pilih jenis kendala data..." />
                        </SelectTrigger>
                        <SelectContent class="bg-white">
                            <SelectGroup>
                                <SelectItem
                                    v-for="(issue, iIdx) in issueTypes"
                                    :key="iIdx"
                                    :value="issue"
                                >
                                    {{ issue }}
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <!-- 4. Catatan Koreksi -->
                <div class="space-y-1">
                    <label class="text-xs font-medium text-slate-700 flex items-center justify-between">
                        <span>Informasi / Koreksi yang Benar <span class="text-rose-500">*</span></span>
                        <span class="text-[11px] text-slate-400">Wajib</span>
                    </label>
                    <textarea
                        v-model="correctionNotes"
                        rows="4"
                        placeholder="Tuliskan nomor WhatsApp aktif yang baru, alamat kantor terkini, atau nama pejabat pengganti yang benar..."
                        class="w-full p-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                    ></textarea>
                </div>

                <!-- 5. Kontak Pelapor -->
                <div class="space-y-1">
                    <label class="text-xs font-medium text-slate-700">
                        Kontak Anda (Nama / No. WhatsApp - Opsional)
                    </label>
                    <input
                        v-model="citizenContact"
                        type="text"
                        placeholder="Budi - 081234567890"
                        class="w-full h-10 px-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2">
                <div class="flex items-center gap-2 w-full sm:w-auto">
                    <!-- Reset Action -->
                    <Button
                        variant="warning"
                        size="default"
                        @click="resetForm"
                        class="h-10 px-3 text-xs"
                    >
                        <RotateCcw class="h-3.5 w-3.5 mr-1" />
                        Reset
                    </Button>

                    <!-- Cancel Action -->
                    <Link
                        href="/"
                        class="inline-flex items-center justify-center h-10 px-3 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition"
                    >
                        Batal
                    </Link>
                </div>

                <!-- Submit Action -->
                <Button
                    variant="success"
                    size="default"
                    :disabled="!correctionNotes.trim() || !targetOfficial.trim() || isSubmitting"
                    @click="submitReport"
                    class="w-full sm:w-auto h-10 px-5 text-xs font-semibold shadow-xs"
                >
                    <Send class="h-3.5 w-3.5 mr-1.5" />
                    <span v-if="!isSubmitting">Kirim Laporan</span>
                    <span v-else>Mengirimkan...</span>
                </Button>
            </div>
        </section>
    </div>
</template>
