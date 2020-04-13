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
import { verifyEmail } from '../../utils';
import * as UsersActions from '../../store/modules/users/actions';
import Logo from '../../components/Logo';
import InputIcon from '../../components/InputIcon';
import Button from '../../components/ButtonIcon';
import { icons } from '../../styles';

export default function Login() {
  const { loading, error, message } = useSelector(state => state.commons);
  const { email } = useSelector(state => state.users);
  const dispatch = useDispatch();
  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [showFieldState, setShowFieldState] = useState(false);
  const [transitionVisible, setTransitionVisible] = useState(false);
  const [errorMail, setErrorMail] = useState(null);
  const [forgotPassword, setForgotPassword] = useState(false);
  useEffect(() => {
    setTransitionVisible(true);
    dispatch(UsersActions.requestUserExist());
    if (email !== '') {
      setEmailState(email);
    }
  }, []); //eslint-disable-line
  function forgetSenha(stateParam) {
    setForgotPassword(stateParam);
  }
  function registerToUser() {
    setTransitionVisible(false);
    dispatch(UsersActions.toRegisterUser());
    dispatch(UsersActions.defineEmail(''));
    setEmailState('');
    setPasswordState('');
  }
  function requestLogin(emailParam, passwordParam) {
    dispatch(UsersActions.requestLogin(emailParam, passwordParam));
    setEmailState('');
    setPasswordState('');
  }
  function verifyMailFunction(value) {
    setErrorMail(verifyEmail(value));
  }
  function requestForgotPassword(emailParam) {
    dispatch(UsersActions.requestForgotPassword(emailParam));
    setForgotPassword(false);
  }
  return (
    <Container visibled={transitionVisible}>
      <AreaForm>
        <AreaLogo>
          <Logo
            title={forgotPassword ? 'Redefinir Senha' : 'Login'}
            message={message}
            error={error}
          />
        </AreaLogo>

        {forgotPassword ? (
          <AreaInputs>
            <InputIcon
              placeholder="Digite seu e-mail:"
              error={errorMail}
              value={emailState}
              functionOnChange={text => setEmailState(text)}
              functionOnEndingChange={() => verifyMailFunction(emailState)}
              icon={() => <icons.UserIcon size={18} />}
              typeInput="email"
              disabled={loading}
            />
          </AreaInputs>
        ) : (
          <AreaInputs>
            <InputIcon
              placeholder="Digite seu e-mail:"
              error={errorMail}
              value={emailState}
              functionOnChange={text => setEmailState(text)}
              functionOnEndingChange={() => verifyMailFunction(emailState)}
              icon={() => <icons.UserIcon size={18} />}
              typeInput="email"
              disabled={loading}
            />
            <InputIcon
              placeholder="Digite sua senha:"
              functionOnChange={text => setPasswordState(text)}
              value={passwordState}
              functionOnClick={() => setShowFieldState(!showFieldState)}
              disabled={loading}
              typeInput={showFieldState ? 'text' : 'password'}
              button
              icon={() =>
                showFieldState ? (
                  <icons.EyeOpenIcon size={18} />
                ) : (
                  <icons.EyeClosedIcon size={18} />
                )
              }
            />
          </AreaInputs>
        )}
        <AreaButton>
          {forgotPassword ? (
            <Button
              loading={loading}
              title="Enviar"
              disabled={errorMail === null || errorMail || loading}
              functionOnClick={() =>
                requestForgotPassword(emailState.toLowerCase())
              }
            />
          ) : (
            <Button
              loading={loading}
              title="Entrar"
              disabled={errorMail === null || errorMail || loading}
              functionOnClick={() =>
                requestLogin(emailState.toLowerCase(), passwordState)
              }
            />
          )}
        </AreaButton>
        <AreaRegisterForgotedPassword>
          <AreaLink position>
            {forgotPassword ? (
              <Button
                disabled={loading}
                functionOnClick={() => forgetSenha(!forgotPassword)}
                icon={() => <icons.BackIcon size={18} />}
                title=""
              />
            ) : (
              <Button
                disabled={loading}
                functionOnClick={() => forgetSenha(!forgotPassword)}
                icon={() => <icons.UserForgotPassword size={18} />}
                title=""
              />
            )}
          </AreaLink>
          <AreaLink />
          <AreaLink position={false}>
            {forgotPassword ? (
              <AreaLink />
            ) : (
              <Button
                disabled={loading}
                functionOnClick={() => registerToUser()}
                icon={() => <icons.UserPlusIcon size={18} />}
                title=""
              />
            )}
          </AreaLink>
        </AreaRegisterForgotedPassword>
      </AreaForm>
    </Container>
  );
}
