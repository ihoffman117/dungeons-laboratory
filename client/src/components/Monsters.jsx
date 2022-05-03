import React, {useState, useEffect} from 'react';
import axios from 'axios'
import MonsterListItem from './MonsterListItem'

const Monsters = () => {

  const [monsters, setMonsters] = useState([{name: 'Loading...'}])

  useEffect(() => {

    axios.get('/monsters')
      .then((response) => {
        setMonsters(response.data);
      })
  }, [])

  return (
    <div>
      <h1>Monsters Wiki</h1>
      <div>
        {monsters.map((monster) => {
          return(<MonsterListItem monster={monster} key={monster.index}/>)
        })}
      </div>
    </div>
  )
 }

 export default Monsters;