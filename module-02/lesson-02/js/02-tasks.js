/**
 * Форматування посилання (endsWith)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення змінної link цей символ.
 * Використовуй конструкцію if...else.
 */

let link = 'https://my-site.com/about/';

function checklink(originLink) {
  const hasSlash = originLink.endsWith('/');
  if (hasSlash) {
    return originLink;
  } else {
    return `${originLink}/`;
  }
}

// console.log(checklink(link));

/**
 * Форматування посилання (includes та логічне «І»)
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

let url = 'https://my-site.com/about';

function checkUrl(originUrl) {
  const checkString = 'my-site';
  const lastIndex = originUrl.length - 1;
  // Boolean
  const hasSlash = originUrl.includes('/', lastIndex);
  const hasCheckString = originUrl.includes(checkString);

  if (!hasSlash && hasCheckString) {
    return `${originUrl}/`;
  } else {
    return originUrl;
  }
}

const res_1 = checkUrl(url);
// console.log(res_1);

/**
 * Пошук у рядку методом includes()
 */

const blacklistedWord1 = 'spam';
const blacklistedWord2 = 'sale';

const string1 =
  "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
const string2 = "Biggest SALE this week, don't miss out!";
const string3 = '#fatlivesmatter advertising campaign';

function checkSpam(stringToCheck, spamWord1, spamWord2) {
  // const stringToCheck, spamWord1, spamWord2
  // stringToCheck = "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
  // spamWord1 = 'spam';
  // spamWord2 = 'sale';
  const normalizedString = stringToCheck.toLowerCase();
  // hello, i'm prince abdul, this is not span, i'm offering you a million!
  // spam
  const hasSpamWord1 = normalizedString.includes(spamWord1); // false
  const hasSpamWord2 = normalizedString.includes(spamWord2);

  if (hasSpamWord1 || hasSpamWord2) {
    return 'The string has spam word';
  } else {
    return 'No spam word';
  }
}

const res_2 = checkSpam(
  "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!",
  'spam',
  'sale'
);
console.log('res_2:', res_2);
const res_3 = checkSpam(string2, blacklistedWord1, blacklistedWord2);
console.log('res_3:', res_3);
const res_4 = checkSpam(string3, blacklistedWord1, blacklistedWord2);
console.log('res_4:', res_4);
