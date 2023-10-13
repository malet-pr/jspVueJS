<template>
    <div class="flex flex-column px-2">
        <label for="ac">Tech Number</label>
        <AutoComplete v-model="tech" inputId="ac" :suggestions="items" forceSelection 
        @complete="search" @change="handleChange" :disabled="isDisabled" />
    </div>
</template>

<script setup>

import { ref, onMounted} from "vue";
import useFakerStore from '@/stores/fakerStore';
import { storeToRefs } from 'pinia';
import AutoComplete from 'primevue/autocomplete';
import { GetTechAutocomplete } from '@/utils/fakerApi';
import useEmitter from '@/utils/emitter';

const isDisabled = ref(false);
const emitter = useEmitter();
const {techSelected} = storeToRefs(useFakerStore());
const tech = techSelected;
const items = ref();

const search = () => {
    GetTechAutocomplete(tech.value)
      .then(function(resp){
        items.value = resp;
    })
}

const handleChange = (event) => {
    techSelected.value = event.value;
    tech.value = event.value;
    if(techSelected.value === "" || techSelected.value === undefined || techSelected.value === null){
        emitter.emit('techSelected',false);
    } else {
        emitter.emit('techSelected',true);
    }
}

onMounted(() => {
    emitter.on('wordSelected', val =>  isDisabled.value = val)
});

</script>

<style scoped></style>
