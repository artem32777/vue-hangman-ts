<script setup lang="ts">
import {ref} from "vue";
import type {GameStatus} from "@/types/GameStatus";

interface Props {
  correctWord: string
}

defineProps<Props>()


const gameStatus = ref<GameStatus | null>(null)
const isVisible = ref(false)

const open = (status: GameStatus) => {
  setTimeout(()=> {
    isVisible.value = true
    if (status === 'win') {
      gameStatus.value = 'win'
    }
    if (status === 'lose') {
      gameStatus.value = 'lose'
    }
  },1000)
}

const close = () => {
  isVisible.value = false
}

defineExpose({
  open,
  close
})

const emit = defineEmits<{
  (e: 'restart'): void
}>();


</script>

<template>
  <div v-show="isVisible" class="popup-container">
    <div class="popup">
      <h2 v-if="gameStatus === 'win' ">Поздравляю, вы победили! 😃</h2>
      <template v-if="gameStatus === 'lose' ">
        <h2 >Вы проиграли. 😕</h2>
        <h3>...имя: {{correctWord}}</h3>
      </template>
      <button @click="emit('restart')">Сыграть еще раз</button>
    </div>
  </div>
</template>

<style scoped>

</style>