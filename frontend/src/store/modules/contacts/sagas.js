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
        select: false,
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
        `/users/content/contacts/content/phones`,
        {
          number: phones[i].numberValue.replace(/[_()+-\s]+/g, ''),
          description: phones[i].descriptionValue,
          fk_contact_id: idContact,
        },
        headers
      );
    }
    console.tron.log('uhuçl')
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
          fk_contact_id: idContact,
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
        select: false,
      });
      dataNames.push(`${contact.name} ${contact.lastname}`);
    });
    yield put(defineInformationUser(user.name, dataInfo, dataNames));
    yield put(closedModal(false));
    toast.success('Usuário cadastrado');
    yield put(successAction(''));
  } catch (error) {
    console.tron.log(error)
    const message = errorVerify(error);
    toast.error('Usuário não cadastrado');
    yield put(defineAddress('', '', '', '', '', false));
    yield put(failureAction(message));
  }
}

function* requestEditContacts({ payload: { contact } }) {
  yield put(loading(''));
  try {
    const { id, name, lastname, email } = contact;
    const userModified = {
      name,
      lastname,
      email,
    };
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
    yield call(api.put, `/users/content/contacts/${id}`, userModified, headers);
    for (let i = 0; i < contact.phones.length; i += 1) {
      const { number, description, modified, newPhone } = contact.phones[i];
      const phoneModified = {
        number,
        description,
        fk_contact_id: id,
      };
      if (modified && !newPhone) {
        const { id: idPhone } = contact.phones[i];
        yield call(
          api.put,
          `/users/content/contacts/content/phones/${idPhone}`,
          phoneModified,
          headers
        );
      } else if (newPhone) {
        yield call(
          api.post,
          `/users/content/contacts/content/phones`,
          phoneModified,
          headers
        );
      }
    }
    for (let i = 0; i < contact.phonesExclud.length; i += 1) {
      yield call(
        api.delete,
        `/users/content/contacts/content/phones/${contact.phonesExclud[i]}`
      );
    }
    for (let i = 0; i < contact.addresses.length; i += 1) {
      const {
        id: idAddresses,
        number,
        address,
        neighborhood,
        city,
        state,
        country,
        zipcode,
        newAddress,
        modified,
      } = contact.addresses[i];
      const addressesModified = {
        number,
        address,
        neighborhood,
        city,
        state,
        country,
        zipcode,
        fk_contact_id: id,
      };
      if (modified && !newAddress) {
        yield call(
          api.put,
          `/users/content/contacts/content/addresses/${idAddresses}`,
          addressesModified,
          headers
        );
      } else if (newAddress) {
        yield call(
          api.post,
          `/users/content/contacts/content/addresses`,
          addressesModified,
          headers
        );
      }
    }
    for (let i = 0; i < contact.addressesExclud.length; i += 1) {
      yield call(
        api.delete,
        `/users/content/contacts/content/addresses/${contact.addressesExclud[i]}`,
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
    contacts.forEach(contactParam => {
      dataInfo.push({
        ...contactParam,
        select: false,
      });
      dataNames.push(`${contact.name} ${contact.lastname}`);
    });
    yield put(defineInformationUser(user.name, dataInfo, dataNames));
    yield put(closedModal(false));
    toast.success('Usuário alterado');
    yield put(successAction(''));
  } catch (error) {
    yield put(closedModal(false));
    const message = errorVerify(error);
    toast.error('Usuário não cadastrado');
    yield put(defineAddress('', '', '', '', '', false));
    yield put(failureAction(message));
  }
}
function* requestSelectContacts({ payload: { id, select, contacts } }) {
  let user = localStorage.getItem('populus@user');
  user = JSON.parse(user);
  let dataInfo;
  if (id === 0) {
    dataInfo = contacts.map((contact, index) => {
      if (index === 0) {
        return {
          options: [
            {
              ...contact.options[0],
              select,
            },
          ],
        };
      }
      return {
        ...contact,
        select,
      };
    });
  } else {
    dataInfo = contacts.map((contact, index) => {
      if (index === 0) {
        return {
          options: [
            {
              ...contact.options[0],
              select,
            },
          ],
        };
      }
      if (id === contact.id) {
        return {
          ...contact,
          select,
        };
      }
      return contact;
    });
  }
  const dataNames = contacts.map(
    contact => `${contact.name} ${contact.lastname}`
  );
  yield put(defineInformationUser(user.name, dataInfo, dataNames));
  yield put(successAction(''));
}
function* requestDeleteDirect({ payload: { id } }) {
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
    yield call(api.delete, `/users/content/contacts/${id}`, headers);
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
    contacts.forEach(contactParam => {
      dataInfo.push({
        ...contactParam,
        select: false,
      });
      dataNames.push(`${contactParam.name} ${contactParam.lastname}`);
    });
    yield put(defineInformationUser(user.name, dataInfo, dataNames));
    toast.success('Contato deletado');
    yield put(successAction(''));
  } catch (error) {
    const message = errorVerify(error);
    toast.error('Contato não deletado');
    yield put(defineAddress('', '', '', '', '', false));
    yield put(failureAction(message));
  }
}
function* requestDeleteSelect({ payload: { contacts: contactsParam } }) {
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
    for (let i = 0; i < contactsParam.length; i += 1) {
      const { id } = contactsParam[i];
      if (contactsParam[i].select) {
        yield call(api.delete, `/users/content/contacts/${id}`, headers);
      }
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
    contacts.forEach(contactParam => {
      dataInfo.push({
        ...contactParam,
        select: false,
      });
      dataNames.push(`${contactParam.name} ${contactParam.lastname}`);
    });
    yield put(defineInformationUser(user.name, dataInfo, dataNames));
    toast.success('Contatos deletados');
    yield put(successAction(''));
  } catch (error) {
    const message = errorVerify(error);
    toast.error('Contato não deletado');
    yield put(defineAddress('', '', '', '', '', false));
    yield put(failureAction(message));
  }
}
function* requestContactsOrderName({ payload: { order } }) {
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
    } = yield call(
      api.get,
      `/user?order=contacts&order=name&order=${order ? 'asc' : 'desc'}`,
      headers
    );
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
    contacts.forEach(contactParam => {
      dataInfo.push({
        ...contactParam,
        select: false,
      });
      dataNames.push(`${contactParam.name} ${contactParam.lastname}`);
    });
    yield put(defineInformationUser(user.name, dataInfo, dataNames));
    yield put(successAction(''));
  } catch (error) {
    const message = errorVerify(error);
    yield put(defineAddress('', '', '', '', '', false));
    yield put(failureAction(message));
  }
}
export default all([
  takeLatest('@contacts/REQUEST_TO_PAGE_ADD_CONTACT', requestToPageAddContact),
  takeLatest('@contacts/REQUEST_CONTACTS', requestContacts),
  takeLatest('@contacts/REQUEST_FIND_ZIPCODE', requestFindZipCode),
  takeLatest('@contacts/REQUEST_SAVE_CONTACT', requestSaveContact),
  takeLatest('@contacts/REQUEST_SELECT_CONTACTS', requestSelectContacts),
  takeLatest('@contacts/REQUEST_EDIT_CONTACTS', requestEditContacts),
  takeLatest('@contacts/REQUEST_DELETE_DIRECT', requestDeleteDirect),
  takeLatest('@contacts/REQUEST_DELETE_SELECTS', requestDeleteSelect),
  takeLatest('@contacts/REQUEST_CONTACTS_ORDER_NAME', requestContactsOrderName),
]);
