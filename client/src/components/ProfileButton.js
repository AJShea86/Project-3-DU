import React from 'react'
import '../Header.css'
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


const ProfileButton = () => {
  return (
    <div className='header'>


      <IconButton href='/profile'>
      <PersonIcon  fontSize='large' className='header__icon' />
      </IconButton>

      <IconButton href='/matches'>
      <PeopleAltIcon fontSize='large' className='header__icon'/>
      </IconButton>







    </div>
  )
}

export default ProfileButton