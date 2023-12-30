import {computed, ref} from "vue";
import type {Ref} from "vue";

export const useLetters = (word: Ref<string>) =>{
    const letters = ref<string[]>([])
    const correctLetters = computed(() => letters.value.filter(x => word.value.includes(x)))
    const inCorrectLetters = computed(() => letters.value.filter(x => !word.value.includes(x)))
    const isWin = computed(() => correctLetters.value.length === new Set(word.value).size)
    const isLose = computed(() => inCorrectLetters.value.length === word.value.length)
    const addLetter = (key :string) =>{
        if (/[а-яА-ЯеЁ]/.test(key) && key.length === 1) {
            letters.value.push(key.toLowerCase());
        }
    }
    const resetLetters = () =>{
        letters.value = []
    }

    return{
        letters,
        correctLetters,
        inCorrectLetters,
        isWin,
        isLose,
        addLetter,
        resetLetters
    }
}