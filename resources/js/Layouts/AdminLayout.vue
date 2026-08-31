<script setup>
import { Link } from '@inertiajs/vue3';
import {
    ArrowLeft,
    Search,
    Flag,
} from 'lucide-vue-next';

defineProps({
    title: {
        type: String,
        default: 'Dashboard Admin',
    },
});
</script>

<template>
    <div class="min-h-screen bg-white text-slate-900 antialiased flex flex-col justify-between">
        <!-- Minimalist Dashboard Header -->
        <header class="w-full bg-white border-b border-slate-100 sticky top-0 z-30 shadow-xs">
            <div class="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <Link
                        href="/"
                        class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-emerald-600 transition"
                    >
                        <ArrowLeft class="h-4 w-4" />
                        <span class="hidden sm:inline">Beranda</span>
                    </Link>

                    <div class="h-4 w-px bg-slate-200" />

                    <div class="flex items-center gap-2">
                        <span class="h-2 w-2 rounded-full bg-emerald-600"></span>
                        <span class="font-bold text-sm text-slate-900">
                            Dashboard <span class="text-emerald-600">Admin</span>
                        </span>
                    </div>
                </div>

                <div class="flex items-center gap-2">
                    <Link
                        href="/laporanwarga"
                        class="text-xs text-slate-600 hover:text-emerald-700 px-2.5 py-1 rounded-lg border border-slate-200 transition flex items-center gap-1 font-medium"
                    >
                        <Flag class="h-3 w-3 text-amber-500" />
                        <span>Laporan</span>
                    </Link>

                    <Link
                        href="/"
                        class="text-xs text-slate-700 bg-slate-50 hover:bg-slate-100 px-3 py-1 rounded-lg border border-slate-200 transition flex items-center gap-1 font-medium"
                    >
                        <Search class="h-3 w-3 text-slate-500" />
                        <span>Pencarian</span>
                    </Link>

                    <Link
                        href="/login"
                        class="text-xs text-rose-600 bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-lg border border-rose-200 transition flex items-center gap-1 font-semibold"
                        title="Keluar dari sesi dashboard"
                    >
                        <span>Keluar</span>
                    </Link>
                </div>
            </div>
        </header>

        <!-- Main Body -->
        <main class="max-w-4xl w-full mx-auto px-4 py-8 flex-1 space-y-6">
            <slot />
        </main>

        <!-- Minimalist Footer -->
        <footer class="w-full border-t border-slate-100 bg-white py-4 text-center text-xs text-slate-400">
            <div class="max-w-4xl mx-auto px-4 flex items-center justify-between">
                <span>&copy; TanyaWarga</span>
                <span>Dashboard Administrasi</span>
            </div>
        </footer>
    </div>
</template>
