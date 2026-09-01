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
    <div class="min-h-screen bg-slate-50/50 text-slate-900 antialiased flex flex-col justify-between items-center selection:bg-emerald-100 selection:text-emerald-900">
        <!-- Centered Mobile Container Frame (Target: ~393px - 420px, Infinix Note 40 standard) -->
        <div class="w-full max-w-[420px] min-h-screen bg-white shadow-xs flex flex-col justify-between border-x border-slate-100/80">
            <!-- Minimalist Mobile Header -->
            <header class="w-full bg-white/95 backdrop-blur-xs border-b border-slate-100 sticky top-0 z-30 shadow-xs">
                <div class="w-full px-4 h-14 flex items-center justify-between">
                    <!-- Brand Logo -->
                    <Link href="/" class="flex items-center gap-2">
                        <span class="h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
                        <span class="font-bold text-base sm:text-lg tracking-tight text-slate-900">
                            Tanya<span class="text-emerald-600">Warga</span>
                        </span>
                    </Link>

                    <!-- Navigation Actions -->
                    <div class="flex items-center gap-1.5">
                        <slot name="header-actions">
                            <!-- Menu Link: Laporan Warga -->
                            <Link
                                href="/laporanwarga"
                                class="text-xs text-amber-800 bg-amber-50 hover:bg-amber-100 active:bg-amber-200 border border-amber-200 px-2.5 py-1 rounded-lg transition flex items-center gap-1 font-semibold"
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

            <!-- Main Body (Mobile Viewport) -->
            <main class="w-full px-4 py-5 flex-1 space-y-5">
                <slot />
            </main>

            <!-- Minimalist Mobile Footer -->
            <footer class="w-full border-t border-slate-100 bg-white py-4 text-center text-xs text-slate-400 mt-auto">
                <div class="w-full px-4 flex items-center justify-between">
                    <span>&copy; TanyaWarga</span>
                    <div class="flex items-center gap-2 text-[11px]">
                        <Link href="/laporanwarga" class="hover:text-slate-600 hover:underline">
                            Laporan
                        </Link>
                        <span>&bull;</span>
                        <Link href="/login" class="hover:text-slate-600 hover:underline">
                            Petugas
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>
