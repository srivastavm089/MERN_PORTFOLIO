import "../Login/login.css";
import { Alert, AlertTitle, Typography } from "@mui/material";
import { Button } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../../redux/action/user";
import { useMemo } from "react";
import { useSelector } from "react-redux";

import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.login);
  console.log(message);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  if (error) {
    console.log(error);
  }
  useEffect(() => {
  
    if (error) {
      toast.error(error);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [error]);
  useEffect(()=>{
    if (message) {
      toast.success(message)
      dispatch({ type: "CLEAR_ERROTS" });
    }
  },[message])


  return (
    <div className="login">
      <div className="loginContainer">
    <Toaster/>

        <form className="loginForm" onSubmit={submitHandler}>
          <Typography variant="h4">
            <p>A</p>
            <p>D</p>
            <p>M</p>
            <p>I</p>
            <p style={{ marginRight: "1vmax" }}>N</p>
            <p>P</p>
            <p>A</p>
            <p>N</p>
            <p>E</p>
            <p>L</p>
          </Typography>
          <div>
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
