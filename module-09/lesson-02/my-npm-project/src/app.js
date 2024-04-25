const { v4: uuidv4 } = require('uuid');

const user = {
  id: uuidv4(),
  name: 'Mango',
};

const setUserStatus = (user, statusInfo) => {
  user.status = statusInfo;
};

setUserStatus(user, 'online');

console.log(user);

class App {
  constructor(appName) {
    this.appName = appName;
  }
}

const nodaApp = App('Node');
console.log('nodaApp:', nodaApp);
