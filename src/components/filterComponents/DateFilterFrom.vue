<template>
    <div class="flex flex-column px-2">
        <label for="cal"> {{ props.label }} </label>
        <Calendar id="cal" v-model="store.dateFrom" dateFormat="dd/mm/yy" showIcon 
        @date-select="dateSelected" size="small"/>
        <!-- <Calendar id="cal" v-model="store.dateFrom" showTime hourFormat="24" dateFormat="dd/mm/yy" showIcon @date-select="dateSelected"/> -->
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import useFakerStore from '@/stores/fakerStore';
import Calendar from 'primevue/calendar';

const store = useFakerStore();
const props = defineProps(['label']);

const dateSelected = (date) => {
    store.dateFrom = date;
}


</script>

<style scoped></style>