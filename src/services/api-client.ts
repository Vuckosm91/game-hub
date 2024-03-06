import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "a5f6d056dbcb48c4935556eb3915a958"
    }
})