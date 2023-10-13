<template>
  <div class="card">
    <DataTable sortMode="multiple" removableSort dataKey="id" :value="tableData" paginator :rows="15" :rowsPerPageOptions="[5, 10, 15, 30, 50]" 
            tableStyle="min-width: 50rem" 
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} to {last} of {totalRecords}">
        <template #paginatorstart>
          <Button type="button" icon="pi pi-download" text @click="exportExcel()"/>
        </template>
        <template #paginatorend>
        </template>
        <Column sortable field="techNumber" header="File #" hidden></Column>
        <Column sortable field="lastName" header="Name">
          <template #body="slotProps">
            {{ slotProps.data.lastName }}, {{ slotProps.data.firstName }}
          </template>
        </Column>
        <Column sortable field="source" header="Source"></Column>
        <Column sortable field="dateRecorded" header="Date">
          <template #body="slotProps">
            {{ dayjs(slotProps.data.dateRecorded).format('DD/MM/YYYY  HH:mm:ss')}}
          </template>
        </Column>
        <Column sortable field="text" header="Quote"></Column>
    </DataTable>
  </div>
</template>


<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import { ref, onMounted } from 'vue';
import useFakerStore from '@/stores/fakerStore';
import useEmitter from '@/utils/emitter';
import dayjs from 'dayjs'
import { utils, writeFileXLSX } from 'xlsx';

const store = useFakerStore();
const tableData = ref([]);
const emitter = useEmitter();
const hiddenColumns = ['techNumber'];

onMounted(() => {
  emitter.on('reloadTable', value => {
    if(value === true) { 
      tableData.value = store.data;
      emitter.emit('reloadTable', false);
    };
  });
});

const exportExcel = () => {
  /* hide column(s) */
  const cleanData = tableData.value.map(row => {
    return Object.fromEntries(
      Object.entries(row).filter(([key]) => !hiddenColumns.includes(key))
    );
  });
  /* Format date column(s) before exporting */
  const formattedData = cleanData.map(row => ({
    ...row,
    dateRecorded: dayjs(row.dateRecorded).toDate(), 
  }));
  /* generate worksheet from state */
  const ws = utils.json_to_sheet(formattedData);
  /* create workbook and append worksheet */
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, "Quotes");
  /* export to XLSX */
  writeFileXLSX(wb, "QuoteFile.xlsx");
}

</script>

<style scoped></style>
