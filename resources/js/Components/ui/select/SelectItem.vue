<script setup>
import {
    SelectItem,
    SelectItemIndicator,
    SelectItemText,
    useForwardProps,
} from 'radix-vue';
import { Check } from 'lucide-vue-next';
import { cn } from '@/lib/utils';

const props = defineProps({
    value: { type: null, required: true },
    disabled: { type: Boolean, default: false },
    textValue: { type: String, default: undefined },
    asChild: { type: Boolean, default: false },
    as: { type: null, default: undefined },
    class: { type: [String, Object, Array], default: '' },
});

const forwardedProps = useForwardProps(props);
</script>

<template>
    <SelectItem
        v-bind="forwardedProps"
        :class="
            cn(
                'relative flex w-full cursor-pointer select-none items-center rounded-lg py-2.5 pl-3 pr-8 text-sm text-slate-800 outline-none hover:bg-emerald-50 hover:text-emerald-900 focus:bg-emerald-50 focus:text-emerald-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-emerald-50 data-[highlighted]:text-emerald-900',
                props.class
            )
        "
    >
        <span class="absolute right-2.5 flex h-3.5 w-3.5 items-center justify-center">
            <SelectItemIndicator>
                <Check class="h-4 w-4 text-emerald-600" />
            </SelectItemIndicator>
        </span>

        <SelectItemText>
            <slot />
        </SelectItemText>
    </SelectItem>
</template>
