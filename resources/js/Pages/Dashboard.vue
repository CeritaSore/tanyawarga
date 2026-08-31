<script setup>
import { Head } from '@inertiajs/vue3';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import { LayoutDashboard } from 'lucide-vue-next';

defineProps({
    appName: {
        type: String,
        default: 'TanyaWarga',
    },
});
</script>

<template>
    <Head title="Dashboard - TanyaWarga" />

    <AdminLayout>
        <!-- Page Title Header -->
        <div class="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
                <h1 class="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
                    <LayoutDashboard class="h-5 w-5 text-emerald-600" />
                    <span>Dashboard</span>
                </h1>
                <p class="text-xs text-slate-500 mt-0.5">
                    Panel kontrol dan manajemen data pejabat TanyaWarga
                </p>
            </div>
        </div>

        <!-- Blank Canvas / Placeholder Area -->
        <div class="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-12 text-center flex flex-col items-center justify-center min-h-[360px] space-y-3">
            <div class="h-12 w-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-400">
                <LayoutDashboard class="h-6 w-6 text-slate-400" />
            </div>
            <div class="space-y-1">
                <h2 class="text-sm font-semibold text-slate-700">
                    Halaman Dashboard Kosong
                </h2>
                <p class="text-xs text-slate-400 max-w-sm">
                    Area ini siap untuk ditambahkan modul statistik, manajemen pejabat, dan moderasi laporan data warga.
                </p>
            </div>
        </div>
    </AdminLayout>
</template>
