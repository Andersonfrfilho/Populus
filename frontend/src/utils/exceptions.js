export function NewException(name, message) {
  this.name = name;
  this.message = message;
}
export function errorVerify(error) {
  if (error instanceof TypeError) {
    return `erro de typagem de código linha:${error.line}, coluna:${error.column}`;
  }
  if (error instanceof RangeError) {
    return `erro no tipo de variavel de código linha:${error.line}, coluna:${error.column}`;
  }
  if (error.message === 'Request failed with status code 404') {
    return 'verifique as informações';
  }
  return error.message;
}
