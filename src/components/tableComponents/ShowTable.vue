<template>
  <div class="card">
    <DataTable sortMode="multiple" removableSort dataKey="id" :value="tableData" paginator :rows="15" :rowsPerPageOptions="[5, 10, 15, 30, 50]" tableStyle="min-width: 50rem"
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} to {last} of {totalRecords}">
        <template #paginatorstart>
            <Button type="button" icon="pi pi-refresh" text @click="reloadData"/>
        </template>
        <template #paginatorend>
            <Button type="button" icon="pi pi-download" text />
        </template>
        <Column sortable field="techNumber" header="File #"></Column>
        <Column sortable header="Name">
          <template #body="slotProps">
            {{ slotProps.data.lastName }}, {{ slotProps.data.firstName }}
          </template>
        </Column>
        <Column sortable field="source" header="Source"></Column>
        <Column sortable field="dateRecorded" header="Date"></Column>
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

const store = useFakerStore();
const tableData = ref([]);
const emitter = useEmitter();

const reloadData = () => {
  tableData.value = store.data;
}

onMounted(() => {
  emitter.on('reloadTable', value => {
    if(value === true) { 
      tableData.value = store.data;
      emitter.emit('reloadTable', false);
    };
  });
});

</script>

<style scoped></style>
