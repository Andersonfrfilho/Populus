import { all, call, put, takeLatest, cancel } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  loading,
  successAction,
  failureAction,
  breakAction,
} from '../common/actions';
import { errorVerify } from '../../../utils';
import { defineInformationUser } from './actions';
import api from '../../../services/api';
import { history } from '../../../services/history';

function* requestToPageAddContact({ payload: { historyParam } }) {
  yield put(loading(''));
  historyParam.push('/drawer/register');
  yield put(successAction(''));
}
function* requestContacts() {
  yield put(loading(''));
  try {
    const token = localStorage.getItem('populus@token');
    if (token === null || token === '') {
      yield put(breakAction(''));
      yield cancel();
      history.push('/login');
    }

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const {
      data: { contacts },
    } = yield call(api.get, `/user`, headers);

    let user = localStorage.getItem('populus@user');
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
      dataInfo.push({
        ...contact,
      });
      dataNames.push(`${contact.name} ${contact.lastname}`);
    });
    yield put(defineInformationUser(user.name, dataInfo, dataNames));
    yield put(successAction(''));
  } catch (error) {
    const message = errorVerify(error);
    toast.error(message);
    yield put(failureAction(message));
  }
  // history.push('/drawer/register');
  yield put(successAction(''));
}
export default all([
  takeLatest('@contacts/REQUEST_TO_PAGE_ADD_CONTACT', requestToPageAddContact),
  takeLatest('@contacts/REQUEST_CONTACTS', requestContacts),
]);
