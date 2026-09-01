<script setup>
import { computed, watch } from 'vue';
import {
    provinces,
    regencies,
    districts,
    villages,
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
    SelectLabel,
} from '@/Components/ui/select';

// Icons
import { Search, Check, Sparkles } from 'lucide-vue-next';

const selectedProvince = defineModel('province', { type: String, default: '' });
const selectedRegency = defineModel('regency', { type: String, default: '' });
const selectedDistrict = defineModel('district', { type: String, default: '' });
const selectedVillage = defineModel('village', { type: String, default: '' });

const props = defineProps({
    isSearching: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['search', 'load-demo']);

// Cascading options
const availableRegencies = computed(() => {
    if (!selectedProvince.value) return [];
    return regencies[selectedProvince.value] || [];
});

const availableDistricts = computed(() => {
    if (!selectedRegency.value) return [];
    return districts[selectedRegency.value] || [];
});

const availableVillages = computed(() => {
    if (!selectedDistrict.value) return [];
    return villages[selectedDistrict.value] || [];
});

// Reset child selects on change
watch(selectedProvince, () => {
    selectedRegency.value = '';
    selectedDistrict.value = '';
    selectedVillage.value = '';
});

watch(selectedRegency, () => {
    selectedDistrict.value = '';
    selectedVillage.value = '';
});

watch(selectedDistrict, () => {
    selectedVillage.value = '';
});

const isSearchReady = computed(() => {
    return Boolean(selectedProvince.value && selectedRegency.value);
});
</script>

<template>
    <section class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4">
        <div class="flex items-center justify-between pb-2 border-b border-slate-100">
            <div class="flex items-center gap-2">
                <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Pilih Wilayah Domisili
                </span>
                <!-- Tombol Contoh di sebelah Pilih Wilayah Domisili -->
                <button
                    type="button"
                    @click="emit('load-demo')"
                    class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 active:bg-emerald-200 border border-emerald-200/80 transition active:scale-95 cursor-pointer"
                    title="Isi form otomatis dengan contoh data"
                >
                    <Sparkles class="h-3 w-3 text-emerald-600" />
                    <span>Contoh</span>
                </button>
            </div>
            <span class="text-[11px] text-slate-400">4 Langkah</span>
        </div>

        <!-- 4 Cascading Fields -->
        <div class="space-y-3">
            <!-- 1. Provinsi -->
            <div class="space-y-1">
                <label class="text-xs font-medium text-slate-700 flex items-center justify-between">
                    <span>1. Provinsi</span>
                    <span v-if="selectedProvince" class="text-emerald-600 text-[11px] flex items-center gap-0.5 font-medium">
                        <Check class="h-3 w-3" /> Terpilih
                    </span>
                </label>
                <Select v-model="selectedProvince">
                    <SelectTrigger class="h-11 text-sm border-slate-200 bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500">
                        <SelectValue placeholder="Pilih Provinsi..." />
                    </SelectTrigger>
                    <SelectContent class="bg-white">
                        <SelectGroup>
                            <SelectLabel>Provinsi di Indonesia</SelectLabel>
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
            </div>

            <!-- 2. Kota / Kabupaten -->
            <div class="space-y-1">
                <label class="text-xs font-medium text-slate-700 flex items-center justify-between">
                    <span>2. Kota / Kabupaten</span>
                    <span v-if="selectedRegency" class="text-emerald-600 text-[11px] flex items-center gap-0.5 font-medium">
                        <Check class="h-3 w-3" /> Terpilih
                    </span>
                </label>
                <Select
                    v-model="selectedRegency"
                    :disabled="!selectedProvince"
                >
                    <SelectTrigger
                        class="h-11 text-sm border-slate-200 bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                        :class="!selectedProvince ? 'bg-slate-50 text-slate-400 opacity-60' : ''"
                    >
                        <SelectValue placeholder="Pilih Kota / Kabupaten..." />
                    </SelectTrigger>
                    <SelectContent class="bg-white">
                        <SelectGroup>
                            <SelectLabel>Kota / Kabupaten</SelectLabel>
                            <SelectItem
                                v-for="reg in availableRegencies"
                                :key="reg.id"
                                :value="reg.id"
                            >
                                {{ reg.name }}
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <!-- 3. Kecamatan -->
            <div class="space-y-1">
                <label class="text-xs font-medium text-slate-700 flex items-center justify-between">
                    <span>3. Kecamatan</span>
                    <span v-if="selectedDistrict" class="text-emerald-600 text-[11px] flex items-center gap-0.5 font-medium">
                        <Check class="h-3 w-3" /> Terpilih
                    </span>
                </label>
                <Select
                    v-model="selectedDistrict"
                    :disabled="!selectedRegency"
                >
                    <SelectTrigger
                        class="h-11 text-sm border-slate-200 bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                        :class="!selectedRegency ? 'bg-slate-50 text-slate-400 opacity-60' : ''"
                    >
                        <SelectValue placeholder="Pilih Kecamatan..." />
                    </SelectTrigger>
                    <SelectContent class="bg-white">
                        <SelectGroup>
                            <SelectLabel>Kecamatan</SelectLabel>
                            <SelectItem
                                v-for="dist in availableDistricts"
                                :key="dist.id"
                                :value="dist.id"
                            >
                                {{ dist.name }}
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <!-- 4. Kelurahan -->
            <div class="space-y-1">
                <label class="text-xs font-medium text-slate-700 flex items-center justify-between">
                    <span>4. Kelurahan / Desa</span>
                    <span v-if="selectedVillage" class="text-emerald-600 text-[11px] flex items-center gap-0.5 font-medium">
                        <Check class="h-3 w-3" /> Terpilih
                    </span>
                </label>
                <Select
                    v-model="selectedVillage"
                    :disabled="!selectedDistrict"
                >
                    <SelectTrigger
                        class="h-11 text-sm border-slate-200 bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                        :class="!selectedDistrict ? 'bg-slate-50 text-slate-400 opacity-60' : ''"
                    >
                        <SelectValue placeholder="Pilih Kelurahan / Desa..." />
                    </SelectTrigger>
                    <SelectContent class="bg-white">
                        <SelectGroup>
                            <SelectLabel>Kelurahan / Desa</SelectLabel>
                            <SelectItem
                                v-for="vil in availableVillages"
                                :key="vil.id"
                                :value="vil.id"
                            >
                                {{ vil.name }}
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>

        <!-- Tombol Sukses/Primary: Cari Pejabat (Hijau) -->
        <div class="pt-2">
            <Button
                variant="success"
                size="lg"
                class="w-full h-12 rounded-xl text-sm font-semibold shadow-xs"
                :disabled="!isSearchReady || isSearching"
                @click="emit('search')"
            >
                <Search class="h-4 w-4 mr-1.5" />
                <span v-if="!isSearching">Cari Pejabat</span>
                <span v-else>Mencari Pejabat...</span>
            </Button>
        </div>
    </section>
</template>
