import axios from "axios";

export function getCredentials() {
    return new Promise((resolve, reject) => {
        axios
        .get("./static/user.json")
        .then(response =>{
            console.log("axios called");
            return resolve(response.data);
        })
        .catch(error => {
            reject(error);
        });
    });
}