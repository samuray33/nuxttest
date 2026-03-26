<script setup lang="ts">
let props = defineProps<{
    name: string
}>();

let emit = defineEmits<{
  
}>();
</script>

<template>
  <h1>наш компонент {{ $props.name }}</h1>
</template>

<style scoped>

</style>