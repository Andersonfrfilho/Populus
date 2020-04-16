import styled from 'styled-components';
import {
  FaSortAlphaUp,
  FaSortAlphaDown,
  FaSortNumericDown,
  FaSortNumericUp,
} from 'react-icons/fa';
import {
  MdDelete,
  MdEdit,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdIndeterminateCheckBox,
} from 'react-icons/md';
import { colors } from '../../styles';

export const Modal = styled.div`
  display: ${({ visible }) =>
    visible ? 'flex' : 'none'}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  /*padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  flex: 1;
`;
export const AreaTable = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: transparent;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 48px;
`;
export const RowBody = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 48px;
  &:hover {
    cursor: pointer;
    td {
      background-color: ${colors.darkness};
    }
  }
`;

export const Column = styled.td`
  display: flex;
  flex: ${({ flex }) => flex};
  align-items: center;
  justify-content: center;
  border: solid;
  border-width: 0px 0px 1px 0px;
  border-color: ${colors.regular};
  overflow: hidden;
  color: ${({ header }) => (header ? colors.dark : colors.regular)};
  font-weight: ${({ header }) => (header ? 'bold' : 'normal')};
  background-color: ${colors.pickerSix};
`;
export const ColumnBody = styled.td`
  display: flex;
  flex: ${({ flex }) => flex};
  align-items: center;
  justify-content: center;
  border: solid;
  border-width: 0px 0px 1px 0px;
  border-color: ${colors.regular};
  overflow: hidden;
  color: ${({ header }) => (header ? colors.dark : colors.regular)};
  font-weight: ${({ header }) => (header ? 'bold' : 'normal')};
  background-color: ${({ select }) =>
    select ? colors.dark : colors.pickerFive};
`;
export const AreaActionsIcons = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
export const AreaIcons = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const AreaInfo = styled.div`
  display: flex;
  flex: 1;
  justify-content: ${({ align }) => align};
  align-items: center;
  overflow: hidden;
  svg {
    visibility: hidden;
  }
  /* &:focus-within {
  } */
  &:hover {
    cursor: ${({ pointer }) => (pointer ? 'pointer' : 'normal')};
    svg {
      visibility: visible;
    }
  }
`;
export const Info = styled.p`
  background-color: transparent;
  overflow: hidden;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const IconEdit = styled(MdEdit)`
  transition-duration: 0.3s;
  border-radius: 50%;
  padding: 0px;
  &:hover {
    cursor: pointer;
    padding: 3px;
    background-color: ${colors.darknesTransparent};
  }
  &:active {
    background-color: ${colors.whiteTransparent};
  }
`;
export const IconDelete = styled(MdDelete)`
  transition-duration: 0.3s;
  border-radius: 50%;
  padding: 0px;
  &:hover {
    cursor: pointer;
    padding: 3px;
    background-color: ${colors.darknesTransparent};
  }
  &:active {
    background-color: ${colors.whiteTransparent};
  }
`;
export const IconSquareUnselect = styled(MdCheckBoxOutlineBlank)`
  transition-duration: 0.3s;
  border-radius: 50%;
  padding: 0px;
  &:hover {
    cursor: pointer;
    padding: 3px;
    background-color: ${colors.darknesTransparent};
  }
  &:active {
    background-color: ${colors.whiteTransparent};
  }
`;
export const IconSquareSelect = styled(MdCheckBox)`
  transition-duration: 0.3s;
  border-radius: 50%;
  padding: 0px;
  &:hover {
    cursor: pointer;
    padding: 3px;
    background-color: ${colors.darknesTransparent};
  }
  &:active {
    background-color: ${colors.whiteTransparent};
  }
`;
export const IconSquareAllSelect = styled(MdIndeterminateCheckBox)`
  transition-duration: 0.3s;
  border-radius: 50%;
  padding: 0px;
  &:hover {
    cursor: pointer;
    padding: 3px;
    background-color: ${colors.darknesTransparent};
  }
  &:active {
    background-color: ${colors.whiteTransparent};
  }
`;
export const IconFilterAlphaDown = styled(FaSortAlphaDown)``;
export const IconFilterAlphaUp = styled(FaSortAlphaUp)``;

export const IconFilterNumericDown = styled(FaSortNumericDown)``;
export const IconFilterNumericUp = styled(FaSortNumericUp)``;
