<script setup lang="ts">
interface Props {
  word: string
  correctLetters: string[]
}

defineProps<Props>()

</script>

<template>
  <div class="word">
    <div
        v-for="(letter, index) in word"
        :key="index"
        class="letter"
    >
      {{ correctLetters.includes(letter) ? letter : '' }}
    </div>
  </div>
</template>

<style scoped>

</style>