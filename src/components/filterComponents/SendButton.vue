<template>
    <div class="flex flex-column px-4">
        <Button label="SEARCH" @click="onClick" inputId="btn" />
    </div>
</template>

<script setup>
import Button from 'primevue/button';
import useFakerStore from '@/stores/fakerStore';

const store = useFakerStore();

const onClick = () => {
    store.$fetchData();

}

</script>

<style scoped>
</style>

