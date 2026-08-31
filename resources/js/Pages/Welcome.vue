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
import { RotateCcw, Flag, Sparkles } from 'lucide-vue-next';

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
                class="text-xs text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2.5 py-1 rounded-lg transition flex items-center gap-1 font-medium"
                title="Atur ulang isian wilayah"
            >
                <RotateCcw class="h-3 w-3 text-amber-600" />
                <span>Reset</span>
            </button>

            <!-- Menu Link: Laporan Warga -->
            <Link
                href="/laporanwarga"
                class="text-xs text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2.5 py-1 rounded-lg transition flex items-center gap-1 font-semibold"
                title="Laporkan nomor atau data pejabat tidak aktif"
            >
                <Flag class="h-3 w-3 text-amber-600" />
                <span>Lapor Data</span>
            </Link>

            <!-- Neutral Action: Contoh Data -->
            <button
                @click="loadDemo"
                class="text-xs text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-lg transition flex items-center gap-1 font-medium"
            >
                <Sparkles class="h-3 w-3 text-emerald-600" />
                <span>Contoh</span>
            </button>

            <!-- Login Link -->
            <Link
                href="/login"
                class="text-xs text-slate-600 hover:text-emerald-700 px-2 py-1 transition font-medium"
            >
                Masuk
            </Link>
        </template>

        <!-- Hero Section Minimalist -->
        <section class="text-center pt-2 pb-1 space-y-2">
            <h1 class="text-3xl font-extrabold tracking-tight text-emerald-600 sm:text-4xl">
                TanyaWarga
            </h1>
            <p class="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Cari kontak dan lokasi pejabat sekitar untuk kemudahan urusan administrasi warga.
            </p>
        </section>

        <!-- Region Search Composite Form -->
        <RegionSearchForm
            v-model:province="selectedProvince"
            v-model:regency="selectedRegency"
            v-model:district="selectedDistrict"
            v-model:village="selectedVillage"
            :is-searching="isSearching"
            @search="handleSearch"
        />

        <!-- Officials List Composite Component -->
        <OfficialsList
            v-if="hasSearched"
            :officials="searchResults"
            :location-summary="searchLocationSummary"
            @close="hasSearched = false"
        />
    </AppLayout>
</template>
