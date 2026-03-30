// в composible мы выносим переиспользуемые функции и/или переменные любые даже если это ассинхронное обрашение к серверу useFeatch и тд

import { ref } from "vue";
export const  useTestcomposible = () => {
    let testData = ref("тестовая переменная для компосиблес " + Math.random());

    return {testData}
}