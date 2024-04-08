import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5004/play/getAllPlays"
})

export default api