<template>
    <div class="flex flex-column px-2">
        <label for="ac">Tech Number</label>
        <AutoComplete v-model="tech" @item-select="selected" inputId="ac" :suggestions="items" 
        @complete="search" size="small"/>
    </div>
</template>

<script setup>

import { ref } from "vue";
import useFakerStore from '@/stores/fakerStore';
import { storeToRefs } from 'pinia';
import AutoComplete from 'primevue/autocomplete';
import { GetTechAutocomplete } from '@/utils/fakerApi';

const {techSelected} = storeToRefs(useFakerStore());
const tech = techSelected;
const items = ref();

const search = () => {
    GetTechAutocomplete(tech.value)
      .then(function(resp){
        items.value = resp;
    })
}

const selected = (event) => {
    techSelected.value = event.value;
    tech.value = event.value;
}

</script>

<style scoped></style>

/