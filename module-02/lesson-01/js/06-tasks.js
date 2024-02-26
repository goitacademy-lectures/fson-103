/**
 * Напиши скрипт перевірки підписки користувача при доступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

const sub = 'vip';
const hasAccess = sub === 'pro' || sub === 'vip';
// console.log('Does user get access?', hasAccess);

/**
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */

const isOnline = true;
const isFriend = true;
const isDnd = false; // Do Not Disturb

const canOpenChat = isOnline && isFriend && !isDnd;
console.log('Можна відкрити чат? ', canOpenChat ? 'Так' : 'Ні');
