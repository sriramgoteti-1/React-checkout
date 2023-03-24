import React, { useState ,useEffect} from "react";
import "../Register/register.css"
import { useForm } from "react-hook-form";

import { Button, TextField } from "@mui/material";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate(); 
  const validationSchema = yup.object().shape({
    username:yup.string().required(),
    email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const { register, handleSubmit, formState: { errors },reset, setValue, clearErrors } = useForm({
  resolver: yupResolver(validationSchema),
});

const onSubmit = (data) => {
  console.log(data)
  // const items = (() => {
  //   const fieldValue = localStorage.getItem('users');
  //   return fieldValue === null
  //     ? []
  //     : JSON.parse(fieldValue);
  // })();
  
  // // 3.
  // items.push(data);
  
  // // 4.
  localStorage.setItem('users', JSON.stringify(data));
  navigate('/login')
  
}
const handleLogin=()=>{
navigate('/login')
}
const handleChange=(e, key)=>{
  // console.log(e.target.value, key);
  clearErrors(key)
  setValue(key,e.target.value )
  }
useEffect(()=>{
  localStorage.removeItem("loginItem")
})
  return (
    <form className="main-from-container" onSubmit={handleSubmit(onSubmit)}>

    <div className="main-container">
      <div className="register-section">
        <div className="register-title">Register</div>
        <div className="username-section">
          <TextField
            sx={{ marginTop: 1}}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
            onChange={(e)=>{handleChange(e, "username")}}
          />
        </div>
        <div className="email-section">
          <TextField
            sx={{ marginTop: 1}}
            id="outlined-basic"
            label="Email Id"
            variant="outlined"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            onChange={(e)=>{handleChange(e, "email")}}
          />
        </div>

        <div className="password-section">
          <TextField
             sx={{ marginTop: 1}}
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            onChange={(e)=>{handleChange(e, "password")}}
          />
          
        </div>

        <div className="submit-btn">
            <Button sx={{width:"100%",marginTop:"5px"}} variant="contained" type="submit">Submit</Button>
          </div>
          <div className="login-btn">
            <Button sx={{width:"100%", marginTop:"5px"}} variant="outlined" onClick={handleLogin}>Login</Button>
          </div>
      </div>
    </div>
    </form>
  );
}
