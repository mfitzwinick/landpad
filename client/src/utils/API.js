import axios from 'axios';

export const login = (data) => {
    return axios.post("/api/profile/login", data)
};

export const logout = () => {
    return axios.get("/api/profile/logout")
}