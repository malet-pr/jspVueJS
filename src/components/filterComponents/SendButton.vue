<template>
    <div class="flex flex-column px-4">
        <Button label="SEARCH" @click="onClick" inputId="btn" />
    </div>
</template>

<script setup>
import Button from 'primevue/button';
import useFakerStore from '@/stores/fakerStore';
import useEmitter from '@/utils/emitter';

const store = useFakerStore();
const emitter = useEmitter();

const onClick = async () => {
    store.$resetData(); 
    await store.$fetchData();
    emitter.emit('reloadTable', true);  
    emitter.emit('active',[1]);
}

</script>

<style scoped>
</style>

