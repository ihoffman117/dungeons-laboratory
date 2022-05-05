import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddToEncounter = ({ closeModal, id, index }) => {
  const [encounters, setEncounters] = useState([
    { encounterName: 'loading...' },
  ]);

  useEffect(() => {
    axios.get('/encounters').then((response) => {
      setEncounters(response.data);
    });
  }, []);

  const handleAdd = (encounterId) => {
    const object = {
      encounterId,
      id,
      index,
    };
    axios.patch('/encounters', object).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div>
      {encounters.map((enounter) => {
        return (
          <div
            role="presentation"
            onClick={() => {
              handleAdd(enounter._id);
            }}
          >
            Add to: {enounter.encounterName}
          </div>
        );
      })}
      <button
        type="button"
        onClick={() => {
          closeModal(false);
        }}
      >
        close
      </button>
    </div>
  );
};

export default AddToEncounter;
