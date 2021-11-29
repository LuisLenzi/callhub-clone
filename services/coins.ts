import axios from 'axios'

const CoinsAPI = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/last/',
})

export default CoinsAPI
