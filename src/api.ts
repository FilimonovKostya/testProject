import axios from 'axios'

const instance = axios.create({
    // baseURL: 'https://cors-anywhere.herokuapp.com/https://www.mrsoft.by/data.json',
    baseURL: 'https://www.mrsoft.by/data.json',
})

//Использовал https://cors-anywhere.herokuapp.com/ чтобы обойти политику безопасности CORS, т.к я не могу слать запрос с другого домена
// если сервер не предоставил такую возможность

type ResponseType = {
    data: string[]
}

export const api = () => {
    return instance.get<ResponseType>(``)
}
