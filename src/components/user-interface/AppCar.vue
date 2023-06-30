<template>
  AppCar.vue;
  <pre>{{ data }}</pre>
</template>

<script setup lang="ts">
import { useFetchComposable } from '@/composables/use-fetch';
import { BASE_URL_GET_CARS } from '@/api';

let { data, onFetchResponse, onFetchError } = useFetchComposable({
  url: BASE_URL_GET_CARS,
});

onFetchResponse(() => {
  console.log(data.value.response);
});

onFetchError((err) => {
  console.error(err);
  // TO DO задействовать логгер
});
</script>
