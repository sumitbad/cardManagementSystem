import axios from 'axios';

const API_URL = 'http://localhost:5001/api/cart'; // Replace with your actual backend URL

export const getCart = async () => {
  return await axios.get(`${API_URL}/`);
};

export const addItemToCart = async (item) => {
  return await axios.post(`${API_URL}/add`, item);
};

export const removeItemFromCart = async (itemId) => {
  return await axios.delete(`${API_URL}/remove/${itemId}`);
};
