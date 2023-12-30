import {fetchNewWord} from "@/api/fetchNewWord";
import {onMounted, ref} from "vue";

export const useRandomWord = () => {
    const word = ref('')
    const getRandomWord = async () =>{
        try {
            word.value = await fetchNewWord()
        }
        catch (e: any){
            alert(e.message)
        }
    }
    onMounted(async ()=>{
        await getRandomWord()
    })
    return {
        word,
        getRandomWord
    }

}


