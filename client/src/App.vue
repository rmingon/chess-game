<script setup lang="ts">
  import {useWebSocket} from "@vueuse/core";
  import {computed, ref} from "vue";
  import Select from "./atomic/atoms/Select.vue"
  import Button from "./atomic/atoms/Button.vue";

  const { status, data, send, open, close } = useWebSocket('ws://127.0.0.1:8080')

  const color_selected = ref<string>("White")

  const setColor = ($event: string) => {
    color_selected.value = $event
  }

  const play = () => {
    send(JSON.stringify({
      command: "NEW_GAME",
      color: color_selected.value
    }))
  }

</script>

<template>
  <Select :list="['White','Black']" @changed="setColor"/>
  <Button label="PLAY" @click="play()" />
</template>


