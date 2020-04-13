import styled from 'styled-components';
import { colors } from '../../styles';

export const AreaSvg = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AreaText = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 20px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
`;
export const AreaTitle = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;
export const Title = styled.p`
  flex: 1;
  align-items: center;
  color: ${({ error }) => (error ? colors.danger : colors.dark)};
  transition-duration: 0.7s;
`;
export const Message = styled.p`
  flex: 1;
  align-items: center;
  color: ${({ error }) => (error ? colors.danger : colors.dark)};
  transition-duration: 0.7s;
  font-size: 12px;
`;
export const Svg = styled.svg`
  width: 100%;
  height: 100%;
`;
export const Image = styled.image`
  width: 100%;
  height: 100%;
`;
