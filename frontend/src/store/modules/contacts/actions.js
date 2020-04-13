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
