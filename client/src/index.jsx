import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import { HEADER, NAV, AppDiv, Content } from './components/styles';
import Characters from './components/Characters';
import Monsters from './components/Monsters';
import Encounters from './components/Encounters';
import Maps from './components/Maps';

const App = () => {

  const [pageDisplayed] = useState('characters')

  return (
    <AppDiv>
      <HEADER>
        <span>Dungeon  Lab</span>
      </HEADER>
      <NAV>
        <h3> Characters </h3>
        <h3> Monsters </h3>
        <h3> Encounters </h3>
        <h3> Maps </h3>
      </NAV>

      <Content>
        {pageDisplayed === 'characters'? <Characters/> : <div/>}
        {pageDisplayed === 'monsters'? <Monsters/> : <div/>}
        {pageDisplayed === 'encounters'? <Encounters/> : <div/>}
        {pageDisplayed === 'maps'? <Maps/> : <div/>}
      </Content>
    </AppDiv>
  )
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
