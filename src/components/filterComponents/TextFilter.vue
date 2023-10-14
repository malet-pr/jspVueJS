<template>
    <div class="flex flex-column px-2">
        <label for="tx">{{ props.label }}</label>
        <InputText v-model="value" type="text" id="tx" @keyup="captureInfo" :disabled="isDisabled" />
        <p v-if="showMessage" class="red-message">One of these filters is required</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import useFakerStore from '@/stores/fakerStore';
import { storeToRefs } from 'pinia';
import InputText from 'primevue/inputtext';
import useEmitter from '@/utils/emitter';

const isDisabled = ref(false);
const showMessage = ref(false);
const wordSelected = ref(false);
const emitter = useEmitter();
const props = defineProps(['label']);
const {wordInQuote} = storeToRefs(useFakerStore());
const value = wordInQuote;

const captureInfo = (event) => {
    wordInQuote.value = event.target.value;
    value.value = event.target.value;
    if(wordInQuote.value !== "" && wordInQuote.value !== undefined){
        wordSelected.value = true;
        emitter.emit('showMessage',false);
    } else {
        wordSelected.value = false;
    }
    emitter.emit('wordSelected',wordSelected.value);
}

onMounted(() => {
    emitter.on('wordSelected', val => wordSelected.value = val);
    emitter.on('dateFromSelected', val =>  isDisabled.value = val);
    emitter.on('techSelected', val =>  isDisabled.value = val);
    emitter.on('sourceSelected', val =>  isDisabled.value = val);
    emitter.on('showMessage', val => showMessage.value = val);
});



</script>

<style scoped>
.red-message {
  color: red;
  font-size: 0.90rem;
  margin-top: 5px;
}
</style>
