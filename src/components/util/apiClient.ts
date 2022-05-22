import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://train-api-rails.herokuapp.com',
});
