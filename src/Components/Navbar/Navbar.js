import React from 'react'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './consts/navbarItems';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();



    const drawerWidth = 220;
  return (
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#319B4B',
            color: 'aliceblue',
            fontStyle: 'oblique',
            fontWeight: '600',
            fontSize: '16px'
        },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
       {/*  // Ska vi ha den?  */}
        <Divider />
        <List>
          {mainNavbarItems.map((item, index) => (
            <ListItem 
            button 
            key={item.id}
            onClick={() => navigate(item.route)}
            >
                <ListItemIcon sx={{color: 'aliceblue'}}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
               /*  sx={navBarStyles.item} */
                primary={item.label} />
            </ListItem>
          ))}
        </List>
        
      </Drawer>
  )
}

export default Navbar