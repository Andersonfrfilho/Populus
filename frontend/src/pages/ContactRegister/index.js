import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container } from './styles';
import Button from '../../components/ButtonIcon';

function ContactRegister({ history }) {
  const dispatch = useDispatch();
  function onChangePageChildren() {}
  return (
    <Container>
      <Button
        title="chamar sagas para ir para tela de listagem"
        functionOnClick={() => onChangePageChildren()}
      />
    </Container>
  );
}
export default withRouter(ContactRegister);
