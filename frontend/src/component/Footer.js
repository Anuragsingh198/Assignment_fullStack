import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const Footer = () => {

      const Style ={
        fontSize:'.8rem',
        listStyleType: 'none',
        textAlign:'left'
        , paddingLeft: 0, marginLeft: 0,

      }
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center", flexDirection:"column",
        alignItems:'center'
      }}
    >
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          padding: "20px",
          width: "80%",
        }}
      >
        <Grid container spacing={2} alignItems="flex-start" justifyContent='center'>
          <Grid item xs={12} sm={2.4}>
            <Typography variant="h6" gutterBottom>
               Abstract
            </Typography>
            <ul  style={Style}>
              <li>Branches</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={2.4}>
            <Typography variant="h6" gutterBottom sx={{fontSize:'1rem'}}>
              Resources
            </Typography>
            <ul style={Style}>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Revised Notes</li>
              <li>Status</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={2.4}>
            <Typography variant="h6" gutterBottom>
              Community
            </Typography>
            <ul  style={Style}>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Dribbble</li>
              <li>Podcast</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={2.4}>
            <Typography variant="h6" gutterBottom>
              company
            </Typography>
            <ul  style={Style}>
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
            </ul>
            <Box sx={{ marginTop: "10px" }}>
              <Typography sx={{fontSize:'.8rem'}}>Contact Us</Typography>
              <Typography sx={Style}>info@abstract.com</Typography>
            </Box>
          </Grid>
        </Grid>


        <Box
              sx={{
                textAlign: "right",
              }}
            > 
              <Typography variant="h6" gutterBottom>
                Logo
              </Typography>
              <Typography>© 2024 Epsilon Group</Typography>
              <Typography>Abstract Studio Design, Inc</Typography>
              <Typography>All rights reserved</Typography>
            </Box>
     </Box>
    </div>
  );
};

export default Footer;
