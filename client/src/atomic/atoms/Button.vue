<template>
  <button class="text-white font-bold py-2 px-4 rounded" :class="[TYPE_TO_COLOR[props.type || 'info' ]]">
    {{ props.label }}
  </button>
</template>

<script setup lang="ts">
  const props = defineProps<{
    label: string,
    type?: 'info' | 'err' | 'warm'
  }>()

  const TYPE_TO_COLOR = {
    info: 'bg-blue-500 hover:bg-blue-700',
    err: 'bg-red-500 hover:bg-red-700',
    warm: 'bg-orange-500 hover:bg-orange-700',
  }
</script>

<style scoped>

</style>