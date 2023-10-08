import { ref } from 'vue'
import { defineStore } from 'pinia'


const useFakerStore = defineStore('fakerStore', {
  state: () => ({
      techSelected: "",
      sourcesSelected: []
    }),
  actions: {

  },
  getters: {
    
  }
});

export default useFakerStore;
