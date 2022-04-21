import React from 'react'
import '../Header.css'
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum'


const ProfileButton = () => {
  return (
    <div className='header'>


      <IconButton>
      <PersonIcon fontSize='large' className='header__icon' />
      </IconButton>

      <IconButton>
      <ForumIcon fontSize='large' className='header__icon'/>
      </IconButton>







    </div>
  )
}

export default ProfileButton