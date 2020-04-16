import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AreaUserList, AreaHeaderTable, AreaBodyTable } from './styles';
import { verifyEmail, verifyName, verifyPhone } from '../../utils';
import TableHeader from '../../components/TableHeader';
import TableBody from '../../components/TableBody';
import * as ContactsActions from '../../store/modules/contacts/actions';
import Loader from '../../components/Loader';
import { icons } from '../../styles';

function ContactList() {
  const { loading } = useSelector(state => state.commons);
  const {
    contacts,
    names,
    loadingLocal,
    addressName,
    neighborhood,
    city,
    state,
    index,
    modalState,
  } = useSelector(stateParam => stateParam.contacts);
  const dispatch = useDispatch();

  const [inputNameValue, setInputNameValue] = useState('');
  const [inputNameError, setInputNameError] = useState(null);
  const [inputLastnameValue, setInputLastnameValue] = useState('');
  const [inputLastnameError, setInputLastnameError] = useState(null);
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputEmailError, setInputEmailError] = useState(null);
  const [orderList, setOrderList] = useState(true);
  const [userSelect, setUserSelect] = useState({
    id: 0,
    name: '',
    lastname: '',
    email: '',
    select: false,
    addresses: [],
    phones: [],
  });
  const [phoneProperties, setPhoneProperties] = useState([
    {
      numberValue: '',
      descriptionValue: '',
      numberError: false,
      descriptionError: false,
    },
  ]);
  const [addressesProperties, setAddressesProperties] = useState([
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
  const [inputPhoneError, setPhoneError] = useState(null);
  const [inputAddressError, setInputAddressError] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModalTwo, setVisibleModalTwo] = useState(false);
  useEffect(() => {
    dispatch(ContactsActions.requestContacts());
  }, []); //eslint-disable-line
  useEffect(() => {
    const newArray = addressesProperties.map((addressParam, indexParam) => {
      if (indexParam === index) {
        return {
          ...addressParam,
          addressValue: addressName,
          neighborhoodValue: neighborhood,
          cityValue: city,
          stateValue: state,
        };
      }
      return addressParam;
    });
    setAddressesProperties(newArray);
  }, [addressName, neighborhood, city, state, index]);//eslint-disable-line
  useEffect(() => {
    if (visibleModal || visibleModalTwo) {
      console.tron.log('entrou no closed modal');
      setVisibleModal(false);
      closedModal();
      closedModalTwoOpen();
    }
  }, [modalState]);//eslint-disable-line


  function goToPageAddContact() {
    dispatch(ContactsActions.requestToPageAddContact());
  }
  const [valueSearch, setValueSearch] = useState('');

  if (loading || contacts === undefined) {
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
  function verifyMailFunction(mailParam) {
    const errorResult = verifyEmail(mailParam);
    setInputEmailError(errorResult);
  }
  function functionAddPhone(phonesParam) {
    const newNumbers = [...phonesParam];
    newNumbers.push({
      numberValue: '',
      descriptionValue: '',
      numberError: false,
      descriptionError: false,
    });
    setPhoneProperties(newNumbers);
  }
  function functionRemovePhone(phonesParam) {
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
      setPhoneError(errorPhone);
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
      setPhoneError(errorPhone);
      return {
        ...phone,
        numberError: errorPhone,
      };
    });
    setPhoneProperties(newPhonesArray);
  }

  function functionAddAddresses(addressesParam) {
    const newAddress = [...addressesParam];
    newAddress.push({
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
    });
    setAddressesProperties(newAddress);
  }
  function closedModal() {
    setPhoneProperties([
      {
        numberValue: '',
        descriptionValue: '',
        numberError: false,
        descriptionError: false,
      },
    ]);
    setAddressesProperties([
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
    setPhoneError(null);
    setInputAddressError(null);
    setInputNameValue('');
    setInputNameError(null);
    setInputLastnameValue('');
    setInputLastnameError(null);
    setInputEmailValue('');
    setInputEmailError(null);
    setVisibleModal(false);
  }
  function functionRemoveAddresses(addressesParam) {
    const newAddress = [...addressesParam];
    newAddress.pop();
    setAddressesProperties(newAddress);
  }
  function onChangeAddressesZipCode(valueParam, indexParam, addressesParam) {
    const newAddresses = addressesParam.map(
      (addressParam, indexAddressParam) => {
        if (indexParam === indexAddressParam) {
          return {
            ...addressParam,
            zipcodeValue: valueParam,
          };
        }
        return addressParam;
      }
    );
    setAddressesProperties(newAddresses);
  }
  function verifyAddressesZipCode(indexParam, addressesParam) {
    dispatch(
      ContactsActions.requestFindZipCode(
        indexParam,
        addressesParam[indexParam].zipcodeValue.replace(/[.-]+/g, '')
      )
    );
  }
  function onChangeAddressesNumber(valueParam, indexParam, addressesParam) {
    const newAddresses = addressesParam.map(
      (addressParam, indexAddressParam) => {
        if (indexParam === indexAddressParam) {
          return {
            ...addressParam,
            numberValue: valueParam,
          };
        }
        return addressParam;
      }
    );
    setAddressesProperties(newAddresses);
  }
  function verifyValueAddressesNumber(addressesParam) {
    const newArray = addressesParam.map(addressParam => {
      if (addressParam.numberValue === '') {
        setInputAddressError(true);
        return {
          ...addressParam,
          numberError: true,
        };
      }
      setInputAddressError(false);
      return { ...addressParam, numberError: false };
    });
    setAddressesProperties(newArray);
  }
  function onChangeAddressesName(valueParam, indexParam, addressesParam) {
    const newAddresses = addressesParam.map(
      (addressParam, indexAddressParam) => {
        if (indexParam === indexAddressParam) {
          return {
            ...addressParam,
            addressValue: valueParam,
          };
        }
        return addressParam;
      }
    );
    setAddressesProperties(newAddresses);
  }
  function verifyValueAddressesName(addressesParam) {
    const newArray = addressesParam.map(addressParam => {
      if (addressParam.addressValue === '') {
        setInputAddressError(true);
        return {
          ...addressParam,
          addressError: true,
        };
      }
      setInputAddressError(false);
      return { ...addressParam, addressError: false };
    });
    setAddressesProperties(newArray);
  }
  function onChangeAddressesNeighborhood(
    valueParam,
    indexParam,
    addressesParam
  ) {
    const newAddresses = addressesParam.map(
      (addressParam, indexAddressParam) => {
        if (indexParam === indexAddressParam) {
          return {
            ...addressParam,
            neighborhoodValue: valueParam,
          };
        }
        return addressParam;
      }
    );
    setAddressesProperties(newAddresses);
  }
  function verifyValueAddressesNeighborhood(addressesParam) {
    const newArray = addressesParam.map(addressParam => {
      if (addressParam.neighborhoodValue === '') {
        setInputAddressError(true);
        return {
          ...addressParam,
          neighborhoodError: true,
        };
      }
      setInputAddressError(false);
      return { ...addressParam, neighborhoodError: false };
    });
    setAddressesProperties(newArray);
  }
  function onChangeAddressesCity(valueParam, indexParam, addressesParam) {
    const newAddresses = addressesParam.map(
      (addressParam, indexAddressParam) => {
        if (indexParam === indexAddressParam) {
          return {
            ...addressParam,
            cityValue: valueParam,
          };
        }
        return addressParam;
      }
    );
    setAddressesProperties(newAddresses);
  }
  function verifyValueAddressesCity(addressesParam) {
    const newArray = addressesParam.map(addressParam => {
      if (addressParam.cityValue === '') {
        setInputAddressError(true);
        return {
          ...addressParam,
          cityError: true,
        };
      }
      setInputAddressError(false);
      return { ...addressParam, cityError: false };
    });
    setAddressesProperties(newArray);
  }
  function onChangeAddressesState(valueParam, indexParam, addressesParam) {
    const newAddresses = addressesParam.map(
      (addressParam, indexAddressParam) => {
        if (indexParam === indexAddressParam) {
          return {
            ...addressParam,
            stateValue: valueParam,
          };
        }
        return addressParam;
      }
    );
    setAddressesProperties(newAddresses);
  }
  function verifyValueAddressesState(addressesParam) {
    const newArray = addressesParam.map(addressParam => {
      if (addressParam.stateValue === '') {
        setInputAddressError(true);
        return {
          ...addressParam,
          stateError: true,
        };
      }
      setInputAddressError(false);
      return { ...addressParam, stateError: false };
    });
    setAddressesProperties(newArray);
  }
  function onChangeAddressesCountry(valueParam, indexParam, addressesParam) {
    const newAddresses = addressesParam.map(
      (addressParam, indexAddressParam) => {
        if (indexParam === indexAddressParam) {
          return {
            ...addressParam,
            countryValue: valueParam,
          };
        }
        return addressParam;
      }
    );
    setAddressesProperties(newAddresses);
  }
  function verifyValueAddressesCountry(addressesParam) {
    const newArray = addressesParam.map(addressParam => {
      if (addressParam.countryValue === '') {
        setInputAddressError(true);
        return {
          ...addressParam,
          countryError: true,
        };
      }
      setInputAddressError(false);
      return { ...addressParam, countryError: false };
    });
    setAddressesProperties(newArray);
  }
  function functionSaveContact(
    nameParam,
    lastnameParam,
    emailParam,
    phonesParam,
    addressesParam
  ) {
    dispatch(
      ContactsActions.requestSaveContact(
        nameParam,
        lastnameParam,
        emailParam,
        phonesParam,
        addressesParam
      )
    );
    // closedModal()
  }
  function openModal() {
    dispatch(ContactsActions.closedModal(true));
    setVisibleModal(true);
  }
  function openModalTwoOpen(indexParam, contactsParam) {
    const newAddressse = contactsParam[indexParam].addresses.map(
      addressParam => ({
        ...addressParam,
        newAddress: false,
        modified: false,
      })
    );
    const newPhones = contactsParam[indexParam].phones.map(phone => ({
      ...phone,
      newPhone: false,
      modified: false,
    }));
    const newUser = {
      ...contactsParam[indexParam],
      nameEditable: true,
      emailEditable: true,
      lastnameEditable: true,
      nameError: null,
      emailError: null,
      lastnameError: null,
      addresses: newAddressse,
      phones: newPhones,
      addressesExclud: [],
      phonesExclud: [],
    };
    setUserSelect(newUser);
    setVisibleModalTwo(true);
  }
  function closedModalTwoOpen() {
    setUserSelect({
      id: 0,
      name: '',
      lastname: '',
      email: '',
      select: false,
      addresses: [],
      phones: [],
    });
    setVisibleModalTwo(false);
  }
  function selectContact(idParam, selectParam, contactsParam) {
    dispatch(
      ContactsActions.requestSelectAllContacts(
        idParam,
        selectParam,
        contactsParam
      )
    );
  }
  function functionEditorFieldName(contactParam) {
    const newUser = {
      ...contactParam,
      nameEditable: false,
    };
    setUserSelect(newUser);
  }
  function functionChangeName(value, contactParam) {
    const newUser = {
      ...contactParam,
      name: value,
    };
    setUserSelect(newUser);
  }
  function functionEditorFieldLastname(contactParam) {
    const newUser = {
      ...contactParam,
      lastnameEditable: false,
    };
    setUserSelect(newUser);
  }
  function functionChangeLastname(value, contactParam) {
    const newUser = {
      ...contactParam,
      lastname: value,
    };
    setUserSelect(newUser);
  }
  function functionEditorFieldEmail(contactParam) {
    const newUser = {
      ...contactParam,
      emailEditable: false,
    };
    setUserSelect(newUser);
  }
  function functionChangeEmail(value, contactParam) {
    const newUser = {
      ...contactParam,
      email: value,
    };
    setUserSelect(newUser);
  }
  function functionEditorAddPhone(contactParam) {
    const arrayPhone = [...contactParam.phones];
    arrayPhone.push({
      numberValue: '',
      descriptionValue: '',
      numberError: false,
      descriptionError: false,
      newPhone: true,
      modified: false,
    });
    const newUser = {
      ...contactParam,
      phones: [...arrayPhone],
    };
    setUserSelect(newUser);
  }
  function functionEditorRemovePhone(indexParam, contactParam) {
    const arrayPhones = contactParam.phones.filter(
      (address, indexPhone) => indexParam !== indexPhone
    );
    const newUser = {
      ...contactParam,
      phones: arrayPhones,
      phonesExclud: [
        ...contactParam.phonesExclud,
        contactParam.phones[indexParam].id,
      ],
    };
    setUserSelect(newUser);
  }
  function functionChangePhoneNumber(value, indexParam, contactParam) {
    const newPhones = contactParam.phones.map((phone, indexPhone) => {
      if (indexParam === indexPhone) {
        return {
          ...phone,
          number: value,
          modified: true,
        };
      }
      return phone;
    });
    const newUser = {
      ...contactParam,
      phones: [...newPhones],
    };
    setUserSelect(newUser);
  }
  function functionChangePhoneDescription(value, indexParam, contactParam) {
    const newPhones = contactParam.phones.map((phone, indexPhone) => {
      if (indexParam === indexPhone) {
        return {
          ...phone,
          description: value,
          modified: true,
        };
      }
      return phone;
    });
    const newUser = {
      ...contactParam,
      phones: [...newPhones],
    };
    setUserSelect(newUser);
  }
  function functionEditorAddAddresses(contactParam) {
    const arrayAddress = [...contactParam.addresses];
    arrayAddress.push({
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
      zipcodeError: false,
      newAddress: true,
      modified: false,
    });
    const newUser = {
      ...contactParam,
      addresses: [...arrayAddress],
    };
    setUserSelect(newUser);
  }
  function functionEditorRemoveAddresses(indexParam, contactParam) {
    console.tron.log(
      indexParam,
      contactParam,
      contactParam.addressesExclud,
      contactParam.addresses[indexParam].id
    );
    const arrayAddress = contactParam.addresses.filter(
      (address, indexAddress) => indexParam !== indexAddress
    );
    const newUser = {
      ...contactParam,
      addresses: arrayAddress,
      addressesExclud: [
        ...contactParam.addressesExclud,
        contactParam.addresses[indexParam].id,
      ],
    };
    setUserSelect(newUser);
  }
  function functionChangeAddressesZipCode(value, indexParam, contactParam) {
    const newAddresses = contactParam.addresses.map(
      (addressParam, indexPhone) => {
        if (indexParam === indexPhone) {
          return {
            ...addressParam,
            zipcode: value,
            modified: true,
          };
        }
        return addressParam;
      }
    );
    const newUser = {
      ...contactParam,
      addresses: [...newAddresses],
    };
    setUserSelect(newUser);
  }
  function functionChangeAddressesNumber(value, indexParam, contactParam) {
    const newAddresses = contactParam.addresses.map(
      (addressParam, indexPhone) => {
        if (indexParam === indexPhone) {
          return {
            ...addressParam,
            number: value,
            modified: true,
          };
        }
        return addressParam;
      }
    );
    const newUser = {
      ...contactParam,
      addresses: [...newAddresses],
    };
    setUserSelect(newUser);
  }
  function functionChangeAddressesAddress(value, indexParam, contactParam) {
    const newAddresses = contactParam.addresses.map(
      (addressParam, indexPhone) => {
        if (indexParam === indexPhone) {
          return {
            ...addressParam,
            address: value,
            modified: true,
          };
        }
        return addressParam;
      }
    );
    const newUser = {
      ...contactParam,
      addresses: [...newAddresses],
    };
    setUserSelect(newUser);
  }
  function functionChangeAddressesNeighborhood(
    value,
    indexParam,
    contactParam
  ) {
    const newAddresses = contactParam.addresses.map(
      (addressParam, indexPhone) => {
        if (indexParam === indexPhone) {
          return {
            ...addressParam,
            neighborhood: value,
            modified: true,
          };
        }
        return addressParam;
      }
    );
    const newUser = {
      ...contactParam,
      addresses: [...newAddresses],
    };
    setUserSelect(newUser);
  }
  function functionChangeAddressesCity(value, indexParam, contactParam) {
    const newAddresses = contactParam.addresses.map(
      (addressParam, indexPhone) => {
        if (indexParam === indexPhone) {
          return {
            ...addressParam,
            city: value,
            modified: true,
          };
        }
        return addressParam;
      }
    );
    const newUser = {
      ...contactParam,
      addresses: [...newAddresses],
    };
    setUserSelect(newUser);
  }
  function functionChangeAddressesState(value, indexParam, contactParam) {
    const newAddresses = contactParam.addresses.map(
      (addressParam, indexPhone) => {
        if (indexParam === indexPhone) {
          return {
            ...addressParam,
            state: value,
            modified: true,
          };
        }
        return addressParam;
      }
    );
    const newUser = {
      ...contactParam,
      addresses: [...newAddresses],
    };
    setUserSelect(newUser);
  }
  function functionChangeAddressesCountry(value, indexParam, contactParam) {
    const newAddresses = contactParam.addresses.map(
      (addressParam, indexPhone) => {
        if (indexParam === indexPhone) {
          return {
            ...addressParam,
            country: value,
            modified: true,
          };
        }
        return addressParam;
      }
    );
    const newUser = {
      ...contactParam,
      addresses: [...newAddresses],
    };
    setUserSelect(newUser);
  }
  function functionAlterUser(contactParam) {
    dispatch(ContactsActions.alterContact(contactParam));
  }
  function functionRequestDeleteDirect(idParam) {
    dispatch(ContactsActions.requestDeleteDirect(idParam));
  }
  function functionRequestDeleteSelects(contactsParam) {
    dispatch(ContactsActions.requestDeleteSelects(contactsParam));
  }
  function functionRequestOrderList(orderParam) {
    setOrderList(!orderParam);
    dispatch(ContactsActions.requestContactsOrderName(orderParam));
  }
  return (
    <AreaUserList>
      <AreaHeaderTable>
        <TableHeader
          title="Lista de usuarios"
          loadingLocal={loadingLocal}
          placeholderInputSearch="Pesquisar:"
          functionOnChange={value => setValueSearch(value)}
          valueSearch={valueSearch}
          functionOnClickClear={() => setValueSearch('')}
          functionOnClickAdd={() => goToPageAddContact()}
          functionModalClosed={() => closedModal()}
          functionModalOpen={() => openModal()}
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
          functionOnClickAddPhoneModal={() => functionAddPhone(phoneProperties)}
          functionOnClickRemovePhoneModal={() =>
            functionRemovePhone(phoneProperties)
          }
          // modal : input :phone number
          titleInputPhoneNumberModal="Número"
          typeInputPhoneNumberModal="mask"
          typeInputPhoneNumberFormatModal="text"
          inputMaskPhoneNumberModal="+99 (999) 9 9999-9999"
          placeholderInputPhoneNumberModal="Digite seu número:"
          disabledInputPhoneNumberModal={loading}
          iconInputPhoneNumberModal={() => <icons.PhoneIcon />}
          functionOnChangeInputPhoneNumberModal={(value, indexParam) =>
            onChangePhoneNumber(value, indexParam, phoneProperties)
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
          functionOnChangeInputPhoneDescriptionModal={(value, indexParam) =>
            onChangePhoneDescription(value, indexParam, phoneProperties)
          }
          functionOnEndingChangePhoneDescriptionModal={() =>
            verifyPhoneDescription(phoneProperties)
          }
          arrayPhonesModal={phoneProperties}
          // fields
          areaInputAddressesTitleModal="Endereço"
          functionOnClickAddAddressesModal={() =>
            functionAddAddresses(addressesProperties)
          }
          functionOnClickRemoveAddressesModal={() =>
            functionRemoveAddresses(addressesProperties)
          }
          arrayAddressesModal={addressesProperties}
          // Modal : fields: register :zipCode
          titleInputAddressesZipCodeModal="C.E.P"
          typeInputMaskAddressesZipCodeModal="mask"
          typeInputAddressesZipCodeFormatModal="text"
          placeholderAddressesZipCodeModal="Digite seu C.E.P"
          disabledInputAddressesesZipCodeModal={loading}
          inputMaskAddressesZipCodeModal="99.999-999"
          functionOnChangeInputAddressesZipCodeModal={(value, indexParam) =>
            onChangeAddressesZipCode(value, indexParam, addressesProperties)
          }
          functionOnEndingChangeAddressesZipCodeModal={indexParam =>
            verifyAddressesZipCode(indexParam, addressesProperties)
          }
          // // Modal :fields : register :number
          titleInputAddressesNumberModal="Número"
          typeInputAddressesNumberModal="text"
          typeInputAddressesNumberFormatModal="text"
          placeholderAddressesNumberModal="Digite um número:"
          disabledInputAddressesesNumberModal={loading}
          functionOnChangeInputAddressesNumberModal={(value, indexParam) =>
            onChangeAddressesNumber(value, indexParam, addressesProperties)
          }
          functionOnEndingChangeAddressesNumberModal={() =>
            verifyValueAddressesNumber(addressesProperties)
          }
          // // Modal :fields : register :name
          titleInputAddressesNameModal="Endereço"
          typeInputAddressesNameModal="text"
          typeInputAddressesNameFormatModal="text"
          placeholderAddressesNameModal="Digite seu endereço:"
          disabledInputAddressesesNameModal={loading}
          functionOnChangeInputAddressesNameModal={(value, indexParam) =>
            onChangeAddressesName(value, indexParam, addressesProperties)
          }
          functionOnEndingChangeAddressesNameModal={() =>
            verifyValueAddressesName(addressesProperties)
          }
          // // Modal :fields : register :beihoord
          titleInputAddressesNeighborhoodModal="Logradouro"
          typeInputAddressesNeighborhoodModal="text"
          typeInputAddressesNeighborhoodFormatModal="text"
          placeholderAddressesNeighborhoodModal="Digite seu logradouro:"
          disabledInputAddressesesNeighborhoodModal={loading}
          functionOnChangeInputAddressesNeighborhoodModal={(
            value,
            indexParam
          ) =>
            onChangeAddressesNeighborhood(
              value,
              indexParam,
              addressesProperties
            )
          }
          functionOnEndingChangeAddressesNeighborhoodModal={() =>
            verifyValueAddressesNeighborhood(addressesProperties)
          }
          // // Modal :fields : register :city
          titleInputAddressesCityModal="Cidade"
          typeInputAddressesCityModal="text"
          typeInputAddressesCityFormatModal="text"
          placeholderAddressesCityModal="Digite sua cidade:"
          disabledInputAddressesesCityModal={loading}
          functionOnChangeInputAddressesCityModal={(value, indexParam) =>
            onChangeAddressesCity(value, indexParam, addressesProperties)
          }
          functionOnEndingChangeAddressesCityModal={() => {
            verifyValueAddressesCity(addressesProperties);
          }}
          // // Modal :fields : register :state
          titleInputAddressesStateModal="Estado"
          typeInputMaskAddressesStateModal="text"
          typeInputAddressesStateFormatModal="text"
          placeholderAddressesStateModal="Digite seu estado:"
          disabledInputAddressesesStateModal={loading}
          functionOnChangeInputAddressesStateModal={(value, indexParam) =>
            onChangeAddressesState(value, indexParam, addressesProperties)
          }
          functionOnEndingChangeAddressesStateModal={() =>
            verifyValueAddressesState(addressesProperties)
          }
          // // Modal :fields : register :country
          titleInputAddressesCountryModal="País"
          typeInputMaskAddressesCountryModal="text"
          typeInputAddressesCountryFormatModal="text"
          placeholderAddressesCountryModal="Digite seu país:"
          disabledInputAddressesesCountryModal={loading}
          functionOnChangeInputAddressesCountryModal={(value, indexParam) =>
            onChangeAddressesCountry(value, indexParam, addressesProperties)
          }
          functionOnEndingChangeAddressesCountryModal={() =>
            verifyValueAddressesCountry(addressesProperties)
          }
          // Modal button save
          // Button function modal save
          titleButtonModal="Cadastrar"
          functionOnClickButtonSaveModal={() =>
            functionSaveContact(
              inputNameValue,
              inputLastnameValue,
              inputEmailValue,
              phoneProperties,
              addressesProperties
            )
          }
          disabledButtonSaveModal={
            loading ||
            inputNameError ||
            inputLastnameError ||
            inputEmailError ||
            inputPhoneError ||
            inputAddressError
          }
          iconButtonSaveModal={() => <icons.IconSave />}
        />
      </AreaHeaderTable>
      <AreaBodyTable>
        <TableBody
          infoTable={contacts}
          functionOrderOption={() => functionRequestOrderList(orderList)}
          functionSelect={(idParam, selectParam) =>
            selectContact(idParam, selectParam, contacts)
          }
          functionDeleteSelect={() => functionRequestDeleteSelects(contacts)}
          functionDeleteDirect={idParam => functionRequestDeleteDirect(idParam)}
          functionViewRow={indexParam => openModalTwoOpen(indexParam, contacts)}
          // modal
          visibleModal={visibleModalTwo}
          functionClosedModal={() => closedModalTwoOpen()}
          contact={userSelect}
          // modal : input : name
          functionOnChangeInputNameModal={text =>
            functionChangeName(text, userSelect)
          }
          functionOnEndingChangeNameModal={() =>
            verifyNameFunction(userSelect.name)
          }
          functionOnEditChangeInputNameModal={() =>
            functionEditorFieldName(userSelect)
          }
          // modal : input : lastname
          functionOnChangeInputLastnameModal={text =>
            functionChangeLastname(text, userSelect)
          }
          functionOnEndingChangeLastnameModal={() =>
            verifyLastnameFunction(userSelect.lastname)
          }
          functionOnEditChangeInputLastnameModal={() =>
            functionEditorFieldLastname(userSelect)
          }
          // modal : input : e-mail
          functionOnChangeInputEmailModal={text =>
            functionChangeEmail(text, userSelect)
          }
          functionOnEndingChangeEmailModal={() =>
            verifyMailFunction(userSelect.email)
          }
          functionOnEditChangeInputEmailModal={() =>
            functionEditorFieldEmail(userSelect)
          }
          // modal : input : phone : add
          functionOnClickAddPhoneModal={() => {
            functionEditorAddPhone(userSelect);
          }}
          functionOnClickRemovePhoneModal={indexParam => {
            functionEditorRemovePhone(indexParam, userSelect);
          }}
          // modal : input : phone : number
          functionOnChangeInputPhoneNumberModal={(text, indexParam) =>
            functionChangePhoneNumber(text, indexParam, userSelect)
          }
          functionOnEndingChangePhoneNumberModal={() =>
            verifyPhoneNumber(userSelect.phones)
          }
          functionOnChangeInputPhoneDescriptionModal={(text, indexParam) =>
            functionChangePhoneDescription(text, indexParam, userSelect)
          }
          functionOnEndingChangePhoneDescriptionModal={() =>
            verifyPhoneDescription(userSelect.phones)
          }
          // modal : input : phone : add
          functionOnClickAddAddressesModal={() => {
            functionEditorAddAddresses(userSelect);
          }}
          functionOnClickRemoveAddressesModal={indexParam => {
            functionEditorRemoveAddresses(indexParam, userSelect);
          }}
          // modal : input : address : zipcode
          functionOnChangeInputAddressesZipCodeModal={(text, indexParam) =>
            functionChangeAddressesZipCode(text, indexParam, userSelect)
          }
          // modal : input : address : number
          functionOnChangeInputAddressesNumberModal={(text, indexParam) =>
            functionChangeAddressesNumber(text, indexParam, userSelect)
          }
          // modal : input : address : zipcode
          functionOnChangeInputAddressesNameModal={(text, indexParam) =>
            functionChangeAddressesAddress(text, indexParam, userSelect)
          }
          // modal : input : address : zipcode
          functionOnChangeInputAddressesNeighborhoodModal={(text, indexParam) =>
            functionChangeAddressesNeighborhood(text, indexParam, userSelect)
          }
          // modal : input : address : zipcode
          functionOnChangeInputAddressesCityModal={(text, indexParam) =>
            functionChangeAddressesCity(text, indexParam, userSelect)
          }
          // modal : input : address : zipcode
          functionOnChangeInputAddressesStateModal={(text, indexParam) =>
            functionChangeAddressesState(text, indexParam, userSelect)
          }
          // modal : input : address : zipcode
          functionOnChangeInputAddressesCountryModal={(text, indexParam) =>
            functionChangeAddressesCountry(text, indexParam, userSelect)
          }
          titleButtonSave="Alterar"
          functionOnClickButtonSave={() => functionAlterUser(userSelect)}
          disabledButtonSave={loading}
          iconButtonSave={() => <icons.IconUserEdit />}
          order={orderList}
        />
      </AreaBodyTable>
    </AreaUserList>
  );
}
export default withRouter(ContactList);
