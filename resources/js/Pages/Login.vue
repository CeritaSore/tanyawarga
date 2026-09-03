<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import { ref } from 'vue';

// Layout & UI Components
import AppLayout from '@/Layouts/AppLayout.vue';
import { Button } from '@/Components/ui/button';

// Icons
import {
    Lock,
    Mail,
    Eye,
    EyeOff,
    LogIn,
    ShieldCheck,
    Sparkles,
} from 'lucide-vue-next';

defineProps({
    appName: {
        type: String,
        default: 'TanyaWarga',
    },
});

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const showPassword = ref(false);
const isLoading = ref(false);

const handleLogin = (e) => {
    e?.preventDefault?.();
    isLoading.value = true;

    // Simulate instant login without backend auth
    setTimeout(() => {
        isLoading.value = false;
        router.visit('/dashboard');
    }, 300);
};

const fillDemoCredentials = () => {
    email.value = 'admin@tanyawarga.go.id';
    password.value = 'admin12345';
    rememberMe.value = true;
};
</script>

<template>
    <Head title="Masuk Petugas / Admin - TanyaWarga" />

    <AppLayout>
        <!-- Header Actions Slot -->
        <template #header-actions>
            <Link
                href="/"
                class="text-xs sm:text-sm text-slate-600 hover:text-emerald-700 px-2.5 sm:px-3 py-1 sm:py-1.5 transition font-medium"
            >
                &larr; Pencarian
            </Link>
        </template>

        <!-- Main Form Container: Centered max-w-md on all screens -->
        <div class="max-w-md mx-auto w-full py-4 sm:py-8 space-y-6">
            <!-- Header Title -->
            <div class="text-center space-y-2">
                <div class="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-2xs">
                    <ShieldCheck class="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h1 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                    Masuk Portal Petugas
                </h1>
                <p class="text-xs sm:text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
                    Akses dashboard administrasi wilayah dan manajemen laporan data warga
                </p>
            </div>

            <!-- Login Card -->
            <div class="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-7 shadow-xs space-y-4 sm:space-y-5">
                <!-- Info Mode Preview -->
                <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs flex items-center justify-between gap-2">
                    <span>💡 Preview mode (masuk langsung)</span>
                    <button
                        type="button"
                        @click="fillDemoCredentials"
                        class="text-xs font-semibold text-emerald-700 hover:underline flex items-center gap-1 flex-shrink-0 cursor-pointer"
                    >
                        <Sparkles class="h-3.5 w-3.5 text-emerald-600" />
                        Isi Demo
                    </button>
                </div>

                <form @submit.prevent="handleLogin" class="space-y-4">
                    <!-- Field Email / NIP -->
                    <div class="space-y-1.5">
                        <label class="text-xs sm:text-sm font-medium text-slate-700 flex items-center gap-1.5">
                            <Mail class="h-3.5 w-3.5 text-slate-400" />
                            Email / NIP / Username
                        </label>
                        <input
                            v-model="email"
                            type="text"
                            placeholder="admin@tanyawarga.go.id"
                            class="w-full h-11 px-3.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                        />
                    </div>

                    <!-- Field Password -->
                    <div class="space-y-1.5">
                        <div class="flex items-center justify-between">
                            <label class="text-xs sm:text-sm font-medium text-slate-700 flex items-center gap-1.5">
                                <Lock class="h-3.5 w-3.5 text-slate-400" />
                                Kata Sandi
                            </label>
                            <a
                                href="#"
                                @click.prevent=""
                                class="text-xs text-emerald-600 hover:underline"
                            >
                                Lupa sandi?
                            </a>
                        </div>
                        <div class="relative">
                            <input
                                v-model="password"
                                :type="showPassword ? 'text' : 'password'"
                                placeholder="••••••••"
                                class="w-full h-11 pl-3.5 pr-10 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                            />
                            <button
                                type="button"
                                @click="showPassword = !showPassword"
                                class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                                tabindex="-1"
                            >
                                <EyeOff v-if="showPassword" class="h-4 w-4" />
                                <Eye v-else class="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    <!-- Checkbox Remember Me -->
                    <div class="flex items-center gap-2 pt-1">
                        <input
                            id="remember"
                            v-model="rememberMe"
                            type="checkbox"
                            class="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                        />
                        <label for="remember" class="text-xs sm:text-sm text-slate-600 select-none cursor-pointer">
                            Ingat saya di perangkat ini
                        </label>
                    </div>

                    <!-- Submit Button: Standard Success / Hijau -->
                    <div class="pt-2">
                        <Button
                            type="submit"
                            variant="success"
                            size="lg"
                            :disabled="isLoading"
                            class="w-full h-12 rounded-xl text-sm sm:text-base font-semibold shadow-xs"
                        >
                            <LogIn class="h-4 w-4 mr-2" />
                            <span v-if="!isLoading">Masuk ke Dashboard</span>
                            <span v-else>Memproses...</span>
                        </Button>
                    </div>
                </form>
            </div>

            <!-- Back Link -->
            <div class="text-center">
                <Link
                    href="/"
                    class="text-xs sm:text-sm text-slate-500 hover:text-slate-800 hover:underline transition"
                >
                    &larr; Kembali ke halaman pencarian warga
                </Link>
            </div>
        </div>
    </AppLayout>
</template>
