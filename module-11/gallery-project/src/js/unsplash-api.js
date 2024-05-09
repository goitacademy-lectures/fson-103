const API_KEY = 'ZOxXdt_bxwX5BKPQIkJ1JdVvsATw8Hg0QwSjddx9o8M';
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const fetchPhotosByQuery = (query = 'pug') => {
  const searchParams = new URLSearchParams({
    query,
    client_id: API_KEY,
    per_page: 20,
    orientation: 'squarish',
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
};
