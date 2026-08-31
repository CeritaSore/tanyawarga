<script setup>
import { Head, Link } from '@inertiajs/vue3';

// Layout & Composite Components
import AppLayout from '@/Layouts/AppLayout.vue';
import ReportForm from '@/Components/composite/ReportForm.vue';

// Icons
import { AlertTriangle, ArrowLeft } from 'lucide-vue-next';

defineProps({
    appName: {
        type: String,
        default: 'TanyaWarga',
    },
});
</script>

<template>
    <Head title="Laporan Data Tidak Valid - TanyaWarga" />

    <AppLayout>
        <!-- Header Actions Slot -->
        <template #header-actions>
            <Link
                href="/"
                class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-600 transition px-2.5 py-1 rounded-lg border border-slate-200"
            >
                <ArrowLeft class="h-3.5 w-3.5" />
                <span>Pencarian</span>
            </Link>

            <Link
                href="/login"
                class="text-xs text-slate-600 hover:text-emerald-700 px-2 py-1 transition font-medium"
            >
                Masuk
            </Link>
        </template>

        <!-- Hero / Title -->
        <section class="space-y-1.5">
            <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-semibold">
                <AlertTriangle class="h-3.5 w-3.5 text-amber-600" />
                <span>Pusat Koreksi Data Warga</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Laporkan Data Tidak Valid
            </h1>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bantu kami memperbarui nomor WhatsApp, alamat kantor/rumah, atau nama pejabat yang sudah tidak aktif di wilayah Anda.
            </p>
        </section>

        <!-- Composite Report Form -->
        <ReportForm />
    </AppLayout>
</template>
