<template>
    <div class="flex flex-column px-4">
        <Button label="SEND" @click="onClick" inputId="btn" />
    </div>
</template>

<script setup>
import Button from 'primevue/button';

const onClick = () => {
    alert("clicked SEND");
}

</script>

<style scoped>
</style>