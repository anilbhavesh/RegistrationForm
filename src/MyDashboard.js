import React from 'react';
import { AppBar, Toolbar, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Typography } from '@mui/material';
import { Menu as MenuIcon, Dashboard as DashboardIcon, Settings as SettingsIcon } from '@mui/icons-material';

   
   
   function MyDashboard() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              
            </Typography>
            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" anchor="left">
          <List>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            {/* Add more list items for other dashboard sections */}
          </List>
        </Drawer>
        <div>
          {/* Place the content of the dashboard here */}
          dashboard
        </div>
      </div>
    );
  }
  
  export default MyDashboard;
  