import React from 'react';
import PropTypes from 'prop-types';
import {
  AreaTable,
  Column,
  Row,
  RowBody,
  AreaActionsIcons,
  AreaIcons,
  AreaInfo,
  Info,
  IconDelete,
  IconSquareAllSelect,
  IconSquareUnselect,
  IconSquareSelect,
  IconFilterNumericDown,
  IconFilterNumericUp,
  IconFilterAlphaDown,
  IconFilterAlphaUp,
  ColumnBody,
  Modal,
} from './styles';
import ModalAlter from '../ModalAlter';
import { icons } from '../../styles';

function functionSelectFilterNumber(selectParam) {
  return selectParam ? <IconFilterNumericDown /> : <IconFilterNumericUp />;
}
function functionSelectFilterAlpha(selectParam) {
  return selectParam ? <IconFilterAlphaDown /> : <IconFilterAlphaUp />;
}
export default function TableBody({
  infoTable,
  functionSelect,
  functionClosedModal,
  functionDeleteSelect,
  functionDeleteDirect,
  functionOrderOption,
  functionViewRow,
  visibleModal,
  contact,
  functionOnClickAddPhoneModal,
  functionOnClickRemovePhoneModal,
  // Modal Function Change : name
  functionOnChangeInputNameModal,
  functionOnEndingChangeNameModal,
  functionOnEditChangeInputNameModal,
  // Modal Function Change : lastname
  functionOnChangeInputLastnameModal,
  functionOnEndingChangeLastnameModal,
  functionOnEditChangeInputLastnameModal,
  // Modal Function Change : e-mail
  functionOnChangeInputEmailModal,
  functionOnEndingChangeEmailModal,
  functionOnEditChangeInputEmailModal,
  // Modal Function Change : phone : number
  functionOnChangeInputPhoneNumberModal,
  functionOnEndingChangePhoneNumberModal,
  functionOnEditChangeInputPhoneNumberModal,
  // Modal Function Change : phone : description
  functionOnChangeInputPhoneDescriptionModal,
  functionOnEndingChangePhoneDescriptionModal,
  // Modal Function Change : address : add / Remove
  functionOnClickAddAddressesModal,
  functionOnClickRemoveAddressesModal,
  //= ==============
  // Modal Function Change name
  functionOnChangeInputAddressesNameModal,
  functionOnEndingChangeAddressesNameModal,
  // Modal Functio Change Number
  functionOnChangeInputAddressesNumberModal,
  functionOnEndingChangeAddressesNumberModal,
  // Modal Function Change
  functionOnChangeInputAddressesNeighborhoodModal,
  functionOnEndingChangeAddressesNeighborhoodModal,
  // Modal Function Change
  functionOnChangeInputAddressesCityModal,
  functionOnEndingChangeAddressesCityModal,
  // Modal Function Change
  functionOnChangeInputAddressesStateModal,
  functionOnEndingChangeAddressesStateModal,
  // Modal Function Change
  functionOnChangeInputAddressesCountryModal,
  functionOnEndingChangeAddressesCountryModal,
  // Modal Function Change
  functionOnChangeInputAddressesZipCodeModal,
  functionOnEndingChangeAddressesZipCodeModal,
  // last-functions
  titleButtonSave,
  functionOnClickButtonSave,
  disabledButtonSave,
  iconButtonSave,
  order,
}) {
  return (
    <AreaTable>
      <Modal visible={visibleModal}>
        <ModalAlter
          infoUser={contact}
          titleHeader="Alterar usuário"
          functionOnClick={functionClosedModal}
          functionOnClickAddPhone={functionOnClickAddPhoneModal}
          functionOnClickRemovePhone={functionOnClickRemovePhoneModal}
          // field : name
          titleInputName="Nome"
          typeInputName="text"
          typeInputNameFormat="text"
          placeholderInputName="Digite seu nome:"
          iconInputName={() => <icons.UserIcon />}
          functionOnChangeInputName={functionOnChangeInputNameModal}
          functionOnEndingNameChange={functionOnEndingChangeNameModal}
          functionOnEditChangeInputName={functionOnEditChangeInputNameModal}
          // input:LasName
          titleInputLastname="Sobrenome"
          typeInputLastname="text"
          typeInputLastnameFormat="text"
          placeholderInputLastname="Digite seu sobrenome:"
          iconInputLastname={() => <icons.UserIcon />}
          functionOnChangeInputLastname={functionOnChangeInputLastnameModal}
          functionOnEndingLastnameChange={functionOnEndingChangeLastnameModal}
          functionOnEditChangeInputLastname={
            functionOnEditChangeInputLastnameModal
          }
          // // email
          titleInputEmail="E-mail"
          typeInputEmail="email"
          typeInputEmailFormat="email"
          placeholderInputEmail="digite seu e-mail"
          iconInputEmail={() => <icons.EmailIcon />}
          functionOnChangeInputEmail={functionOnChangeInputEmailModal}
          functionOnEndingEmailChange={functionOnEndingChangeEmailModal}
          functionOnEditChangeInputEmail={functionOnEditChangeInputEmailModal}
          // // Phone
          areaInputPhoneTitle="Telefone"
          // // fields :number
          titleInputPhoneNumber="Telefone"
          inputMaskPhoneNumber="+99 (999) 9 9999-9999"
          typeInputPhoneNumber="mask"
          typeInputPhoneNumberFormat="text"
          placeholderInputPhoneNumber="digite seu telefone:"
          iconInputPhoneNumber={() => <icons.PhoneIcon />}
          functionOnChangeInputPhoneNumber={
            functionOnChangeInputPhoneNumberModal
          }
          functionOnEndingPhoneNumberChange={
            functionOnEndingChangePhoneNumberModal
          }
          functionOnEditChangeInputPhoneNumber={
            functionOnEditChangeInputPhoneNumberModal
          }
          // field :description
          // fields
          titleInputPhoneDescription="Descrição"
          typeInputPhoneDescription="text"
          typeInputPhoneDescriptionFormat="text"
          placeholderInputPhoneDescription="Digite a descrição:"
          iconInputPhoneDescription={() => <icons.UserListIcon />}
          functionOnChangeInputPhoneDescription={
            functionOnChangeInputPhoneDescriptionModal
          }
          functionOnEndingPhoneDescriptionChange={
            functionOnEndingChangePhoneDescriptionModal
          }
          // // field addresses
          // addresses
          areaInputAddressesTitle="Endereço"
          functionOnClickAddAddresses={functionOnClickAddAddressesModal}
          functionOnClickRemoveAddresses={functionOnClickRemoveAddressesModal}
          // fields : addresses : zipcode
          titleInputAddressesZipCode="C.E.P"
          typeInputAddressesZipCode="mask"
          typeInputAddressesZipCodeFormat="text"
          placeholderInputAddressesZipCode="digite seu cep"
          inputMaskAddressesZipCode="99.999-999"
          functionOnChangeInputAddressesZipCode={
            functionOnChangeInputAddressesZipCodeModal
          }
          functionOnEndingChangeAddressesZipCode={
            functionOnEndingChangeAddressesZipCodeModal
          }
          // fields : addresses : number
          titleInputAddressesNumber="Número"
          placeholderInputAddressesNumber="digite seu número:"
          functionOnChangeInputAddressesNumber={
            functionOnChangeInputAddressesNumberModal
          }
          functionOnEndingChangeAddressesNumber={
            functionOnEndingChangeAddressesNumberModal
          }
          // fields : addresses : name
          titleInputAddressesName="Endereço"
          placeholderInputAddressesName="digite seu endereço:"
          functionOnChangeInputAddressesName={
            functionOnChangeInputAddressesNameModal
          }
          functionOnEndingChangeAddressesName={
            functionOnEndingChangeAddressesNameModal
          }
          // fields : addresses : neighborhood
          titleInputAddressesNeighborhood="Logradouro"
          placeholderInputAddressesNeighborhood="digite seu logradouro"
          functionOnChangeInputAddressesNeighborhood={
            functionOnChangeInputAddressesNeighborhoodModal
          }
          functionOnEndingChangeAddressesNeighborhood={
            functionOnEndingChangeAddressesNeighborhoodModal
          }
          // fields : addresses : city
          titleInputAddressesCity="Cidade"
          placeholderInputAddressesCity="digite sua cidade:"
          functionOnChangeInputAddressesCity={
            functionOnChangeInputAddressesCityModal
          }
          functionOnEndingChangeAddressesCity={
            functionOnEndingChangeAddressesCityModal
          }
          // fields : addresses : state
          titleInputAddressesState="Estado"
          placeholderInputAddressesState="digite seu estado:"
          functionOnChangeInputAddressesState={
            functionOnChangeInputAddressesStateModal
          }
          functionOnEndingChangeAddressesState={
            functionOnEndingChangeAddressesStateModal
          }
          // fields : addresses : country
          titleInputAddressesCountry="País"
          placeholderInputAddressesCountry="Digite seu pais:"
          functionOnChangeInputAddressesCountry={
            functionOnChangeInputAddressesCountryModal
          }
          functionOnEndingChangeAddressesCountry={
            functionOnEndingChangeAddressesCountryModal
          }
          // button save
          titleButtonSave={titleButtonSave}
          functionOnClickButtonSave={functionOnClickButtonSave}
          disabledButtonSave={disabledButtonSave}
          iconButtonSave={iconButtonSave}
        />
      </Modal>
      <Row key="index">
        <Column flex={1} header>
          <AreaIcons>
            {infoTable[0].options[0].select ? (
              <IconSquareAllSelect onClick={() => functionSelect(0, false)} />
            ) : (
              <IconSquareUnselect onClick={() => functionSelect(0, true)} />
            )}
          </AreaIcons>
          <AreaInfo align="center">
            <Info>Ações</Info>
          </AreaInfo>
          <AreaIcons>
            {infoTable[0].options[0].select ? (
              <IconDelete onClick={functionDeleteSelect} />
            ) : null}
          </AreaIcons>
        </Column>
        {infoTable[0].options.map(option => (
          <Column flex={option.length} header select={option.select}>
            <AreaInfo
              align={option.align}
              pointer
              onClick={functionOrderOption}
            >
              <Info>{option.name}</Info>
              {option.type === 'number'
                ? functionSelectFilterNumber(option.select)
                : functionSelectFilterAlpha(order)}
            </AreaInfo>
          </Column>
        ))}
      </Row>
      {infoTable.map((element, index) => {
        if (index !== 0) {
          const { name, lastname } = element;
          return (
            <RowBody key={index.toString()}>
              <ColumnBody flex={1} select={element.select}>
                <AreaActionsIcons>
                  <AreaIcons>
                    {element.select ? (
                      <IconSquareSelect
                        onClick={() => functionSelect(element.id, false)}
                      />
                    ) : (
                      <IconSquareUnselect
                        onClick={() => functionSelect(element.id, true)}
                      />
                    )}
                  </AreaIcons>
                  <AreaIcons />
                  <AreaIcons>
                    <IconDelete
                      onClick={() => functionDeleteDirect(element.id)}
                    />
                  </AreaIcons>
                </AreaActionsIcons>
              </ColumnBody>
              <ColumnBody
                flex={3}
                select={element.select}
                onClick={() => functionViewRow(index)}
              >
                <AreaTable>
                  <Info>{`${name.charAt(0).toUpperCase() +
                    name.slice(1)} ${lastname.charAt(0).toUpperCase() +
                    lastname.slice(1)}`}</Info>
                </AreaTable>
              </ColumnBody>
            </RowBody>
          );
        }
        return null;
      })}
    </AreaTable>
  );
}
TableBody.propTypes = {
  infoTable: PropTypes.arrayOf(PropTypes.obj),
  functionSelect: PropTypes.func,
  functionDeleteSelect: PropTypes.func,
  functionOrderOption: PropTypes.func,
  functionViewRow: PropTypes.func,
  functionClosedModal: PropTypes.func,
  order: PropTypes.bool,
  visibleModal: PropTypes.bool,
  contact: PropTypes.objectOf(PropTypes.any),
  functionOnChangeInputNameModal: PropTypes.func,
  functionOnEndingChangeNameModal: PropTypes.func,
  functionOnClickAddPhoneModal: PropTypes.func,
  functionOnClickRemovePhoneModal: PropTypes.func,
  // Modal Function Change : name
  functionOnEditChangeInputNameModal: PropTypes.func,
  // Modal Function Change : lastname
  functionOnChangeInputLastnameModal: PropTypes.func,
  functionOnEndingChangeLastnameModal: PropTypes.func,
  functionOnEditChangeInputLastnameModal: PropTypes.func,
  // Modal Function Change : e-mail
  functionOnChangeInputEmailModal: PropTypes.func,
  functionOnEndingChangeEmailModal: PropTypes.func,
  functionOnEditChangeInputEmailModal: PropTypes.func,
  // Modal Function Change : phone : number
  functionOnChangeInputPhoneNumberModal: PropTypes.func,
  functionOnEndingChangePhoneNumberModal: PropTypes.func,
  functionOnEditChangeInputPhoneNumberModal: PropTypes.func,
  // Modal Function Change : phone : description
  functionOnChangeInputPhoneDescriptionModal: PropTypes.func,
  functionOnEndingChangePhoneDescriptionModal: PropTypes.func,
  // Modal Function Change : address : add / Remove
  functionOnClickAddAddressesModal: PropTypes.func,
  functionOnClickRemoveAddressesModal: PropTypes.func,
  //= ==============
  // Modal Function Change name
  functionOnChangeInputAddressesNameModal: PropTypes.func,
  functionOnEndingChangeAddressesNameModal: PropTypes.func,
  // Modal Functio Change Number
  functionOnChangeInputAddressesNumberModal: PropTypes.func,
  functionOnEndingChangeAddressesNumberModal: PropTypes.func,
  // Modal Function Change
  functionOnChangeInputAddressesNeighborhoodModal: PropTypes.func,
  functionOnEndingChangeAddressesNeighborhoodModal: PropTypes.func,
  // Modal Function Change
  functionOnChangeInputAddressesCityModal: PropTypes.func,
  functionOnEndingChangeAddressesCityModal: PropTypes.func,
  // Modal Function Change
  functionOnChangeInputAddressesStateModal: PropTypes.func,
  functionOnEndingChangeAddressesStateModal: PropTypes.func,
  // Modal Function Change
  functionOnChangeInputAddressesCountryModal: PropTypes.func,
  functionOnEndingChangeAddressesCountryModal: PropTypes.func,
  // Modal Function Change
  functionOnChangeInputAddressesZipCodeModal: PropTypes.func,
  functionOnEndingChangeAddressesZipCodeModal: PropTypes.func,
  titleButtonSave: PropTypes.string,
  functionOnClickButtonSave: PropTypes.func,
  disabledButtonSave: PropTypes.bool,
  iconButtonSave: PropTypes.func,
  functionDeleteDirect: PropTypes.func,
};
TableBody.defaultProps = {
  infoTable: [
    {
      options: [
        {
          name: 'Nome',
          type: 'alpha',
          select: false,
          length: 3,
          align: 'flex-start',
        },
      ],
    },
    {
      name: 'Anderson',
      email: 'Anderson@gmail.com',
    },
    {
      name: 'Andréia',
      email: 'Andreia@gmail.com',
    },
  ],
  functionSelect: () => {},
  functionClosedModal: () => {},
  functionDeleteSelect: () => {},
  functionDeleteDirect: () => {},
  functionOrderOption: () => {},
  functionViewRow: () => {},
  visibleModal: false,
  order: true,
  contact: {},
  functionOnChangeInputNameModal: () => {},
  functionOnEndingChangeNameModal: () => {},
  functionOnClickAddPhoneModal: () => {},
  functionOnClickRemovePhoneModal: () => {},

  functionOnEditChangeInputNameModal: () => {},
  // Modal Function Change : lastname
  functionOnChangeInputLastnameModal: () => {},
  functionOnEndingChangeLastnameModal: () => {},
  functionOnEditChangeInputLastnameModal: () => {},
  // Modal Function Change : e-mail
  functionOnChangeInputEmailModal: () => {},
  functionOnEndingChangeEmailModal: () => {},
  functionOnEditChangeInputEmailModal: () => {},
  // Modal Function Change : phone : number
  functionOnChangeInputPhoneNumberModal: () => {},
  functionOnEndingChangePhoneNumberModal: () => {},
  functionOnEditChangeInputPhoneNumberModal: () => {},
  // Modal Function Change : phone : description
  functionOnChangeInputPhoneDescriptionModal: () => {},
  functionOnEndingChangePhoneDescriptionModal: () => {},
  // Modal Function Change : address : add / Remove
  functionOnClickAddAddressesModal: () => {},
  functionOnClickRemoveAddressesModal: () => {},
  //= ==============
  // Modal Function Change name
  functionOnChangeInputAddressesNameModal: () => {},
  functionOnEndingChangeAddressesNameModal: () => {},
  // Modal Functio Change Number
  functionOnChangeInputAddressesNumberModal: () => {},
  functionOnEndingChangeAddressesNumberModal: () => {},
  // Modal Function Change
  functionOnChangeInputAddressesNeighborhoodModal: () => {},
  functionOnEndingChangeAddressesNeighborhoodModal: () => {},
  // Modal Function Change
  functionOnChangeInputAddressesCityModal: () => {},
  functionOnEndingChangeAddressesCityModal: () => {},
  // Modal Function Change
  functionOnChangeInputAddressesStateModal: () => {},
  functionOnEndingChangeAddressesStateModal: () => {},
  // Modal Function Change
  functionOnChangeInputAddressesCountryModal: () => {},
  functionOnEndingChangeAddressesCountryModal: () => {},
  // Modal Function Change
  functionOnChangeInputAddressesZipCodeModal: () => {},
  functionOnEndingChangeAddressesZipCodeModal: () => {},
  //= =======
  titleButtonSave: '',
  functionOnClickButtonSave: () => {},
  disabledButtonSave: false,
  iconButtonSave: () => {},
};
