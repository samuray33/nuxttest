<script setup>
const rout = useRouter();

// добавление данных
// let user = {
//   name: "name",
//   surname: "surname"
// }
// let {data, pending: pendingPost, refresh: refreshPost} = await useFetch("http://localhost:4000/posts", {
//   // что бы запрос не проийсходл пока я не укажу refreshPost
//   immediate: false,
//   method: "post",
//   body: user
// });
// добавление данных через resreshPost
// let dovnloade = async() => {
//   await refreshPost();
// }

// получение данных
// useLazyFetch - ленивая загрузка может проийзайти рендер без ожидание загрузки данных
let {data, pending: pendingPost, refresh: refreshPost} = await useLazyFetch("http://localhost:4000/posts", {
  immediate: false,
  method: "get",
});

// загрузка данных через resreshPost
let dovnloade = async() => {
  await refreshPost();
}

</script>

<template>
  <h1>Главная страница</h1>
  <Comp name = "Props TESTCOMP"/>
  <!-- вывод поста из апи -->
   <button @click="dovnloade">загрузить из апи</button>
  <h1 v-if="pendingPost">загрузка.....</h1>
  <div v-else v-for="post in data" :key="post.id">
    <h1>{{ post.name }} {{ post.surname }}</h1>
  </div>
</template>

<style scoped>

</style>