import axios from "axios";
import { API_URL } from "../defroutes/api";

export function getAllCommentsByPublication(id) {
    return axios.get(`${API_URL}/getcomments/${id}`)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
}

export function addComment(data) {
    return axios.post(`${API_URL}/newcomment`, data)
                .then(res => res)
                .catch(err => err);
}

export function deleteComment(id) {
    return axios.delete(`${API_URL}/deletecomment/${id}`)
                .then(res => res)
                .catch(err => err);
}