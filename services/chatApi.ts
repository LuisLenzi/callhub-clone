import axios from 'axios'

export const chatApi = axios.create({
  baseURL: 'http://localhost:4000',
  //baseURL: 'https://chat-api-node.herokuapp.com',
})
