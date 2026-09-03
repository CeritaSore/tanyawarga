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
                class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-emerald-600 transition px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-slate-200 bg-white"
            >
                <ArrowLeft class="h-3.5 w-3.5" />
                <span>Pencarian</span>
            </Link>

            <Link
                href="/login"
                class="text-xs sm:text-sm text-slate-600 hover:text-emerald-700 px-2.5 py-1.5 transition font-medium"
            >
                Masuk
            </Link>
        </template>

        <!-- Centered Container for Form (Mobile -> Tablet -> Laptop) -->
        <div class="max-w-2xl mx-auto w-full space-y-6">
            <!-- Hero / Title -->
            <section class="space-y-2 text-left sm:text-center">
                <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
                    <AlertTriangle class="h-3.5 w-3.5 text-amber-600" />
                    <span>Pusat Koreksi Data Warga</span>
                </div>
                <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
                    Laporkan Data Tidak Valid
                </h1>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
                    Bantu kami memperbarui nomor WhatsApp, alamat kantor/rumah, atau nama pejabat yang sudah tidak aktif di wilayah Anda.
                </p>
            </section>

            <!-- Composite Report Form -->
            <ReportForm />
        </div>
    </AppLayout>
</template>
