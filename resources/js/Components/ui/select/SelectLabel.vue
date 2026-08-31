<script setup>
import { SelectLabel } from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps({
    asChild: { type: Boolean, default: false },
    as: { type: null, default: undefined },
    class: { type: [String, Object, Array], default: '' },
});
</script>

<template>
    <SelectLabel
        v-bind="props"
        :class="cn('py-1.5 pl-3 pr-2 text-xs font-semibold text-slate-500', props.class)"
    >
        <slot />
    </SelectLabel>
</template>
