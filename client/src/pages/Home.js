import React from 'react'
import Typed from 'react-typed'

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