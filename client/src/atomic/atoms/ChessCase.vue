<template>
  <div class="h-24 w-24" :class="[COLOR[props.color]]">
    <img class="mx-auto my-auto" :src="getImgUrl(props.piece?.img || 'default')" alt="">
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

  const getImgUrl = (piece_img: string) => {
    return new URL('../../assets/pieces/' + piece_img + ".png", import.meta.url).href
  }

  const COLOR = {
    white: "bg-gray-100",
    black: "bg-gray-400"
  }
</script>