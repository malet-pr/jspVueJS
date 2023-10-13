<template>
    <div class="flex flex-column px-2">
        <label for="cal"> {{ props.label }} </label>
        <Calendar id="cal" v-model="store.dateTo" dateFormat="dd/mm/yy" showIcon showButtonBar
        @date-select="dateSelected" :disabled="isDisabled"/>
    </div>
</template>

<script setup>
import { ref, onMounted} from "vue";
import useFakerStore from '@/stores/fakerStore';
import Calendar from 'primevue/calendar';
import useEmitter from '@/utils/emitter';

const isDisabled = ref(true);
const emitter = useEmitter();
const store = useFakerStore();
const props = defineProps(['label']);

const dateSelected = (date) => {
    store.dateTo = date;
}

onMounted(() => {
  emitter.on('dateFromSelected', val =>  isDisabled.value = !val)
});



</script>

<style scoped></style>