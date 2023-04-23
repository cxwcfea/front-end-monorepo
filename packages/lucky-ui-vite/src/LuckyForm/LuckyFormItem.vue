<template>
    <LuckyRow :class="{ [baseClassName]: true }">
        <LuckyRow>
            <LuckyCol :span="labelCol" :class="labelClassName">
                <span>{{ props.label }}</span>
            </LuckyCol>
            <LuckyCol :span="wrapperCol" :class="wrapperClassName">
                <slot />
            </LuckyCol>
        </LuckyRow>
        <LuckyRow v-if="props.name && errorTip" :class="tipClassName">
            <LuckyCol :span="labelCol"></LuckyCol>
            <LuckyCol :span="wrapperCol">
                <span v-if="errorTip">{{ errorTip }}</span>
            </LuckyCol>
        </LuckyRow>
    </LuckyRow>
</template>

<script lang="ts" setup>
import { inject, onMounted, ref, toRaw, watch } from 'vue';
import { LuckyRow } from '../LuckyRow';
import { LuckyCol } from '../LuckyCol';
import prefixName from '../theme';
import { FORM_CONTEXT_KEY, FormContext, ValidateRule, ValidateResult } from './common';

const labelCol = 6;
const wrapperCol = 18;

const baseClassName = `${prefixName}-form-item`;
const labelClassName = `${baseClassName}-label`;
const wrapperClassName = `${baseClassName}-wrapper`;
const tipClassName = `${baseClassName}-tip`;

const errorTip = ref('');

const formContext: FormContext | undefined = inject<FormContext>(FORM_CONTEXT_KEY);

const props = defineProps<{
    name?: string;
    label?: string;
    rule?: ValidateRule;
}>();

const resetField = () => {
    if (formContext?.model && props.name && formContext?.model?.[props.name]) {
        formContext.model[props.name] = undefined;
    }
};

async function validateFieldValue(val: unknown): Promise<ValidateResult> {
    if (props.rule?.validator) {
        const result = await props.rule.validator(val);
        if (result.hasError && result.message) {
            errorTip.value = result.message;
        } else {
            errorTip.value = '';
        }
        return { ...result, name: props.name, value: toRaw(val) };
    }
    return {
        hasError: false,
    };
}

async function validateField(): Promise<ValidateResult> {
    if (props.rule?.validator && props.name) {
        const result = await validateFieldValue(formContext?.model?.[props.name]);
        if (result.hasError && result.message) {
            errorTip.value = result.message;
        } else {
            errorTip.value = '';
        }
        return result;
    }
    return {
        hasError: false,
    };
}

onMounted(() => {
    if (formContext?.model && props.name && formContext.model[props.name]) {
        formContext.addField({
            name: props.name,
            rule: props.rule,
            resetField,
            validateField,
        });

        watch([() => formContext?.model?.[props.name]], ([newValue]) => {
            validateFieldValue(newValue);
        });
    }
});

defineExpose({
    resetField,
    validateField,
});
</script>
