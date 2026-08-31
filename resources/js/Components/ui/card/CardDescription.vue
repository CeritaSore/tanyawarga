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
    <p :class="cn('text-sm text-slate-500 dark:text-slate-400', props.class)">
        <slot />
    </p>
</template>
