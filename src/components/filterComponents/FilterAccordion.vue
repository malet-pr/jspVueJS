<template>
    <n-collapse arrow-placement="right" class="mx-12 my-6">
      <template #arrow>
        <n-icon>
            <arrow-icon/>
        </n-icon>
      </template>
      <n-collapse-item title="FILTROS DE BÚSQUEDA" name="1">
        <div>acá van los filtros</div>
      </n-collapse-item>
    </n-collapse>
  </template>

<script setup>
import 'tailwindcss/tailwind.css';
import { NCollapse, NCollapseItem /*, collapseProps, collapseItemProps*/, NIcon } from 'naive-ui'
import { CaretDownSharp as ArrowIcon } from '@vicons/ionicons5'

</script>

<style scoped></style>


