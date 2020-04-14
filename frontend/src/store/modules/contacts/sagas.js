import { all, call, put, takeLatest, cancel } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import axios from 'axios';
import {
  loading,
  successAction,
  failureAction,
  breakAction,
} from '../common/actions';
import { errorVerify, NewException } from '../../../utils';
import {
  defineInformationUser,
  defineAddress,
  loadingLocal,
  closedModal,
} from './actions';
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
function* requestFindZipCode({ payload: { index, zipcode } }) {
  yield put(loadingLocal(true));
  try {
    const {
      data: {
        logradouro: addressName,
        bairro: neighborhood,
        localidade: city,
        uf: state,
        erro,
      },
    } = yield call(axios.get, `https://viacep.com.br/ws/${zipcode}/json/`);

    if (erro) {
      throw new NewException('erro cep', 'cep não encontrado.');
    }
    console.tron.log(addressName, neighborhood, city, state, index);
    yield put(
      defineAddress(addressName, neighborhood, city, state, index, false)
    );
    toast.success('Cep encontrado');
    yield put(loadingLocal(false));
  } catch (error) {
    const message = errorVerify(error);
    if (message === 'cep não encontrado.') {
      toast.warn(message);
    } else {
      toast.error(message);
    }
    yield put(defineAddress('', '', '', '', null, false));
    yield put(loadingLocal(false));
  }
}
function* requestSaveContact({
  payload: { name, lastname, email, phones, addresses },
}) {
  yield put(loading(true));
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
      data: { id: idContact },
    } = yield call(
      api.post,
      `/users/content/contacts`,
      {
        name,
        lastname,
        email,
      },
      headers
    );
    for (let i = 0; i < phones.length; i += 1) {
      yield call(
        api.post,
        `/users/content/contacts/content/phone`,
        {
          number: phones[i].numberValue.replace(/[_()+-\s]+/g, ''),
          description: phones[i].descriptionValue,
          fk_contact_id: idContact,
        },
        headers
      );
    }
    for (let i = 0; i < addresses.length; i += 1) {
      yield call(
        api.post,
        `/users/content/contacts/content/addresses`,
        {
          address: addresses[i].addressValue,
          number: addresses[i].numberValue,
          neighborhood: addresses[i].neighborhoodValue,
          city: addresses[i].cityValue,
          country: addresses[i].countryValue,
          state: addresses[i].stateValue,
          zipcode: addresses[i].zipcodeValue,
          contact_id: idContact,
        },
        headers
      );
    }
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
    yield put(closedModal(false));
    toast.success('Usuário cadastrado');
    yield put(successAction(''));
  } catch (error) {
    const message = errorVerify(error);
    toast.error('Usuário não cadastrado');
    yield put(defineAddress('', '', '', '', '', false));
    yield put(failureAction(message));
    yield put(closedModal(false));
  }
}
export default all([
  takeLatest('@contacts/REQUEST_TO_PAGE_ADD_CONTACT', requestToPageAddContact),
  takeLatest('@contacts/REQUEST_CONTACTS', requestContacts),
  takeLatest('@contacts/REQUEST_FIND_ZIPCODE', requestFindZipCode),
  takeLatest('@contacts/REQUEST_SAVE_CONTACT', requestSaveContact),
]);
