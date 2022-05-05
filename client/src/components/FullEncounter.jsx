import React from 'react';

const FullEncounter = ({ encounter }) => {
  return (
    <div>
      <div>
        <h3>characters</h3>
        {encounter.characters.map((character) => {
          return <div>{character}</div>;
        })}
      </div>
      <div>
        <h3>monsters</h3>
        {encounter.monsters.map((monsters) => {
          return <div>{monsters}</div>;
        })}
      </div>
    </div>
  );
};

export default FullEncounter;
