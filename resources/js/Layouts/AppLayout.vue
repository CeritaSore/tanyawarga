<script setup>
import { Link } from '@inertiajs/vue3';
import { Flag, Sparkles } from 'lucide-vue-next';

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
    <div class="min-h-screen bg-white text-slate-900 antialiased flex flex-col justify-between">
        <!-- Minimalist Public Header -->
        <header class="w-full bg-white border-b border-slate-100 sticky top-0 z-30 shadow-xs">
            <div class="max-w-xl mx-auto px-4 h-14 flex items-center justify-between">
                <!-- Brand Logo -->
                <Link href="/" class="flex items-center gap-2">
                    <span class="h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
                    <span class="font-bold text-lg tracking-tight text-slate-900">
                        Tanya<span class="text-emerald-600">Warga</span>
                    </span>
                </Link>

                <!-- Navigation Actions -->
                <div class="flex items-center gap-2">
                    <slot name="header-actions">
                        <!-- Menu Link: Laporan Warga -->
                        <Link
                            href="/laporanwarga"
                            class="text-xs text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2.5 py-1 rounded-lg transition flex items-center gap-1 font-semibold"
                            title="Laporkan nomor atau data pejabat tidak aktif"
                        >
                            <Flag class="h-3 w-3 text-amber-600" />
                            <span>Lapor</span>
                        </Link>

                        <!-- Login Link -->
                        <Link
                            href="/login"
                            class="text-xs text-slate-600 hover:text-emerald-700 px-2 py-1 transition font-medium"
                        >
                            Masuk
                        </Link>
                    </slot>
                </div>
            </div>
        </header>

        <!-- Main Body -->
        <main class="max-w-xl w-full mx-auto px-4 py-6 flex-1 space-y-6">
            <slot />
        </main>

        <!-- Minimalist Footer -->
        <footer class="w-full border-t border-slate-100 bg-white py-4 text-center text-xs text-slate-400">
            <div class="max-w-xl mx-auto px-4 flex items-center justify-between">
                <span>&copy; TanyaWarga</span>
                <div class="flex items-center gap-3">
                    <Link href="/laporanwarga" class="hover:text-slate-600 hover:underline">
                        Laporan Data
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
