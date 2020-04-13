import styled from 'styled-components';
import { FaSistrix, FaTimes } from 'react-icons/fa';
import { MdAddBox } from 'react-icons/md';
import TextInput from 'react-autocomplete-input';
import { colors } from '../../styles';
import 'react-autocomplete-input/dist/bundle.css';

export const AreaTitleSearchTable = styled.div`
  display: flex;
  flex: 1;
`;
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

export const AreaItensTable = styled.div`
  flex: 1;
  display: flex;
  justify-content: ${({ align }) => align};
  align-items: center;
  background-color: ${({ color }) => color};
  padding-right: 5px;
`;
export const TitleList = styled.p`
  padding-left: 5px;
  font-weight: bold;
  color: ${colors.dark};
`;
export const AreaSearchAdd = styled.div`
  display: flex;
  height: 30px;
  width: 350px;
  background-color: ${colors.pickerFive};
  color: ${colors.pickerEleven};
  border: solid;
  border-width: 0px 0px 1px 0px;
  border-color: ${colors.pickerSeven};
  &:hover {
    border-width: 0px 0px 1px 0px;
    transition-duration: 0.4s;
    border-color: ${colors.darkTransparent};
  }
  /* quando for utilizar focagem em um filho */
  &:focus-within {
    border-color: ${colors.darkTransparent};
    border-width: 0px 0px 2px 0px;
    transition-duration: 0.3s;
  }

  @media (min-width: 300px) {
    width: 200px;
    transition-duration: 0.7s;
  }
  @media (min-width: 400px) {
    width: 175px;
  }
  @media (min-width: 800px) {
    width: 350px;
  }
  @media (min-width: 1200px) {
    width: 350px;
  }
`;
export const AreaIcon = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const AreaIconClear = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  transition-duration: 0.7s;
  &:hover {
    cursor: pointer;
    border-radius: 50%;
    background-color: ${colors.dark};
  }
  &:active {
    border-radius: 50%;
    background-color: ${colors.pickerNine};
  }
`;
export const AreaIconAdd = styled.div`
  display: flex;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.pickerTwelve};
  color: ${colors.dark};
  border-radius: 12px;
  margin-left: 10px;
  transition-duration: 0.7s;
  &:hover {
    cursor: pointer;
    width: 40px;
    height: 30px;
    background-color: ${colors.pickerEigth};
  }
  &:active {
    background-color: ${colors.dark};
  }
  @media (min-width: 300px) {
    width: 40px;
  }
  @media (min-width: 400px) {
    width: 40px;
  }
  @media (min-width: 800px) {
    width: 40px;
  }
  @media (min-width: 1200px) {
    width: 40px;
  }
`;
export const AreaInputSearch = styled.div`
  flex: 8;
`;
export const SearchInput = styled(TextInput).attrs((/* props */) => ({
  rows: 1,
}))`
  width: 100%;
  height: 100%;
  padding-top: 5px;
  padding-left: 5px;
  border: none;
  background-color: transparent;
  font-size: 18px;
  color: ${colors.dark};
  resize: none;
`;

export const IconSearch = styled(FaSistrix)``;
export const IconClean = styled(FaTimes)``;
export const IconPlus = styled(MdAddBox)`
  font-size: 18px;
`;
