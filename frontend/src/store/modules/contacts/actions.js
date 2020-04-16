export function defineInformationUser(name, contacts, names) {
  return {
    type: '@contacts/DEFINE_INFORMATION_USER',
    payload: {
      name,
      contacts,
      names,
    },
  };
}
export function requestToPageAddContact() {
  return {
    type: '@contacts/REQUEST_TO_PAGE_ADD_CONTACT',
  };
}
export function requestContacts() {
  return {
    type: '@contacts/REQUEST_CONTACTS',
  };
}
export function requestFindZipCode(index, zipcode) {
  return {
    type: '@contacts/REQUEST_FIND_ZIPCODE',
    payload: {
      index,
      zipcode,
    },
  };
}
export function defineAddress(
  addressName,
  neighborhood,
  city,
  state,
  index,
  loadingLocalParam
) {
  return {
    type: '@contacts/DEFINE_ADDRESS',
    payload: {
      addressName,
      neighborhood,
      city,
      state,
      index,
      loadingLocalParam,
    },
  };
}
export function loadingLocal(loadingLocalParam) {
  return {
    type: '@contacts/DEFINE_LOCAL',
    payload: {
      loadingLocalParam,
    },
  };
}
export function requestSaveContact(name, lastname, email, phones, addresses) {
  return {
    type: '@contacts/REQUEST_SAVE_CONTACT',
    payload: {
      name,
      lastname,
      email,
      phones,
      addresses,
    },
  };
}
export function closedModal(modalState) {
  return {
    type: '@contacts/CLOSED_MODAL',
    payload: {
      modalState,
    },
  };
}
export function requestSelectAllContacts(id, select, contacts) {
  return {
    type: '@contacts/REQUEST_SELECT_CONTACTS',
    payload: {
      id,
      select,
      contacts,
    },
  };
}
export function alterContact(contact) {
  return {
    type: '@contacts/REQUEST_EDIT_CONTACTS',
    payload: {
      contact,
    },
  };
}
export function requestDeleteDirect(id) {
  return {
    type: '@contacts/REQUEST_DELETE_DIRECT',
    payload: {
      id,
    },
  };
}
export function requestDeleteSelects(contacts) {
  return {
    type: '@contacts/REQUEST_DELETE_SELECTS',
    payload: {
      contacts,
    },
  };
}
export function requestContactsOrderName(order) {
  return {
    type: '@contacts/REQUEST_CONTACTS_ORDER_NAME',
    payload: {
      order,
    },
  };
}
