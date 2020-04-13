import styled from 'styled-components';
import { IoIosPersonAdd, IoIosPeople } from 'react-icons/io';
import { colors } from '../../styles';

export const AreaPanel = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;
export const AreaDrawerPanel = styled.div`
  display: flex;
  flex: 1;
  background-color: ${props => props.color};
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
`;
export const AreaDrawer = styled.div`
  display: flex;
  flex: ${({ open }) => (open ? 1.5 : 0.4)};
  min-width: ${({ open }) => (open ? 200 : 70)}px;
  flex-direction: column;
  transition-duration: 0.7s;
  overflow: hidden;
  box-shadow: 0 0 0.1em ${() => colors.boxShadownTransparend};
  @media (min-width: 300px) {
    flex: ${({ open }) => (open ? 1 : 0)};
    min-width: ${({ open }) => (open ? 110 : 0)}px;
  }
  @media (min-width: 400px) {
    flex: ${({ open }) => (open ? 1.5 : 0.4)};
    min-width: ${({ open }) => (open ? 200 : 70)}px;
  }
  @media (min-width: 800px) {
    flex: ${({ open }) => (open ? 1.5 : 0.4)};
    min-width: ${({ open }) => (open ? 200 : 70)}px;
  }
  @media (min-width: 1200px) {
    flex: ${({ open }) => (open ? 1.5 : 0.4)};
    min-width: ${({ open }) => (open ? 200 : 70)}px;
  }
`;

export const AreaContent = styled.div`
  display: flex;
  flex: 9;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 0 0.1em ${() => colors.boxShadownTransparend};
`;
export const IconUserList = styled(IoIosPeople)`
  color: ${colors.pickerEigth};
`;
export const IconRegisterUser = styled(IoIosPersonAdd)`
  color: ${colors.pickerEigth};
`;
