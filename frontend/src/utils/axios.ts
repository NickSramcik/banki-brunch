import axios from "axios"

export default axios.create({
  baseURL: import.meta.env.DEV
    ? "http://localhost:3000/api/v1/"
    : import.meta.env.API_URL,
  withCredentials: true
})
