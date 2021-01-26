import axios from 'axios';

export default {
    login: function (data) {
        return axios.post("/api/profile/login", data)
    },

    logout: function () {
        return axios.get("/api/profile/logout")
    },

    createUser: function (data) {
        return axios.post("/api/profile/", data)
    },

    createPost: function (data) {
        return axios.post("/api/posts/share/create", data)
    },

    getPost: function () {
        return axios.get("/api/posts/share");
    },

    createSavings: function (data) {
        return axios.post("/api/savings/create", data)
    },
    
    getSavings: function () {
        return axios.get("/api/savings");
    },

    getAddedLikes: function (id) {
        return axios.get("/api/posts/addlike/" + id);
    },

    getRemovedLikes: function (id) {
        return axios.get("/api/posts/removelike/" + id);
    },

    getProfileImage: function (id) {
        return axios.get("/api/profile/" + id);
    }, 

    getAddedFavorites: function (id) {
        return axios.get("api/posts/addfavorite/" + id);
    }, 

    getRemovedFavorites: function (id) {
        return axios.get("api/posts/removefavorite/" + id);
    }
}

