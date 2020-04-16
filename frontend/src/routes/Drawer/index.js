import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AreaPanel, AreaDrawerPanel, AreaDrawer, AreaContent } from './styles';

import * as UsersActions from '../../store/modules/users/actions';
import Header from '../../components/Header';
import Drawer from '../../components/Drawer';
import ContactList from '../../pages/ContactList';
import ContactRegister from '../../pages/ContactRegister';
import DrawerContentHeader from '../../components/DrawerContentHeader';
import { colors, icons } from '../../styles';

export default function Panel(props) {
  const {
    match: { path },
  } = props;
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.contacts);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [drawer, setDrawer] = useState({
    name,
    subname: '',
    options: [
      {
        id: '1',
        name: 'Contatos',
        open: false,
        link: '/',
        icon: () => <icons.UserListIcon color={colors.dark} />,
        route: {
          path: `${path}/`,
          exact: true,
          main: () => <ContactList />,
        },
        suboptions: [],
      },
    ],
  });
  const [drawerFind, setDrawerFind] = useState(drawer);
  const [searchText, setSearchText] = useState('');
  const [namePage, setNamePage] = useState(drawer.options[0].name);
  function functionOpenSuboption(indexParam, drawerParam) {
    const newOptions = drawerParam.options.map(
      (optionParam, indexOptionsParam) => {
        if (indexParam === indexOptionsParam) {
          return {
            ...optionParam,
            open: !optionParam.open,
          };
        }
        return { ...optionParam, open: false };
      }
    );
    setDrawerFind({ ...drawerParam, options: newOptions });
  }
  function functionRequestLougout() {
    dispatch(UsersActions.requestLogout());
  }
  function functionClickLink(nameParam) {
    setNamePage(nameParam);
  }
  // useEffect(() => {
  //   let user = localStorage.getItem('populus@user');
  //   user = JSON.parse(user);

  //   dispatch(ContactsActions.defineInformationUser(user.name));
  // }, []); //eslint-disable-line
  useEffect(() => {
    const newOptions = drawer.options.filter(element =>
      element.name.toLowerCase().includes(searchText.toLowerCase())
    );
    const newDrawer = {
      ...drawer,
      options: newOptions,
    };
    setDrawerFind(newDrawer);
  }, [searchText]); //eslint-disable-line
  useEffect(() => {
    const newDrawer = {
      ...drawer,
      name,
    };
    setDrawer(newDrawer);
  }, [name]); //eslint-disable-line
  return (
    <Router>
      <AreaPanel>
        <Header
          functionOnClickLogout={() => functionRequestLougout()}
          functionOnClickDrawer={() => setOpenDrawer(!openDrawer)}
          openDrawer={openDrawer}
          functionOnClickUser={() => setOpenUser(!openUser)}
          openUser={openUser}
          titleDrawer="Populus"
        />
        <AreaDrawerPanel color={colors.pickerSix}>
          <AreaDrawer open={openDrawer}>
            <Drawer
              openDrawer={openDrawer}
              name={drawer.name}
              subname={drawer.subname}
              options={drawerFind.options}
              functionOnClickOpenSuboption={indexParam =>
                functionOpenSuboption(indexParam, drawerFind)
              }
              path={path}
              palceholderSearch="Pesquisar:"
              valueSearch={searchText}
              functionOnChangeTextSearch={text => setSearchText(text)}
              functionOnClickLink={nameParam => functionClickLink(nameParam)}
            />
          </AreaDrawer>

          <AreaContent>
            <DrawerContentHeader name={namePage} />
            <Switch>
              {drawer.options.map((option, index) => {
                const { link, route, suboptions } = option;
                if (link) {
                  return (
                    <Route
                      key={index.toString()}
                      path={route.path}
                      exact={route.exact}
                      children={() => <route.main />}
                    />
                  );
                }
                return suboptions.map((suboptions, indexParam) => {
                  return (
                    <Route
                      key={indexParam.toString()}
                      path={suboptions.route.path}
                      exact={suboptions.route.exact}
                      children={() => <suboptions.route.main />}
                    />
                  );
                });
              })}
            </Switch>
          </AreaContent>
        </AreaDrawerPanel>
      </AreaPanel>
    </Router>
  );
}
