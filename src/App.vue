<template>
  <div></div>
</template>

<script setup>
import { GetAllSources, GetTechAutocomplete} from '@/utils/fakerApi';
import { ref, onMounted } from 'vue';

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
