import { defineStore } from 'pinia'
import { ref } from 'vue';

const useFakerStore = defineStore('fakerStore', {
  state: () => ({
      techSelected: ref(),
      sourcesSelected: ref([]),
      wordInQuote: ref(),
      dateFrom: ref(),
      dateTo: ref()
    }),
  actions: {
    $reset() {
      this.techSelected = "";
      this.sourcesSelected = [];
      this.wordInQuote = "";
      this.dateFrom = undefined;
      this.dateTo = undefined;
    }

  },
  getters: {
    
  }
});

export default useFakerStore;
