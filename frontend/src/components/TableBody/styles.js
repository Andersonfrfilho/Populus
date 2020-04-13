import styled, { keyframes, css } from 'styled-components';
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
import { colors, metrics } from '../../styles';

export const AreaTable = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: ${colors.white};
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 48px;
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
  padding: 0px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    background-color: ${colors.boxShadownTransparend};
  }
  &:active {
    background-color: ${colors.whiteTransparent};
  }
`;
export const IconDelete = styled(MdDelete)`
  transition-duration: 0.3s;
  padding: 0px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    padding: 3px;
    background-color: ${colors.boxShadownTransparend};
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
    background-color: ${colors.boxShadownTransparend};
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
    background-color: ${colors.boxShadownTransparend};
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
    background-color: ${colors.boxShadownTransparend};
  }
  &:active {
    background-color: ${colors.whiteTransparent};
  }
`;
export const IconFilterAlphaDown = styled(FaSortAlphaDown)``;
export const IconFilterAlphaUp = styled(FaSortAlphaUp)``;

export const IconFilterNumericDown = styled(FaSortNumericDown)``;
export const IconFilterNumericUp = styled(FaSortNumericUp)``;
