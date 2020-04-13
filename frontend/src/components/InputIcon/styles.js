import styled from 'styled-components';
import { FaFonticons } from 'react-icons/fa';
import InputMask from 'react-input-mask';
import { colors, metrics } from '../../styles';

export const AreaInputIcon = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  height: 40px;
  padding-top: 10px;
`;
export const AreaInput = styled.div`
  display: flex;
  flex: 4;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-radius: 4px 0px 0px 4px;
  border-color: ${({ error }) => (error ? colors.danger : colors.pickerTwo)};
  padding-left: 3px;
  padding-right: 3px;
  padding-bottom: 3px;
  padding-top: 3px;
`;
export const Input = styled.input`
  width: 100%;
  font-size: ${metrics.fontSize + 4}px;
  border-width: 0px;
  padding-left: 5px;
  background-color: none;
  color: ${colors.pickerFour};
  outline: none;
  :focus {
    border-color: none;
  }
  ::placeholder {
    color: ${colors.pickerFour};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${colors.pickerFour};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${colors.pickerFour};
  }
`;
export const InputFormMask = styled(InputMask)`
  width: 100%;
  font-size: ${metrics.fontSize + 4}px;
  border-width: 0px;
  padding-left: 5px;
  background-color: none;
  color: ${colors.pickerFour};
  outline: none;
  :focus {
    border-color: none;
  }
  ::placeholder {
    color: ${colors.pickerFour};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${colors.pickerFour};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${colors.pickerFour};
  }
`;
export const AreaIcon = styled.button`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-style: solid;
  border-width: 2px 2px 2px 0px;
  border-radius: 0px 4px 4px 0px;
  border-color: ${({ error }) => (error ? colors.danger : colors.pickerTwo)};
  cursor: ${({ button }) => (button ? 'pointer' : 'auto')};
  color: ${colors.pickerFour};
  &:active {
    background-color: ${() => colors.pickerFour};
    transition-duration: 0.4s;
  }
`;

export const IconDefault = styled(FaFonticons)`
  color: ${() => colors.dark};
`;
