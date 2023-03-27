import React, { useEffect, useState } from "react";
import "../Login/login.css";
import { Button, TextField } from "@mui/material";

export default function Login() {
  const [inputget, setinputget] = useState();
  const [inputget_, setinputget_] = useState();
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleChange = (event) => {
    const updateValue = event.target.value;

    if (updateValue) {
      setinputget(updateValue);
    } else if (hasSubmitted == true) {
      setinputget("");
    }
  };
  const handleChange_ = (event) => {
    const updateValue = event.target.value;

    if (updateValue) {
      setinputget_(updateValue);
    } else {
      setinputget_("");
    }
  };

  const submit = () => {
    const body = {
      name: inputget,
      pass: inputget_,
    };
    console.log(body);
    setHasSubmitted(true);
    
    if (body.name !== "" && body.pass!== "") {
      setinputget("");
      setinputget_("");
    }
  };

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
            value={inputget}
            onChange={(e) => handleChange(e)}
          />
          {inputget ? (
            ""
          ) : (
            <span className="cutomError">please enter username</span>
          )}
          {/* {uname == "" ? "" : <span className="cutomError">{uname}</span>} */}
        </div>
        <div className="password-section">
          <TextField
            sx={{ marginTop: 1 }}
            type="password"
            id="outlined-basic-1"
            label="Password"
            variant="outlined"
            value={inputget_}
            onChange={(e) => handleChange_(e)}
          />
          {inputget_ ? (
            ""
          ) : (
            <span className="cutomError">please enter password</span>
          )}
          {/* {pass == "" ? "" : <span className="cutomError">{pass}</span>}   */}
        </div>

        <Button
          sx={{ marginTop: 1 }}
          variant="contained"
          onClick={submit}
          // onClick={() => (resetData(), validName(),validPasword())}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
