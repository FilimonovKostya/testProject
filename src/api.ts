import axios from 'axios'

const instance = axios.create({
    baseURL:'https://www.mrsoft.by/data.json',

})

export const api = () => {
    return instance.get(``)
}
