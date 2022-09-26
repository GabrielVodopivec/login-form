import axios from 'axios';

export const getToken = (email, password) => {
    return axios
        .post('http://challenge-react.alkemy.org', {email, password})
        .then((response) => {
            const token = response.data.token;
            localStorage.setItem('token', token);
        })
}