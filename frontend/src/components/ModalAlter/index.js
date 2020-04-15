import React from 'react';
import PropTypes from 'prop-types';
import {
  AreaModal,
  AreaHeader,
  AreaTitle,
  AreaIcon,
  TitleHeader,
  AreaIconClosed,
  AreaInputTitle,
  AreaTitleInput,
  AreaInputs,
  TitleInput,
  AreaInputsMultiples,
  AreaTitleInputsMultiples,
  TitleInputsMultiple,
  AreaUnderline,
  Underline,
  AreaIconPlusMultiple,
  AreaIconPlus,
  AreaIconRemove,
  AreaInputRemove,
  AreaIconRemoveAddress,
  AreaButtonSave,
} from './styles';
import InputIcon from '../InputIcon';
import ButtonIcon from '../ButtonIcon';
import { icons, colors } from '../../styles';
import Loader from '../Loader';

export default function ModalRegister({
  titleHeader,
  loading,
  infoUser,
  functionOnClick,
  titleInputName,
  typeInputName,
  typeInputNameFormat,
  placeholderInputName,
  disabledInputName,
  functionOnChangeInputName,
  functionOnEndingChangeName,
  valueInputName,
  errorInputName,
  iconInputName,
  titleInputLastname,
  typeInputLastname,
  typeInputLastnameFormat,
  placeholderInputLastname,
  disabledInputLastname,
  functionOnChangeInputLastname,
  functionOnEndingChangeLastname,
  functionOnEditChangeInputLastname,
  valueInputLastname,
  errorInputLastname,
  iconInputLastname,
  titleInputEmail,
  typeInputEmail,
  typeInputEmailFormat,
  placeholderInputEmail,
  disabledInputEmail,
  functionOnEditChangeInputEmail,
  functionOnChangeInputEmail,
  functionOnEndingChangeEmail,
  valueInputEmail,
  errorInputEmail,
  iconInputEmail,
  functionOnClickAddPhone,
  functionOnClickRemovePhone,
  areaInputPhoneTitle,
  arrayPhones,
  titleInputPhoneNumber,
  typeInputPhoneNumber,
  typeInputPhoneNumberFormat,
  inputMaskPhoneNumber,
  placeholderInputPhoneNumber,
  disabledInputPhoneNumber,
  functionOnChangeInputPhoneNumber,
  functionOnEndingChangePhoneNumber,
  functionOnEditChangeInputPhoneNumber,
  iconInputPhoneNumber,
  titleInputPhoneDescription,
  typeInputPhoneDescription,
  typeInputPhoneDescriptionFormat,
  placeholderInputPhoneDescription,
  disabledInputPhoneDescription,
  functionOnChangeInputPhoneDescription,
  functionOnEndingChangePhoneDescription,
  arrayAddresses,
  iconInputPhoneDescription,
  // addresses
  areaInputAddressesTitle,
  functionOnClickAddAddresses,
  functionOnClickRemoveAddresses,
  // fields : addresses : zipcode
  titleInputAddressesZipCode,
  typeInputAddressesZipCode,
  typeInputAddressesZipCodeFormat,
  placeholderInputAddressesZipCode,
  disabledInputAddressesZipCode,
  iconInputAddressesZipCode,
  inputMaskAddressesZipCode,
  functionOnChangeInputAddressesZipCode,
  functionOnEndingChangeAddressesZipCode,
  // fields : addresses :number
  titleInputAddressesNumber,
  typeInputAddressesNumber,
  placeholderInputAddressesNumber,
  disabledInputAddressesNumber,
  iconInputAddressesNumber,
  functionOnChangeInputAddressesNumber,
  functionOnEndingChangeAddressesNumber,
  // fields : addresses : name
  titleInputAddressesName,
  typeInputAddressesName,
  placeholderInputAddressesName,
  disabledInputAddressesName,
  iconInputAddressesName,
  functionOnEditChangeInputName,
  functionOnChangeInputAddressesName,
  functionOnEndingChangeAddressesName,
  // fields : addresses : Neighborhood
  titleInputAddressesNeighborhood,
  typeInputAddressesNeighborhood,
  placeholderInputAddressesNeighborhood,
  disabledInputAddressesNeighborhood,
  iconInputAddressesNeighborhood,
  functionOnChangeInputAddressesNeighborhood,
  functionOnEndingChangeAddressesNeighborhood,
  // fields : addresses : city
  titleInputAddressesCity,
  typeInputAddressesCity,
  placeholderInputAddressesCity,
  disabledInputAddressesCity,
  iconInputAddressesCity,
  functionOnChangeInputAddressesCity,
  functionOnEndingChangeAddressesCity,
  // fields : addresses : state
  titleInputAddressesState,
  typeInputAddressesState,
  placeholderInputAddressesState,
  disabledInputAddressesState,
  iconInputAddressesState,
  functionOnChangeInputAddressesState,
  functionOnEndingChangeAddressesState,
  // fields : addresses : state
  titleInputAddressesCountry,
  typeInputAddressesCountry,
  placeholderInputAddressesCountry,
  disabledInputAddressesCountry,
  iconInputAddressesCountry,
  functionOnChangeInputAddressesCountry,
  functionOnEndingChangeAddressesCountry,
  // fields : button
  titleButtonSave,
  functionOnClickButtonSave,
  disabledButtonSave,
  iconButtonSave,
}) {
  console.tron.log(infoUser);
  return (
    <AreaModal>
      <AreaHeader>
        <AreaIcon flex={1}>
          <icons.IconUserEdit color={colors.dark} />
        </AreaIcon>
        <AreaTitle flex={3}>
          <TitleHeader>{titleHeader}</TitleHeader>
        </AreaTitle>
        <AreaIconClosed flex={1} onClick={functionOnClick}>
          <icons.ClosedTimesIcon color={colors.dark} />
        </AreaIconClosed>
      </AreaHeader>
      <AreaInputs>
        <AreaInputTitle>
          <AreaTitleInput>
            <TitleInput>{titleInputName}</TitleInput>
          </AreaTitleInput>
          <InputIcon
            type={typeInputName}
            typeInput={typeInputNameFormat}
            placeholder={placeholderInputName}
            icon={iconInputName}
            disabled={infoUser.nameEditable}
            disabledButton={false}
            value={infoUser.name}
            error={infoUser.nameError}
            button
            functionOnClick={functionOnEditChangeInputName}
            functionOnChange={functionOnChangeInputName}
            functionOnEndingChange={functionOnEndingChangeName}
          />
        </AreaInputTitle>
        <AreaInputTitle>
          <AreaTitleInput>
            <TitleInput>{titleInputLastname}</TitleInput>
          </AreaTitleInput>
          <InputIcon
            button
            type={typeInputLastname}
            typeInput={typeInputLastnameFormat}
            placeholder={placeholderInputLastname}
            disabled={infoUser.lastnameEditable}
            icon={iconInputLastname}
            disabledButton={false}
            error={infoUser.lastnameError}
            value={infoUser.lastname}
            functionOnClick={functionOnEditChangeInputLastname}
            functionOnChange={functionOnChangeInputLastname}
            functionOnEndingChange={functionOnEndingChangeLastname}
          />
        </AreaInputTitle>
      </AreaInputs>
      <AreaInputs>
        <AreaInputTitle>
          <AreaTitleInput>
            <TitleInput>{titleInputEmail}</TitleInput>
          </AreaTitleInput>
          <InputIcon
            button
            disabled={infoUser.emailEditable}
            disabledButton={false}
            error={infoUser.emailError}
            value={infoUser.email}
            type={typeInputEmail}
            typeInput={typeInputEmailFormat}
            placeholder={placeholderInputEmail}
            icon={iconInputEmail}
            functionOnClick={functionOnEditChangeInputEmail}
            functionOnChange={functionOnChangeInputEmail}
            functionOnEndingChange={functionOnEndingChangeEmail}
          />
        </AreaInputTitle>
      </AreaInputs>
      <AreaInputsMultiples>
        <AreaTitleInputsMultiples>
          <TitleInputsMultiple>
            {infoUser.phones.length > 1
              ? `${areaInputPhoneTitle}s`
              : `${areaInputPhoneTitle}`}
          </TitleInputsMultiple>
        </AreaTitleInputsMultiples>
        <AreaIconPlusMultiple>
          <AreaIconPlus flex={1} onClick={functionOnClickAddPhone}>
            <icons.PlusIconAdd
              color={colors.dark}
              aditional={window.screen.width >= 400 ? 2 : -2}
            />
          </AreaIconPlus>
        </AreaIconPlusMultiple>

        {infoUser.phones.map((phone, index) => {
          return (
            <>
              <AreaInputs>
                <AreaInputTitle>
                  <AreaTitleInput>
                    <TitleInput>{titleInputPhoneNumber}</TitleInput>
                  </AreaTitleInput>
                  <InputIcon
                    type={typeInputPhoneNumber}
                    typeInput={typeInputPhoneNumberFormat}
                    placeholder={placeholderInputPhoneNumber}
                    disabled={false}
                    icon={iconInputPhoneNumber}
                    // inputMask={"+99 (999) 9 9999-9999"}
                    inputMask={inputMaskPhoneNumber}
                    functionOnChange={text =>
                      functionOnChangeInputPhoneNumber(text, index)
                    }
                    functionOnEndingChange={functionOnEndingChangePhoneNumber}
                    value={phone.number}
                    error={false}
                  />
                </AreaInputTitle>
                <AreaInputTitle>
                  <AreaTitleInput>
                    <TitleInput>{titleInputPhoneDescription}</TitleInput>
                  </AreaTitleInput>
                  <InputIcon
                    type={typeInputPhoneDescription}
                    typeInput={typeInputPhoneDescriptionFormat}
                    placeholder={placeholderInputPhoneDescription}
                    disabled={false}
                    icon={iconInputPhoneDescription}
                    functionOnChange={text =>
                      functionOnChangeInputPhoneDescription(text, index)
                    }
                    functionOnEndingChange={
                      functionOnEndingChangePhoneDescription
                    }
                    value={phone.description}
                    error={false}
                  />
                </AreaInputTitle>
                <AreaInputRemove>
                  <AreaTitleInput />
                  {index === 0 ? null : (
                    <AreaIconRemove onClick={functionOnClickRemovePhone}>
                      <icons.ClosedTimesIcon color={colors.dark} />
                    </AreaIconRemove>
                  )}
                </AreaInputRemove>
              </AreaInputs>

              <AreaUnderline>
                <Underline />
              </AreaUnderline>
            </>
          );
        })}
      </AreaInputsMultiples>
      <AreaInputsMultiples>
        <AreaTitleInputsMultiples>
          <TitleInputsMultiple>
            {arrayAddresses.length > 1
              ? `${areaInputAddressesTitle}s`
              : `${areaInputAddressesTitle}`}
          </TitleInputsMultiple>
        </AreaTitleInputsMultiples>
        <AreaIconPlusMultiple>
          <AreaIconPlus flex={1} onClick={functionOnClickAddAddresses}>
            <icons.PlusIconAdd
              color={colors.dark}
              aditional={window.screen.width >= 400 ? 2 : -2}
            />
          </AreaIconPlus>
        </AreaIconPlusMultiple>
        {loading ? (
          <Loader />
        ) : (
          <>
            {arrayAddresses.map((address, index) => {
              return (
                <>
                  <AreaInputs>
                    <AreaInputTitle flex={0.2}>
                      <AreaTitleInput>
                        <TitleInput>{titleInputAddressesZipCode}</TitleInput>
                      </AreaTitleInput>
                      <InputIcon
                        typeInput={typeInputAddressesZipCodeFormat}
                        type="mask"
                        placeholder={placeholderInputAddressesZipCode}
                        disabled={false}
                        icon={iconInputAddressesZipCode}
                        inputMask={inputMaskAddressesZipCode}
                        button
                        functionOnChange={text =>
                          functionOnChangeInputAddressesZipCode(text, index)
                        }
                        functionOnEndingChange={() =>
                          functionOnEndingChangeAddressesZipCode(index)
                        }
                        value={address.zipcode}
                        iconExist={false}
                      />
                    </AreaInputTitle>
                    <AreaInputTitle flexPosition>
                      <AreaTitleInput />
                      {index === 0 ? null : (
                        <AreaIconRemoveAddress
                          onClick={functionOnClickRemoveAddresses}
                        >
                          <icons.ClosedTimesIcon color={colors.dark} />
                        </AreaIconRemoveAddress>
                      )}
                    </AreaInputTitle>
                  </AreaInputs>

                  <AreaInputs>
                    <AreaInputTitle flex={2}>
                      <AreaTitleInput>
                        <TitleInput>{titleInputAddressesName}</TitleInput>
                      </AreaTitleInput>
                      <InputIcon
                        type="text"
                        typeInput="text"
                        placeholder={placeholderInputAddressesName}
                        disabled={false}
                        icon={iconInputAddressesName}
                        functionOnChange={text =>
                          functionOnChangeInputAddressesName(text, index)
                        }
                        functionOnEndingChange={
                          functionOnEndingChangeAddressesName
                        }
                        value={address.addressValue}
                        error={address.addressError}
                        iconExist={false}
                      />
                    </AreaInputTitle>
                    <AreaInputTitle>
                      <AreaTitleInput>
                        <TitleInput>{titleInputAddressesNumber}</TitleInput>
                      </AreaTitleInput>
                      <InputIcon
                        type="text"
                        typeInput="text"
                        placeholder={placeholderInputAddressesNumber}
                        disabled={false}
                        icon={iconInputAddressesNumber}
                        functionOnChange={text =>
                          functionOnChangeInputAddressesNumber(text, index)
                        }
                        functionOnEndingChange={
                          functionOnEndingChangeAddressesNumber
                        }
                        value={address.numberValue}
                        error={false}
                        iconExist={false}
                      />
                    </AreaInputTitle>
                  </AreaInputs>

                  <AreaInputs>
                    <AreaInputTitle>
                      <AreaTitleInput>
                        <TitleInput>
                          {titleInputAddressesNeighborhood}
                        </TitleInput>
                      </AreaTitleInput>
                      <InputIcon
                        type="text"
                        typeInput="text"
                        placeholder={placeholderInputAddressesNeighborhood}
                        disabled={false}
                        icon={iconInputAddressesNeighborhood}
                        functionOnChange={text =>
                          functionOnChangeInputAddressesNeighborhood(
                            text,
                            index
                          )
                        }
                        functionOnEndingChange={
                          functionOnEndingChangeAddressesNeighborhood
                        }
                        value={address.neighborhoodValue}
                        error={false}
                        iconExist={false}
                      />
                    </AreaInputTitle>
                    <AreaInputTitle>
                      <AreaTitleInput>
                        <TitleInput>{titleInputAddressesCity}</TitleInput>
                      </AreaTitleInput>
                      <InputIcon
                        type="text"
                        typeInput="text"
                        placeholder={placeholderInputAddressesCity}
                        disabled={false}
                        functionOnChange={text =>
                          functionOnChangeInputAddressesCity(text, index)
                        }
                        functionOnEndingChange={
                          functionOnEndingChangeAddressesCity
                        }
                        value={address.cityValue}
                        error={false}
                        iconExist={false}
                      />
                    </AreaInputTitle>
                  </AreaInputs>

                  <AreaInputs>
                    <AreaInputTitle>
                      <AreaTitleInput>
                        <TitleInput>{titleInputAddressesState}</TitleInput>
                      </AreaTitleInput>
                      <InputIcon
                        type="text"
                        typeInput="text"
                        placeholder={placeholderInputAddressesState}
                        disabled={false}
                        functionOnChange={text =>
                          functionOnChangeInputAddressesState(text, index)
                        }
                        functionOnEndingChange={
                          functionOnEndingChangeAddressesState
                        }
                        value={address.stateValue}
                        error={false}
                        iconExist={false}
                      />
                    </AreaInputTitle>
                    <AreaInputTitle>
                      <AreaTitleInput>
                        <TitleInput>{titleInputAddressesCountry}</TitleInput>
                      </AreaTitleInput>
                      <InputIcon
                        type="text"
                        typeInput="text"
                        placeholder={placeholderInputAddressesCountry}
                        disabled={false}
                        functionOnChange={text =>
                          functionOnChangeInputAddressesCountry(text, index)
                        }
                        functionOnEndingChange={
                          functionOnEndingChangeAddressesCountry
                        }
                        value={address.countryValue}
                        error={false}
                        iconExist={false}
                      />
                    </AreaInputTitle>
                  </AreaInputs>
                  <AreaUnderline>
                    <Underline />
                  </AreaUnderline>
                </>
              );
            })}
          </>
        )}
      </AreaInputsMultiples>
      <AreaButtonSave>
        <ButtonIcon
          title={titleButtonSave}
          functionOnClick={functionOnClickButtonSave}
          disabled={disabledButtonSave}
          icon={iconButtonSave}
        />
      </AreaButtonSave>
    </AreaModal>
  );
}
ModalRegister.propTypes = {
  functionOnClick: PropTypes.func,
  infoUser: PropTypes.objectOf(PropTypes.any),
  titleHeader: PropTypes.string,
  titleInputName: PropTypes.string,
  typeInputName: PropTypes.string,
  typeInputNameFormat: PropTypes.string,
  placeholderInputName: PropTypes.string,
  disabledInputName: PropTypes.bool,
  functionOnChangeInputName: PropTypes.func,
  functionOnEndingChangeName: PropTypes.func,
  valueInputName: PropTypes.string,
  errorInputName: PropTypes.bool,
  iconInputName: PropTypes.func,
  titleInputLastname: PropTypes.string,
  typeInputLastname: PropTypes.string,
  typeInputLastnameFormat: PropTypes.string,
  placeholderInputLastname: PropTypes.string,
  disabledInputLastname: PropTypes.bool,
  functionOnChangeInputLastname: PropTypes.func,
  functionOnEndingChangeLastname: PropTypes.func,
  valueInputLastname: PropTypes.string,
  errorInputLastname: PropTypes.bool,
  iconInputLastname: PropTypes.func,
  titleInputEmail: PropTypes.string,
  typeInputEmail: PropTypes.string,
  typeInputEmailFormat: PropTypes.string,
  placeholderInputEmail: PropTypes.string,
  disabledInputEmail: PropTypes.bool,
  functionOnChangeInputEmail: PropTypes.func,
  functionOnEndingChangeEmail: PropTypes.func,
  valueInputEmail: PropTypes.string,
  errorInputEmail: PropTypes.bool,
  iconInputEmail: PropTypes.func,
  areaInputPhoneTitle: PropTypes.string,
  titleInputPhoneNumber: PropTypes.string,
  typeInputPhoneNumber: PropTypes.string,
  typeInputPhoneNumberFormat: PropTypes.string,
  placeholderInputPhoneNumber: PropTypes.string,
  inputMaskPhoneNumber: PropTypes.string,
  disabledInputPhoneNumber: PropTypes.bool,
  functionOnChangeInputPhoneNumber: PropTypes.func,
  functionOnEndingChangePhoneNumber: PropTypes.func,
  iconInputPhoneNumber: PropTypes.func,
  titleInputPhoneDescription: PropTypes.string,
  typeInputPhoneDescription: PropTypes.string,
  typeInputPhoneDescriptionFormat: PropTypes.string,
  placeholderInputPhoneDescription: PropTypes.string,
  disabledInputPhoneDescription: PropTypes.bool,
  functionOnChangeInputPhoneDescription: PropTypes.func,
  functionOnEndingChangePhoneDescription: PropTypes.func,

  iconInputPhoneDescription: PropTypes.func,
  arrayPhones: PropTypes.arrayOf(PropTypes.object),
  arrayAddresses: PropTypes.arrayOf(PropTypes.object),
  functionOnClickAddPhone: PropTypes.func,
  functionOnClickRemovePhone: PropTypes.func,
  // addresses
  areaInputAddressesTitle: PropTypes.string,
  functionOnClickAddAddresses: PropTypes.func,
  functionOnClickRemoveAddresses: PropTypes.func,
  // fields : addresses
  titleInputAddressesZipCode: PropTypes.string,
  typeInputAddressesZipCode: PropTypes.string,
  typeInputAddressesZipCodeFormat: PropTypes.string,
  placeholderInputAddressesZipCode: PropTypes.string,
  disabledInputAddressesZipCode: PropTypes.bool,
  iconInputAddressesZipCode: PropTypes.func,
  inputMaskAddressesZipCode: PropTypes.string,
  functionOnChangeInputAddressesZipCode: PropTypes.func,
  functionOnEndingChangeAddressesZipCode: PropTypes.func,
  // fields : addresses : Number
  titleInputAddressesNumber: PropTypes.string,
  typeInputAddressesNumber: PropTypes.string,
  placeholderInputAddressesNumber: PropTypes.string,
  disabledInputAddressesNumber: PropTypes.bool,
  iconInputAddressesNumber: PropTypes.func,

  functionOnChangeInputAddressesNumber: PropTypes.func,
  functionOnEndingChangeAddressesNumber: PropTypes.func,
  // fields : addresses : name
  titleInputAddressesName: PropTypes.string,
  typeInputAddressesName: PropTypes.string,
  placeholderInputAddressesName: PropTypes.string,
  disabledInputAddressesName: PropTypes.bool,
  iconInputAddressesName: PropTypes.func,

  functionOnChangeInputAddressesName: PropTypes.func,
  functionOnEndingChangeAddressesName: PropTypes.func,
  // fields : addresses : neigbhord
  titleInputAddressesNeighborhood: PropTypes.string,
  typeInputAddressesNeighborhood: PropTypes.string,
  placeholderInputAddressesNeighborhood: PropTypes.string,
  disabledInputAddressesNeighborhood: PropTypes.bool,
  iconInputAddressesNeighborhood: PropTypes.func,

  functionOnChangeInputAddressesNeighborhood: PropTypes.func,
  functionOnEndingChangeAddressesNeighborhood: PropTypes.func,
  // fields : addresses : city
  titleInputAddressesCity: PropTypes.string,
  typeInputAddressesCity: PropTypes.string,
  placeholderInputAddressesCity: PropTypes.string,
  disabledInputAddressesCity: PropTypes.bool,
  iconInputAddressesCity: PropTypes.func,

  functionOnChangeInputAddressesCity: PropTypes.func,
  functionOnEndingChangeAddressesCity: PropTypes.func,
  // fields : addresses : city
  titleInputAddressesState: PropTypes.string,
  typeInputAddressesState: PropTypes.string,
  placeholderInputAddressesState: PropTypes.string,
  disabledInputAddressesState: PropTypes.bool,
  iconInputAddressesState: PropTypes.func,

  functionOnChangeInputAddressesState: PropTypes.func,
  functionOnEndingChangeAddressesState: PropTypes.func,
  // fields : addresses : city
  titleInputAddressesCountry: PropTypes.string,
  typeInputAddressesCountry: PropTypes.string,
  placeholderInputAddressesCountry: PropTypes.string,
  disabledInputAddressesCountry: PropTypes.bool,
  iconInputAddressesCountry: PropTypes.func,

  functionOnChangeInputAddressesCountry: PropTypes.func,
  functionOnEndingChangeAddressesCountry: PropTypes.func,
  // fields : data
  titleButtonSave: PropTypes.string,
  functionOnClickButtonSave: PropTypes.func,
  disabledButtonSave: PropTypes.bool,
  iconButtonSave: PropTypes.func,
};
ModalRegister.defaultProps = {
  functionOnClick: () => {},
  infoUser: {
    name: '',
    lastname: '',
    email: '',
    select: false,
    nameEditable: false,
    emailEditable: false,
    lastnameEditable: false,
    addresses: [
      {
        id: 0,
        number: '',
        address: '',
        neighborhood: '',
        city: '',
        state: '',
        country: '',
        zipcode: '',
        numberEditable: false,
        addressEditable: false,
        neighborhoodEditable: false,
        cityEditable: false,
        stateEditable: false,
        countryEditable: false,
        zipCodeEditable: false,
      },
    ],
    phones: [
      {
        number: '',
        description: '',
        numberEditable: false,
        descriptionEditable: false,
      },
    ],
  },
  titleHeader: 'title modal',
  arrayPhones: [
    {
      numberValue: '',
      descriptionValue: '',
      numberError: false,
      descriptionError: false,
    },
  ],
  arrayAddresses: [
    {
      numberValue: '',
      numberError: false,
      addressValue: '',
      addressError: false,
      neighborhoodValue: '',
      neighborhoodError: false,
      cityValue: '',
      cityError: false,
      stateValue: '',
      stateError: false,
      countryValue: '',
      countryError: false,
      zipcodeValue: '',
      zipcodeError: '',
    },
  ],
  titleInputName: 'title input name',
  typeInputNameFormat: 'text',
  typeInputName: 'text',
  placeholderInputName: 'placeholder name:',
  disabledInputName: true,
  functionOnChangeInputName: () => {},
  functionOnEndingChangeName: () => {},
  valueInputName: '',
  errorInputName: false,
  iconInputName: () => <icons.IconDefault />,
  titleInputLastname: 'title input lastname',
  typeInputLastnameFormat: 'text',
  typeInputLastname: 'text',
  placeholderInputLastname: 'placeholder lastname:',
  disabledInputLastname: true,
  functionOnChangeInputLastname: () => {},
  functionOnEndingChangeLastname: () => {},
  errorInputLastname: false,
  valueInputLastname: '',
  iconInputLastname: () => <icons.IconDefault />,
  titleInputEmail: 'title input e-mail',
  typeInputEmailFormat: 'text',
  typeInputEmail: 'text',
  placeholderInputEmail: 'placeholder lastname:',
  disabledInputEmail: true,
  functionOnChangeInputEmail: () => {},
  functionOnEndingChangeEmail: () => {},
  valueInputEmail: '',
  errorInputEmail: false,
  iconInputEmail: () => <icons.IconDefault />,
  titleInputPhoneNumber: 'title input phone number',
  inputMaskPhoneNumber: '+99 (999) 9 9999-9999',
  typeInputPhoneNumberFormat: 'text',
  typeInputPhoneNumber: 'text',
  placeholderInputPhoneNumber: 'placeholder phone number:',
  disabledInputPhoneNumber: true,
  functionOnChangeInputPhoneNumber: () => {},
  functionOnEndingChangePhoneNumber: () => {},

  iconInputPhoneNumber: () => <icons.IconDefault />,
  titleInputPhoneDescription: 'title input phone description',
  typeInputPhoneDescriptionFormat: 'text',
  typeInputPhoneDescription: 'text',
  placeholderInputPhoneDescription: 'placeholder phone description:',
  disabledInputPhoneDescription: true,
  functionOnChangeInputPhoneDescription: () => {},
  functionOnEndingChangePhoneDescription: () => {},

  iconInputPhoneDescription: () => <icons.IconDefault />,
  areaInputPhoneTitle: 'Title area Phones',
  functionOnClickAddPhone: () => {},
  functionOnClickRemovePhone: () => {},
  // address-
  areaInputAddressesTitle: 'Title Area Address',
  functionOnClickAddAddresses: () => {},
  functionOnClickRemoveAddresses: () => {},
  // fields : addresses : zipcode
  titleInputAddressesZipCode: 'title input zip-code',
  typeInputAddressesZipCodeFormat: 'mask',
  typeInputAddressesZipCode: 'text',
  placeholderInputAddressesZipCode: 'palceholder zip-code',
  disabledInputAddressesZipCode: true,
  iconInputAddressesZipCode: () => <icons.IconDefault />,
  inputMaskAddressesZipCode: '99.999-999',
  functionOnChangeInputAddressesZipCode: () => {},
  functionOnEndingChangeAddressesZipCode: () => {},
  // field : addresses : number
  titleInputAddressesNumber: 'title input number',
  typeInputAddressesNumber: 'text',
  placeholderInputAddressesNumber: 'placeholder number',
  disabledInputAddressesNumber: true,
  iconInputAddressesNumber: () => <icons.IconDefault />,
  functionOnChangeInputAddressesNumber: () => {},
  functionOnEndingChangeAddressesNumber: () => {},
  // field : addresses : Name
  titleInputAddressesName: 'title input name',
  typeInputAddressesName: 'text',
  placeholderInputAddressesName: 'placeholder name',
  disabledInputAddressesName: true,
  iconInputAddressesName: () => <icons.IconDefault />,
  functionOnChangeInputAddressesName: () => {},
  functionOnEndingChangeAddressesName: () => {},
  // field : addresses : Neighborhood
  titleInputAddressesNeighborhood: 'title input Neighborhood',
  typeInputAddressesNeighborhood: 'text',
  placeholderInputAddressesNeighborhood: 'placeholder Neighborhood',
  disabledInputAddressesNeighborhood: true,
  iconInputAddressesNeighborhood: () => <icons.IconDefault />,
  functionOnChangeInputAddressesNeighborhood: () => {},
  functionOnEndingChangeAddressesNeighborhood: () => {},
  // field : addresses : city
  titleInputAddressesCity: 'title input city',
  typeInputAddressesCity: 'text',
  placeholderInputAddressesCity: 'placeholder city',
  disabledInputAddressesCity: true,
  iconInputAddressesCity: () => <icons.IconDefault />,
  functionOnChangeInputAddressesCity: () => {},
  functionOnEndingChangeAddressesCity: () => {},
  // field : addresses : state
  titleInputAddressesState: 'title input state',
  typeInputAddressesState: 'text',
  placeholderInputAddressesState: 'placeholder state',
  disabledInputAddressesState: true,
  iconInputAddressesState: () => <icons.IconDefault />,
  functionOnChangeInputAddressesState: () => {},
  functionOnEndingChangeAddressesState: () => {},
  // field : addresses : state
  titleInputAddressesCountry: 'title input country',
  typeInputAddressesCountry: 'text',
  placeholderInputAddressesCountry: 'placeholder country',
  disabledInputAddressesCountry: true,
  iconInputAddressesCountry: () => <icons.IconDefault />,
  functionOnChangeInputAddressesCountry: () => {},
  functionOnEndingChangeAddressesCountry: () => {},
  // fields : data
  titleButtonSave: 'title button ',
  functionOnClickButtonSave: () => {},
  disabledButtonSave: false,
  iconButtonSave: () => <icons.IconDefault />,
};
