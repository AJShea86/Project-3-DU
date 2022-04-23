import React from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import { Box } from '@mui/system';

const Footer = () => {

  const footerStyle ={
  backgroundColor: 'black',
 borderTop:'2px solid white',
 position: 'fixed',
 width: '100%',
 bottom: '0',
 color: 'white',
 fontSize: '25px',
 zIndex: '3'

  }
 
  return (
    <footer style={footerStyle}>
      <Box
      sx={{
        display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
      }}
      >
       <PetsIcon  fontSize='large'style={{verticalAlign:"middle"}}/>
       </Box>

    </footer>
  )
}

export default Footer