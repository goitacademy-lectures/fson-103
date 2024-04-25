export function getUsers() {
  console.log('Get users from server');
}
export function updateUsers(users) {
  console.log('Update users on servers');
}
export function deleteUsers() {
  console.log('Delete users on server');
}
export function createUsers() {
  console.log('Create users');
}
export function sendUsers() {
  console.log('Send users to server');
}

export default { getUsers, updateUsers, deleteUsers, createUsers, sendUsers };
