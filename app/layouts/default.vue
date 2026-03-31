<!-- те части страницы которые не меняются при переходе между страницами тоже самое мы раньше писали в app.vue -->
<script setup>

</script>

<template>
    <!-- Тут название или же можешь вообше его не писать тут по желанию -->
    <h1>defaultLayout</h1>
    <NuxtLink to="/info">перейти в info </NuxtLink> <br />
    <NuxtLink to="/"> Главное</NuxtLink>

    <!-- сюда по факту будуь подставлятся все что мы обернули в NuxtLayout (зайди в App.vue) -->
    <slot /> 
</template>

<style scoped>

</style>