import axios from "axios";

export const fetchNewWord = async () =>{
    const {data} = await axios<{FirstName: string}>('https://api.randomdatatools.ru/?unescaped=false&params=FirstName')
    return data.FirstName.toLowerCase()
}

