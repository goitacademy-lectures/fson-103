/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

console.log('Boolean(true)      -> ', Boolean(true));
console.log('Boolean(false)     -> ', Boolean(false));
console.log('Boolean(NaN)       -> ', Boolean(NaN));
console.log('Boolean(null)      -> ', Boolean(null));
console.log('Boolean(undefined) -> ', Boolean(undefined));
console.log('Boolean(0)         -> ', Boolean(0));
console.log('Boolean(3.14)      -> ', Boolean(3.14));
console.log('Boolean(-10)       -> ', Boolean(-10));
console.log('Boolean("")        -> ', Boolean(''));
console.log('Boolean("hello")   -> ', Boolean('hello'));
console.log('Boolean("false")   -> ', Boolean('false'));

/**
 * --------------------------------
 */

console.log(5 && 4);
console.log(5 && 'mango');

/**
 * --------------------------------
 */

console.log(false || 5);
console.log(false || null);

/**
 * --------------------------------
 */

console.log(!5);
console.log(!false);

/**
 * --------------------------------
 */

console.log(true && 3);

console.log(false && 3);

console.log(true && 4 && 'kiwi');

console.log(true && 0 && 'kiwi');

console.log(true || 3);

console.log(true || 3 || 4);

console.log(true || false || 7);

console.log(null || 2 || undefined);

console.log((1 && null && 2) > 0);

console.log(null || (2 && 3) || 4);
