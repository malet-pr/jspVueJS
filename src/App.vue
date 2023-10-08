<template>
  <div class="card">
      <Accordion :multiple="true" :activeIndex="[0]">
          <AccordionTab header="FILTROS">
          <div class="flex flex-row"> 
              <TechNumFilter />
              <SourceFilter />          
            </div>
          </AccordionTab>
          <AccordionTab header="TABLA">
              <p>
                  ACÁ VA LA TABLA DE RESULTADOS
              </p>
          </AccordionTab>
      </Accordion>
  </div>
</template>

<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import TechNumFilter from './components/filterComponents/TechNumFilter.vue';
import SourceFilter from './components/filterComponents/SourceFilter.vue';




</script>

<style scoped>

</style>
