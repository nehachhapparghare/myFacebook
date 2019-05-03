import { getCredentials } from "../../service.js";

export const userModule = {
    state: {
        userDetails: [],
        specificUser:[]
    },
    getters: {
        userLogin(state) {
            return state.userDetails;
        },
    },
    actions: {
        checkData({ commit }) {
            return new Promise((resolve)=>{
                getCredentials().then(credentials => {
                    resolve(credentials);
                    commit('getJsonData', credentials)
                });
            })
        },
        loggedInUser({ commit } ) {
            commit('getLoggedInUser',name)
            console.log("logged in called");
        }
    },
    mutations: {
        getJsonData(state, credentials) {
            state.userDetails = credentials
        },
        getLoggedInUser(state, name){
            console.log(state.userDetails);
        }
    },

}
