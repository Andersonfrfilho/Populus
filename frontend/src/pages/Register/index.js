import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  AreaForm,
  AreaLogo,
  AreaInputs,
  AreaButton,
  AreaRegisterForgotedPassword,
  AreaLink,
} from './styles';
import { verifyEmail, verifyName, verifyPhone } from '../../utils';
import * as UsersActions from '../../store/modules/users/actions';
import Logo from '../../components/Logo';
import InputIcon from '../../components/InputIcon';
import Button from '../../components/ButtonIcon';
import Loader from '../../components/Loader';
import { icons } from '../../styles';

export default function Register() {
  const { loading, error, message } = useSelector(state => state.commons);
  const dispatch = useDispatch();
  const [nameState, setNameState] = useState('');
  const [localMessage, setLocalMessage] = useState('');
  const [phoneState, setPhoneState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [confirmPasswordState, setConfirmPasswordState] = useState('');
  const [showFieldState, setShowFieldState] = useState(false);
  const [showFieldStateTwo, setShowFieldStateTwo] = useState(false);
  const [transitionVisible, setTransitionVisible] = useState(false);
  const [errorName, setErrorName] = useState(null);
  const [errorPhone, setErrorPhone] = useState(null);
  const [errorMail, setErrorMail] = useState(null);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);
  const [maskState, setMaskState] = useState('+55 (99) 9 9999-9999');
  useEffect(() => {
    setTransitionVisible(true);
    dispatch(UsersActions.requestUserExist());
  }, []); //eslint-disable-line

  function functionBackPage() {
    setTransitionVisible(!transitionVisible);
  }
  function requestRegisterUser(
    nameParam,
    phoneParam,
    emailParam,
    passwordParam,
    confirmPasswordParam
  ) {
    dispatch(
      UsersActions.requestRegisterUser(
        nameParam,
        phoneParam,
        emailParam,
        passwordParam,
        confirmPasswordParam
      )
    );
    setNameState('');
    setPhoneState('');
    setEmailState('');
    setPasswordState('');
    setConfirmPasswordState('');
  }
  function verifyNameFunction(nameParam, messageParam = '') {
    const errorResult = verifyName(nameParam);
    setErrorName(errorResult);
    setLocalMessage(errorResult ? messageParam : '');
  }
  function verifyMailFunction(mailParam, messageParam = '') {
    const errorResult = verifyEmail(mailParam);
    setErrorMail(errorResult);
    setLocalMessage(errorResult ? messageParam : '');
  }
  function verifyPhoneFunction(phoneParam, messageParam = '') {
    const errorResult = verifyPhone(phoneParam);
    if (phoneParam.length === 13) {
      setMaskState('+55 (99) 9 9999-9999');
    } else {
      setMaskState('+55 (99) 99999-9999');
    }
    setErrorPhone(errorResult);
    setLocalMessage(errorResult ? messageParam : '');
  }
  function verifyConfirmPassword(
    password,
    confirmPasswordParam,
    messageParam = ''
  ) {
    setErrorConfirmPassword(password !== confirmPasswordParam);
    setLocalMessage(password !== confirmPasswordParam ? messageParam : '');
  }
  return (
    <Container visible={transitionVisible}>
      <AreaForm>
        <AreaLogo>
          <Logo
            title="Cadastro"
            message={message || localMessage}
            error={
              error ||
              errorName ||
              errorPhone ||
              errorMail ||
              errorConfirmPassword
            }
            image={false}
          />
        </AreaLogo>

        <AreaInputs>
          <InputIcon
            placeholder="Digite seu nome:"
            error={errorName}
            value={nameState}
            functionOnChange={name => setNameState(name)}
            functionOnEndingChange={() =>
              verifyNameFunction(nameState, 'Digite um nome válido.')
            }
            icon={() => <icons.UserIcon size={18} />}
            typeInput="text"
            disabled={loading}
          />
          <InputIcon
            placeholder="Digite seu e-mail:"
            error={errorMail}
            value={emailState}
            functionOnChange={email => setEmailState(email)}
            functionOnEndingChange={() =>
              verifyMailFunction(emailState, 'Digite um e-mail válido.')
            }
            icon={() => <icons.EmailIcon size={18} />}
            typeInput="email"
            disabled={loading}
          />
          <InputIcon
            type="mask"
            inputMask={maskState}
            placeholder="Digite seu telefone:"
            error={errorPhone}
            value={phoneState}
            functionOnChange={phone => setPhoneState(phone)}
            functionOnEndingChange={() =>
              verifyPhoneFunction(
                phoneState.replace(/[_()+-\s]+/g, ''),
                'Digite um telefone válido.'
              )
            }
            icon={() => <icons.PhoneIcon size={18} />}
            typeInput="phone"
            disabled={loading}
          />
          <InputIcon
            placeholder="Digite sua senha:"
            functionOnChange={password => setPasswordState(password)}
            value={passwordState}
            functionOnClick={() => setShowFieldState(!showFieldState)}
            disabled={false}
            typeInput={showFieldState ? 'text' : 'password'}
            button
            disabled={loading}
            icon={() =>
              showFieldState ? (
                <icons.EyeOpenIcon size={18} />
              ) : (
                <icons.EyeClosedIcon size={18} />
              )
            }
          />
          <InputIcon
            placeholder="Confirme sua senha:"
            functionOnChange={password => setConfirmPasswordState(password)}
            value={confirmPasswordState}
            disabled={loading}
            functionOnEndingChange={() =>
              verifyConfirmPassword(
                passwordState,
                confirmPasswordState,
                'Senhas divergentes.'
              )
            }
            functionOnClick={() => setShowFieldStateTwo(!showFieldStateTwo)}
            typeInput={showFieldStateTwo ? 'text' : 'password'}
            button
            error={errorConfirmPassword}
            icon={() =>
              showFieldStateTwo ? (
                <icons.EyeOpenIcon size={18} />
              ) : (
                <icons.EyeClosedIcon size={18} />
              )
            }
          />
        </AreaInputs>
        <AreaButton>
          <Button
            loading={loading}
            title="Cadastrar  "
            disabled={
              errorName === null ||
              errorName ||
              errorPhone === null ||
              errorPhone ||
              errorMail === null ||
              errorMail ||
              errorConfirmPassword === null ||
              errorConfirmPassword ||
              loading
            }
            functionOnClick={() =>
              requestRegisterUser(
                nameState.toLowerCase(),
                phoneState.replace(/[_()+-\s]+/g, ''),
                emailState.toLowerCase(),
                passwordState,
                confirmPasswordState
              )
            }
            icon={() =>
              !(
                errorName === null ||
                errorName ||
                errorPhone === null ||
                errorPhone ||
                errorMail === null ||
                errorMail ||
                passwordState === '' ||
                errorConfirmPassword === null ||
                errorConfirmPassword ||
                loading
              ) ? (
                <icons.CorrectIcon size={18} />
              ) : null
            }
          />
        </AreaButton>
        <AreaRegisterForgotedPassword>
          <AreaLink position>
            <Button
              disabled={loading}
              onClick={() => functionBackPage()}
              icon={() => <icons.BackIcon size={18} />}
              title=""
            />
          </AreaLink>
          <AreaLink />
          <AreaLink />
        </AreaRegisterForgotedPassword>
      </AreaForm>
    </Container>
  );
}
