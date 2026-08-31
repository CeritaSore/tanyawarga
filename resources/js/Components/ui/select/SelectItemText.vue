<script setup>
import { SelectItemText } from 'radix-vue';

const props = defineProps({
    asChild: { type: Boolean, default: false },
    as: { type: null, default: undefined },
});
</script>

<template>
    <SelectItemText v-bind="props">
        <slot />
    </SelectItemText>
</template>
