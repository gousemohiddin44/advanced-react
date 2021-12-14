import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

// apiClient.interceptors.request.use(config => console.log('config', config), err => Promise.reject(err));

export default apiClient;
