<template>
    <div class="flex flex-column px-2">
        <label for="tx">{{ props.label }}</label>
        <InputText v-model="value" type="text" id="tx" @keyup="captureInfo"/>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import useFakerStore from '@/stores/fakerStore';
import { storeToRefs } from 'pinia';
import InputText from 'primevue/inputtext';

const props = defineProps(['label']);
const {wordInQuote} = storeToRefs(useFakerStore());
const value = wordInQuote;

const captureInfo = (event) => {
    wordInQuote.value = event.target.value;
    value.value = event.target.value;
}

</script>

<style scoped>
</style>
