<template>
  <div class="h-24 w-24" :class="[COLOR[props.color]]">
    <img :src="`@/assets/pieces/${props.piece?.img || 'default'}.png`" alt="">
  </div>
</template>

<script setup lang="ts">

  interface Piece {
    img: string
  }

  const props = defineProps<{
    color: 'white' | 'black',
    img: string
    piece: Piece | undefined
  }>()

  const COLOR = {
    white: "bg-gray-100",
    black: "bg-gray-400"
  }
</script>