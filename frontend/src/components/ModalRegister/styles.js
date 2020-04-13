import styled from 'styled-components';
import { colors, metrics } from '../../styles';

export const AreaModal = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 5px 20px 20px 20px;
  border: 1px solid #888;
  width: 80%;
  display: flex;
  flex-direction: column;
`;
export const AreaHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  height: 40px;
`;
export const AreaTitle = styled.div`
  display: flex;
  flex: ${({ flex = 1 }) => flex};
  justify-content: flex-start;
  align-items: center;
`;
export const AreaIcon = styled.div`
  display: flex;
  flex: ${({ flex = 1 }) => flex};
  justify-content: center;
  align-items: center;
`;
export const TitleHeader = styled.h3`
  flex: 1;
  text-align: center;
  font-size: ${metrics.fontSize};
  color: ${colors.dark};
`;
export const AreaIconClosed = styled.div`
  display: flex;
  flex: ${({ flex = 1 }) => flex};
  justify-content: center;
  align-items: center;
  transition-duration: 0.7s;
  :hover {
    cursor: pointer;
    background-color: ${colors.boxShadownBlueTransparent};
  }
  :active {
    background-color: ${colors.boxShadownTransparent};
  }
`;
export const AreaInputs = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  transition-duration: 0.5s;
  @media (min-width: 300px) {
    flex-direction: column;
  }
  @media (min-width: 400px) {
    flex-direction: column;
  }
  @media (min-width: 800px) {
    flex-direction: row;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;
export const AreaInputTitle = styled.div`
  display: flex;
  padding-left: 5px;
  padding-right: 5px;
  flex-direction: column;
  @media (min-width: 300px) {
    flex: 1;
  }
  @media (min-width: 400px) {
    flex: 1;
  }
  @media (min-width: 800px) {
    flex: ${({ flex = 1 }) => flex};
  }
  @media (min-width: 1200px) {
    flex: ${({ flex = 1 }) => flex};
  }
`;
export const AreaInputRemove = styled.div`
  display: flex;
  padding-left: 5px;
  padding-right: 5px;
  flex-direction: column;
  width: 40px;
  justify-content: flex-end;
  transition-duration: 0.7s;
`;
export const AreaTitleInput = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;
export const AreaIconRemove = styled.div`
  display: flex;
  background-color: ${colors.boxShadownTransparent};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  height: 40px;

  flex: 1;
  :hover {
    cursor: pointer;
    background-color: ${colors.boxShadownBlueTransparent};
  }
  :active {
    background-color: ${colors.boxShadownTransparent};
  }
  @media (min-width: 300px) {
    margin-top: 5px;
  }
  @media (min-width: 400px) {
    margin-top: 5px;
  }
  @media (min-width: 800px) {
    margin-top: 0px;
  }
  @media (min-width: 1200px) {
    margin-top: 0px;
  }
`;
export const TitleInput = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.dark};
`;
export const AreaInputsMultiples = styled.div`
  border: solid;
  border-color: ${colors.dark};
  margin-top: 15px;
  padding: 5px;
  border-radius: 12px;
  margin-top: 30px;
`;
export const AreaTitleInputsMultiples = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5px;
  margin-top: -20px;
  @media (min-width: 300px) {
    margin-top: -15px;
  }
  @media (min-width: 400px) {
    margin-top: -16px;
  }
  @media (min-width: 800px) {
    margin-top: -18px;
  }
  @media (min-width: 1200px) {
    margin-top: -20px;
  }
`;
export const TitleInputsMultiple = styled.h3`
  background-color: ${colors.white};
  color: ${colors.dark};
`;
export const AreaUnderline = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 8px;
  height: 1px;
`;
export const Underline = styled.div`
  margin-top: 3px;
  background-color: ${colors.boxShadownTransparent};
  height: 80%;
`;
export const AreaIconPlusMultiple = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
export const AreaIconPlus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background-color: ${colors.boxShadownTransparent};
  :hover {
    cursor: pointer;
    background-color: ${colors.darknesTransparent};
  }
  :active {
    background-color: ${colors.boxShadownTransparent};
  }
  @media (min-width: 300px) {
    width: 20px;
    height: 20px;
  }
  @media (min-width: 400px) {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 800px) {
    width: 40px;
    height: 40px;
  }
  @media (min-width: 1200px) {
    width: 40px;
    height: 40px;
  }
`;
