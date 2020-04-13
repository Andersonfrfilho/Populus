import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  AreaUserList,
  AreaHeaderTable,
  AreaBodyTable,
  AreaIconAdd,
} from './styles';
import { verifyEmail, verifyName, verifyPhone } from '../../utils';
import TableHeader from '../../components/TableHeader';
import TableBody from '../../components/TableBody';
import * as ContactsActions from '../../store/modules/contacts/actions';
import Loader from '../../components/Loader';
import { icons } from '../../styles';

function ContactList() {
  const { loading, error, message } = useSelector(state => state.commons);
  const { contacts, names } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const [inputNameValue, setInputNameValue] = useState('');
  const [inputNameError, setInputNameError] = useState(null);
  const [inputLastnameValue, setInputLastnameValue] = useState('');
  const [inputLastnameError, setInputLastnameError] = useState(null);
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputEmailError, setInputEmailError] = useState(null);
  const [inputPhoneNumberError, setInputPhoneNumberError] = useState(null);
  const [phoneProperties, setPhoneProperties] = useState([
    {
      numberValue: '',
      descriptionValue: '',
      numberError: false,
      descriptionError: false,
    },
  ]);
  const [addressesProperties, setaddressesProperties] = useState([
    {
      numberValue: '',
      numberError: false,
      addressValue: '',
      addressError: false,
      neighborhoodValue: '',
      neighborhoodError: false,
      cityValue: '',
      cityError: false,
      stateValue: '',
      stateError: false,
      countryValue: '',
      countryError: false,
      zipcodeValue: '',
      zipcodeError: '',
    },
  ]);
  const [inputPhoneDescriptionValue, setInpuPhoneDescriptionValue] = useState(
    ''
  );
  const [inputPhoneDescriptionError, setInpuPhoneDescriptionError] = useState(
    null
  );
  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(ContactsActions.requestContacts());
    }
  }, []); //eslint-disable-line
  const [visibleModal, setVisibleModal] = useState(false);

  function goToPageAddContact() {
    dispatch(ContactsActions.requestToPageAddContact());
  }
  const [valueSearch, setValueSearch] = useState('');

  if (loading || contacts.length === 0) {
    return <Loader />;
  }
  function verifyNameFunction(nameParam) {
    const errorResult = verifyName(nameParam);
    setInputNameError(errorResult);
  }
  function verifyLastnameFunction(nameParam) {
    const errorResult = verifyName(nameParam);
    setInputLastnameError(errorResult);
  }
  function verifyMailFunction(mailParam, messageParam = '') {
    const errorResult = verifyEmail(mailParam);
    setInputEmailError(errorResult);
  }
  function functionAddPhoneNumber(phonesParam) {
    const newNumbers = [...phonesParam];
    newNumbers.push({
      numberValue: '',
      descriptionValue: '',
      numberError: false,
      descriptionError: false,
    });
    setPhoneProperties(newNumbers);
  }
  function functionRemovePhoneNumber(phonesParam) {
    const newNumbers = [...phonesParam];
    if (newNumbers.length > 1) {
      newNumbers.pop();
      setPhoneProperties(newNumbers);
    }
  }
  function onChangePhoneNumber(valueParam, indexParam, phonesParam) {
    const newNumbers = phonesParam.map((phoneParam, indexPhoneParam) => {
      if (indexParam === indexPhoneParam) {
        return {
          ...phoneParam,
          numberValue: valueParam,
        };
      }
      return phoneParam;
    });
    setPhoneProperties(newNumbers);
  }
  function verifyPhoneNumber(phones) {
    const newPhonesArray = phones.map(phone => {
      const errorPhone = verifyPhone(phone.numberValue);
      return {
        ...phone,
        numberError: errorPhone,
      };
    });
    setPhoneProperties(newPhonesArray);
  }
  function onChangePhoneDescription(valueParam, indexParam, phonesParam) {
    const newNumbers = phonesParam.map((phoneParam, indexPhoneParam) => {
      if (indexParam === indexPhoneParam) {
        return {
          ...phoneParam,
          descriptionValue: valueParam,
        };
      }
      return phoneParam;
    });
    setPhoneProperties(newNumbers);
  }
  function verifyPhoneDescription(phones) {
    const newPhonesArray = phones.map(phone => {
      const errorPhone = verifyName(phone.descriptionValue);
      return {
        ...phone,
        numberError: errorPhone,
      };
    });
    setPhoneProperties(newPhonesArray);
  }

  return (
    <AreaUserList>
      <AreaHeaderTable>
        <TableHeader
          title="Lista de usuarios"
          placeholderInputSearch="Pesquisar:"
          functionOnChange={value => setValueSearch(value)}
          valueSearch={valueSearch}
          functionOnClickClear={() => setValueSearch('')}
          functionOnClickAdd={() => goToPageAddContact()}
          functionModalClosed={() => setVisibleModal(false)}
          functionModalOpen={() => setVisibleModal(true)}
          visibleModal={visibleModal}
          options={names}
          titleHeaderModal="Cadastrar usuário"
          // modal:input:name
          titleInputNameModal="Nome"
          typeInputNameModal="text"
          typeInputNameFormatModal="text"
          placeholderInputNameModal="Digite seu nome:"
          disabledInputNameModal={loading}
          iconInputNameModal={() => <icons.UserIcon />}
          functionOnChangeInputNameModal={text => setInputNameValue(text)}
          functionOnEndingChangeNameModal={() =>
            verifyNameFunction(inputNameValue)
          }
          valueInputNameModal={inputNameValue}
          errorInputNameModal={inputNameError !== null}
          // modal:input:lastname
          titleInputLastnameModal="Sobrenome"
          typeInputLastnameModal="text"
          typeInputLastnameFormatModal="text"
          placeholderInputLastnameModal="Digite seu sobrenome:"
          disabledInputLastnameModal={loading}
          iconInputLastnameModal={() => <icons.UserIconLastname />}
          functionOnChangeInputLastnameModal={text =>
            setInputLastnameValue(text)
          }
          functionOnEndingChangeLastnameModal={() =>
            verifyLastnameFunction(inputLastnameValue)
          }
          valueInputLastnameModal={inputLastnameValue}
          errorInputLastnameModal={inputLastnameError !== null}
          // modal:input:Email
          titleInputEmailModal="Email"
          typeInputEmailModal="email"
          typeInputEmailFormatModal="email"
          placeholderInputEmailModal="Digite seu email:"
          disabledInputEmailModal={loading}
          iconInputEmailModal={() => <icons.EmailIcon />}
          functionOnChangeInputEmailModal={text => setInputEmailValue(text)}
          functionOnEndingChangeEmailModal={() =>
            verifyMailFunction(inputEmailValue)
          }
          valueInputEmailModal={inputEmailValue}
          errorInputEmailModal={inputEmailError !== null}
          // areaInputPhone //properties
          areaInputPhoneTitleModal="Telefone"
          functionOnClickAddPhoneModal={() =>
            functionAddPhoneNumber(phoneProperties)
          }
          functionOnClickRemovePhoneModal={() =>
            functionRemovePhoneNumber(phoneProperties)
          }
          // modal : input :phone number
          titleInputPhoneNumberModal="Número"
          typeInputPhoneNumberModal="mask"
          typeInputPhoneNumberFormatModal="text"
          inputMaskPhoneNumberModal="+99 (999) 9 9999-9999"
          placeholderInputPhoneNumberModal="Digite seu número:"
          disabledInputPhoneNumberModal={loading}
          iconInputPhoneNumberModal={() => <icons.PhoneIcon />}
          functionOnChangeInputPhoneNumberModal={(value, index) =>
            onChangePhoneNumber(value, index, phoneProperties)
          }
          functionOnEndingChangePhoneNumberModal={() =>
            verifyPhoneNumber(phoneProperties)
          }
          // modal : input :phone description
          titleInputPhoneDescriptionModal="Descrição"
          typeInputPhoneDescriptionModal="text"
          typeInputPhoneDescriptionFormatModal="text"
          placeholderInputPhoneDescriptionModal="Digite a descrição:"
          disabledInputPhoneDescriptionModal={loading}
          iconInputPhoneDescriptionModal={() => <icons.IconInformation />}
          functionOnChangeInputPhoneDescriptionModal={(value, index) =>
            onChangePhoneDescription(value, index, phoneProperties)
          }
          functionOnEndingChangePhoneDescriptionModal={() =>
            verifyPhoneDescription(phoneProperties)
          }
          arrayPhonesModal={phoneProperties}
          // fields
        />
      </AreaHeaderTable>
      <AreaBodyTable>
        <TableBody infoTable={contacts} />
      </AreaBodyTable>
    </AreaUserList>
  );
}
export default withRouter(ContactList);
