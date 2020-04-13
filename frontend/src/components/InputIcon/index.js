import React from 'react';
import PropTypes from 'prop-types';
import {
  AreaInputIcon,
  AreaInput,
  Input,
  InputFormMask,
  AreaIcon,
  IconDefault,
} from './styles';

export default function InputIcon({
  value,
  button,
  functionOnClick,
  error,
  disabled,
  type,
  functionOnChange,
  functionOnEndingChange,
  placeholder,
  inputMask,
  icon,
  typeInput,
}) {
  return (
    <AreaInputIcon>
      <AreaInput error={error}>
        {type !== 'mask' ? (
          <Input
            value={value}
            placeholder={placeholder}
            onChange={text => functionOnChange(text.target.value)}
            onBlur={functionOnEndingChange}
            type={typeInput}
            disabled={disabled}
          />
        ) : (
          <InputFormMask
            value={value}
            mask={inputMask}
            placeholder={placeholder}
            onBlur={functionOnEndingChange}
            type={typeInput}
            onChange={text => functionOnChange(text.target.value)}
            disabled={disabled}
          />
        )}
      </AreaInput>
      <AreaIcon
        type="button"
        button={button}
        onClick={functionOnClick}
        error={error}
        disabled={disabled}
      >
        {icon()}
      </AreaIcon>
    </AreaInputIcon>
  );
}
InputIcon.propTypes = {
  typeInput: PropTypes.string,
  button: PropTypes.bool,
  functionOnClick: PropTypes.func,
  functionOnChange: PropTypes.func,
  error: PropTypes.bool,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  functionOnEndingChange: PropTypes.func,
  inputMask: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.func,
  width: PropTypes.string,
};
InputIcon.defaultProps = {
  typeInput: 'button',
  button: false,
  functionOnClick: () => {},
  functionOnChange: () => {},
  error: false,
  type: 'common',
  disabled: true,
  value: '',
  functionOnEndingChange: () => {},
  inputMask: '99/99/99',
  placeholder: 'palceholder input:',
  icon: () => <IconDefault />,
  width: '100%',
};
