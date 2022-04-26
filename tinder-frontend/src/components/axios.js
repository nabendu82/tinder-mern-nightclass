import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-mern-nightclass.herokuapp.com'
})

export default instance;