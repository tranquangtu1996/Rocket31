import axios from "axios"
const axiosClient = axios.create({
    baseURL: "https://64a80f89dca581464b8538e3.mockapi.io",
});

axiosClient.interceptors.request.use(config => {
    config.headers['rocket-31'] = "2023";
    return config;
});

export {axiosClient};