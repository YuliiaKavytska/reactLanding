import axios from 'axios'

const baseURL = ''

export const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'X-CoinAPI-Key': ''
  }
})
