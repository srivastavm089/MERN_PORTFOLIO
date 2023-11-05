import React, { useState } from 'react'
import "../Contact/contact.css";
import { Button, Typography } from '@mui/material';

const Contact = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
 const submitHandler =(e)=>{
    e.preventDefault()
 }
  return (
    <div className='contact'>
        <div className='contactRigthBar'></div>
        <div className='contactContainer'>
            <form  className="contactContainerForm" onSubmit={submitHandler}>
                <Typography variant='h4'>Contact Us</Typography>
                <input type="text" name='' id='' placeholder='Name' onChange={(e)=> setName(e.target.value)}/>
                <input type="text" placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Message' onChange={(e)=> setMessage(e.target.value)}></textarea>
                <Button variant="contained" type="submit">Send</Button>
            </form>
        </div>

    </div>
  )
}

export default Contact