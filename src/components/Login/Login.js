import React, { useEffect, useState } from "react";
import "../Login/login.css";
import { useForm } from "react-hook-form";

import { Button, TextField } from "@mui/material";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

export default function Login() {
  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});
const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setValue, clearErrors } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    // console.log(data);
    var users=(JSON.parse(window.localStorage.getItem('users')));
    if(users.email===data.email && users.password===data.password){
      localStorage.setItem("loginItem",true)
     navigate("/home")
    }else{
      alert("details are wrong")
    }
   
  }
  const handleRegister=()=>{
    navigate('/')
  }
const handleChange=(e, key)=>{
// console.log(e.target.value, key);
clearErrors(key)
setValue(key,e.target.value )
}

return (
    <form className="main-from-container" onSubmit={handleSubmit(onSubmit)}>

    <div className="main-login-container">
      <div className="login-section" >
        <div className="login-title">Login</div>
        <div className="username-section">
          <TextField
            // sx={{ width:"50ch",marginTop: 1 }}
            sx={{ marginTop: 1}}
            id="outlined-basic-2"
            label="Email"
            variant="outlined"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            onChange={(e)=>{handleChange(e, "email")}}
          />

        </div>

        <div className="password-section">
          <TextField
           // sx={{ width:"50ch",marginTop: 1 }}
           sx={{ marginTop: 1}}
            type="password"
            id="outlined-basic-1"
            label="Password"
            variant="outlined"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            onChange={(e)=>{handleChange(e, "password")}}
          />


        </div>
        
        <div className="submit-btn">
            <Button  
            sx={{width:"100%",marginTop:"5px"}}
            variant="contained" type="submit">Submit</Button>
          </div>
          <div className="register-btn">
            <Button 
            sx={{width:"100%"}} 
            variant="outlined" onClick={handleRegister} >Register</Button>
          </div>
      </div>

    </div>
    </form>
  );
}
