import styled, { keyframes, css } from 'styled-components';
import { FaSistrix, FaTimes, FaPlus } from 'react-icons/fa';
import { colors, metrics } from '../../styles';

export const AreaUserList = styled.div`
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: ${colors.light};
`;
export const AreaHeaderTable = styled.div`
  display: flex;
  height: 48px;
`;
export const AreaBodyTable = styled.div`
  display: flex;
  flex: 1;
`;
