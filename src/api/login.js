import axios from "axios";
import { API_URL } from "../defroutes/api";

export function login(user) {
    return axios.post(`${API_URL}/auth`, user)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
        });
}

export function validateToken(token) {
    return axios.post(`${API_URL}/validate/token/${token}`)
        .then(res => {

            return res;
        })
        .catch(err => {
            console.log(err);
        })
}
