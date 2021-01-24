import axios from 'axios';

export const login = (data) => {
    return axios.post("/api/profile/login", data)
};

export const logout = () => {
    return axios.get("/api/profile/logout")
};

export const createUser = (data) => {
    return axios.post("/api/profile/", data)
}; 

export const createPost = (data) => {
    return axios.post("/api/post/create", data)
};

export const getPost = () => {
    return axios.get("/api/post/");
};
}
export const createSavings = (data) => {
    return axios.post("/api/savings/", data)
}
