<script setup>
// достаем переменную из компосиблес 
let dataComposible = useTestcomposible();

// тут мы явно указываем ему какой лейаут выбрать для этой страницы
// definePageMeta({
//   layout: "any"
// });

</script>

<template>
  <h1>информация {{ dataComposible.testData }}</h1>
</template>

<style scoped>

</style>
