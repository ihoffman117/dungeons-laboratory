/* eslint-disable no-underscore-dangle */
import React, {useState, useEffect} from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import { NAV } from './styles';
import CreateCharacterPage from './CreateCharacterPage'
import CharacterList from './CharacterList'

ReactModal.setAppElement('*');

const Characters = () => {

  const [creatingCharacter, setCreatingCharacter] = useState(false)
  const [characters, setCharacters] = useState([{name: 'none', _id: 0}])

  useEffect(() => {
    axios.get('/characters')
      .then((response) => {
        setCharacters(response.data)
      })
  }, [])

 return (
  <div>
    <ReactModal
    isOpen={creatingCharacter}
    className="Modal"
    overlayClassName="Overlay">
      <CreateCharacterPage closeModal={setCreatingCharacter}/>
    </ReactModal>
    <h1>Your Characters</h1>
    <NAV>
      <form>
        <input />
      </form>
      <button type='button' onClick={() => {
        setCreatingCharacter(!creatingCharacter);
      }}> add a character </button>
    </NAV>
    <div>
      {characters.map((character) => {
          return (<CharacterList character={character} key={character._id}/>)
      })}
    </div>
  </div>
 )
}

export default Characters;