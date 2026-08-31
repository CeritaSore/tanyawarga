<script setup>
import { SelectSeparator } from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps({
    asChild: { type: Boolean, default: false },
    as: { type: null, default: undefined },
    class: { type: [String, Object, Array], default: '' },
});
</script>

<template>
    <SelectSeparator
        v-bind="props"
        :class="cn('-mx-1 my-1 h-px bg-slate-100', props.class)"
    />
</template>
