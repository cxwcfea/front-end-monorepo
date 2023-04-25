<template>
    <div :class="{ [baseClassName]: true }">
        <LuckyForm>
            <LuckyForm ref="formRef" :model="internalModel" @finish="onFinish" @finish-fail="onFinishFail">
                <FormItem
                    v-for="(field, index) in fieldList"
                    :key="index"
                    :label="field.label"
                    :name="field.name"
                    :rule="field.rule"
                >
                    <component
                        :is="registerComponentMap[field.fieldType]"
                        :value="internalModel[field.name]"
                        :options="field.options || []"
                        @change="(value: unknown) => { onFieldChange({ name: field.name, value }) }"
                    />
                </FormItem>
                <LuckyRow v-if="$slots.default">
                    <slot></slot>
                </LuckyRow>
            </LuckyForm>
        </LuckyForm>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import type { Component } from 'vue';
import prefixName from '../theme';
import { LuckyRow } from '../LuckyRow';
import { LuckyForm } from '../LuckyForm';
import { LuckyInput } from '../LuckyInput';
import { LuckyRadioList } from '../LuckyRadioList';
import { DynamicFormField } from './common';

const registerComponentMap: { [key: string]: Component } = {
    Input: LuckyInput,
    RadioList: LuckyRadioList,
};

const props = defineProps<{
    fieldList?: DynamicFormField[];
    model?: { [name: string]: unknown };
}>();

const internalModel = reactive<{ [name: string]: unknown }>(props.model || {});

const { FormItem } = LuckyForm;
const baseClassName = `${prefixName}-dynamic-form`;

const onFieldChange = (event: { name: string; value: string | unknown }) => {
    internalModel[event.name] = event.value;
};

const emits = defineEmits<{
    (event: 'finish', e: unknown): void;
    (event: 'finishFail', e: unknown): void;
}>();

const onFinish = (e: unknown) => {
    emits('finish', e);
};

const onFinishFail = (e: unknown) => {
    emits('finishFail', e);
};

const registerFieldComponent = (name: string, component: Component) => {
    registerComponentMap[name] = component;
};

defineExpose({
    registerFieldComponent,
});
</script>
