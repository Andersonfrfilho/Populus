export function requestUserExist() {
  return {
    type: '@users/REQUEST_USER_EXIST',
  };
}
export function requestLogin(email, password) {
  return {
    type: '@users/REQUEST_LOGIN',
    payload: {
      email,
      password,
    },
  };
}
export function toRegisterUser() {
  return {
    type: '@users/REQUEST_TO_REGISTER_USER',
  };
}
export function requestRegisterUser(
  name,
  phone,
  email,
  password,
  confirmPassword
) {
  return {
    type: '@users/REQUEST_REGISTER_USER',
    payload: {
      name,
      phone,
      email,
      password,
      confirmPassword,
    },
  };
}
export function defineEmail(email) {
  return {
    type: '@users/DEFINE_EMAIL',
    payload: {
      email,
    },
  };
}
export function requestForgotPassword(email) {
  return {
    type: '@users/REQUEST_FORGOT_PASSWORD',
    payload: {
      email,
    },
  };
}
export function requestRedefinePassword(password, confirmPassword, token) {
  return {
    type: '@users/REQUEST_REDEFINE_PASSWORD',
    payload: {
      password,
      confirmPassword,
      token,
    },
  };
}
export function requestLogout() {
  return {
    type: '@users/REQUEST_LOGOUT',
  };
}
