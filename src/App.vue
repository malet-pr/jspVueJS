<template>
  <div class="card">
      <Accordion :multiple="true" :activeIndex="[0]">
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

          </AccordionTab>
      </Accordion>
  </div>
</template>

<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import "/node_modules/primeflex/primeflex.css";
import TechNumFilter from './components/filterComponents/TechNumFilter.vue';
import SourceFilter from './components/filterComponents/SourceFilter.vue';
import DateFilterFrom from './components/filterComponents/DateFilterFrom.vue';
import DateFilterTo from './components/filterComponents/DateFilterTo.vue';
import TextFilter from './components/filterComponents/TextFilter.vue';
import CleanButton from './components/filterComponents/CleanButton.vue';
import SendButton from './components/filterComponents/SendButton.vue';


</script>

<style>

</style>
