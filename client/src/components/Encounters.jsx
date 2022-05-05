import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import EncounterCreate from './EncounterCreate';
import EncountersList from './EncountersList';
import { H1 } from './styles';

const Encounters = () => {
  const [open, setOpen] = useState(false);
  const [encounters, setEncounters] = useState([{ name: 'loading...' }]);

  useEffect(() => {
    axios.get('/encounters').then((response) => {
      setEncounters(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`/encounters/?id=${id}`).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <H1>Your Encounters</H1>
      <ReactModal className="Modal" overlayClassName="Overlay" isOpen={open}>
        <EncounterCreate closeModal={setOpen} />
      </ReactModal>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
        }}
      >
        Create A New Encounter
      </button>
      {encounters.map((encounter) => {
        return (
          <EncountersList encounter={encounter} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
};

export default Encounters;
