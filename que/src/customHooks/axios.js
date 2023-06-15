import axios from "axios";
import { useMutation, useQuery } from "react-query";

//For Login
const facultyLogin = (credentials) => {
    return axios.post(`https://ustp-queueing-system.onrender.com/auth/login`, credentials)
}

export const MutateLogin = () => {
    return useMutation(facultyLogin)
}      


//For Dashboard Data
const dashboardQuery = async() => {
    const value =  await axios.get('https://ustp-queueing-system.onrender.com/user/')
    return value.data
}

export const GetFaculty = () => {
    return useQuery(['faculty'], dashboardQuery)
}


//For Pending Data
const pendingQuery = async() => {
    const value = await axios.get('https://ustp-queueing-system.onrender.com/queue/pending')
    return value.data
}

export const GetPending = () => {
    return useQuery(['pending'], pendingQuery)
}