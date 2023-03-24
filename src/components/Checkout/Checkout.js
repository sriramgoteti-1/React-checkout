import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import "./checkout.css";

const userOptions = [
  {
    Id: 1,
    name: "Baghajatin, Kolkata, WB",
    Distance: 10,
    Price: 1500,
  },
  {
    Id: 2,
    name: "Garia, Kolkata, WB",
    Distance: 20,
    Price: 2000,
  },
  {
    Id: 3,
    name: "Sealdaha, Kolkata, WB",
    Distance: 15,
    Price: 1500,
  },

  {
    Id: 4,
    name: "Jadavpur, Kolkata, WB",
    Distance: 25,
    Price: 2500,
  },
];
var currentDate=new Date().toLocaleString();
console.log(currentDate);
export default function Checkout() {
  const navigate = useNavigate();
  const [price, setPrice] = useState([]);
  const [distance, setDistance]=useState([])
  var items = JSON.parse(localStorage.getItem("checkoutitems") || "[]");
  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("loginItem");
  };
  const handlePayment=(e)=>{
    localStorage.setItem("paymentOptions",e.target.value);
  }
  const handleOption = (e, index) => {
    console.log(index, e);
    userOptions.map((op) => {
      if (op.name == e) {
        let updatePrice = [...price];
        let updateDistance=[...distance]
        updatePrice[index] = op.Price;
        updateDistance[index]=op.Distance*2 +"Km"
        setPrice(updatePrice);
        setDistance(updateDistance)
      }
    });
  };
  console.log(price);
  console.log(items.length);

  var totalprice = 0;
  price.forEach((item) => {
    item=item
    totalprice += item;
  });
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
    <>
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

      {items.length > 0 ? (
        items.map((item, index) => (
          <div className="checkout-cont">
            <div className="item-container">
              <div>Game Name: {item.name}</div>
              <div>Start Time:{item.startTime}</div>
              <div>endTime: {item.endTime}</div>
              <div>setupTime:{item.setupTime}</div>
              <div>totalHrs:{item.totalHrs}</div>
              <select onChange={(e) => handleOption(e.target.value, index)}>
                <option>Select a Location</option>
                {userOptions.map((e) => (
                  <>
                    <option>{e.name}</option>
                  </>
                ))}
              </select>
            </div>
            <div className="distance-section">{distance[index]}</div>
            <div className="price-section">{price[index] ?(price[index]+"/-"):("")}</div>
          </div>
        ))
      ) : (
        <h3>No Items in cart</h3>
      )}
      <div className="totalprice">
        <span>Total Price :{totalprice}/-</span>
      </div>
      <div className="paymentSection">
        <label>Choose a Payment Method:</label>
        <select onChange={(e)=>(handlePayment(e))}>
          <option>Select:</option>
          <option>UPI</option>
          <option>Cash</option>
          <option>Online</option>
          <option>Cheque</option>
        </select>
      </div>
      <div className="enquirySection">
        <Button variant="contained">Enquiry</Button>
      </div>
    </>
  );
}
