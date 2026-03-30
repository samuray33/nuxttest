// в пиниа мы сохроняем функции computed и/или переменные не какой ассинхроншены и функции тут не юзаем
import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useStore = defineStore('peremennaya', () => {
  const hello = ref("привет из пиниа"); 

  let URL = {
    baseURL: "http://localhost:4000/posts",
  }

  return {hello, URL}
})