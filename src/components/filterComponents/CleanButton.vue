<template>
    <div class="flex flex-column px-4">
        <Button outlined label="CLEAN" @click="onClick" inputId="btn" />
    </div>
</template>

<script setup>
import Button from 'primevue/button';
import useFakerStore from '@/stores/fakerStore';
import useEmitter from '@/utils/emitter';

const store = useFakerStore();
const emitter = useEmitter();

const onClick = () => {
    store.$resetData(); 
    store.$resetFilters();
    emitter.emit('reloadTable', true);   // esto no funciona
}

</script>

<style scoped>
</style>