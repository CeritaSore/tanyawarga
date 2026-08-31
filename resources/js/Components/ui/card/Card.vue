<script setup>
import { cn } from '@/lib/utils';

const props = defineProps({
    class: {
        type: [String, Object, Array],
        default: '',
    },
});
</script>

<template>
    <div
        :class="
            cn(
                'rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm',
                props.class
            )
        "
    >
        <slot />
    </div>
</template>
