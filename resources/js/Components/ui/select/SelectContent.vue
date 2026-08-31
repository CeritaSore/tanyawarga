<script setup>
import {
    SelectContent,
    SelectPortal,
    SelectViewport,
    useForwardPropsEmits,
} from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps({
    forceMount: { type: Boolean, default: undefined },
    position: { type: String, default: 'popper' },
    bodyLock: { type: Boolean, default: undefined },
    side: { type: null, default: undefined },
    sideOffset: { type: Number, default: 4 },
    align: { type: null, default: undefined },
    alignOffset: { type: Number, default: undefined },
    avoidCollisions: { type: Boolean, default: undefined },
    collisionBoundary: { type: null, default: undefined },
    collisionPadding: { type: null, default: undefined },
    arrowPadding: { type: Number, default: undefined },
    sticky: { type: String, default: undefined },
    hideWhenDetached: { type: Boolean, default: undefined },
    class: { type: [String, Object, Array], default: '' },
});

const emits = defineEmits(['closeAutoFocus']);
const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <SelectPortal>
        <SelectContent
            v-bind="forwarded"
            :class="
                cn(
                    'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-900 shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                    position === 'popper' &&
                        'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
                    props.class
                )
            "
        >
            <SelectViewport
                :class="
                    cn(
                        'p-1.5 bg-white',
                        position === 'popper' &&
                            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
                    )
                "
            >
                <slot />
            </SelectViewport>
        </SelectContent>
    </SelectPortal>
</template>
