import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID -_FXpmDosD2QfRpTR8zmWlMgyhSbY4IUnR5l2Zeiab0',
  },
})