import axios from "axios";
import { API_URL } from "../defroutes/api";

export function getReports() {
    return axios.get(`${API_URL}/getreports`)
                .then(res => res)
                .catch(err => err)
}

export function deleteReport(id) {
    return axios.delete(`${API_URL}/deletereport/${id}`)
                .then(res => res)
                .catch(err => err)
}