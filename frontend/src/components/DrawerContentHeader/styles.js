import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaPowerOff,
  FaAngleDown,
  FaAngleUp,
  FaArrowLeft,
} from 'react-icons/fa';
import { colors, metrics } from '../../styles';

export const AreaHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
  background-color: ${colors.pickerSeven};
`;
export const AreaTitle = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 5px;
`;
export const Title = styled.p`
  color: ${colors.dark};
`;
