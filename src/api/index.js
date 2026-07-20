import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getProjects = () => api.get('/projects');
export const getProject = (id) => api.get(`/projects/${id}`);
export const getSkills = () => api.get('/skills');
export const getAbout = () => api.get('/about');
export const sendMessage = (data) => api.post('/contact', data);

export default api;
