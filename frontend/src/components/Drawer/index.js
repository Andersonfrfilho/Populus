import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AreaDrawer,
  AreaHeader,
  AreaPhoto,
  Photo,
  AreaInfo,
  Title,
  Text,
  AreaSearch,
  IconSeach,
  AreaInputSearch,
  InputSearch,
  AreaInputIconSearch,
  AreaBody,
  AreaOptionsList,
  AreaOptions,
  AreaOptionLink,
  AreaOption,
  AreaIconOptions,
  AreaUnderline,
  Underline,
  TitleOption,
  AreaTitle,
  AreaIconDownUp,
  IconUp,
  IconDown,
} from './styles';
import { icons } from '../../styles';
// import logo from '../../assets/images/logo.svg';

export default function Drawer({
  openDrawer,
  options,
  name,
  subname,
  functionOnClickOpenSuboption,
  path,
  valueSearch,
  functionOnChangeTextSearch,
  palceholderSearch,
  functionOnClickLink,
}) {
  return (
    <AreaDrawer>
      <AreaHeader>
        <AreaPhoto>
          <icons.UserContactIcon />
        </AreaPhoto>
        <AreaInfo open={openDrawer}>
          <Title>{name.charAt(0).toUpperCase() + name.slice(1)}</Title>
          {subname ? <Text open={openDrawer}>{subname}</Text> : null}
        </AreaInfo>
      </AreaHeader>

      <AreaSearch>
        <AreaInputIconSearch>
          <IconSeach />
        </AreaInputIconSearch>
        <AreaInputSearch>
          <InputSearch
            placeholder={palceholderSearch}
            open={openDrawer}
            value={valueSearch}
            onChange={text => functionOnChangeTextSearch(text.target.value)}
          />
        </AreaInputSearch>
      </AreaSearch>

      <AreaBody>
        <AreaUnderline>
          <Underline />
        </AreaUnderline>
        <AreaOptionsList>
          {options.map((option, index) => {
            return (
              <>
                <AreaOptions>
                  {option.link ? (
                    <AreaOptionLink
                      to={`${option.route.path}`}
                      onClick={() => functionOnClickLink(`${option.name}`)}
                    >
                      <AreaIconOptions>
                        <option.icon />
                      </AreaIconOptions>
                      <AreaTitle>
                        <TitleOption>{option.name}</TitleOption>
                      </AreaTitle>
                    </AreaOptionLink>
                  ) : (
                    <AreaOption>
                      <AreaIconOptions>
                        <option.icon />
                      </AreaIconOptions>
                      <AreaTitle>
                        <TitleOption>{option.name}</TitleOption>
                      </AreaTitle>
                    </AreaOption>
                  )}

                  {option.suboptions.length > 0 ? (
                    <AreaIconDownUp
                      onClick={() => functionOnClickOpenSuboption(index)}
                    >
                      {option.open ? <IconUp /> : <IconDown />}
                    </AreaIconDownUp>
                  ) : null}
                </AreaOptions>

                {option.open
                  ? option.suboptions.map(suboption => (
                      <AreaOptions>
                        <AreaOptionLink to={`${path}${suboption.link}`}>
                          <AreaIconDownUp />
                          <AreaIconOptions>
                            <suboption.icon />
                          </AreaIconOptions>
                          <AreaTitle>
                            <TitleOption>{option.name}</TitleOption>
                          </AreaTitle>
                        </AreaOptionLink>
                      </AreaOptions>
                    ))
                  : null}
                <AreaUnderline>
                  <Underline />
                </AreaUnderline>
              </>
            );
          })}
        </AreaOptionsList>
      </AreaBody>
    </AreaDrawer>
  );
}
Drawer.propTypes = {
  openDrawer: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  subname: PropTypes.string,
  valueSearch: PropTypes.string,
  palceholderSearch: PropTypes.string,
  functionOnChangeTextSearch: PropTypes.func,
  functionOnClickOpenSuboption: PropTypes.func,
  functionOnClickLink: PropTypes.func,
};
Drawer.defaultProps = {
  openDrawer: false,
  name: 'Empresa',
  subname: 'subname',
  valueSearch: '',
  palceholderSearch: 'placeholder search:',
  functionOnClickOpenSuboption: () => {},
  functionOnChangeTextSearch: () => {},
  functionOnClickLink: () => {},
  options: [
    {
      option: '1',
      name: 'option 1',
      open: false,
      subOption: [{ options: '1' }, { options: '2' }],
    },
    { option: '2', name: 'option 1', open: false, subOption: [] },
    { option: '3', name: 'option 1', open: false, subOption: [] },
  ],
};
