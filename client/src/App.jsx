import React, { useState } from 'react';
import {
  HEADER,
  NAV,
  AppDiv,
  Content,
  Logo,
  NavItem,
} from './components/styles';
import Characters from './components/Characters';
import Monsters from './components/Monsters';
import Encounters from './components/Encounters';
import Maps from './components/Maps';
import logo from './images/logo.png';

const App = () => {
  const [pageDisplayed, setPageDisplayed] = useState('monsters');

  const handleChangePage = (page) => {
    setPageDisplayed(page);
  };

  return (
    <AppDiv>
      <HEADER>
        <Logo src={logo} alt="the classic dnd red logo" />
        <span>Dungeon Lab</span>
      </HEADER>
      <NAV>
        <NavItem
          role="presentation"
          onClick={() => {
            handleChangePage('characters');
          }}
        >
          {' '}
          Characters{' '}
        </NavItem>
        <NavItem
          role="presentation"
          onClick={() => {
            handleChangePage('monsters');
          }}
        >
          {' '}
          Monsters{' '}
        </NavItem>
        <NavItem
          role="presentation"
          onClick={() => {
            handleChangePage('encounters');
          }}
        >
          {' '}
          Encounters{' '}
        </NavItem>
        <NavItem
          role="presentation"
          onClick={() => {
            handleChangePage('maps');
          }}
        >
          {' '}
          Maps{' '}
        </NavItem>
      </NAV>

      <Content>
        {pageDisplayed === 'characters' ? <Characters /> : <div />}
        {pageDisplayed === 'monsters' ? <Monsters /> : <div />}
        {pageDisplayed === 'encounters' ? <Encounters /> : <div />}
        {pageDisplayed === 'maps' ? <Maps /> : <div />}
      </Content>
    </AppDiv>
  );
};

export default App;
