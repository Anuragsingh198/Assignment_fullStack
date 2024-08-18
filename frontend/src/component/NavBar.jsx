import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const NavBar = () => {
  React.useEffect(() => {
    console.log("hii");
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: '10px' }}>
        <AppBar position="relative" sx={{ backgroundColor: 'black', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', marginTop: '5px', mx: '2px' }}>
          <Toolbar sx={{  marginLeft:'10%' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: '0px'  }} 
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ mr: 0.5 , fontSize:'.8rem', fontWeight:'100' }}>
              Abstract&nbsp; |
            </Typography>
            <Typography variant="h6" component="div" sx={{ mr: 0.5 , fontSize:'.8rem', fontWeight:'100' }}> &nbsp;Help Center
            </Typography>
            <Box sx={{ flexGrow: 1 }} /> 
            <Button variant='outlined' color="inherit"  sx={{fontSize:'.6rem', fontWeight:'400' ,   marginRight:'10%' , textTransform: 'none'}}>Submit a request </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;
