import axios from 'axios';

// Створюємо інстанс axios з базовим URL з .env
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Запит для отримання новин
export const getNews = () => api.get('/api/news');

// Запит для отримання галереї
export const getGallery = () => api.get('/api/gallery');

// Запит для отримання подій (слайдів)
export const getEvents = () => api.get('/api/events');
