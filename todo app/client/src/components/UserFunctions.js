import axios from "axios";

export const register = newUser => {
    return axios
    .post('http://localhost:8000/api/register', newUser, {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}

export const login = user => {
    return axios
        .post('http://localhost:8000/api/login', {
            email: user.email,
            password: user.password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data.token)
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

export const getProfile = () => {
    return axios
        .get('http://localhost:8000/api/profile', {
            headers: {
                Authorization: `Bearer ${localStorage.usertoken}`
            }
        })
        .then(res => {
            console.log(res)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}