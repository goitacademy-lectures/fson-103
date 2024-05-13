import axios from 'axios';

const API_KEY = '7ONfI7UAT2PSN72enwnwIF_Hz9RWzxRm5xMYrdv1n-4';
// const BASE_URL = 'https://api.unsplash.com';
axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchPhotosByQuery = (query = 'pug') => {
  const searchParams = {
    query,
    client_id: API_KEY,
    orientation: 'squarish',
  };

  return axios.get('/search/photos', {
    params: {
      ...searchParams,
    },
  });
};
