<template>
    <input v-model="internalValue" :class="baseClassName" />
</template>

<script lang="ts" setup>
import { ref, toRaw, watch } from 'vue';
import prefixName from '../theme';

const baseClassName = `${prefixName}-input`;
const props = defineProps<{
    value: string;
    options: Array<{ name: string; value: string }>;
}>();
const emits = defineEmits<{
    (e: 'change', value: string): void;
}>();

const internalValue = ref(toRaw(props.value));

watch(internalValue, (newValue) => {
    emits('change', newValue);
});
watch(
    () => props.value,
    (newValue) => {
        internalValue.value = newValue;
    }
);
</script>
