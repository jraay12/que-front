import axios from "axios";
import { useMutation } from "react-query";

//For Login
const facultyLogin = (credentials) => {
    return axios.post(`https://ustp-queueing-system.onrender.com/auth/login`, credentials)
}

export const MutateLogin = () => {
    return useMutation(facultyLogin)
}      