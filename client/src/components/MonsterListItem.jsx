/* eslint-disable react/forbid-prop-types */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MonsterInfo from './MonsterInfo'


const MonsterListItem = ({monster}) => {

  const [display, setDisplay] = useState(false)

  return (
    <div role='presentation' onClick={() => {
      setDisplay(!display);
    }}>
      <h2>{monster.name}</h2>
      { display ? <MonsterInfo index={monster.index}/> : <div/> }
    </div>
  )
 }

 MonsterListItem.propTypes = {
  monster: PropTypes.object.isRequired
}

export default MonsterListItem;