import React from 'react';
import PropTypes from 'prop-types';
import { AreaButtonIcon, Button, Title } from './styles';
import Loader from '../Loader';
import { colors } from '../../styles';

export default function ButtonIcon({
  iconPosition,
  functionOnClick,
  loading,
  title,
  disabled,
  icon,
}) {
  function functionIconPosition(positionParam, titleParam, iconParam) {
    if (positionParam === 'left') {
      return (
        <>
          {iconParam()} <Title>{titleParam}</Title>
        </>
      );
    }
    return (
      <>
        <Title>{titleParam}</Title>
        {iconParam()}
      </>
    );
  }
  return (
    <AreaButtonIcon onClick={functionOnClick} disabled={disabled}>
      <Button>
        {loading ? <Loader /> : functionIconPosition(iconPosition, title, icon)}
      </Button>
    </AreaButtonIcon>
  );
}
ButtonIcon.propTypes = {
  iconPosition: PropTypes.string,
  title: PropTypes.string,
  functionOnClick: PropTypes.func,
  loading: PropTypes.bool,
  loadingSize: PropTypes.string,
  loadingColor: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.func,
};
ButtonIcon.defaultProps = {
  iconPosition: 'rigth',
  title: 'Título do Botão',
  functionOnClick: () => {},
  loading: false,
  loadingSize: 'small',
  loadingColor: colors.light,
  disabled: true,
  icon: () => {},
};
