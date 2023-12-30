<script setup lang="ts">

interface Props {
  inCorrectLetters: string[]
}

defineProps<Props>()

</script>

<template>
  <div
      class="wrong-letters-container"
      v-if="inCorrectLetters.length"
  >
    <div class="wrong-letters">
      <p>Ошибки</p>
      <span
          v-for="(letter, index) in inCorrectLetters"
          :key="letter"
      >
        {{ index === inCorrectLetters.length - 1 ? letter : `${letter}, ` }}
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>