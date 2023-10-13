<template>
    <div class="flex flex-column px-2">
        <label for="cal"> {{ props.label }} </label>
        <Calendar id="cal" v-model="store.dateFrom" dateFormat="dd/mm/yy" showIcon showButtonBar
        @date-select="dateSelected"  @clear-click="onClear"/>
        <!-- <Calendar id="cal" v-model="store.dateFrom" showTime hourFormat="24" dateFormat="dd/mm/yy" showIcon @date-select="dateSelected"/> -->
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useFakerStore from '@/stores/fakerStore';
import Calendar from 'primevue/calendar';
import useEmitter from '@/utils/emitter';

const dateFromSelected = ref(false);
const emitter = useEmitter();
const store = useFakerStore();
const props = defineProps(['label']);


const dateSelected = (date) => {
    store.dateFrom.value = date;
    emitter.emit('dateFromSelected',true); 
}

const onClear = () => {
    emitter.emit('dateFromSelected',false);
    store.$clearDateTo();
}

onMounted(() => {
  emitter.on('dateFromSelected', val => dateFromSelected.value = val);
});

</script>

<style scoped></style>