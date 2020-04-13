import React from 'react';
import PropTypes from 'prop-types';
import { AreaHeader, AreaTitle, Title } from './styles';

export default function DrawerContentHeader({ name }) {
  return (
    <AreaHeader>
      <AreaTitle>
        <Title>{name}</Title>
      </AreaTitle>
    </AreaHeader>
  );
}
DrawerContentHeader.propTypes = {
  name: PropTypes.string,
};
DrawerContentHeader.defaultProps = {
  name: 'Name',
};
