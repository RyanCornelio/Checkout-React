import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <div className="links">
            <h1>Checkout react</h1>
        <Link to="/"><Button color="inherit">Home</Button></Link>
        <Link to="/About"><Button color="inherit">About</Button></Link>
        <Link to="/Store"><Button color="inherit">Store</Button></Link>
        <Link to="/Cart"><Button color="inherit">Cart</Button></Link>
        <Link to="/Contact"><Button color="inherit"><Button color="inherit">Contact</Button></Button></Link>
        
        
        
        
        
        </div>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar