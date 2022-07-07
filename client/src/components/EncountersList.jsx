/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FullEncounter from './FullEncounter';
import {EncounterLI} from './styles';

const EncountersList = ({ encounter, handleDelete }) => {
  const [show, setShow] = useState(false);
  return (
    <EncounterLI>
      <h2>{encounter.encounterName}</h2>
      <button
        type="button"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? <span>Close</span> : <span>Show Encounter</span>}
      </button>
      <button
        type="button"
        onClick={() => {
          handleDelete(encounter._id);
        }}
      >
        delete
      </button>
      {show ? <FullEncounter encounter={encounter} /> : <div />}
    </EncounterLI>
  );
};

EncountersList.propTypes = {
  encounter: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default EncountersList;
