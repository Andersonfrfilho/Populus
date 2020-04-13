import React from 'react';
import PropTypes from 'prop-types';
import {
  AreaTable,
  Column,
  Row,
  AreaActionsIcons,
  AreaIcons,
  AreaInfo,
  Info,
  IconEdit,
  IconDelete,
  IconSquareUnselect,
  IconSquareAllSelect,
  IconFilterNumericDown,
  IconFilterNumericUp,
  IconFilterAlphaDown,
  IconFilterAlphaUp,
} from './styles';

function functionSelectFilterNumber(selectParam) {
  return selectParam ? <IconFilterNumericDown /> : <IconFilterNumericUp />;
}
function functionSelectFilterAlpha(selectParam) {
  return selectParam ? <IconFilterAlphaDown /> : <IconFilterAlphaUp />;
}
export default function TableBody({ infoTable }) {
  return (
    <AreaTable>
      <Row key="index">
        <Column flex={2} header>
          <AreaIcons>
            <IconSquareUnselect />
          </AreaIcons>
          <AreaInfo align="center">
            <Info>Ações</Info>
          </AreaInfo>
          <AreaIcons />
        </Column>
        {infoTable[0].options.map(option => (
          <Column flex={option.length} header>
            <AreaInfo align={option.align} pointer>
              <Info>{option.name}</Info>
              {option.type === 'number'
                ? functionSelectFilterNumber(option.select)
                : functionSelectFilterAlpha(option.select)}
            </AreaInfo>
          </Column>
        ))}
      </Row>
      {infoTable.map((element, index) => {
        const { name, email, lastname } = element;
        if (index !== 0) {
          return (
            <Row key={index.toString()}>
              <Column flex={2}>
                <AreaActionsIcons>
                  <AreaIcons>
                    <IconSquareUnselect />
                  </AreaIcons>
                  <AreaIcons>
                    <IconEdit />
                  </AreaIcons>
                  <AreaIcons>
                    <IconDelete />
                  </AreaIcons>
                </AreaActionsIcons>
              </Column>
              <Column flex={3}>
                <AreaTable>
                  <Info>{`${name.charAt(0).toUpperCase() +
                    name.slice(1)} ${lastname.charAt(0).toUpperCase() +
                    lastname.slice(1)}`}</Info>
                </AreaTable>
              </Column>
              <Column flex={3}>
                <AreaTable>
                  <Info>{email}</Info>
                </AreaTable>
              </Column>
            </Row>
          );
        }
        return null;
      })}
    </AreaTable>
  );
}
TableBody.propTypes = {
  infoTable: PropTypes.arrayOf(PropTypes.obj),
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
        {
          name: 'E-mail',
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
};
