// Скажіть ця задача поки що важка для нашого рівня чи то я не можу придумати рішення? Якщо 2й варінт то дайте підказку будь-ласка.

// Умова: Ви замовляєте для свого друга сорочку зі словом, написаним мовою жестів, і хочете змусити друга подумати, що там написано щось інше, ніж те, що насправді написано.
// Ваш друг розумний, але він не може знати те, чого він ще не знає, він знає лише певну кількість букв на мові жестів. Враховуючи слово на сорочці, слово, у яке ви намагаєтеся переконати свого друга, є на сорочці, а також літери на мові жестів, яку знають ваші друзі, з’ясуйте, чи зможе він зрозуміти, що ви його дурите. Поверніть true, якщо ваш друг може зрозуміти, що ви його обманюєте, інакше поверніть false.
// Гарантовано, що обидва слова будуть однакової довжини і написані малими літерами (a-z)

// Example 1:
// Word on shirt: snack
// Word you said: snake
// Letters your friend knows: [c]

// return true
// Your friend knows the 4th letter is a c rather than a k.
// Example 2:
// Word on shirt: snack
// Word you said: snack
// Letters your friend knows: [s, n, a, c, k]

// return false
// Since you are not fooling your friend
// Example 3:
// Word on shirt: snake
// Word you said: snack
// Letters your friend knows: [c]

// return true
// Ваш друг знає що 4та літера це не с
// функція:
function gaslighting(shirtWord, yourWord, friendsLetters) {}
