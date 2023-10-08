<template>
    <div class="flex flex-column px-4">
        <label for="ms">Source</label>
        <MultiSelect v-model="sources" @change="onChange($event)" inputId="ms" :options="options" filter
        :maxSelectedLabels="3" class="w-full md:w-20rem" />
    </div>
</template>

<script setup>
import MultiSelect from 'primevue/multiselect';
import { ref } from "vue";
import { GetAllSources } from '@/utils/fakerApi';
import useFakerStore from '@/stores/fakerStore';

const sources = ref([]);
const options = ref([]);
const store = useFakerStore();

GetAllSources().then(function(resp){options.value = resp;})

const onChange = (event) => {
    store.sourcesSelected =event.value;
}

</script>

<style scoped></style>

