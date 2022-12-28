<template>
  <div class="h-16 w-16" :class="piece.selected ? 'bg-blue-600' : [COLOR[props.piece.background]]">
    <img class="mx-auto my-auto" :src="getImgUrl(props.piece?.img || 'default')" alt="">
  </div>
</template>

<script setup lang="ts">

  interface Piece {
    img: string;
    selected: boolean;
    background: string;
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