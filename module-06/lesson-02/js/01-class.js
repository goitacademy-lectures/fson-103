/**
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */
// #region
// const mango = {
//   userName: 'Mango',
//   userPass: 'qwe124',
//   showUserName() {
//     console.log(this.userName);
//   },
// };

// mango.showUserName();

// const poly = {
//   userName: 'Poly',
//   userPass: '124qwe',
//   showUserName() {
//     console.log(this.userName);
//   },
// };
// function User1(name, pass) {
//   // this = {}
//   this.name = name;
//   this.pass = pass;
//   // return this
// }
// console.log(User.prototype);

// console.dir(User);
// const mango = new User1('Mango', 'qwe124');
// console.log(mango);
// const poly = new User('Poly', '124qwe');
// console.log('poly:', poly);
// #endregion
class User {
  static amountOfRegisteredUsers = 0;
  #email;
  // name;
  password;

  constructor(name = 'no name', pass = '', email) {
    this._name = name;
    this.password = pass;
    this.#email = email;
    User.calcNumberOfUsers();
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
  // getName() {
  //   return this.name;
  // }
  // setName(newName) {
  //   this.name = newName;
  // }
  get email() {
    return this.#email;
  }
  set email(newEmail) {
    const isChecked = this.#checkEmail(newEmail);
    if (isChecked) {
      this.#email = newEmail;
    } else {
      console.log('Wrong email type');
    }
  }
  #checkEmail(email) {
    if (email.includes('@')) {
      return true;
    }
    return false;
  }
  static calcNumberOfUsers() {
    User.amountOfRegisteredUsers += 1;
  }
}

/**
 * метод getName() повертає імʼя користувача
 * */
/**
 * метод setName() змінює імʼя користувача
 * */

const ajax = new User('Ajax', 'qwe123', 'ajax@email.com');
console.log('ajax:', ajax);
// console.log(ajax.amountOfRegisteredUsers);
// console.log((ajax.name = 'Xaja'));
// const res1 = ajax.getName();
// ajax.setName('Super Ajax');
// const res3 = ajax.getEmail();
// console.log('res3:', ajax.email);
// ajax.email = 'superajax@mail.com';
// console.log('res3:', ajax.email);
// ajax.setEmail('superajax@mil.com');
// console.log(ajax.getEmail());
// ajax.#email =
// console.log('res1:', ajax.getName());

const platon = new User('Platon', 'asd098');
// console.log('platon:', platon);
// const res2 = platon.getName();
// console.log('res2:', res2);

const neptun = new User('Neptun', 'zxc!@#');

const totalUsersAmount = User.amountOfRegisteredUsers;
console.log('totalUsersAmount:', totalUsersAmount);
