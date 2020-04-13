import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '../../services/history';
import {
  Container,
  AreaForm,
  AreaLogo,
  AreaInputs,
  AreaButton,
} from './styles';
import * as UsersActions from '../../store/modules/users/actions';
import Logo from '../../components/Logo';
import InputIcon from '../../components/InputIcon';
import Button from '../../components/ButtonIcon';
import { icons } from '../../styles';

export default function ForgotPassword() {
  const { loading, error, message } = useSelector(state => state.commons);
  const dispatch = useDispatch();
  const [localMessage, setLocalMessage] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [confirmPasswordState, setConfirmPasswordState] = useState('');
  const [showFieldState, setShowFieldState] = useState(false);
  const [showFieldStateTwo, setShowFieldStateTwo] = useState(false);
  const [transitionVisible, setTransitionVisible] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);
  useEffect(() => {
    setTransitionVisible(true);
    dispatch(UsersActions.requestUserExist());
  }, []); //eslint-disable-line

  const query = useQuery();
  function requestRedefinedPassword(passwordParam, confirmPasswordParam) {
    const token = query.get('token');
    dispatch(
      UsersActions.requestRedefinePassword(
        passwordParam,
        confirmPasswordParam,
        token
      )
    );
    setPasswordState('');
    setConfirmPasswordState('');
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
            title="Redefinição de senha"
            message={message || localMessage}
            error={error || errorConfirmPassword}
            image={false}
          />
        </AreaLogo>

        <AreaInputs>
          <InputIcon
            placeholder="Nova senha:"
            functionOnChange={password => setPasswordState(password)}
            value={passwordState}
            functionOnClick={() => setShowFieldState(!showFieldState)}
            typeInput={showFieldState ? 'text' : 'password'}
            button
            disabled={false}
            icon={() =>
              showFieldState ? (
                <icons.EyeOpenIcon size={18} />
              ) : (
                <icons.EyeClosedIcon size={18} />
              )
            }
          />
          <InputIcon
            placeholder="Confirme a senha:"
            functionOnChange={password => setConfirmPasswordState(password)}
            value={confirmPasswordState}
            functionOnEndingChange={() =>
              verifyConfirmPassword(
                passwordState,
                confirmPasswordState,
                'Senhas divergentes.'
              )
            }
            functionOnClick={() => setShowFieldStateTwo(!showFieldStateTwo)}
            disabled={loading}
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
            title="Enviar "
            disabled={
              errorConfirmPassword === null || errorConfirmPassword || loading
            }
            functionOnClick={() =>
              requestRedefinedPassword(passwordState, confirmPasswordState)
            }
            icon={() =>
              !(
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
      </AreaForm>
    </Container>
  );
}
