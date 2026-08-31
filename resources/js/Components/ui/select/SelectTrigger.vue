<script setup>
import { SelectIcon, SelectTrigger, useForwardProps } from 'radix-vue';
import { ChevronDown } from 'lucide-vue-next';
import { cn } from '@/lib/utils';

const props = defineProps({
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean, default: false },
    as: { type: null, default: undefined },
    class: { type: [String, Object, Array], default: '' },
});

const forwardedProps = useForwardProps(props);
</script>

<template>
    <SelectTrigger
        v-bind="forwardedProps"
        :class="
            cn(
                'flex h-11 w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-900 ring-offset-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 focus:border-emerald-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-slate-50 disabled:text-slate-400',
                props.class
            )
        "
    >
        <slot />
        <SelectIcon as-child>
            <ChevronDown class="h-4 w-4 text-slate-400" />
        </SelectIcon>
    </SelectTrigger>
</template>
