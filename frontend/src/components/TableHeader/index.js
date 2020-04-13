import React from 'react';
import PropTypes from 'prop-types';
import ModalRegister from '../ModalRegister';
import {
  AreaTitleSearchTable,
  Modal,
  AreaItensTable,
  AreaSearchAdd,
  TitleList,
  IconSearch,
  AreaIcon,
  AreaIconClear,
  AreaInputSearch,
  SearchInput,
  IconClean,
  IconPlus,
  AreaIconAdd,
} from './styles';
import { icons } from '../../styles';

export default function TableHeader({
  title,
  titleHeaderModal,
  // inputs-name
  titleInputNameModal,
  typeInputNameModal,
  typeInputNameFormatModal,
  placeholderInputNameModal,
  disabledInputNameModal,
  iconInputNameModal,
  functionOnChangeInputNameModal,
  functionOnEndingChangeNameModal,
  valueInputNameModal,
  errorInputNameModal,
  // inputs-lastname
  titleInputLastnameModal,
  typeInputLastnameModal,
  typeInputLastnameFormatModal,
  placeholderInputLastnameModal,
  disabledInputLastnameModal,
  iconInputLastnameModal,
  functionOnChangeInputLastnameModal,
  functionOnEndingChangeLastnameModal,
  valueInputLastnameModal,
  errorInputLastnameModal,
  // inputs e-mail
  titleInputEmailModal,
  typeInputEmailModal,
  typeInputEmailFormatModal,
  placeholderInputEmailModal,
  disabledInputEmailModal,
  iconInputEmailModal,
  functionOnChangeInputEmailModal,
  functionOnEndingChangeEmailModal,
  errorInputEmailModal,
  valueInputEmailModal,
  // MOdal:Phone
  areaInputPhoneTitleModal,
  functionOnClickAddPhoneModal,
  functionOnClickRemovePhoneModal,
  // Modal : Phone : field
  titleInputPhoneNumberModal,
  typeInputPhoneNumberModal,
  inputMaskPhoneNumberModal,
  typeInputPhoneNumberFormatModal,
  placeholderInputPhoneNumberModal,
  disabledInputPhoneNumberModal,
  iconInputPhoneNumberModal,
  functionOnChangeInputPhoneNumberModal,
  functionOnEndingChangePhoneNumberModal,
  arrayPhonesModal,
  // Modal : Phone : field
  titleInputPhoneDescriptionModal,
  typeInputPhoneDescriptionModal,
  typeInputPhoneDescriptionFormatModal,
  placeholderInputPhoneDescriptionModal,
  disabledInputPhoneDescriptionModal,
  iconInputPhoneDescriptionModal,
  functionOnChangeInputPhoneDescriptionModal,
  functionOnEndingChangePhoneDescriptionModal,
  errorInputPhoneDescriptionModal,
  valueInputPhoneDescriptionModal,
  // Modal : fields :
  areaInputAddressesTitleModal,
  functionOnClickAddAddressesModal,
  functionOnClickRemoveAddressesModal,
  // Modal : fields: register :zipCode
  titleInputAddressesZipCodeModal,
  typeInputMaskAddressesZipCodeModal,
  typeInputAddressesZipCodeFormatModal,
  placeholderAddressesZipCodeModal,
  disabledInputAddressesesZipCodeModal,
  iconInputAddressesZipCodeModal,
  inputMaskAddressesZipCodeModal,
  functionOnChangeInputAddressesZipCodeModal,
  functionOnEndingChangeAddressesZipCodeModal,
  // Modal :fields : register :number
  titleInputAddressesNumberModal,
  typeInputMaskAddressesNumberModal,
  typeInputAddressesNumberFormatModal,
  placeholderAddressesNumberModal,
  disabledInputAddressesesNumberModal,
  iconInputAddressesNumberModal,
  functionOnChangeInputAddressesNumberModal,
  functionOnEndingChangeAddressesNumberModal,
  // Modal :fields : register :name
  titleInputAddressesNameModal,
  typeInputMaskAddressesNameModal,
  typeInputAddressesNameFormatModal,
  placeholderAddressesNameModal,
  disabledInputAddressesesNameModal,
  iconInputAddressesNameModal,
  functionOnChangeInputAddressesNameModal,
  functionOnEndingChangeAddressesNameModal,
  // Modal :fields : register :beihoord
  titleInputAddressesNeighborhoodModal,
  typeInputMaskAddressesNeighborhoodModal,
  typeInputAddressesNeighborhoodFormatModal,
  placeholderAddressesNeighborhoodModal,
  disabledInputAddressesesNeighborhoodModal,
  iconInputAddressesNeighborhoodModal,
  functionOnChangeInputAddressesNeighborhoodModal,
  functionOnEndingChangeAddressesNeighborhoodModal,
  // Modal :fields : register :city
  titleInputAddressesCityModal,
  typeInputMaskAddressesCityModal,
  typeInputAddressesCityFormatModal,
  placeholderAddressesCityModal,
  disabledInputAddressesesCityModal,
  iconInputAddressesCityModal,
  functionOnChangeInputAddressesCityModal,
  functionOnEndingChangeAddressesCityModal,
  // Modal :fields : register :state
  titleInputAddressesStateModal,
  typeInputMaskAddressesStateModal,
  typeInputAddressesStateFormatModal,
  placeholderAddressesStateModal,
  disabledInputAddressesesStateModal,
  iconInputAddressesStateModal,
  functionOnChangeInputAddressesStateModal,
  functionOnEndingChangeAddressesStateModal,
  // Modal :fields : register :state
  titleInputAddressesCountryModal,
  typeInputMaskAddressesCountryModal,
  typeInputAddressesCountryFormatModal,
  placeholderAddressesCountryModal,
  disabledInputAddressesesCountryModal,
  iconInputAddressesCountryModal,
  functionOnChangeInputAddressesCountryModal,
  functionOnEndingChangeAddressesCountryModal,

  //= ============
  placeholderInputSearch,
  functionOnChange,
  valueSearch,
  functionEndEditing,
  functionOnClickClear,
  functionModalClosed,
  functionModalOpen,
  visibleModal,
  options,
}) {
  return (
    <AreaTitleSearchTable>
      <Modal visible={visibleModal}>
        <ModalRegister
          titleHeader={titleHeaderModal}
          functionOnClick={functionModalClosed}
          // input:name
          titleInputName={titleInputNameModal}
          typeInputName={typeInputNameModal}
          typeInputNameFormat={typeInputNameFormatModal}
          placeholderInputName={placeholderInputNameModal}
          disabledInputName={disabledInputNameModal}
          iconInputName={iconInputNameModal}
          functionOnChangeInputName={functionOnChangeInputNameModal}
          functionOnEndingNameChange={functionOnEndingChangeNameModal}
          valueInputName={valueInputNameModal}
          errorInputName={errorInputNameModal}
          // input:LasName
          titleInputLastname={titleInputLastnameModal}
          typeInputLastname={typeInputLastnameModal}
          typeInputLastnameFormat={typeInputLastnameFormatModal}
          placeholderInputLastname={placeholderInputLastnameModal}
          disabledInputLastname={disabledInputLastnameModal}
          iconInputLastname={iconInputLastnameModal}
          functionOnChangeInputLastname={functionOnChangeInputLastnameModal}
          functionOnEndingLastnameChange={functionOnEndingChangeLastnameModal}
          valueInputLastname={valueInputLastnameModal}
          errorInputLastname={errorInputLastnameModal}
          // email
          titleInputEmail={titleInputEmailModal}
          typeInputEmail={typeInputEmailModal}
          typeInputEmailFormat={typeInputEmailFormatModal}
          placeholderInputEmail={placeholderInputEmailModal}
          disabledInputEmail={disabledInputEmailModal}
          iconInputEmail={iconInputEmailModal}
          functionOnChangeInputEmail={functionOnChangeInputEmailModal}
          functionOnEndingEmailChange={functionOnEndingChangeEmailModal}
          valueInputEmail={valueInputEmailModal}
          errorInputEmail={errorInputEmailModal}
          // Phone
          areaInputPhoneTitle={areaInputPhoneTitleModal}
          functionOnClickAddPhone={functionOnClickAddPhoneModal}
          functionOnClickRemovePhone={functionOnClickRemovePhoneModal}
          // fields :number
          titleInputPhoneNumber={titleInputPhoneNumberModal}
          inputMaskPhoneNumber={inputMaskPhoneNumberModal}
          typeInputPhoneNumber={typeInputPhoneNumberModal}
          typeInputPhoneNumberFormat={typeInputPhoneNumberFormatModal}
          placeholderInputPhoneNumber={placeholderInputPhoneNumberModal}
          disabledInputPhoneNumber={disabledInputPhoneNumberModal}
          iconInputPhoneNumber={iconInputPhoneNumberModal}
          functionOnChangeInputPhoneNumber={
            functionOnChangeInputPhoneNumberModal
          }
          functionOnEndingPhoneNumberChange={
            functionOnEndingChangePhoneNumberModal
          }
          // arrayPhone
          arrayPhones={arrayPhonesModal}
          // field :description
          // fields
          titleInputPhoneDescription={titleInputPhoneDescriptionModal}
          typeInputPhoneDescription={typeInputPhoneDescriptionModal}
          typeInputPhoneDescriptionFormat={typeInputPhoneDescriptionFormatModal}
          placeholderInputPhoneDescription={
            placeholderInputPhoneDescriptionModal
          }
          disabledInputPhoneDescription={disabledInputPhoneDescriptionModal}
          iconInputPhoneDescription={iconInputPhoneDescriptionModal}
          functionOnChangeInputPhoneDescription={
            functionOnChangeInputPhoneDescriptionModal
          }
          functionOnEndingPhoneDescriptionChange={
            functionOnEndingChangePhoneDescriptionModal
          }
          valueInputPhoneDescription={valueInputPhoneDescriptionModal}
          errorInputPhoneDescription={errorInputPhoneDescriptionModal}
          // field addresses
          // addresses
          areaInputAddressesTitle={areaInputAddressesTitleModal}
          functionOnClickAddAddresses={functionOnClickAddAddressesModal}
          functionOnClickRemoveAddresses={functionOnClickRemoveAddressesModal}
          // fields : addresses : zipcode
          titleInputAddressesZipCode={titleInputAddressesZipCodeModal}
          typeInputAddressesZipCode={typeInputMaskAddressesZipCodeModal}
          typeInputAddressesZipCodeFormat={typeInputAddressesZipCodeFormatModal}
          placeholderInputAddressesZipCode={placeholderAddressesZipCodeModal}
          disabledInputAddressesZipCode={disabledInputAddressesesZipCodeModal}
          iconInputAddressesZipCode={iconInputAddressesZipCodeModal}
          inputMaskAddressesZipCode={inputMaskAddressesZipCodeModal}
          functionOnChangeInputAddressesZipCode={
            functionOnChangeInputAddressesZipCodeModal
          }
          functionOnEndingChangeAddressesZipCode={
            functionOnEndingChangeAddressesZipCodeModal
          }
          // fields : addresses : number
          titleInputAddressesNumber={titleInputAddressesNumberModal}
          typeInputAddressesNumber={typeInputMaskAddressesNumberModal}
          typeInputAddressesNumberFormat={typeInputAddressesNumberFormatModal}
          placeholderInputAddressesNumber={placeholderAddressesNumberModal}
          disabledInputAddressesNumber={disabledInputAddressesesNumberModal}
          iconInputAddressesNumber={iconInputAddressesNumberModal}
          functionOnChangeInputAddressesNumber={
            functionOnChangeInputAddressesNumberModal
          }
          functionOnEndingChangeAddressesNumber={
            functionOnEndingChangeAddressesNumberModal
          }
          // fields : addresses : name
          titleInputAddressesName={titleInputAddressesNameModal}
          typeInputAddressesName={typeInputMaskAddressesNameModal}
          typeInputAddressesNameFormat={typeInputAddressesNameFormatModal}
          placeholderInputAddressesName={placeholderAddressesNameModal}
          disabledInputAddressesName={disabledInputAddressesesNameModal}
          iconInputAddressesName={iconInputAddressesNameModal}
          functionOnChangeInputAddressesName={
            functionOnChangeInputAddressesNameModal
          }
          functionOnEndingChangeAddressesName={
            functionOnEndingChangeAddressesNameModal
          }
          // fields : addresses : neighborhood
          titleInputAddressesNeighborhood={titleInputAddressesNeighborhoodModal}
          typeInputAddressesNeighborhood={
            typeInputMaskAddressesNeighborhoodModal
          }
          typeInputAddressesNeighborhoodFormat={
            typeInputAddressesNeighborhoodFormatModal
          }
          placeholderInputAddressesNeighborhood={
            placeholderAddressesNeighborhoodModal
          }
          disabledInputAddressesNeighborhood={
            disabledInputAddressesesNeighborhoodModal
          }
          iconInputAddressesNeighborhood={iconInputAddressesNeighborhoodModal}
          functionOnChangeInputAddressesNeighborhood={
            functionOnChangeInputAddressesNeighborhoodModal
          }
          functionOnEndingChangeAddressesNeighborhood={
            functionOnEndingChangeAddressesNeighborhoodModal
          }
          // fields : addresses : city
          titleInputAddressesCity={titleInputAddressesCityModal}
          typeInputAddressesCity={typeInputMaskAddressesCityModal}
          typeInputAddressesCityFormat={typeInputAddressesCityFormatModal}
          placeholderInputAddressesCity={placeholderAddressesCityModal}
          disabledInputAddressesCity={disabledInputAddressesesCityModal}
          iconInputAddressesCity={iconInputAddressesCityModal}
          functionOnChangeInputAddressesCity={
            functionOnChangeInputAddressesCityModal
          }
          functionOnEndingChangeAddressesCity={
            functionOnEndingChangeAddressesCityModal
          }
          // fields : addresses : state
          titleInputAddressesState={titleInputAddressesStateModal}
          typeInputAddressesState={typeInputMaskAddressesStateModal}
          typeInputAddressesStateFormat={typeInputAddressesStateFormatModal}
          placeholderInputAddressesState={placeholderAddressesStateModal}
          disabledInputAddressesState={disabledInputAddressesesStateModal}
          iconInputAddressesState={iconInputAddressesStateModal}
          functionOnChangeInputAddressesState={
            functionOnChangeInputAddressesStateModal
          }
          functionOnEndingChangeAddressesState={
            functionOnEndingChangeAddressesStateModal
          }
          // fields : addresses : country
          titleInputAddressesCountry={titleInputAddressesCountryModal}
          typeInputAddressesCountry={typeInputMaskAddressesCountryModal}
          typeInputAddressesCountryFormat={typeInputAddressesCountryFormatModal}
          placeholderInputAddressesCountry={placeholderAddressesCountryModal}
          disabledInputAddressesCountry={disabledInputAddressesesCountryModal}
          iconInputAddressesCountry={iconInputAddressesCountryModal}
          functionOnChangeInputAddressesCountry={
            functionOnChangeInputAddressesCountryModal
          }
          functionOnEndingChangeAddressesCountry={
            functionOnEndingChangeAddressesCountryModal
          }
        />
      </Modal>
      <AreaItensTable align="flex-start">
        <TitleList>{title}</TitleList>
      </AreaItensTable>
      <AreaItensTable align="flex-end">
        <AreaSearchAdd>
          <AreaIcon>
            <IconSearch />
          </AreaIcon>
          <AreaInputSearch>
            <SearchInput
              options={options}
              placeholder={placeholderInputSearch}
              onChange={text => functionOnChange(text)}
              value={valueSearch}
              onBlur={functionEndEditing}
              trigger=""
            />
          </AreaInputSearch>
          <AreaIconClear onClick={functionOnClickClear}>
            <IconClean />
          </AreaIconClear>
        </AreaSearchAdd>
        <AreaIconAdd onClick={functionModalOpen}>
          <AreaIcon>
            <IconPlus />
          </AreaIcon>
        </AreaIconAdd>
      </AreaItensTable>
    </AreaTitleSearchTable>
  );
}
TableHeader.propTypes = {
  title: PropTypes.string,
  placeholderInputSearch: PropTypes.string,
  functionOnChange: PropTypes.func,
  valueSearch: PropTypes.string,
  functionEndEditing: PropTypes.func,
  functionOnClickClear: PropTypes.func,
  functionModalClosed: PropTypes.func,
  functionModalOpen: PropTypes.func,
  visibleModal: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string),
  // Modal
  titleHeaderModal: PropTypes.string,
  // inputs-name
  titleInputNameModal: PropTypes.string,
  typeInputNameModal: PropTypes.string,
  typeInputNameFormatModal: PropTypes.string,
  placeholderInputNameModal: PropTypes.string,
  disabledInputNameModal: PropTypes.bool,
  functionOnChangeInputNameModal: PropTypes.func,
  functionOnEndingChangeNameModal: PropTypes.func,
  valueInputNameModal: PropTypes.string,
  errorInputNameModal: PropTypes.bool,
  iconInputNameModal: PropTypes.func,
  // inpus-l.astname
  titleInputLastnameModal: PropTypes.string,
  typeInputLastnameModal: PropTypes.string,
  typeInputLastnameFormatModal: PropTypes.string,
  placeholderInputLastnameModal: PropTypes.string,
  disabledInputLastnameModal: PropTypes.bool,
  functionOnChangeInputLastnameModal: PropTypes.func,
  functionOnEndingChangeLastnameModal: PropTypes.func,
  valueInputLastnameModal: PropTypes.string,
  iconInputLastnameModal: PropTypes.func,
  errorInputLastnameModal: PropTypes.bool,
  // inputs-e-mail
  titleInputEmailModal: PropTypes.string,
  typeInputEmailModal: PropTypes.string,
  typeInputEmailFormatModal: PropTypes.string,
  placeholderInputEmailModal: PropTypes.string,
  disabledInputEmailModal: PropTypes.bool,
  functionOnChangeInputEmailModal: PropTypes.func,
  functionOnEndingChangeEmailModal: PropTypes.func,
  valueInputEmailModal: PropTypes.string,
  errorInputEmailModal: PropTypes.bool,
  iconInputEmailModal: PropTypes.func,
  // phone
  areaInputPhoneTitleModal: PropTypes.string,
  functionOnClickAddPhoneModal: PropTypes.func,
  functionOnClickRemovePhoneModal: PropTypes.func,
  // inputs-phone
  titleInputPhoneNumberModal: PropTypes.string,
  typeInputPhoneNumberModal: PropTypes.string,
  typeInputPhoneNumberFormatModal: PropTypes.string,
  inputMaskPhoneNumberModal: PropTypes.string,
  placeholderInputPhoneNumberModal: PropTypes.string,
  disabledInputPhoneNumberModal: PropTypes.bool,
  functionOnChangeInputPhoneNumberModal: PropTypes.func,
  functionOnEndingChangePhoneNumberModal: PropTypes.func,
  arrayPhonesModal: PropTypes.arrayOf(PropTypes.object),
  iconInputPhoneNumberModal: PropTypes.func,
  // inputs-phone
  titleInputPhoneDescriptionModal: PropTypes.string,
  typeInputPhoneDescriptionModal: PropTypes.string,
  typeInputPhoneDescriptionFormatModal: PropTypes.string,
  placeholderInputPhoneDescriptionModal: PropTypes.string,
  disabledInputPhoneDescriptionModal: PropTypes.bool,
  functionOnChangeInputPhoneDescriptionModal: PropTypes.func,
  functionOnEndingChangePhoneDescriptionModal: PropTypes.func,
  valueInputPhoneDescriptionModal: PropTypes.string,
  errorInputPhoneDescriptionModal: PropTypes.bool,
  iconInputPhoneDescriptionModal: PropTypes.func,
  // MOdal : address : fields
  areaInputAddressesTitleModal: PropTypes.string,
  functionOnClickAddAddressesModal: PropTypes.func,
  functionOnClickRemoveAddressesModal: PropTypes.func,
  // Modal : address : fields : zipcode
  titleInputAddressesZipCodeModal: PropTypes.string,
  typeInputMaskAddressesZipCodeModal: PropTypes.string,
  typeInputAddressesZipCodeFormatModal: PropTypes.string,
  placeholderAddressesZipCodeModal: PropTypes.string,
  disabledInputAddressesesZipCodeModal: PropTypes.bool,
  iconInputAddressesZipCodeModal: PropTypes.func,
  inputMaskAddressesZipCodeModal: PropTypes.string,
  functionOnChangeInputAddressesZipCodeModal: PropTypes.func,
  functionOnEndingChangeAddressesZipCodeModal: PropTypes.func,
  // Modal : addresses : fields : Number
  titleInputAddressesNumberModal: PropTypes.string,
  typeInputMaskAddressesNumberModal: PropTypes.string,
  typeInputAddressesNumberFormatModal: PropTypes.string,
  placeholderAddressesNumberModal: PropTypes.string,
  disabledInputAddressesesNumberModal: PropTypes.bool,
  iconInputAddressesNumberModal: PropTypes.func,
  functionOnChangeInputAddressesNumberModal: PropTypes.func,
  functionOnEndingChangeAddressesNumberModal: PropTypes.func,
  // Modal : addresses : fields : Name
  titleInputAddressesNameModal: PropTypes.string,
  typeInputMaskAddressesNameModal: PropTypes.string,
  typeInputAddressesNameFormatModal: PropTypes.string,
  placeholderAddressesNameModal: PropTypes.string,
  disabledInputAddressesesNameModal: PropTypes.bool,
  iconInputAddressesNameModal: PropTypes.func,
  functionOnChangeInputAddressesNameModal: PropTypes.func,
  functionOnEndingChangeAddressesNameModal: PropTypes.func,
  // Modal : addresses : fields : Neightbor
  titleInputAddressesNeighborhoodModal: PropTypes.string,
  typeInputMaskAddressesNeighborhoodModal: PropTypes.string,
  typeInputAddressesNeighborhoodFormatModal: PropTypes.string,
  placeholderAddressesNeighborhoodModal: PropTypes.string,
  disabledInputAddressesesNeighborhoodModal: PropTypes.bool,
  iconInputAddressesNeighborhoodModal: PropTypes.func,
  functionOnChangeInputAddressesNeighborhoodModal: PropTypes.func,
  functionOnEndingChangeAddressesNeighborhoodModal: PropTypes.func,
  // Modal : addresses : fields : city
  titleInputAddressesCityModal: PropTypes.string,
  typeInputMaskAddressesCityModal: PropTypes.string,
  typeInputAddressesCityFormatModal: PropTypes.string,
  placeholderAddressesCityModal: PropTypes.string,
  disabledInputAddressesesCityModal: PropTypes.bool,
  iconInputAddressesCityModal: PropTypes.func,
  functionOnChangeInputAddressesCityModal: PropTypes.func,
  functionOnEndingChangeAddressesCityModal: PropTypes.func,
  // Modal : addresses : fields : state
  titleInputAddressesStateModal: PropTypes.string,
  typeInputMaskAddressesStateModal: PropTypes.string,
  typeInputAddressesStateFormatModal: PropTypes.string,
  placeholderAddressesStateModal: PropTypes.string,
  disabledInputAddressesesStateModal: PropTypes.bool,
  iconInputAddressesStateModal: PropTypes.func,
  functionOnChangeInputAddressesStateModal: PropTypes.func,
  functionOnEndingChangeAddressesStateModal: PropTypes.func,
  // Modal : addresses : fields : country
  titleInputAddressesCountryModal: PropTypes.string,
  typeInputMaskAddressesCountryModal: PropTypes.string,
  typeInputAddressesCountryFormatModal: PropTypes.string,
  placeholderAddressesCountryModal: PropTypes.string,
  disabledInputAddressesesCountryModal: PropTypes.bool,
  iconInputAddressesCountryModal: PropTypes.func,
  functionOnChangeInputAddressesCountryModal: PropTypes.func,
  functionOnEndingChangeAddressesCountryModal: PropTypes.func,
};
TableHeader.defaultProps = {
  title: 'título da tabela',
  placeholderInputSearch: 'Pesquisar:',
  functionOnChange: () => {},
  valueSearch: '',
  functionEndEditing: () => {},
  functionOnClickClear: () => {},
  functionModalClosed: () => {},
  functionModalOpen: () => {},
  visibleModal: false,
  options: [''],
  titleHeaderModal: 'title header Modal',
  // inputs-name
  titleInputNameModal: 'title input name',
  typeInputNameModal: 'text',
  typeInputNameFormatModal: 'text',
  placeholderInputNameModal: 'placeholder name:',
  disabledInputNameModal: true,
  functionOnChangeInputNameModal: () => {},
  functionOnEndingChangeNameModal: () => {},
  valueInputNameModal: '',
  errorInputNameModal: false,
  iconInputNameModal: () => <icons.IconDefault />,
  // inputs-lastname
  titleInputLastnameModal: 'title input lastname',
  typeInputLastnameModal: 'text',
  typeInputLastnameFormatModal: 'text',
  placeholderInputLastnameModal: 'placeholder lastname:',
  disabledInputLastnameModal: true,
  functionOnChangeInputLastnameModal: () => {},
  functionOnEndingChangeLastnameModal: () => {},
  valueInputLastnameModal: '',
  errorInputLastnameModal: false,
  iconInputLastnameModal: () => <icons.IconDefault />,
  // inputs-email
  titleInputEmailModal: 'title input e-mail',
  typeInputEmailModal: 'text',
  typeInputEmailFormatModal: 'text',
  placeholderInputEmailModal: 'placeholder e-mail:',
  disabledInputEmailModal: true,
  functionOnChangeInputEmailModal: () => {},
  functionOnEndingChangeEmailModal: () => {},
  valueInputEmailModal: '',
  errorInputEmailModal: false,
  iconInputEmailModal: () => <icons.IconDefault />,
  // inputs-phone
  areaInputPhoneTitleModal: 'Title Area Inputs Phone',
  functionOnClickAddPhoneModal: () => {},
  functionOnClickRemovePhoneModal: () => {},
  // inputs-number
  titleInputPhoneNumberModal: 'title input e-mail',
  typeInputPhoneNumberModal: 'text',
  typeInputPhoneNumberFormatModal: 'text',
  inputMaskPhoneNumberModal: '+99 (999) 9 9999-9999',
  placeholderInputPhoneNumberModal: 'placeholder e-mail:',
  disabledInputPhoneNumberModal: true,
  functionOnChangeInputPhoneNumberModal: () => {},
  functionOnEndingChangePhoneNumberModal: () => {},
  arrayPhonesModal: [
    {
      numberValue: '',
      descriptionValue: '',
      numberError: false,
      descriptionError: false,
    },
  ],
  iconInputPhoneNumberModal: () => <icons.IconDefault />,
  // inputs-description
  titleInputPhoneDescriptionModal: 'title input e-mail',
  typeInputPhoneDescriptionModal: 'text',
  typeInputPhoneDescriptionFormatModal: 'text',
  placeholderInputPhoneDescriptionModal: 'placeholder e-mail:',
  disabledInputPhoneDescriptionModal: true,
  functionOnChangeInputPhoneDescriptionModal: () => {},
  functionOnEndingChangePhoneDescriptionModal: () => {},
  valueInputPhoneDescriptionModal: '',
  errorInputPhoneDescriptionModal: false,
  iconInputPhoneDescriptionModal: () => <icons.IconDefault />,
  // Addrress
  areaInputAddressesTitleModal: 'Area Input Title Addresses',
  functionOnClickAddAddressesModal: () => {},
  functionOnClickRemoveAddressesModal: () => {},
  // Address : modal : fields : zipcode
  // Modal : address : fields : zipcode
  titleInputAddressesZipCodeModal: 'title input zipcode',
  typeInputMaskAddressesZipCodeModal: 'mask',
  typeInputAddressesZipCodeFormatModal: 'text',
  placeholderAddressesZipCodeModal: 'palceholder input zipcode',
  disabledInputAddressesesZipCodeModal: true,
  iconInputAddressesZipCodeModal: () => <icons.IconDefault />,
  inputMaskAddressesZipCodeModal: '99.999-999',
  functionOnChangeInputAddressesZipCodeModal: () => {},
  functionOnEndingChangeAddressesZipCodeModal: () => {},
  // Modal : address : fields : number
  titleInputAddressesNumberModal: 'title input number',
  typeInputMaskAddressesNumberModal: 'text',
  typeInputAddressesNumberFormatModal: 'text',
  placeholderAddressesNumberModal: 'placeolder input number',
  disabledInputAddressesesNumberModal: true,
  iconInputAddressesNumberModal: () => <icons.IconDefault />,
  functionOnChangeInputAddressesNumberModal: () => {},
  functionOnEndingChangeAddressesNumberModal: () => {},
  // Modal : address : fields : number
  titleInputAddressesNameModal: 'title input Name',
  typeInputMaskAddressesNameModal: 'text',
  typeInputAddressesNameFormatModal: 'text',
  placeholderAddressesNameModal: 'placeolder input Name',
  disabledInputAddressesesNameModal: true,
  iconInputAddressesNameModal: () => <icons.IconDefault />,
  functionOnChangeInputAddressesNameModal: () => {},
  functionOnEndingChangeAddressesNameModal: () => {},
  // Modal : address : fields : number
  titleInputAddressesNeighborhoodModal: 'title input Neighborhood',
  typeInputMaskAddressesNeighborhoodModal: 'text',
  typeInputAddressesNeighborhoodFormatModal: 'text',
  placeholderAddressesNeighborhoodModal: 'placeolder input Neighborhood',
  disabledInputAddressesesNeighborhoodModal: true,
  iconInputAddressesNeighborhoodModal: () => <icons.IconDefault />,
  functionOnChangeInputAddressesNeighborhoodModal: () => {},
  functionOnEndingChangeAddressesNeighborhoodModal: () => {},
  // Modal : address : fields : number
  titleInputAddressesCityModal: 'title input City',
  typeInputMaskAddressesCityModal: 'text',
  typeInputAddressesCityFormatModal: 'text',
  placeholderAddressesCityModal: 'placeolder input City',
  disabledInputAddressesesCityModal: true,
  iconInputAddressesCityModal: () => <icons.IconDefault />,
  functionOnChangeInputAddressesCityModal: () => {},
  functionOnEndingChangeAddressesCityModal: () => {},
  // Modal : address : fields : number
  titleInputAddressesStateModal: 'title input State',
  typeInputMaskAddressesStateModal: 'text',
  typeInputAddressesStateFormatModal: 'text',
  placeholderAddressesStateModal: 'placeolder input State',
  disabledInputAddressesesStateModal: true,
  iconInputAddressesStateModal: () => <icons.IconDefault />,
  functionOnChangeInputAddressesStateModal: () => {},
  functionOnEndingChangeAddressesStateModal: () => {},
  // Modal : address : fields : number
  titleInputAddressesCountryModal: 'title input Country',
  typeInputMaskAddressesCountryModal: 'text',
  typeInputAddressesCountryFormatModal: 'text',
  placeholderAddressesCountryModal: 'placeolder input Country',
  disabledInputAddressesesCountryModal: true,
  iconInputAddressesCountryModal: () => <icons.IconDefault />,
  functionOnChangeInputAddressesCountryModal: () => {},
  functionOnEndingChangeAddressesCountryModal: () => {},
};
