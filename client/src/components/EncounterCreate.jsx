import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input } from './styles';

const EncounterCreate = ({ closeModal }) => {
  const [name, setName] = useState('name');

  const handleCreateEncounter = () => {
    const encounter = {
      encounterName: name,
      characters: [],
      monsters: [],
    };
    axios.post('/encounters', encounter).then((response) => {
      console.log(response.data);
      closeModal(false);
    });
  };

  return (
    <div>
      <h1> - Create An Encounter! - </h1>
      <Form>
        <label htmlFor="EncounterName">
          <Input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          Encounter Name
        </label>
        <button
          type="button"
          onClick={() => {
            handleCreateEncounter();
          }}
        >
          Create Encounter
        </button>
      </Form>
    </div>
  );
};

export default EncounterCreate;
