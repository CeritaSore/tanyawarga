<script setup>
import { SelectGroup } from 'radix-vue';

const props = defineProps({
    asChild: { type: Boolean, default: false },
    as: { type: null, default: undefined },
});
</script>

<template>
    <SelectGroup v-bind="props">
        <slot />
    </SelectGroup>
</template>
