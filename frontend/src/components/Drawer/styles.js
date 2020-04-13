import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch, FaFonticons, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { colors } from '../../styles';

export const AreaDrawer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${colors.pickerFive};
`;
export const AreaHeader = styled.div`
  display: flex;
  flex: 1;
  justify-content: row;
  max-height: 68px;
  overflow: hidden;
  @media (min-width: 300px) {
    max-height: 34px;
  }
  @media (min-width: 400px) {
    max-height: 68px;
  }
  @media (min-width: 800px) {
    max-height: 68px;
  }
  @media (min-width: 1200px) {
    max-height: 68px;
  }
`;
export const AreaPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ open }) => (open ? 200 : 70)}px;
  overflow: hidden;
  svg {
    color: ${colors.dark};
  }
  @media (min-width: 300px) {
    min-width: ${({ open }) => (open ? 110 : 40)}px;
  }
  @media (min-width: 400px) {
    min-width: ${({ open }) => (open ? 200 : 70)}px;
  }
  @media (min-width: 800px) {
    min-width: ${({ open }) => (open ? 200 : 70)}px;
  }
  @media (min-width: 1200px) {
    min-width: ${({ open }) => (open ? 200 : 70)}px;
  }
`;
export const Photo = styled.img`
  width: 60px;
  height: 80%;
  border: solid;
  border-width: 3px;
  border-radius: 32px;
  box-shadow: 0 0 20px ${() => colors.boxShadownTransparend};
  @media (min-width: 300px) {
    width: 30px;
    height: 80%;
  }
  @media (min-width: 400px) {
    width: 60px;
    height: 80%;
  }
  @media (min-width: 800px) {
    width: 60px;
    height: 80%;
  }
  @media (min-width: 1200px) {
    width: 60px;
    height: 80%;
  }
`;
export const AreaInfo = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.div`
  text-overflow: ellipsis;
  padding-left: 5px;
  width: 100%;
  color: ${colors.dark};
`;
export const Text = styled.div`
  width: 100%;
  padding-left: 5px;
`;
export const AreaSearch = styled.div`
  display: flex;
  flex: 1;
  max-height: 40px;
  margin-bottom: 5px;
  @media (min-width: 300px) {
    max-height: 25px;
  }
  @media (min-width: 400px) {
    max-height: 40px;
  }
  @media (min-width: 800px) {
    max-height: 40px;
  }
  @media (min-width: 1200px) {
    max-height: 40px;
  }
`;
export const AreaInputSearch = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding-bottom: 3px;
`;
export const InputSearch = styled.input`
  background-color: ${colors.white};
  border: none;
  width: 92%;
  height: 90%;
  padding-left: ${({ open }) => (open ? 5 : 0)}px;
  border-radius: 8px;
  color: ${colors.pickerEigth};

  transition-duration: 0.7s;
  box-shadow: 0 0 3px ${() => colors.darknesTransparent};
  &:hover {
    border: solid 1px ${colors.pickerEigth};
    transition-duration: 0.7s;
    box-shadow: 0 0 10px ${() => colors.darknesTransparent};
  }
  &:focus {
    border: solid 1px ${colors.pickerEigth};
    transition-duration: 0.7s;
    box-shadow: 0 0 10px ${() => colors.darknesTransparent};
  }
  @media (min-width: 300px) {
    width: 82%;
    border-radius: 3px;
    font-size: 10px;
  }
  @media (min-width: 400px) {
    width: 92%;
    font-size: 14px;
  }
  @media (min-width: 800px) {
    width: 92%;
    font-size: 16px;
  }
  @media (min-width: 1200px) {
    width: 92%;
    font-size: 18px;
  }
`;
export const AreaInputIconSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 70px;
  @media (min-width: 300px) {
    min-width: 40px;
  }
  @media (min-width: 400px) {
    min-width: 70px;
  }
  @media (min-width: 800px) {
    min-width: 70px;
  }
  @media (min-width: 1200px) {
    min-width: 70px;
  }
`;
export const AreaBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${colors.pickerFive};
  overflow: hidden;
`;

export const AreaSubOption = styled.div`
  flex: 1;
  height: 24px;
`;
export const AreaUnderline = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 3px;
  height: 1px;
`;
export const Underline = styled.div`
  margin-top: 3px;
  background-color: ${colors.boxShadownTransparent};
  height: 80%;
`;
export const AreaOptionsList = styled.div`
  display: block;
`;
export const AreaOptions = styled.div`
  display: flex;
  min-height: 50px;
  margin-top: 3px;
  &:hover {
    transition-duration: 0.7s;
    background-color: ${colors.boxShadownTransparent};
  }
  @media (min-width: 300px) {
    min-height: 30px;
  }
  @media (min-width: 400px) {
    min-height: 50px;
  }
  @media (min-width: 800px) {
    min-height: 50px;
  }
  @media (min-width: 1200px) {
    min-height: 50px;
  }
`;
export const AreaOptionLink = styled(Link)`
  display: flex;
  flex: 1;
  text-decoration: none;
  color: ${colors.black};
  max-height: 50px;
  &:hover {
    cursor: pointer;
  }
`;
export const AreaOption = styled.div`
  display: flex;
  flex: 1;
  text-decoration: none;
  color: ${colors.black};
  max-height: 50px;
  &:hover {
    cursor: pointer;
  }
`;
export const AreaIconOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 70px;
  visibility: visible;
  @media (min-width: 300px) {
    min-width: 0px;
    visibility: hidden;
  }
  @media (min-width: 400px) {
    min-width: 70px;
    visibility: visible;
  }
  @media (min-width: 800px) {
    min-width: 70px;
    visibility: visible;
  }
  @media (min-width: 1200px) {
    min-width: 70px;
    visibility: visible;
  }
`;
export const AreaTitle = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  max-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 5px;
`;
export const TitleOption = styled.div`
  display: flex;
  flex: 1;
  max-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colors.pickerEigth};
`;
export const AreaIconDownUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;

  &:hover {
    cursor: pointer;
  }
`;
export const IconSeach = styled(FaSearch)`
  color: ${colors.pickerEigth};
`;
export const IconFont = styled(FaFonticons)``;
export const IconDown = styled(FaAngleDown)`
  color: ${colors.pickerEigth};
`;
export const IconUp = styled(FaAngleUp)`
  color: ${colors.pickerEigth};
`;
