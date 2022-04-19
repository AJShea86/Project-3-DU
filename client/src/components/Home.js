import { imageListClasses } from '@mui/material'
import Typed from 'react-typed'
import React from 'react'

const Home = () => {
  return (
    <div>
    <Typed
      style={{display: 'flex', justifyContent: 'center', marginTop: '50vh', fontSize: '50px'}}
        strings={['Welcome to Fetch !']}
        typeSpeed={40}
    />
    </div>
  )
}

export default Home