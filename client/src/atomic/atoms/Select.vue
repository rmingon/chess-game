<template>
  <div class="flex justify-center">
    <div class="mb-3 xl:w-96">
      <select @change="emit('change', $event)"
          class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option v-for="item in props.list" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    list: string[],
  }>()

  const emit = defineEmits<{
    (e: 'change', selected: string): void
  }>()
</script>

<style scoped>

</style>