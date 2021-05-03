import axios from "axios";
import { API_URL } from "../defroutes/api";

export function getBanks() {
    return axios.get(`${API_URL}/getbanks`)
                .then(res => res)
                .catch(err => err)
}

export function deleteBank(id) {
    return axios.delete(`${API_URL}/deletebank/${id}`)
                .then(res => res)
                .catch(err => err)
}

export function addBank(data) {
    return axios.post(`${API_URL}/addbank`, data)
                .then(res => res)
                .catch(err => err)
}