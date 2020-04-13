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
  height: 58px;
  width: 100%;
  background-color: ${colors.pickerNine};
  @media (min-width: 300px) {
    height: 38px;
  }
  @media (min-width: 400px) {
    height: 58px;
  }
  @media (min-width: 800px) {
    height: 58px;
  }
  @media (min-width: 1200px) {
    height: 58px;
  }
`;
export const AreaItems = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: row;
  justify-content: ${({ positionLine }) => positionLine};
  align-items: center;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  @media (min-width: 300px) {
    padding-left: 5px;
  }
  @media (min-width: 400px) {
    padding-left: 15px;
  }
  @media (min-width: 800px) {
    padding-left: 15px;
  }
  @media (min-width: 1200px) {
    padding-left: 15px;
  }
`;
export const DrawerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  text-transform: uppercase;
  margin-right: 15px;
  background-color: transparent;
  color: ${colors.pickerNine};
  border: none;
  border-radius: 40px;
  transition-duration: 0.7s;
  box-shadow: 0 0 5px ${() => colors.darknesTransparent};
  &:hover {
    /* transform: translate(200px, 150px) rotate(20deg); */
    background-color: ${() => colors.darknesTransparent};
  }
  &:active {
    background-color: ${() => colors.whiteTransparent};
    color: ${colors.pickerNine};
  }
  @media (min-width: 300px) {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
  @media (min-width: 400px) {
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }
  @media (min-width: 800px) {
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }
  @media (min-width: 1200px) {
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }
`;

export const AreaSvg = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  width: 42px;
  @media (min-width: 300px) {
    width: 38px;
    height: 38px;
  }
  @media (min-width: 400px) {
    height: 42px;
    width: 42px;
  }
  @media (min-width: 800px) {
    height: 42px;
    width: 42px;
  }
  @media (min-width: 1200px) {
    height: 42px;
    width: 42px;
  }
`;
export const Image = styled.image`
  height: 100%;
  width: 100%;
`;
export const AreaUserButtonExpand = styled.div`
  display: block;
  top: 0;
  position: absolute;
  height: ${({ open }) => (open ? 116 : 58)}px;
  z-index: 0;
  cursor: pointer;
  @media (min-width: 300px) {
    width: 35px;
    left: 100%-35px;
    height: ${({ open }) => (open ? 56 : 38)}px;
  }
  @media (min-width: 400px) {
    width: 70px;
    left: 100%-70px;
    height: ${({ open }) => (open ? 116 : 58)}px;
  }
  @media (min-width: 800px) {
    width: 100px;
    left: 100%-140px;
    height: ${({ open }) => (open ? 116 : 58)}px;
  }
  @media (min-width: 1200px) {
    width: 100px;
    left: 100%-210px;
    height: ${({ open }) => (open ? 116 : 58)}px;
  }
`;
export const AreaUserButon = styled.div`
  display: flex;
  visibility: ${({ exist }) => (exist ? 'visible' : 'hidden')};
  height: 50px;
  background-color: ${colors.pickerFive};
  box-shadow: 0 0 0.1em ${() => colors.boxShadownTransparend};
  opacity: ${({ exist }) => (exist ? 1 : 0)};
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 3px;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: visibility, opacity;
  transition-timing-function: ease-out;
  &:hover {
    cursor: pointer;
    background-color: ${colors.darkTransparent};
    transition-property: visibility, opacity, background-color;
    transition-duration: 0.7s;
    p {
      transition-duration: 0.7s;
    }
  }
  @media (min-width: 300px) {
    height: 34px;
  }
  @media (min-width: 400px) {
    height: 54px;
  }
  @media (min-width: 800px) {
    height: 54px;
  }
  @media (min-width: 1200px) {
    height: 54px;
  }
`;
export const AreaPhoto = styled.div`
  display: flex;
  flex: 1;
  height: 95%;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 29px;
  overflow: hidden;
  transition-duration: 0.7s;
  @media (min-width: 300px) {
    display: ${({ exist }) => (exist ? 'flex' : 'none')};
    height: 35px;
  }
  @media (min-width: 400px) {
    display: ${({ exist }) => (exist ? 'flex' : 'none')};
    flex: 1;
    height: 95%;
  }
  @media (min-width: 800px) {
    flex: 1;
    height: 95%;
  }
  @media (min-width: 1200px) {
    flex: 2;
    height: 95%;
  }
`;
export const Photo = styled.img`
  height: 100%;
  width: 100%;
`;
export const AreaTitle = styled.div`
  display: flex;
  flex: 4;
  justify-content: ${({ align }) => align};
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  transition-duration: 0.7s;
  @media (min-width: 300px) {
    display: ${({ exits }) => (exits ? 'flex' : 'none')};
  }
  @media (min-width: 400px) {
    display: ${({ exits }) => (exits ? 'flex' : 'none')};
  }
  @media (min-width: 800px) {
    display: ${({ exits }) => (exits ? 'flex' : 'none')};
  }
  @media (min-width: 1200px) {
    display: flex;
  }
`;
export const Title = styled.p`
  color: ${() => colors.pickerEigth};
  text-transform: capitalize;
`;
export const AreaIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.7s;
  width: 40px;
  height: 100%;

  @media (min-width: 300px) {
    display: ${({ exist }) => (exist ? 'flex' : 'none')};
    flex: 1;
  }
  @media (min-width: 400px) {
    display: ${({ exist }) => (exist ? 'flex' : 'none')};
    flex: 1;
  }
  @media (min-width: 800px) {
    display: flex;
    flex: 1;
  }
  @media (min-width: 1200px) {
    display: flex;
    flex: 1;
  }
`;
export const IconDown = styled(FaAngleDown)`
  color: ${colors.pickerEigth};
  transition-duration: 0.7s;
  font-size: ${() => metrics.fontSize + 18}px;
`;
export const IconUp = styled(FaAngleUp)`
  color: ${colors.pickerEigth};
  transition-duration: 0.7s;
  font-size: ${() => metrics.fontSize + 18}px;
`;
export const IconBack = styled(FaArrowLeft)`
  color: ${colors.pickerEigth};
  transition-duration: 0.7s;
`;
export const DrawerIcon = styled(FaBars)`
  color: ${colors.pickerEigth};
  transition-duration: 0.7s;
  font-size: ${() => metrics.fontSize + 8}px;
`;
export const DrawerOff = styled(FaPowerOff)`
  color: ${colors.pickerEigth};
  transition-duration: 0.7s;
  font-size: ${() => metrics.fontSize + 8}px;
`;
