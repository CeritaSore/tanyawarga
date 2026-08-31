<script setup>
import OfficialCard from './OfficialCard.vue';
import { Building2, MapPin, X } from 'lucide-vue-next';

defineProps({
    officials: {
        type: Array,
        required: true,
    },
    locationSummary: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['close']);
</script>

<template>
    <section id="hasil-pejabat" class="space-y-4 pt-2">
        <!-- Summary Header -->
        <div class="flex items-center justify-between px-1">
            <div>
                <h2 class="text-base font-bold text-slate-900 flex items-center gap-1.5">
                    <Building2 class="h-4 w-4 text-emerald-600" />
                    Daftar Pejabat Wilayah
                </h2>
                <p class="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin class="h-3 w-3 text-slate-400" />
                    {{ locationSummary }}
                </p>
            </div>

            <!-- Danger Action: Tutup Hasil (Merah) -->
            <button
                @click="emit('close')"
                class="text-xs text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-2 py-1 rounded-lg transition flex items-center gap-1 font-medium"
                title="Tutup hasil pencarian"
            >
                <X class="h-3 w-3" />
                Tutup
            </button>
        </div>

        <!-- List of Official Cards -->
        <div class="space-y-3">
            <OfficialCard
                v-for="official in officials"
                :key="official.id"
                :official="official"
                :location-summary="locationSummary"
            />
        </div>
    </section>
</template>
