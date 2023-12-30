<script setup lang="ts">
import AppHeader from "@/components/app-header.vue";
import AppFigure from "@/components/app-figure.vue";
import AppWrongLetters from "@/components/app-wrongLetters.vue";
import AppWord from "@/components/app-word.vue";
import AppPopup from "@/components/app-popup.vue";
import AppNotification from "@/components/app-notification.vue";
import {ref, watch} from "vue";
import {useRandomWord} from "@/composable/useRandomWord";
import {useLetters} from "@/composable/useLetters";
import {useNotification} from "@/composable/useNotification";

const {word, getRandomWord} = useRandomWord()
const {letters, correctLetters, inCorrectLetters, isWin, isLose, addLetter, resetLetters} = useLetters(word)
const {notification, showNotification} = useNotification()

const popup = ref<InstanceType<typeof AppPopup> | null>(null)

const restart = async () => {
  await getRandomWord()
  resetLetters()
  popup.value?.close()
}

watch(isLose, () => {
  if (isLose.value) {
    popup.value?.open('lose')
  }
})

watch(isWin, () => {
  if (isWin.value) {
    popup.value?.open('win')
  }
})

window.addEventListener('keydown', ({key}) => {

  if (isWin.value || isLose.value){
    return
  }

  if (letters.value.includes(key)) {
    showNotification()
    return
  }

  addLetter(key)
})

</script>

<template>
  <div id="app">
    <app-header/>
    <div class="game-container">
      <app-figure :wrongs-letters-length="inCorrectLetters.length"/>
      <app-wrong-letters :in-correct-letters="inCorrectLetters"/>
      <app-word
          :word="word"
          :correct-letters="correctLetters"
      />
    </div>
    <app-popup ref="popup" :correct-word="word" @restart="restart"/>
    <app-notification ref="notification"/>
  </div>

</template>
