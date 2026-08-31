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
    <h3
        :class="
            cn(
                'text-xl font-bold leading-none tracking-tight text-slate-900 dark:text-white',
                props.class
            )
        "
    >
        <slot />
    </h3>
</template>
