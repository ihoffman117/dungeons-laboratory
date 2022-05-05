import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import axios from 'axios';
import { MonsterStats, MonsterCard } from './styles';
import AddToEncounter from './AddToEncounter';

const MonsterInfo = ({ index }) => {
  const [monsterData, setMonsterData] = useState({ name: 'loading' });
  const [addToEncounterId, setAddToEncounterId] = useState('idHere');
  const [showAddToEncounter, setShowAddToEncounter] = useState(false);

  useEffect(() => {
    axios.get(`monsters/${index}`).then((response) => {
      setMonsterData(response.data);
    });
  }, []);

  const handleAddToEncounter = (id) => {
    console.log(id);
    setAddToEncounterId(id);
    setShowAddToEncounter(true);
  };

  return (
    <MonsterCard>
      <ReactModal
        isOpen={showAddToEncounter}
        className="Modal"
        overlayClassName="Overlay"
      >
        <AddToEncounter
          closeModal={setShowAddToEncounter}
          index={addToEncounterId}
          id={null}
        />
      </ReactModal>
      <MonsterStats>
        <span>Size: {monsterData.size}</span>
        <span>Type: {monsterData.type}</span>
        <span>Alignment: {monsterData.alignment}</span>
        <span>AC: {monsterData.armor_class}</span>
        <span>HP: {monsterData.hit_points}</span>
        <span>CR: {monsterData.challenge_rating}</span>
      </MonsterStats>
      <MonsterStats>
        <span>STR: {monsterData.strength}</span>
        <span>DEX: {monsterData.dexterity}</span>
        <span>CON: {monsterData.constitution}</span>
        <span>INT: {monsterData.intelligence}</span>
        <span>WIS: {monsterData.wisdom}</span>
        <span>CHA: {monsterData.charisma}</span>
      </MonsterStats>
      <button
        type="button"
        onClick={() => {
          handleAddToEncounter(monsterData.index);
        }}
      >
        {' '}
        Add to an encounter!{' '}
      </button>
    </MonsterCard>
  );
};

MonsterInfo.propTypes = {
  index: PropTypes.string.isRequired,
};

export default MonsterInfo;
