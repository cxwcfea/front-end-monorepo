<template>
    <transition :name="fadeClassName">
        <div v-if="show" :class="{ [baseClassName]: true, [typeClassName]: true }">
            <div>{{ text }}</div>
        </div>
    </transition>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import prefixName from '../theme/index';
import type { MessageType } from './types';

const props = withDefaults(
    defineProps<{
        text: string;
        type?: MessageType;
    }>(),
    {
        type: 'info',
    }
);

const show = ref(false);

onMounted(() => {
    show.value = true;
});

const closeMessage = () => {
    show.value = false;
};

defineExpose({ closeMessage });

const baseClassName = `${prefixName}-message`;
const typeClassName = `${baseClassName}-${props.type}`;
const fadeClassName = `${baseClassName}-fade`;
</script>
