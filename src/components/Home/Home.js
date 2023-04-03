import React, { useEffect, useState, useRef } from "react";
import "../Home/home.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function Home() {
  const [games, setGames] = useState([
    {
      name: "Hi Stricker",
    },
    {
      name: "Puch Challange",
    },
    {
      name: "Bow Arrow",
    },
    {
      name: "Catch Fish",
    },
  ]);
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const handleGame = (e) => {
    for (let i = 0; i < games.length; i++) {
      if (
        games[i].startTime &&
        games[i].endTime
      ) {
        if (items.indexOf(games[i]) == -1) {
          var time =
            (Date.parse(games[i].endTime) - Date.parse(games[i].startTime)) /
            3600000;
          games[i].totalHrs = time;
          var setupTime = Date.parse(games[i].startTime) - 3600 * 1000 * 12;
          games[i].setupTime = setupTime;
          setGames([...games])
          setItems([...items, games[i]]);
        } else {
          alert("That game is already added in cart");
        }
      }
    }
  };

  localStorage.setItem("checkoutitems", JSON.stringify(items));
  var today = new Date().toISOString().slice(0, 16);
  console.log(games);
  const handlestartDate = (e, i) => {
    games[games.indexOf(i)].startTime=e.$d
    setGames([...games])
  };
  const handleendDate = (e, i) => {
    games[games.indexOf(i)].endTime=e.$d
    setGames([...games])
  };

  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("loginItem");
  };

  const handleCheckout = () => {
    if (items.length > 0) {
      navigate("/checkout");
    } else {
      alert("No items in cart");
    }
  };

  return (
    <div className="main-home-container">
      <div className="home-navbar">
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
            Cart Page
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
      </div>
      <div className="homepage-section">
        <h2 className="home-heading">Here are the games that are being held</h2>
        <div className="cartItem-wrapper">
        {games.map((i) => (
          <div className="cartItemContainer">
            <div className="cartItem strickerGame">{i.name}</div>
            <div className="dateWrapper">
            <div className="dateSection">
              <label>Start Date</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker"]}>
                  <DateTimePicker 
                  disablePast
                  className="inputMUI"
                  onChange={(e) => handlestartDate(e, i)}/>
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="dateSection">
              <label>End Date</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker"]}>
                  <DateTimePicker 
                  disablePast
                  className="inputMUI"
                  onChange={(e) => handleendDate(e, i)}/>
                </DemoContainer>
              </LocalizationProvider>
            </div>
            </div>
            <Button
              variant="contained"
              sx={{padding:0}}
              onClick={(e) => handleGame(e)}
            >
              +
            </Button>
          </div>
        ))}
        </div>
        <h3>current items in cart :{items.length}</h3>
        <Button variant="outlined"  onClick={handleCheckout}>
          Checkout
        </Button>
      </div>
    </div>
  );
}
