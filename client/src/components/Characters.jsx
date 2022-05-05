/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import { H1, CharacterDiv } from './styles';
import CreateCharacterPage from './CreateCharacterPage';
import CharacterList from './CharacterList';
import AddToEncounter from './AddToEncounter';

ReactModal.setAppElement('*');

const Characters = () => {
  const [creatingCharacter, setCreatingCharacter] = useState(false);
  const [characters, setCharacters] = useState([{ name: 'none', _id: 0 }]);
  const [addToEncounterId, setAddToEncounterId] = useState('idHere');
  const [showAddToEncounter, setShowAddToEncounter] = useState(false);

  useEffect(() => {
    axios.get('/characters').then((response) => {
      setCharacters(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/characters/?id=${id}`).then((response) => {
      console.log(response);
    });
  };

  const handleAddToEncounter = (id) => {
    setAddToEncounterId(id);
    setShowAddToEncounter(true);
  };

  return (
    <div>
      <ReactModal
        isOpen={creatingCharacter}
        className="Modal"
        overlayClassName="Overlay"
      >
        <CreateCharacterPage closeModal={setCreatingCharacter} />
      </ReactModal>

      <ReactModal
        isOpen={showAddToEncounter}
        className="Modal"
        overlayClassName="Overlay"
      >
        <AddToEncounter
          closeModal={setShowAddToEncounter}
          id={addToEncounterId}
          index={null}
        />
      </ReactModal>

      <H1>Your Characters</H1>
      <CharacterDiv>
        <form>
          <input />
        </form>
        <button
          type="button"
          onClick={() => {
            setCreatingCharacter(!creatingCharacter);
          }}
        >
          {' '}
          add a character{' '}
        </button>
      </CharacterDiv>
      <div>
        {characters.map((character) => {
          return (
            <CharacterList
              character={character}
              key={character._id}
              handleDelete={handleDelete}
              handleAddToEncounter={handleAddToEncounter}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
