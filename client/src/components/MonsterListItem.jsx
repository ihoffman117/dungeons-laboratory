/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MonsterInfo from './MonsterInfo';
import { MonsterLI } from './styles';

const MonsterListItem = ({ monster }) => {
  const [display, setDisplay] = useState(false);

  return (
    <MonsterLI>
      <div>
        <h2
          role="presentation"
          onClick={() => {
            setDisplay(!display);
          }}
        >
          {monster.name}
        </h2>
      </div>
      {display ? <MonsterInfo index={monster.index} /> : <div />}
    </MonsterLI>
  );
};

MonsterListItem.propTypes = {
  monster: PropTypes.object.isRequired,
};

export default MonsterListItem;
