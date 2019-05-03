import axios from "axios";

export function getCredentials() {
    return new Promise((resolve, reject) => {
        axios
        .get("./static/user.json")
        .then(response =>{
            return resolve(response.data);
        })
        .catch(error => {
            reject(error);
        });
    });
}

export function getData() {
  return new Promise((resolve, reject) => {
      axios
          .get("./static/feeds.json")
          .then(response => {
            console.log("axios call")
              return resolve(response.data);
          })
          .catch(error => {
              reject(error);
          });
  });
}

