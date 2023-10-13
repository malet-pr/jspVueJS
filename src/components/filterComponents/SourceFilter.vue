<template>
    <div class="flex flex-column px-2">
        <label for="ms">Source</label>
        <MultiSelect v-model="sources" @change="onChange($event)" inputId="ms" :options="options" 
        filter optionLabel="source" :maxSelectedLabels="3" class="w-full md:w-15rem" :disabled="isDisabled" />
        <p v-if="showMessage" class="red-message">At least on of these filters is required</p>
    </div>
</template>

<script setup>
import MultiSelect from 'primevue/multiselect';
import { ref, onMounted } from "vue";
import { storeToRefs } from 'pinia';
import useFakerStore from '@/stores/fakerStore';
import { GetAllSources } from '@/utils/fakerApi';
import useEmitter from '@/utils/emitter';

const isDisabled = ref(false);
const showMessage = ref(false);
const emitter = useEmitter();
const {sourcesSelected} = storeToRefs(useFakerStore());
const sources = sourcesSelected;
const options = ref([]);

GetAllSources().then(function(resp){options.value = resp;})

const onChange = (event) => {
    sourcesSelected.value = event.value;
    if(sources.value.length){
        emitter.emit('techSelected',true);
        emitter.emit('showMessage',false);
    } else {
        emitter.emit('techSelected',false);
    }
}


onMounted(() => {
    emitter.on('wordSelected', val => isDisabled.value = val);
    emitter.on('showMessage', val => showMessage.value = val);
});


</script>

<style scoped>
.red-message {
  color: red;
  font-weight: bold;
  font-size: 0.75rem;
  margin-top: 5px;
}
</style>

