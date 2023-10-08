<template>
    <div class="flex flex-column px-2">
        <label for="ms">Source</label>
        <MultiSelect v-model="sources" @change="onChange($event)" inputId="ms" :options="options" filter
        :maxSelectedLabels="3" class="w-full md:w-20rem" />
    </div>
</template>

<script setup>
import MultiSelect from 'primevue/multiselect';
import { ref } from "vue";
import { storeToRefs } from 'pinia';
import useFakerStore from '@/stores/fakerStore';
import { GetAllSources } from '@/utils/fakerApi';

const {sourcesSelected} = storeToRefs(useFakerStore());
const sources = sourcesSelected;
const options = ref([]);

GetAllSources().then(function(resp){options.value = resp;})

const onChange = (event) => {
    sourcesSelected.value = event.value;
}

</script>

<style scoped></style>

