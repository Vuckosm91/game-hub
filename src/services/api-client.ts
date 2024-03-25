import axios from "axios";

export interface FetchResponse<T>{
    count: number;
    results: T[]
}


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "a5f6d056dbcb48c4935556eb3915a958"
    }
})