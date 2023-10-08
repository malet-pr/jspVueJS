<template>
  <div class="card">
    <DataTable sortMode="multiple" removableSort dataKey="id" :value="tableData" paginator :rows="15" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem"
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} to {last} of {totalRecords}">
        <template #paginatorstart>
            <Button type="button" icon="pi pi-refresh" text />
        </template>
        <template #paginatorend>
            <Button type="button" icon="pi pi-download" text />
        </template>
        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
        <Column sortable header="File #">
          <template #body="slotProps">
            `{{ slotProps.data.lastName }}, {{ slotProps.data.firstName }}`
          </template>
        </Column>
        <Column sortable field="lastName" header="Name"></Column>
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
//import Row from 'primevue/row';  
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import useFakerStore from '@/stores/fakerStore';
//import { CustomerService } from '@/service/CustomerService';
const {data} = storeToRefs(useFakerStore());
const tableData = data;

onMounted(() => {});

</script>

<style scoped></style>
