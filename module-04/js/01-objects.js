/**
 * Об'єкти
 *
 * - Створення об'єкта
 * - Вкладені властивості
 * - Доступ до властивостей через крапку
 * - Доступ до вкладених властивостей
 * - Доступ до властивостей через квадратні дужки
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

const playlistName = 'My favorite songs';
const playlistRating = 4.8;
const playlistTracks = ['track-1', 'track-2', 'track-3'];
const playlistIsFavorite = true;

// const playlist = Object.create();
const playlist = {
  name: 'My favorite songs',
  rating: 4.8,
  tracks: ['track-1', 'track-2', 'track-3'],
  isFavorite: true,
  languages: {
    en: 'english',
    de: 'german',
    uk: 'ukrainian',
  },
  // artists: ['artist-1', 'artist-2', 'artist-3'],
};
let value = playlist['name'];
value = playlist['tracks'];
// let tracks = playlist['tracks'];
// tracks[tracks.length - 1];
// console.log('Last track ===>>>', tracks[tracks.length - 1]);
// value = playlist.isFavorite;
value = playlist.languages.uk;

playlist.rating = 5;
playlist.artists = ['artist-1', 'artist-2', 'artist-3'];
// console.log('playlist.artists:', playlist.artists);
playlist.artists = null;
// console.log(playlist);
/**
 * -----------------------------------
 */
// const userInput = document.querySelector('input[type="text"]').value;
// console.log('userInput:', userInput);
// const propertyName = 'tracks';

// const result = playlist[userInput];
// tracksList.append(...result);

/**
 * -----------------------------------
 */
function foo(values) {
  // values = undefined
  console.log(values);
  console.log(values.a);
  console.log(values.b);
}

const options = {
  a: 1,
  b: 2,
};

foo(options);
foo({
  a: 5,
  b: 10,
});
