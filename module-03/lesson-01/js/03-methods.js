/**
 * Методи масиву
 *
 * - join - повертає рядок
 * - split (метод рядків, не масивів) - повертає масив
 * - slice - повертає новий масив
 * - concat
 * - indexOf
 * - push/pop
 */

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
const strFromCourses = courses.join(' ');
const title = 'JavaScript is awesome!';
const arrayFomrTitle = title.split(' ');
const copyOfCourses = courses.slice(0, 3);
const newCoursesList = ['Vue', 'Angular', 'JavaScript'];
const updatedCourses = courses.concat(newCoursesList);

const searchIndex = updatedCourses.indexOf('JagaScrip');
updatedCourses.push('TypeScript', ['Python']);
console.log(updatedCourses);
// updatedCourses.pop();
// console.table(updatedCourses);
// console.log(updatedCourses[9][0]);
