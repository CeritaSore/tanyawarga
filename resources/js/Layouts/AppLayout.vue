<script setup>
import { Link } from '@inertiajs/vue3';
import { Flag } from 'lucide-vue-next';

defineProps({
    title: {
        type: String,
        default: '',
    },
    showDemoButton: {
        type: Boolean,
        default: false,
    },
    hasActiveFilter: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['reset-filter', 'load-demo']);
</script>

<template>
    <div class="min-h-screen bg-slate-50/50 text-slate-900 antialiased flex flex-col justify-between selection:bg-emerald-100 selection:text-emerald-900">
        <!-- Responsive Header (Mobile to Laptop) -->
        <header class="w-full bg-white/95 backdrop-blur-xs border-b border-slate-100 sticky top-0 z-30 shadow-xs">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
                <!-- Brand Logo -->
                <Link href="/" class="flex items-center gap-2 group">
                    <span class="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-600 group-hover:scale-110 transition-transform"></span>
                    <span class="font-bold text-base sm:text-lg lg:text-xl tracking-tight text-slate-900">
                        Tanya<span class="text-emerald-600">Warga</span>
                    </span>
                </Link>

                <!-- Navigation Actions -->
                <div class="flex items-center gap-2 sm:gap-3">
                    <slot name="header-actions">
                        <!-- Menu Link: Laporan Warga -->
                        <Link
                            href="/laporanwarga"
                            class="text-xs sm:text-sm text-amber-800 bg-amber-50 hover:bg-amber-100 active:bg-amber-200 border border-amber-200/80 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg transition flex items-center gap-1.5 font-semibold shadow-2xs"
                            title="Laporkan nomor atau data pejabat tidak aktif"
                        >
                            <Flag class="h-3.5 w-3.5 text-amber-600" />
                            <span>Lapor Data</span>
                        </Link>

                        <!-- Login Link -->
                        <Link
                            href="/login"
                            class="text-xs sm:text-sm text-slate-600 hover:text-emerald-700 px-2.5 py-1.5 transition font-medium"
                        >
                            Masuk
                        </Link>
                    </slot>
                </div>
            </div>
        </header>

        <!-- Main Body: Fluid responsive container (Infinix Note 40 -> iPad Pro / Infinix XPAD -> MacBook 13"-15") -->
        <main class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7 lg:py-9 flex-1 space-y-6 sm:space-y-8">
            <slot />
        </main>

        <!-- Responsive Minimalist Footer -->
        <footer class="w-full border-t border-slate-200/70 bg-white py-4 sm:py-6 text-xs text-slate-400 mt-auto">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
                <div class="flex items-center gap-2">
                    <span class="font-semibold text-slate-600">TanyaWarga</span>
                    <span>&mdash;</span>
                    <span>Kemudahan Administrasi Publik</span>
                </div>
                <div class="flex items-center gap-4 text-xs">
                    <Link href="/laporanwarga" class="hover:text-slate-600 hover:underline">
                        Laporan Warga
                    </Link>
                    <span>&bull;</span>
                    <Link href="/login" class="hover:text-slate-600 hover:underline">
                        Portal Petugas
                    </Link>
                </div>
            </div>
        </footer>
    </div>
</template>
