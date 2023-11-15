import "../Login/login.css";
import { Alert, AlertTitle, Typography } from "@mui/material";
import { Button } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../../redux/action/user";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { BiError } from "react-icons/bi";
import React, { useEffect, useState } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.login);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({type:'CLEAR_ERROTS'})
    }
  }, [error]);
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({type:'CLEAR_MESSAGE'})
    }
  }, [message]);

  return (
    <div className="login">
      <div className="loginContainer">
        <Toaster />

        <form
          className="loginForm"
          onSubmit={handleSubmit((data) => {
            dispatch(login(data.email, data.password));
          
          })}
        >
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
              type="text"
              placeholder="Admin Email"
              formNoValidate
              {...register("email", {
                required: "Please Enter Your Email Id ",
                pattern: {
                  value: /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/gim,
                  message: `Enter a valid email`,
                },
              })}
            />
            {errors.email && (
              <p
                style={{
                  textAlign: "center",
                  color: "red",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1vh",
                }}
              >
                {" "}
                <BiError /> {errors.email.message}
              </p>
            )}
            <input
              type="password"
              placeholder="Admin Password"
              {...register("password", {
                required: "Please Enter Your Password ",
              })}
            />
            {errors.password && (
              <p
                style={{
                  textAlign: "center",
                  color: "red",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1vh",
                }}
              >
                <BiError />
                {errors.password.message}
              </p>
            )}

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
