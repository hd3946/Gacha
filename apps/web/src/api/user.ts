import { sign } from './index'

function registerInfo() {
  return sign.get('info')
}

function registerUser(userData: any) {
  return sign.post('signup', userData)
}

function loginUser(userData: any) {
  return sign.post('login', userData)
}

/*
function updateProfileUser(imgData) {
  return sign.post("signintes", imgData);
}

function logoutUser() {
  return sign.post("logout");
}
*/

export { loginUser, registerInfo, registerUser }
