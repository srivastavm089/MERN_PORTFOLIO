import React, { useEffect, useState } from "react";
import "../Contact/contact.css";
import { Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { contact } from "../../redux/action/user";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
const Contact = () => {
  const { message, error, loading } = useSelector((state) => state.contact);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "CONTACT_CLEAR_ERROR" });
    }
  }, [message]);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "CONTACT_CLEAR_MESSAGE" });
    }
  }, [error]);

  const dispatch = useDispatch();
  return (
    <div className="contact">
      <Toaster />
      <div className="contactRigthBar"></div>
      <div className="contactContainer">
        <form
          className="contactContainerForm"
          onSubmit={handleSubmit((data) =>{
            dispatch(contact(data.name, data.email, data.message))
            reset();
          }
          
       
          )}
        >
          <Typography variant="h4">Contact Us</Typography>
          <input
            type="text"
            {...register("name", { required: "Enter your name" })}
            placeholder="Name"
          />
          <input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "Please Enter Your Email Id ",
              pattern: {
                value: /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/gim,
                message: `Enter a valid email`,
              },
            })}
          />
          {errors.email && (
            <p style={{ color: "red", textAlign: "center" }}>
              {errors.email.message}
            </p>
          )}
          <textarea
            {...register("message", { required: "Enter your message" })}
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <Button variant="contained" type="submit" disabled={loading}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
