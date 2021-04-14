import axios from "axios";
import { API_URL } from "../defroutes/api";

export function getProfile(token) {

    return axios.post(`${API_URL}/getprofile/${token}`)
                .then(res => {
                    return res.data;
                })
                .catch(err => {
                    console.log(err);
                })
}


export function updatePassword(token, oldp, newp) {
    
    return axios.post(`${API_URL}/updatepassword/${token}/${oldp}/${newp}`)
                .then(res => {
                    console.log(res);
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return err;
                })
}