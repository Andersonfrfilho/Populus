import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';
import { colors } from '../../styles';

export const AreaButtonIcon = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  height: 40px;
  padding-top: 10px;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
`;
export const Button = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center; /*flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe*/
  align-items: center;
  text-transform: uppercase;
  background-color: white;
  color: ${() => colors.pickerTwo};
  border: 2px solid ${() => colors.pickerTwo};
  border-radius: 4px;
  /* transition: transform 300ms ease-in-out; */
  transition-duration: 0.4s;
  &:hover {
    cursor: pointer;
    /* transform: translate(200px, 150px) rotate(20deg); */
    background-color: ${() => colors.pickerFour};
    transition-duration: 0.4s;
  }
  &:hover > svg {
    color: ${() => colors.white};
    transition-duration: 0.4s;
  }
  &:hover > p {
    color: ${() => colors.white};
    transition-duration: 0.4s;
  }
  &:active {
    cursor: pointer;
    background-color: ${() => colors.white};
    color: ${() => colors.pickerOne};
  }
  &:active > svg {
    color: ${() => colors.pickerOne};
  }
  &:active > p {
    color: ${() => colors.pickerOne};
  }
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10+ and Edge */
  user-select: none;
`;
export const IconUser = styled(FaUserAlt)`
  color: ${() => colors.pickerOne};
  margin-left: 20px;
  &:active {
    color: ${() => colors.light};
  }
`;
export const Title = styled.p`
  padding-right: 5px;
  font-size: 16px;
`;
