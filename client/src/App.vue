<script setup lang="ts">
  import {useWebSocket} from "@vueuse/core";
  import {computed} from "vue";

  const { status, data, send, open, close } = useWebSocket('ws://127.0.0.1:8080')

  computed(() => {
    if (status.value === "OPEN") {
      send("YO")
    }
  })
</script>

<template>
 {{ status }}
</template>

<style scoped>

</style>
