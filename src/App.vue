<template>
  <div>
    <FilterAcordion />
  </div>
  <div>
    <TableAccordion />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { GetAllSources, GetTechAutocomplete} from '@/utils/fakerApi';
import  FilterAcordion  from '@/components/filterComponents/FilterAccordion.vue';
import TableAccordion from './components/tableComponents/TableAccordion.vue';

const sources = ref([]);
const techs = ref([]);

const prueba = () => {
  GetAllSources().then(function(resp) {
    sources.value = resp;
  });
  GetTechAutocomplete('23').then(function(resp){
    techs.value = resp;
  })
} 
onMounted(prueba);
</script>

<style scoped>

</style>
