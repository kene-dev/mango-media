import axios from "axios"

const API_URL = 'https://mangospace-media.onrender.com/api/v1'


// LOGIN USER
const login = async (userData) => {
    const response = await axios.post(API_URL+'/auth/login', userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// // REGISTER USER
// const register = async (userData) => {
//     const response = await axios.post(API_URL+'/register', userData)

//     if(response.data){
//         localStorage.setItem('user', JSON.stringify(response.data))
//     }

//     return response.data
// }

// // VERIFY USER
// const verify = async (userData) => {
//     const response = await axios.post(API_URL+'/verify', userData)
//     if(response.data){
//         localStorage.setItem('message', JSON.stringify(response.data))
//     }

//     return response.data
// }

// CREATE INVESTOR
// const createClient = async (userData) => {
//     const token = JSON.parse(localStorage.getItem('user'))
//     console.log(token.token)
//     const response = await axios.post(API_URL+'/auth/register', userData)
//     if(response){
//       console.log("AUTH SERVICE" + response.data)
//     }

//     return response.data
// }

// // LOGIN INVESTOR
// const loginInvestor = async (userData) => {
//     // const token = JSON.parse(localStorage.getItem('user'))
//     // console.log(token.AccessToken)
//     const response = await axios.post(API_URL+'/investorlogin', userData,)
//     if(response.data){
//         localStorage.setItem('investor', JSON.stringify(response.data))
//     }

//     return response.data
// }

// LOGOUT USER
const logout = () => {
    localStorage.removeItem('user')
}



const authservice = {
login,
// register,
// verify,
// createClient,
// loginInvestor,
logout,
}

export default authservice
