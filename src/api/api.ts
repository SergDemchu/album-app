import axios from 'axios';

export const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const photoAPI = {
    getPhoto() {
        return instance.get(`photos`)
            .then(response => response.data);
    }
};
