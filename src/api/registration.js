import axios from "axios";
import { API_URL } from "../defroutes/api";

export function registration(user) {
    console.log(user)

    return axios.post(`${API_URL}/register`, user)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                console.log(err)
            });
}