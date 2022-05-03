import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';


const MonsterInfo = ({index}) => {

  const [monsterData, setMonsterData] = useState({name: 'loading'})

  useEffect(() => {
    axios.get(`monsters/${index}`)
      .then((response) => {
        setMonsterData(response.data)
      })

  }, [])

  return (
    <div> Monster info for {monsterData.name} </div>
  )
}

MonsterInfo.propTypes = {
  index: PropTypes.string.isRequired
}

export default MonsterInfo;