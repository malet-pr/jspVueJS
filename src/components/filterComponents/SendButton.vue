<template>
    <div class="flex flex-column px-4">
        <Button label="SEARCH" @click="onClick" inputId="btn" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Button from 'primevue/button';
import useFakerStore from '@/stores/fakerStore';
import useEmitter from '@/utils/emitter';

const store = useFakerStore();
const emitter = useEmitter();
const noSource = ref(true);
const noTech = ref(true);
const noWord = ref(true);

const onClick = async () => {
    if(noWord.value && noSource.value && noTech.value) {
        emitter.emit('showMessage',true);
    } else {
        store.$resetData(); 
        await store.$fetchData();
        emitter.emit('reloadTable', true);  
        emitter.emit('active',[1]);        
    }
}

onMounted(() => {
    emitter.on('wordSelected', val => noWord.value = !val);
    emitter.on('techSelected', val =>  noTech.value = !val);
    emitter.on('sourceSelected', val => noSource.value = !val );
});

</script>

<style scoped>
</style>

