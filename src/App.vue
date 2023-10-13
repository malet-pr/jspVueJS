<template>
  <div  class="card" size="small">
      <Accordion :multiple="true" :activeIndex="active">
          <AccordionTab header="FILTERS">
          <div class="flex flex-column">
            <div class="flex flex-row"> 
                <TechNumFilter />
                <SourceFilter />    
                <DateFilterFrom label="Date From" />      
                <DateFilterTo label="Date To" />   
                <TextFilter label="Word in Quote" /> 
            </div>
            <div class="flex flex-row justify-content-evenly flex-wrap mt-4">
                <div class="flex align-items-center justify-content-center">
                    <CleanButton label="CLEAR"/>
                </div>
                <div class="flex align-items-center justify-content-center">
                    <SendButton label="SEND"/>
                </div>
            </div>
          </div>
          </AccordionTab>
          <AccordionTab header="DATA TABLE">
            <ShowTable />
          </AccordionTab>
      </Accordion>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import useFakerStore from '@/stores/fakerStore';
import TechNumFilter from './components/filterComponents/TechNumFilter.vue';
import SourceFilter from './components/filterComponents/SourceFilter.vue';
import DateFilterFrom from './components/filterComponents/DateFilterFrom.vue';
import DateFilterTo from './components/filterComponents/DateFilterTo.vue';
import TextFilter from './components/filterComponents/TextFilter.vue';
import CleanButton from './components/filterComponents/CleanButton.vue';
import SendButton from './components/filterComponents/SendButton.vue';
import ShowTable from './components/tableComponents/ShowTable.vue';
import useEmitter from '@/utils/emitter';

const active = ref([0]);
const emitter = useEmitter();
const store = useFakerStore();

onMounted(() => {
  emitter.on('active', val => active.value = val);
});

onUnmounted(() => {
  store.$resetData();
  store.$resetFilters();
})

</script>

<style scoped>
</style>
