import axios from "axios";
import { API_URL } from "../defroutes/api";


export function getCategories() {

    return axios.get(`${API_URL}/getcategories`)
                .then(res => {
                    return res.data;
                })
                .catch(err => {
                    console.log(err);
                    return err;
                })
}

export function getCategory(id) {

    return axios.get(`${API_URL}/categories/${id}`)
                .then(res => {
                    return res.data;
                })
                .catch(err => {
                    console.log(err);
                    return err;
                })
}

export function addCategory(data) {
    data.id = null;

    return axios.post(`${API_URL}/newcategory`, data)
                .then(res => {
                    console.log(res);
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return err;
                })
}

export function updateCategory(data) {
    console.log(data)
    return axios.put(`${API_URL}/editcategory/${data.id}`, data)
                .then(res => {
                    console.log(res);
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return err;
                })
}

export function deleteCategory(id) {

    return axios.delete(`${API_URL}/deletecategory/${id}`)
                .then(res => {
                    return res.data;
                })
                .catch(err => {
                    console.log(err)
                    return err;
                })
}