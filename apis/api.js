import axios from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}
// User
export const userJoin = payload => axios.post(`${SERVER}/user/join`, payload, {headers} )
export const userLogin = payload  => axios.post( `${SERVER}/user/login`, payload, {headers} )
export const userLogout = () => axios.get( `${SERVER}/user/logout` )