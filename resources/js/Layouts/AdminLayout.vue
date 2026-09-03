<script setup>
import { Link } from '@inertiajs/vue3';
import {
    ArrowLeft,
    Search,
    Flag,
    LogOut,
} from 'lucide-vue-next';

defineProps({
    title: {
        type: String,
        default: 'Dashboard Admin',
    },
});
</script>

<template>
    <div class="min-h-screen bg-slate-50/50 text-slate-900 antialiased flex flex-col justify-between selection:bg-emerald-100 selection:text-emerald-900">
        <!-- Minimalist Dashboard Header -->
        <header class="w-full bg-white/95 backdrop-blur-xs border-b border-slate-100 sticky top-0 z-30 shadow-xs">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
                <div class="flex items-center gap-3 sm:gap-4">
                    <Link
                        href="/"
                        class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-600 transition"
                    >
                        <ArrowLeft class="h-4 w-4" />
                        <span class="hidden sm:inline">Beranda</span>
                    </Link>

                    <div class="h-4 w-px bg-slate-200" />

                    <div class="flex items-center gap-2">
                        <span class="h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
                        <span class="font-bold text-sm sm:text-base text-slate-900">
                            Dashboard <span class="text-emerald-600">Admin</span>
                        </span>
                    </div>
                </div>

                <div class="flex items-center gap-2 sm:gap-3">
                    <Link
                        href="/laporanwarga"
                        class="text-xs sm:text-sm text-slate-600 hover:text-emerald-700 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-slate-200 bg-white transition flex items-center gap-1 font-medium"
                    >
                        <Flag class="h-3.5 w-3.5 text-amber-500" />
                        <span class="hidden sm:inline">Laporan Warga</span>
                        <span class="sm:hidden">Lapor</span>
                    </Link>

                    <Link
                        href="/"
                        class="text-xs sm:text-sm text-slate-700 bg-white hover:bg-slate-50 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-slate-200 transition flex items-center gap-1 font-medium"
                    >
                        <Search class="h-3.5 w-3.5 text-slate-500" />
                        <span>Pencarian</span>
                    </Link>

                    <Link
                        href="/login"
                        class="text-xs sm:text-sm text-rose-600 bg-rose-50 hover:bg-rose-100 active:bg-rose-200 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-rose-200/80 transition flex items-center gap-1 font-semibold"
                        title="Keluar dari sesi dashboard"
                    >
                        <LogOut class="h-3.5 w-3.5" />
                        <span class="hidden sm:inline">Keluar</span>
                    </Link>
                </div>
            </div>
        </header>

        <!-- Main Body: Responsive Container -->
        <main class="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 flex-1 space-y-6">
            <slot />
        </main>

        <!-- Minimalist Footer -->
        <footer class="w-full border-t border-slate-200/70 bg-white py-4 sm:py-5 text-center text-xs text-slate-400 mt-auto">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
                <span>&copy; TanyaWarga &mdash; Portal Administrasi Pejabat Publik</span>
                <span>Dashboard Internal</span>
            </div>
        </footer>
    </div>
</template>
