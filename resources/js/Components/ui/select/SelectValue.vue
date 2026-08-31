<script setup>
import { SelectValue } from 'radix-vue';

const props = defineProps({
    placeholder: { type: String, default: undefined },
    asChild: { type: Boolean, default: false },
    as: { type: null, default: undefined },
});
</script>

<template>
    <SelectValue v-bind="props">
        <slot />
    </SelectValue>
</template>
