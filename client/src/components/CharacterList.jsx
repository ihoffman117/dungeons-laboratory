/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { CharacterDiv } from './styles';

const CharacterList = ({ character, handleDelete, handleAddToEncounter }) => {
  return (
    <CharacterDiv>
      <h2>{character.name}</h2>
      <div>Class: {character.class}</div>
      <div>Race: {character.race}</div>
      <div>HP: {character.maxHp}</div>
      <button
        type="button"
        onClick={() => {
          handleAddToEncounter(character._id);
        }}
      >
        Add to encounter
      </button>
      <button
        type="button"
        onClick={() => {
          handleDelete(character._id);
        }}
      >
        delete
      </button>
    </CharacterDiv>
  );
};

CharacterList.propTypes = {
  character: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleAddToEncounter: PropTypes.func.isRequired,
};

export default CharacterList;
