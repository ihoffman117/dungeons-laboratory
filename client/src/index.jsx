import React from 'react';
import { createRoot } from 'react-dom/client';
import {HEADER} from './components/styles.js'

const App = () => {
  return(
    <div>
      <HEADER>
        <h1>Dungeon  Lab</h1>
      </HEADER>

    </div>
  )
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
