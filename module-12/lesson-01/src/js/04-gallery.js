import iziToast from 'izitoast';
import { createGalleryItemMarkup } from './template.js';
import { fetchPhotosByQuery } from './unsplash-api.js';

// Styles from lib
import 'izitoast/dist/css/iziToast.min.css';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');

async function onSearchFormSubmit(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchKeyword.value.trim();

  if (searchQuery === '') {
    galleryEl.innerHTML = '';
    event.target.reset();
    iziToast.show({
      message: 'Input field can not be empty',
      position: 'topRight',
      timeout: 2000,
      color: 'red',
    });

    return;
  }

  galleryEl.innerHTML = '';
  loaderEl.classList.remove('is-hidden');

  try {
    const { data } = await fetchPhotosByQuery(searchQuery);

    if (data.total === 0) {
      iziToast.show({
        message: 'Sorry, there are no images for this query',
        position: 'topRight',
        timeout: 2000,
        color: 'red',
      });
      return;
    }

    galleryEl.innerHTML = createGalleryItemMarkup(data.results);
  } catch (error) {
    console.log(error);
  }

  event.target.reset();
  loaderEl.classList.add('is-hidden');
}

searchFormEl.addEventListener('submit', onSearchFormSubmit);
