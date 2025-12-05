import axios from 'axios';

// URL base de tu JSON Server
const API_URL = 'http://localhost:3001/productos'; 
export const getProductos = () => {
    return axios.get(API_URL);
};
export const getProductoById = (id) => {
    return axios.get(`${API_URL}/${id}`); 
};