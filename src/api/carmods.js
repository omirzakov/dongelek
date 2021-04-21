import axios from "axios";
import { API_URL } from "../defroutes/api";

export function getCarMods() {
    return axios.get(`${API_URL}/getcarmods`)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
        });
}

export function deleteCarMod(id) {

    return axios.delete(`${API_URL}/deletecarmod/${id}`)
                .then(res => {
                    return res.data;
                })
                .catch(err => {
                    console.log(err)
                    return err;
                })
}


export function getCarMod(id) {

    return axios.get(`${API_URL}/carmods/${id}`)
                .then(res => {
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return err;
                })
}

export function updateCarMod(data) {
    console.log(data)
    return axios.put(`${API_URL}/editcarmod/${data.id}`, data)
                .then(res => {
                    console.log(res);
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return err;
                })
}


export function addCarMod(data) {
    data.id = null;

    return axios.post(`${API_URL}/newcarmod`, data)
                .then(res => {
                    console.log(res);
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return err;
                })
}