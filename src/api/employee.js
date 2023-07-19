import { axiosClient } from "./api";

const getEmployee = () => {
    return axiosClient.get(`/employees`);
};

export {getEmployee};