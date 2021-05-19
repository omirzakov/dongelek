import axios from "axios";
import { API_URL } from "../defroutes/api";

export function getAllCredits() {
    return axios.get(`${API_URL}/carcredits`)
                .then(res => res)
                .catch(err => err)
}


export function addCredit(data) {
    return axios.post(`${API_URL}/addcredit`, data)
                .then(res => res)
                .catch(err => err)
}


export function getCredits(token) {
    return axios.get(`${API_URL}/getcredits/${token}`)
                .then(res => res)
                .catch(err => err)
}