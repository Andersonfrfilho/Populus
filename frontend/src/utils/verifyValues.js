export function verifyEmail(email) {
  const usuario = email.substring(0, email.indexOf('@'));
  const dominio = email.substring(email.indexOf('@') + 1, email.length);

  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search('@') === -1 &&
    dominio.search('@') === -1 &&
    usuario.search(' ') === -1 &&
    dominio.search(' ') === -1 &&
    dominio.search('.') !== -1 &&
    dominio.indexOf('.') >= 1 &&
    dominio.lastIndexOf('.') < dominio.length - 1
  ) {
    return false;
  }
  return true;
}
export function verifyName(name) {
  const alphabet = /[^A-Za-zÀ-ÖØ-öø-ÿ ]/;
  if (!(!alphabet.exec(name) && name.length >= 3)) {
    return true;
  }
  return false;
}
export function verifyPhone(phone = '00000000') {
  if (phone === '0000000') {
    return true;
  }
  if (phone.length >= 13 || phone.length === 12) {
    return false;
  }
  return true;
}
