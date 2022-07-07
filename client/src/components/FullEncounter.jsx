import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {EncounterCard} from './styles';

const FullEncounter = ({ encounter }) => {
  const [characters, setCharacters] = useState([{}])

  useEffect(()=> {
    axios.get('./characters')
      .then((response) => {
        const chars = [];
        response.data.forEach((character) => {
          encounter.characters.forEach((char) => {
            if(char === character._id){
              chars.push(character)
            }
          })
        })
        setCharacters(chars)
      })
  }, [])
  return (
    <EncounterCard>
      <div>
        <h3>characters</h3>
        {characters.map((character) => {
          return <div>{character.name}</div>;
        })}
      </div>
      <div>
        <h3>monsters</h3>
        {encounter.monsters.map((monster) => {
          return <div>{monster}</div>;
        })}
      </div>
    </EncounterCard>
  );
};

export default FullEncounter;
