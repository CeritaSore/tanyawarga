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
                <h2 class="text-base sm:text-lg lg:text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Building2 class="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span>Daftar Pejabat Terkait</span>
                </h2>
                <p class="text-xs sm:text-sm text-slate-500 flex items-center gap-1.5 mt-0.5">
                    <MapPin class="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
                    <span>{{ locationSummary }}</span>
                </p>
            </div>

            <!-- Danger Action: Tutup Hasil (Merah) -->
            <button
                @click="emit('close')"
                class="text-xs sm:text-sm text-rose-600 bg-rose-50 hover:bg-rose-100 active:bg-rose-200 border border-rose-200 px-3 py-1.5 rounded-lg transition flex items-center gap-1 font-semibold"
                title="Tutup hasil pencarian"
            >
                <X class="h-3.5 w-3.5" />
                <span>Tutup</span>
            </button>
        </div>

        <!-- Responsive Card Grid: 1 col (Mobile) -> 2 cols (Tablet) -> 3 cols (Laptop/Desktop) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5">
            <OfficialCard
                v-for="official in officials"
                :key="official.id"
                :official="official"
                :location-summary="locationSummary"
            />
        </div>
    </section>
</template>
