import { defineStore } from 'pinia'
import { ref, reactive } from 'vue';
import { GetByFilters } from '@/utils/fakerApi';

const useFakerStore = defineStore('fakerStore', {
  state: () => ({
      techSelected: ref(""),
      sourcesSelected: ref([]),
      wordInQuote: ref(""),
      dateFrom: ref(""),
      dateTo: ref(""),
      data: reactive([]),
    }),
  actions: {
    $clearDateTo() {
      this.dateTo = "";
    },
    $resetFilters() {
      this.techSelected = "";
      this.sourcesSelected = [];
      this.wordInQuote = "";
      this.dateFrom = "";
      this.dateTo = "";
    },
    $resetData() {
      this.data = []
    },
    async $fetchData(){
      let request = {
        "techNum" : this.techSelected,
        "sources" : this.sourcesSelected,
        "text" : this.wordInQuote,
        "dateFrom" : this.dateFrom,
        "dateTo" : this.dateTo
      }
      try{
        this.data = await GetByFilters(request);
      }catch (err){
        console.log(err);
      }
    },
  },
  getters: {
    
  }
});

export default useFakerStore;
