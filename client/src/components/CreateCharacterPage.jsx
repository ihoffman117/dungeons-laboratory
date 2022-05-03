/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Form, Input} from './styles'

// name: String,
//   race: String,
//   class: String,
//   ac: Number,
//   maxHp: Number,
//   hp: Number


const CreateCharacterPage = ({closeModal}) => {

  const [name, setName] = useState('name')
  const [race, setRace] = useState('race')
  const [className, setClassName] = useState('class')
  const [ac, setAc] = useState(0)
  const [maxHp, setMaxHp] = useState(0)

  const handleAddCharacter = () => {

    const character = {
      name,
      race,
      class: className,
      ac,
      maxHp
    }
    axios.post('/characters', character)
      .then((response) => {
        console.log(response.data)
        closeModal(false);
      })
      .catch((err) => {
        console.log(err);
      })
  }


  return (
    <div>
    <h1> - Add A Character! - </h1>
    <Form>
      <label htmlFor='Character Name'>
        <Input type='text' onChange={(event) => {
          setName(event.target.value)
        }}/>
        Character Name
      </label>

      <label htmlFor='Character Race' onChange={(event) => {
          setRace(event.target.value)
        }}>
        <Input type='text'/>
        Character Race
      </label>

      <label htmlFor='Character Class' onChange={(event) => {
          setClassName(event.target.value)
        }}>
        <Input type='text'/>
        Character Class
      </label>

      <label htmlFor='Character AC' onChange={(event) => {
          setAc(event.target.value)
        }}>
        <Input type='number'/>
        Character AC
      </label>

      <label htmlFor='Character Max HP' onChange={(event) => {
          setMaxHp(event.target.value)
        }}>
        <Input type='number'/>
        Character Max HP
      </label>

    </Form>
    <button type='button' onClick={() => {
      handleAddCharacter()
    }}> Create Character </button>
    </div>
  );
}

CreateCharacterPage.propTypes = {
  closeModal: PropTypes.func.isRequired
}

export default CreateCharacterPage;

