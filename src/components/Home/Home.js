import React, { useEffect, useState , useRef} from "react";
import "../Home/home.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
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
    startTime: "26.03.2023 10:00:00",
    endTime: "27.03.2023 10:00:00",
    totalHrs: "12 Hrs",
    setupTime: "25.03.2023 10:00:00",
  },
  {
    name: "Puch Challange",
    startTime: "26.03.2023 10:00:00",
    endTime: "27.03.2023 10:00:00",
    totalHrs: "12 Hrs",
    setupTime: "25.03.2023 10:00:00",
  },
  {
    name: "Bow &amp; Arrow",
    startTime: "26.03.2023 10:00:00",
    endTime: "27.03.2023 10:00:00",
    totalHrs: "12 Hrs",
    setupTime: "25.03.2023 10:00:00",
  },
  {
    name: "Catch Fish",
    startTime: "26.03.2023 10:00:00",
    endTime: "27.03.2023 10:00:00",
    totalHrs: "12 Hrs",
    setupTime: "25.03.2023 10:00:00",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const handleGame = (e) => {
    for (let i = 0; i < games.length; i++) {
      if (games[i].name == e.target.previousElementSibling.innerHTML) {
        if (items.indexOf(games[i]) == -1) {
          setItems([...items, games[i]]);
        } else {
          alert("That game is already added in cart");
        }
      }
    }
  };
  localStorage.setItem("checkoutitems", JSON.stringify(items));

  const handlestartDate = (e) => {
    console.log(e.target.previousElementSibling.innerHTML);
  };

  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("loginItem");
  };
  console.log(items);
  const handleCheckout = () => {
    navigate("/checkout");
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

  // const list = (anchor) => (
  //   <Box
  //     sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
  //     role="presentation"
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //   >
  //     <List>
  //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

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
                // onClick={handleDashboard}
              >
                {["left"].map((anchor) => (
                  <React.Fragment key={"left"}>
                    <MenuIcon onClick={toggleDrawer(anchor, true)} />

                    <Drawer
                      anchor={"left"}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {/* {list(anchor)} */}
                    </Drawer>
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
            <input type="datetime-local" onChange={(e)=>(handlestartDate(e))} />
          </div>
          <div>
            <label>End Date</label>
            <input type="datetime-local" onChange={handlestartDate} />
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
            <input type="datetime-local" onChange={handlestartDate} />
          </div>
          <div>
            <label>End Date</label>
            <input type="datetime-local" onChange={handlestartDate} />
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
            <input type="datetime-local" onChange={handlestartDate} />
          </div>
          <div>
            <label>End Date</label>
            <input type="datetime-local" onChange={handlestartDate} />
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
            <input type="datetime-local" onChange={handlestartDate} />
          </div>
          <div>
            <label>End Date</label>
            <input type="datetime-local" onChange={handlestartDate} />
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
