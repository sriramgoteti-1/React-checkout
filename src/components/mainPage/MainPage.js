import React from 'react'
import "../mainPage/mainPage.css"
import { useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

export default function MainPage() {
  const navigate = useNavigate(); 
  const handleLogout=()=>{
    navigate('/login')
  }

  
  return (
    <div className="main-page-container">
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
        <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
          Dashboard
        </Typography>
        <div>
          <a href='/home'>HOME</a>
        </div>
        <div>
          <a href="/form">FORM</a>
        </div>
        <Button sx={{}}color="inherit" onClick={handleLogout}>Logout</Button>
      </Toolbar>
    </AppBar>
  </Box>
    </div>
  )
}
