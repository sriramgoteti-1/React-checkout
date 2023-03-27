import React, { useEffect, useState, useRef } from "react";
import "../Home/home.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
const games = [
  {
    name: "Hi Stricker",
  },
  {
    name: "Puch Challange",
  },
  {
    name: "Bow &amp; Arrow",
  },
  {
    name: "Catch Fish",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const handleGame = (e) => {
    for (let i = 0; i < games.length; i++) {
      if (
        games[i].name == e.target.parentElement.children[0].innerHTML &&
        games[i].startTime &&
        games[i].endTime
      ) {
        if (items.indexOf(games[i]) == -1) {
          var time =
            (Date.parse(games[i].startTime) - Date.parse(games[i].endTime)) /
            3600000;
          games[i].totalHrs = time;
          var setupTime=((Date.parse(games[i].startTime) - (3600*1000*12)) )
          games[i].setupTime=setupTime
          setItems([...items, games[i]]);
        } else {
          alert("That game is already added in cart");
        }
      }
    }
  };

  localStorage.setItem("checkoutitems", JSON.stringify(items));
  var today = new Date().toISOString().slice(0, 16);
console.log(today);
  const handlestartDate = (e) => {
    console.log(e.target.parentElement.parentElement.parentElement.previousElementSibling  );
    for (let i = 0; i < games.length; i++) {
      if(((Date.parse(games[i].endTime)-Date.parse(e.target.value))/3600*1000)<6 && Date.parse(games[i].endTime)>0){
        alert("End date should be greater than start date by 6Hrs")
      }
      else if (
        games[i].name == e.target.parentElement.previousElementSibling.innerHTML
      ) {
        games[i].startTime = e.target.value;
      }
    }
    console.log(games);
  };
  const handleendDate = (e) => {
    for (let i = 0; i < games.length; i++) {
      if(((Date.parse(e.target.value)-Date.parse(games[i].startTime))/(3600*1000))<6){
        alert("End date should be greater than start date by 6Hrs")
      }
      else  if (
        games[i].name ==
        e.target.parentElement.previousElementSibling.previousElementSibling
          .innerHTML 
      ) {
        games[i].endTime = e.target.value;
      }
    }

    console.log(games);
  };

  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("loginItem");
  };

  const handleCheckout = () => {
   if(items.length>0){
    navigate("/checkout");
   }else{
    alert("No items in cart")
   }
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
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
                {["left"].map((anchor) => (
                  <React.Fragment key={"left"}>
                    <MenuIcon onClick={toggleDrawer(anchor, true)} />

                    <Drawer
                      anchor={"left"}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    ></Drawer>
                  </React.Fragment>
                ))}
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 0.45 }}>
                Cart Page
              </Typography>
              <div>
                <a href="/home">HOME</a>
              </div>
              <Button
                sx={{ flexGrow: 0.5, justifyContent: "end" }}
                color="inherit"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <div className="homepage-section">
        <h2 className="home-heading">Here are the games that are being held</h2>
        <div className="cartItemContainer">
          <div className="cartItem strickerGame">Hi Stricker</div>
          <div>
            <label>Start Date</label>
            <input
              type="datetime-local"
              className="dateSection"
              onChange={(e) => handlestartDate(e)}
              min={today}
            />
          </div>
          <div>
            <label>End Date</label>
            <input
              type="datetime-local"
              className="dateSection"
              onChange={(e) => handleendDate(e)}
              min={today}
            />
          </div>
          <Button
            variant="contained"
            className="strickerGame"
            onClick={(e) => handleGame(e)}
          >
            Add to Cart
          </Button>
        </div>
        <div className="cartItemContainer">
          <div className="cartItem puchGame">Puch Challange</div>
          <div>
            <label>Start Date</label>
            <input
              type="datetime-local"
              className="dateSection"
              onChange={(e) => handlestartDate(e)}
              min={today}
            />
          </div>
          <div> 
            <label>End Date</label>
            <input
              type="datetime-local"
              className="dateSection"
              onChange={(e) => handleendDate(e)}
              min={today}
            />
          </div>
          <Button
            variant="contained"
            className="puchGame"
            onClick={(e) => handleGame(e)}
          >
            Add to Cart
          </Button>
        </div>
        <div className="cartItemContainer">
          <div className="cartItem bowGame">Bow &amp; Arrow</div>
          <div>
            <label>Start Date</label>
            <input
              type="datetime-local"
              className="dateSection"
              onChange={(e) => handlestartDate(e)}
              min={today}
            />
          </div>
          <div>
            <label>End Date</label>
            <input
              type="datetime-local"
              className="dateSection"
              onChange={(e) => handleendDate(e)}
              min={today}
            />
          </div>
          <Button
            variant="contained"
            className="bowGame"
            onClick={(e) => handleGame(e)}
          >
            Add to Cart
          </Button>
        </div>
        <div className="cartItemContainer">
          <div className="cartItem fishGame">Catch Fish</div>
          <div>
            <label>Start Date</label>
            <input
              type="datetime-local"
              className="dateSection"
              onChange={(e) => handlestartDate(e)}
              min={today}
            />
          </div>
          <div>
            <label>End Date</label>
            <input
              type="datetime-local"
              className="dateSection"
              onChange={(e) => handleendDate(e)}
              min={today}
            />
          </div>
          <Button
            variant="contained"
            className="fishGame"
            onClick={(e) => handleGame(e)}
          >
            Add to Cart
          </Button>
        </div>
        <h3>current items in cart :{items.length}</h3>
        <Button variant="outlined" onClick={handleCheckout}>
          Checkout
        </Button>
      </div>
    </div>
  );
}
