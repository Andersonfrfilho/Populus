import styled, { keyframes, css } from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';
import { colors, metrics } from '../../styles';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AreaForm = styled.form`
  max-width: 700px;
  background-color: ${() => colors.white};
  border-radius: 4px;
  box-shadow: 0 0 20px ${() => colors.boxShadownTransparend};
  padding: 30px;
  margin: 80px auto;
  font-size: 1.5em;
  border-radius: 4px;
`;

export const AreaLogo = styled.div`
  flex: 1;
`;
export const AreaInputs = styled.div`
  flex: 1;
`;
export const AreaButton = styled.div`
  flex: 1;
`;
export const AreaRegisterForgotedPassword = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;
export const AreaLink = styled.div`
  display: flex;
  flex: 1;
  justify-content: ${({ position }) => (position ? 'flex-start' : 'flex-end')};
  flex-direction: row;
  margin-top: 20px;
`;
export const Link = styled.a`
  color: ${() => colors.regular};
  font-size: ${() => metrics.fontSize - 2}px;
`;
// export const SubmitButton = styled.button.attrs(props => ({
//  type: 'submit',
//  disabled: props.loading,
// }))`
//  background: #7159c1;
//  border: 0;
//  padding: 0 15px;
//  margin-left: 10px;
//  border-radius: 4px;
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  &[disabled] {
//    cursor: not-allowed;
//    opacity: 0.6;
//  }
//  ${props =>
//    props.loading &&
//    css`
//      svg {
//        animation: ${rotate} 2s linear infinite;
//      }
//    `}
// `;
export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & + li {
      border-top: 1px solid #eee;
    }
    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
