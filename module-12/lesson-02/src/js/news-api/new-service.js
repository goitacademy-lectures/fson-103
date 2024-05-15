import { API_KEY, BASE_URL, PER_PAGE } from './config.js';

export const fetchNewsArticles = async (query = 'cat', newsPage = 1) => {
  const params = new URLSearchParams({
    q: query,
    apiKey: API_KEY,
    pageSize: PER_PAGE,
    page: newsPage,
  });

  const response = await fetch(`${BASE_URL}/everything?${params}`);
  const data = await response.json();

  if (data.status === 'error') {
    throw new Error(data.code);
  }

  return data;
};
