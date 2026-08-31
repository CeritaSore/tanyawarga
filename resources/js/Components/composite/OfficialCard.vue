<script setup>
import { Link } from '@inertiajs/vue3';
import {
    MapPin,
    Navigation,
    MessageCircle,
    Flag,
} from 'lucide-vue-next';

const props = defineProps({
    official: {
        type: Object,
        required: true,
    },
    locationSummary: {
        type: String,
        default: '',
    },
});

const getGmapsUrl = () => {
    const query = `${props.official.gmapsAddress || props.official.address}, ${props.locationSummary}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
};

const getWhatsappUrl = () => {
    const loc = props.locationSummary || 'wilayah setempat';
    const text = `Halo Bapak/Ibu ${props.official.name} (${props.official.role}), saya warga dari ${loc}. Mohon informasi terkait pengurusan administrasi warga. Terima kasih.`;
    return `https://wa.me/${props.official.phone}?text=${encodeURIComponent(text)}`;
};

const getReportUrl = () => {
    const target = `${props.official.name} (${props.official.role})`;
    return `/laporanwarga?pejabat=${encodeURIComponent(target)}&wilayah=${encodeURIComponent(props.locationSummary)}`;
};
</script>

<template>
    <div class="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3 transition hover:border-slate-300">
        <!-- Top Info -->
        <div class="flex items-start justify-between gap-3">
            <div class="flex items-start gap-3">
                <div class="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold flex items-center justify-center text-xs flex-shrink-0">
                    {{ official.initials }}
                </div>
                <div class="space-y-0.5">
                    <span class="inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md">
                        {{ official.role }}
                    </span>
                    <h3 class="text-sm font-bold text-slate-900 leading-tight pt-0.5">
                        {{ official.name }}
                    </h3>
                    <p class="text-xs text-slate-500 flex items-center gap-1 pt-0.5">
                        <MapPin class="h-3 w-3 text-slate-400 flex-shrink-0" />
                        {{ official.locationType }}: {{ official.address }}
                    </p>
                </div>
            </div>
        </div>

        <!-- Layanan Tag Minimalist -->
        <div class="pt-1 flex flex-wrap gap-1">
            <span
                v-for="(svc, sIdx) in official.services"
                :key="sIdx"
                class="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full"
            >
                {{ svc }}
            </span>
        </div>

        <!-- 2 Action Buttons: Standard Industry Colors -->
        <div class="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
            <!-- Tombol 1: Datangi Rumah (Google Maps - Netral / Outline) -->
            <a
                :href="getGmapsUrl()"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-1.5 h-9 px-3 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 text-xs font-semibold transition active:scale-95 text-center shadow-2xs"
            >
                <Navigation class="h-3.5 w-3.5 text-slate-600 flex-shrink-0" />
                <span>Datangi Rumah</span>
            </a>

            <!-- Tombol 2: Hubungi Pejabat (WhatsApp - Sukses / Hijau) -->
            <a
                :href="getWhatsappUrl()"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-1.5 h-9 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-semibold transition active:scale-95 text-center shadow-xs"
            >
                <MessageCircle class="h-3.5 w-3.5 text-white flex-shrink-0" />
                <span>Hubungi Pejabat</span>
            </a>
        </div>

        <!-- Laporkan Data Tidak Sesuai -->
        <div class="pt-1 text-right">
            <Link
                :href="getReportUrl()"
                class="inline-flex items-center gap-1 text-[11px] text-amber-700 hover:text-amber-800 hover:underline font-medium"
            >
                <Flag class="h-3 w-3 text-amber-500" />
                <span>Laporkan jika data tidak sesuai</span>
            </Link>
        </div>
    </div>
</template>
