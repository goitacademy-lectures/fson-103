/**
 * Авторизація запитів з ключами
 * Які бувають:
 * - у query string
 * - у хедерах
 *
 * Для прикладу використовуємо https://pixabay.com/api/docs/
 */
//https://pixabay.com/api/?key=15249615-5ccf49bef51d4f01888f64cb2&q=yellow+flowers&image_type=photo

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '15249615-5ccf49bef51d4f01888f64cb2';

const searchQuery = 'mops+szczeka+na+pszczołę';
const params = `?key=${API_KEY}&q=${searchQuery}&image_type=photo&lang=pl`;

const options = {
  headers: {
    API_KEY: '15249615-5ccf49bef51d4f01888f64cb2',
  },
};

fetch(`${BASE_URL}${params}`);
