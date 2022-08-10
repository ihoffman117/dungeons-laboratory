import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MonsterListItem from './MonsterListItem';
import { H1, MonsterSearch, MonstesForm } from './styles';

const Monsters = () => {
  const [monsters, setMonsters] = useState([{ name: 'Loading...' }]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    axios.get(`/monsters/?page=${pageNum}`).then((response) => {
      setMonsters(response.data);
    });
  }, [pageNum]);

  return (
    <div>
      <H1>Monsters Wiki</H1>
      <div>
        {monsters.map((monster) => {
          return <MonsterListItem monster={monster} key={monster.index} />;
        })}
      </div>
      {pageNum > 1 
      ? <button 
        onClick={() => {
          setPageNum(pageNum - 1)
        }}
        type = "button">
          prev
        </button> 
      : <div/>
      }
      <button 
      onClick={() => {
        setPageNum(pageNum + 1)
      }}
      type = "button">
        next
      </button>
    </div>
  );
};

export default Monsters;
