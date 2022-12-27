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

  const pieceSelected = (x: number, y: number) => {
    useBoard.selected({x, y})
    console.log(x, y)
  }

</script>

<template>
  <div class="flex">
    <div class="px-3">
      <Select :list="['White','Black']" @changed="setColor"/>
      <Button label="PLAY" @click="play()" />
    </div>
    <div>
      <div v-for="(x, x_index) in useBoard.board" :key="x_index" class="flex">
        <chess-case
            :color="(y_index+x_index) % 2 ? 'white' : 'black'"
            :piece="y"
            v-for="(y, y_index) in x" :key="y_index"
            @click="pieceSelected(x_index, y_index)">
        </chess-case>
      </div>
    </div>
  </div>
</template>


