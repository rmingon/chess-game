<script setup lang="ts">
import {computed, ref} from "vue";
  import Select from "./atomic/atoms/Select.vue"
  import Button from "./atomic/atoms/Button.vue";
  import ChessCase from "./atomic/atoms/ChessCase.vue";
  import {board} from "./stores/board";

  const color_selected = ref<string>("White")

  const setColor = ($event: string) => {
    color_selected.value = $event
  }

  const useBoard = board()

  const play = () => {
    useBoard.newGame(color_selected.value)
  }

</script>

<template>
  <div>
    <Select :list="['White','Black']" @changed="setColor"/>
    <Button label="PLAY" @click="play()" />

    <div v-for="(x, index) in useBoard.board" :key="index" class="flex">
      <chess-case
          :color="(y_index+index) % 2 ? 'white' : 'black'"
          :piece="y[0]"
          v-for="(y, y_index) in x" :key="y_index">
      </chess-case>
    </div>
  </div>
</template>


