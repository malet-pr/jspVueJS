<template>
    <div class="flex flex-column px-2">
        <label for="ac">Tech Number</label>
        <AutoComplete v-model="tech" @item-select="techSelected" inputId="ac" :suggestions="items" @complete="search" />
    </div>
</template>

<script setup>

import { ref } from "vue";
import AutoComplete from 'primevue/autocomplete';
import { GetTechAutocomplete } from '@/utils/fakerApi';
import useFakerStore from '@/stores/fakerStore';

const tech = ref("");
const items = ref();
const store = useFakerStore();

const search = () => {
    GetTechAutocomplete(tech.value)
      .then(function(resp){
        items.value = resp;
    })
}

const techSelected = (event) => {
    store.techSelected = event.value;
}

</script>

<style scoped></style>

/