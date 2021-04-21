import axios from "axios";
import { API_URL } from "../defroutes/api";

export function getPublications() {
    return axios.get(`${API_URL}/getpublications`)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
        });
}

export function deletePublication(id) {

    return axios.delete(`${API_URL}/deletepublication/${id}`)
                .then(res => {
                    return res.data;
                })
                .catch(err => {
                    console.log(err)
                    return err;
                })
}


export function getPublication(id) {

    return axios.get(`${API_URL}/publications/${id}`)
                .then(res => {
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return err;
                })
}

export function editPublication(data, token) {
    console.log(data)
    return axios.put(`${API_URL}/editpublication/${data.id}/${token}`, data)
                .then(res => {
                    console.log(res);
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return err;
                })
}


export function addPublication(data, token) {
    data.id = null;

    return axios.post(`${API_URL}/newpublication/${token}`, data)
                .then(res => {
                    console.log(res);
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return err;
                })
}