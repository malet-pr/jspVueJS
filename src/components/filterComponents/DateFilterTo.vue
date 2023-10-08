<template>
    <div class="flex flex-column px-2">
        <label for="cal"> {{ props.label }} </label>
        <Calendar id="cal" v-model="dateTo" dateFormat="dd/mm/yy" showIcon today @date-select="dateSelected"/>
        <!-- <Calendar id="cal" v-model="date" showTime hourFormat="24" dateFormat="dd/mm/yy" /> -->
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import useFakerStore from '@/stores/fakerStore';
import Calendar from 'primevue/calendar';

const store = useFakerStore();
const dateTo = store.datTo;
const props = defineProps(['label']);

const dateSelected = (date) => {
    store.dateTo = date;
}


</script>

<style scoped></style>