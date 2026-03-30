<script setup>
// достаем переменную из компосиблес 
let dataComposible = useTestcomposible();

</script>

<template>
  <h1>информация {{ dataComposible.testData }}</h1>
</template>

<style scoped>

</style>
