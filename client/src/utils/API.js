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

    createSavings: function (data, id) {
        return axios.put("/api/savings/create/" + id, data)

    },

    getSavings: function (id) {
        return axios.get("/api/savings/" + id);
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
    },

    getFavorites: function () {
        return axios.get("/api/posts/favorites");
    },

    getAddedLiked: function (id) {
        return axios.get("api/posts/addliked/" + id);
    }, 

    getRemovedLiked: function (id) {
        return axios.get("api/posts/removeliked/" + id);
    }, 

    getPosterUsername: function(id, data) {
        return axios.post("api/posts/username/" + id, data);
    },

    getPosterProfile: function(id, data) {
        return axios.post("api/posts/profile/" + id, data);
    },
}

  

