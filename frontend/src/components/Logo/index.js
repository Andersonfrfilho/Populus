import React from 'react';
import PropTypes from 'prop-types';
import {
  AreaSvg,
  AreaText,
  AreaTitle,
  Title,
  Svg,
  Image,
  Message,
} from './styles';
import logo from '../../assets/images/logo.svg';

export default function Logo({ error, image, title, message }) {
  return (
    <AreaSvg>
      {image ? (
        <Svg>
          <Image href={logo} />
        </Svg>
      ) : null}
      <AreaText>
        <AreaTitle>
          <Title>{title}</Title>
        </AreaTitle>
        <AreaTitle>
          <Message error={error}>{message || ' '}</Message>
        </AreaTitle>
      </AreaText>
    </AreaSvg>
  );
}
Logo.propTypes = {
  error: PropTypes.bool,
  title: PropTypes.bool,
  image: PropTypes.bool,
  message: PropTypes.string,
};
Logo.defaultProps = {
  error: false,
  title: 'Title page',
  message: '',
  image: true,
};
