import React, { useEffect, useState } from "react";
import "../Login/login.css";
import { Button, TextField } from "@mui/material";

export default function Login() {
  function validName(){
    if (data.username == "") {
      setUname("please enter username");
    } else {
      setUname("");
    }
  }
  function validPasword(){
    if (data.password == "") {
      setPass("please enter password");
    } else {
      setPass("");
    }
  }
  
  const handleChange=(e, prop)=>{
    setData({
      ...data,
      [prop]: e.target.value
    })
    setData((data)=>{
      console.log(data);
      return data
    })
   
  }
  function resetData() {
    console.log(data.username, data.password);
    if(data.username!=="" && data.password!==""){
      setData({username:"", password:""})
    }
  }
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  
  useEffect(()=>{ 
  
    if(data.username!==""){
      validName()
    }
    if(data.password!==""){
      validPasword()
    }
    
  },[data])
  return (
    <div className="main-login-container">
      <div className="login-section">
        <div className="login-title">Login</div>
        <div className="username-section">
          <TextField
            sx={{ marginTop: 1 }}
            id="outlined-basic-2"
            label="Username"
            variant="outlined"
            value={data.username}
            onChange={(e)=> (handleChange(e, "username"))}
            
           
          />
          {uname == "" ? "" : <span className="cutomError">{uname}</span>}
        </div>
        <div className="password-section">
          <TextField
            sx={{ marginTop: 1 }}
            type="password"
            id="outlined-basic-1"
            label="Password"
            variant="outlined"
            value={data.password}
            onChange={(e)=> (handleChange(e, "password"))}
          />
          {pass == "" ? "" : <span className="cutomError">{pass}</span>}  
        </div>

        <Button sx={{ marginTop: 1 }}
          variant="contained"
          onClick={() => (resetData(), validName(),validPasword())}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
