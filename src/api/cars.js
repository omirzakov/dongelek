import axios from "axios";
import { API_URL } from "../defroutes/api";

export function getCars() {
    return axios.get(`${API_URL}/getcars`)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
        });
}

export function deleteCar(id) {

    return axios.delete(`${API_URL}/deletecar/${id}`)
                .then(res => {
                    return res.data;
                })
                .catch(err => {
                    console.log(err)
                    return err;
                })
}


export function getCar(id) {

    return axios.get(`${API_URL}/cars/${id}`)
                .then(res => {
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return err;
                })
}

export function updateCar(data) {
    console.log(data)
    return axios.put(`${API_URL}/editcar/${data.id}`, data)
                .then(res => {
                    console.log(res);
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return err;
                })
}


export function addCar(data) {
    data.id = null;

    return axios.post(`${API_URL}/newcar`, data)
                .then(res => {
                    console.log(res);
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return err;
                })
}

export function addCarGallery(name, gallery) {    
    console.log(name)
    const galleryTransform = gallery.map((data, i) => ({
        picUrl: data[`comment-${i}`]
    }))

    return axios.post(`${API_URL}/addcargallery/${name}`, galleryTransform)
                .then(res => res)
                .catch(err => err)
}
