/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const CharacterList = ({character}) => {
  return (
    <div>
      <h2>{character.name}</h2>
      <span>Class: {character.class}</span>
      <span>HP: {character.MaxHp}</span>
    </div>
  )
 }

 CharacterList.propTypes = {
  character: PropTypes.object.isRequired
}

export default CharacterList;