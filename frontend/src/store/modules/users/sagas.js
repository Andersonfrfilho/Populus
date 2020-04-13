import { all, call, put, takeLatest, cancel, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { history } from '../../../services/history';
import {
  loading,
  successAction,
  failureAction,
  breakAction,
} from '../common/actions';
import { defineEmail } from './actions';
import { defineInformationUser } from '../contacts/actions';
import { errorVerify, NewException } from '../../../utils';

function* requestLogin({ payload: { email, password } }) {
  yield put(loading(''));
  try {
    const {
      data: { token, user },
    } = yield call(api.post, `/sessions`, { email, password });
    if (!token || token === null) {
      throw new NewException(
        'erro-login',
        'Falha ao realizar login, verifique o usuario ou senha...'
      );
    }
    localStorage.setItem('populus@token', token);
    localStorage.setItem('populus@user', JSON.stringify(user));
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const {
      data: { contacts },
    } = yield call(api.get, `/user`, headers);
    localStorage.setItem('populus@contacts', JSON.stringify(contacts));
    yield put(defineInformationUser(user.name, contacts));
    toast.success('login efetuado com sucesso');
    history.push('/drawer');
    yield put(successAction(''));
  } catch (error) {
    const message = errorVerify(error);
    toast.error(message);
    yield put(failureAction(message));
  }
}
function* requestLoginExist() {
  yield put(loading(''));
  const token = localStorage.getItem('populus@token');
  if (token === null || token === '') {
    yield put(breakAction(''));
    yield cancel();
  }
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const {
    data: { contacts },
  } = yield call(api.get, `/user`, headers);
  let user = localStorage.setItem('populus@user');
  user = JSON.parse(user);
  const dataNames = [];
  const dataInfo = [
    {
      options: [
        {
          name: 'Nome',
          type: 'alpha',
          select: false,
          length: 3,
          align: 'flex-start',
        },
        {
          name: 'E-mail',
          type: 'alpha',
          select: false,
          length: 3,
          align: 'flex-start',
        },
      ],
    },
  ];
  contacts.forEach(contact => {
    dataInfo.push(contact);
    dataNames.push(`${contact.name} ${contact.lastname}`);
  });
  yield put(defineInformationUser(user.name, dataInfo, dataNames));
  toast.success('login efetuado com sucesso');
  history.push('/drawer');
  yield put(successAction(''));

  yield put();
  history.push('/drawer');
  yield put(successAction(''));
}
function* toRegisterUser() {
  yield delay(600);
  yield put(loading(''));
  history.push('/Register');
  yield put(successAction(''));
}
function* requestRegisterUser({
  payload: { name, phone, email, password, confirmPassword },
}) {
  yield put(loading(''));
  try {
    yield call(api.post, `/users`, {
      name,
      phone,
      email,
      password,
      confirmPassword,
    });
    toast.success('cadastro efetuado com sucesso');
    yield put(defineEmail(email));
    history.push('/Login');
    yield put(successAction(''));
  } catch (error) {
    const message = errorVerify(error);
    toast.error(message);
    yield put(failureAction(message));
  }
}
function* requestForgotPassword({ payload: { email } }) {
  yield put(loading(''));
  try {
    yield call(api.post, `/user/forgotPassword`, {
      email,
    });
    toast.success('e-mail enviado para redefinição de senha');
    yield put(successAction(''));
  } catch (error) {
    const message = errorVerify(error);
    toast.error(message);
    yield put(failureAction(message));
  }
}
function* requestRedefinePassword({
  payload: { password, confirmPassword, token },
}) {
  yield put(loading(''));
  try {
    localStorage.clear();
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    yield call(
      api.put,
      `/user/forgotPassword`,
      {
        newPassword: password,
        confirmNewPassword: confirmPassword,
      },
      headers
    );
    toast.success('Senha redefinida');
    yield put(successAction(''));
  } catch (error) {
    const message = errorVerify(error);
    toast.error(message);
    yield put(failureAction('senha não redefinida'));
  } finally {
    history.push('/login');
  }
}
function* requestLogout() {
  yield put(loading(''));
  localStorage.clear();
  yield put(successAction(''));
  history.push('/login');
}
export default all([
  takeLatest('@users/REQUEST_USER_EXIST', requestLoginExist),
  takeLatest('@users/REQUEST_LOGIN', requestLogin),
  takeLatest('@users/REQUEST_TO_REGISTER_USER', toRegisterUser),
  takeLatest('@users/REQUEST_REGISTER_USER', requestRegisterUser),
  takeLatest('@users/REQUEST_FORGOT_PASSWORD', requestForgotPassword),
  takeLatest('@users/REQUEST_REDEFINE_PASSWORD', requestRedefinePassword),
  takeLatest('@users/REQUEST_LOGOUT', requestLogout),
]);
