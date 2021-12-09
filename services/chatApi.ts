import axios from 'axios'

export const chatApi = axios.create({
  //baseURL: 'http://localhost:4000',
  baseURL: 'https://callhub-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
})
