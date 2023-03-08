import axios from "axios"

const instance = axios.create({
    baseURL:`https://url-shortener-kefu.onrender.com/api`,
});

export default instance;