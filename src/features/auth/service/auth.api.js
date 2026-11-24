import axios from "axios";
import { data } from "react-router";


async function register(username, email, password) {
    try {
        const response = await axios.post('https://localhost:3000/api/auth/register',{
           username: username,
           email: email,
           password: password
        },{
            withCredentials: true
        })

        return response.data;
    } catch (error) {
        throw error
    }
}

async function login(email, password) {
    try {
        const response = await axios.post('http://localhost:3000/api/auth/login',{
            email : email,
            password:password
        },{
            withCredentials:true
        })

        return response.data
    } catch (error) {
        throw error
    }
}

async function getMe(params) {
    
}