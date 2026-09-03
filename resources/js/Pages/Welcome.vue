<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { ref, computed } from 'vue';
import {
    provinces,
    regencies,
    districts,
    villages,
    sampleOfficials,
} from '@/data/indonesiaRegions';

// Layout & Composite Components
import AppLayout from '@/Layouts/AppLayout.vue';
import RegionSearchForm from '@/Components/composite/RegionSearchForm.vue';
import OfficialsList from '@/Components/composite/OfficialsList.vue';

// Icons
import { RotateCcw, Flag } from 'lucide-vue-next';

defineProps({
    appName: {
        type: String,
        default: 'TanyaWarga',
    },
});

// State form pencarian
const selectedProvince = ref('');
const selectedRegency = ref('');
const selectedDistrict = ref('');
const selectedVillage = ref('');

const isSearching = ref(false);
const hasSearched = ref(false);
const searchResults = ref([]);
const searchLocationSummary = ref('');

// Computed names
const getProvinceName = computed(() => provinces.find((p) => p.id === selectedProvince.value)?.name || '');
const getRegencyName = computed(() => (regencies[selectedProvince.value] || []).find((r) => r.id === selectedRegency.value)?.name || '');
const getDistrictName = computed(() => (districts[selectedRegency.value] || []).find((d) => d.id === selectedDistrict.value)?.name || '');
const getVillageName = computed(() => (villages[selectedDistrict.value] || []).find((v) => v.id === selectedVillage.value)?.name || '');

const handleSearch = () => {
    if (!selectedProvince.value || !selectedRegency.value) return;

    isSearching.value = true;
    hasSearched.value = false;

    setTimeout(() => {
        const parts = [
            getVillageName.value ? `Kel. ${getVillageName.value}` : null,
            getDistrictName.value ? `Kec. ${getDistrictName.value}` : null,
            getRegencyName.value,
            getProvinceName.value,
        ].filter(Boolean);

        searchLocationSummary.value = parts.join(', ');
        searchResults.value = sampleOfficials;
        isSearching.value = false;
        hasSearched.value = true;

        setTimeout(() => {
            const el = document.getElementById('hasil-pejabat');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    }, 250);
};

const resetForm = () => {
    selectedProvince.value = '';
    selectedRegency.value = '';
    selectedDistrict.value = '';
    selectedVillage.value = '';
    hasSearched.value = false;
    searchResults.value = [];
};

const loadDemo = () => {
    selectedProvince.value = 'dki';
    selectedRegency.value = 'jaksel';
    selectedDistrict.value = 'kby_baru';
    selectedVillage.value = 'senayan';
    handleSearch();
};
</script>

<template>
    <Head title="TanyaWarga - Cari Pejabat Administrasi Sekitar" />

    <AppLayout>
        <!-- Header Actions Slot -->
        <template #header-actions>
            <!-- Reset Button when form is filled -->
            <button
                v-if="selectedProvince"
                @click="resetForm"
                class="text-xs sm:text-sm text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg transition flex items-center gap-1 font-semibold"
                title="Atur ulang isian wilayah"
            >
                <RotateCcw class="h-3.5 w-3.5 text-amber-600" />
                <span>Reset</span>
            </button>

            <!-- Menu Link: Laporan Warga -->
            <Link
                href="/laporanwarga"
                class="text-xs sm:text-sm text-amber-800 bg-amber-50 hover:bg-amber-100 active:bg-amber-200 border border-amber-200/80 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg transition flex items-center gap-1.5 font-semibold"
                title="Laporkan nomor atau data pejabat tidak aktif"
            >
                <Flag class="h-3.5 w-3.5 text-amber-600" />
                <span>Lapor Data</span>
            </Link>

            <!-- Login Link -->
            <Link
                href="/login"
                class="text-xs sm:text-sm text-slate-600 hover:text-emerald-700 px-2 sm:px-2.5 py-1 sm:py-1.5 transition font-medium"
            >
                Masuk
            </Link>
        </template>

        <!-- Hero Section Responsif (Infinix Note 40 -> iPad Pro / XPAD -> MacBook 13"-15") -->
        <section class="text-center pt-2 sm:pt-4 pb-1 space-y-2 sm:space-y-3">
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-emerald-600">
                TanyaWarga
            </h1>
            <p class="text-xs sm:text-sm lg:text-base text-slate-600 max-w-sm sm:max-w-xl mx-auto leading-relaxed">
                Cari kontak dan lokasi pejabat sekitar untuk kemudahan urusan administrasi warga.
            </p>
        </section>

        <!-- Region Search Composite Form with embedded Contoh button -->
        <RegionSearchForm
            v-model:province="selectedProvince"
            v-model:regency="selectedRegency"
            v-model:district="selectedDistrict"
            v-model:village="selectedVillage"
            :is-searching="isSearching"
            @search="handleSearch"
            @load-demo="loadDemo"
        />

        <!-- Officials List Composite Component (1 col mobile, 2 cols tablet, 3 cols laptop) -->
        <OfficialsList
            v-if="hasSearched"
            :officials="searchResults"
            :location-summary="searchLocationSummary"
            @close="hasSearched = false"
        />
    </AppLayout>
</template>
