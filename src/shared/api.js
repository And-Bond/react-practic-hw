import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://6319ebce8e51a64d2bf08d59.mockapi.io/api/products'
})

export const getProducts = async() => {
    const {data} = await instanse.get('/')
    console.log(data)
    return data
}

