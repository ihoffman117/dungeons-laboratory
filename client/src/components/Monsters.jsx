import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MonsterListItem from './MonsterListItem';
import { H1, MonsterSearch, MonstesForm } from './styles';

const Monsters = () => {
  const [monsters, setMonsters] = useState([{ name: 'Loading...' }]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(`/monsters/?name=${search}`).then((response) => {
      setMonsters(response.data);
    });
  }, []);

  return (
    <div>
      <H1>Monsters Wiki</H1>
      <MonstesForm>
        <MonsterSearch
          type="text"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        Seach Monsters
      </MonstesForm>
      <div>
        {monsters.map((monster) => {
          return <MonsterListItem monster={monster} key={monster.index} />;
        })}
      </div>
    </div>
  );
};

export default Monsters;
