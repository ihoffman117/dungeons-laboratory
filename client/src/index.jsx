import React from 'react';
import { createRoot } from 'react-dom/client';
import { HEADER, NAV } from './components/styles';

const App = () => {
  return (
  <div>
      <HEADER>
        <h1>Dungeon  Lab</h1>
      </HEADER>
      <NAV>
        <h3> Characters </h3>
        <h3> Monsters </h3>
        <h3> Enounters </h3>
        <h3> Maps </h3>
      </NAV>

    </div>
  )
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
