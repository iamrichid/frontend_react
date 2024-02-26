import React, { useState } from 'react';
import { Form, useLoaderData,redirect } from "react-router-dom";
import axios from 'axios';


export default function Login() {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const form = new FormData();

      try {
        
        const response = await axios.post('http://127.0.0.1:5000/auth',form);
        console.log('Login successful:', response.data);
    
        return redirect('/admin')
       
      } catch (error) {
        console.error('login error:', error.message);
       
      }
      
    
  };

  return (
    <div id="register-page">
      <h1>Login</h1>
      <Form id="register-page-form" method='post'>
        <input type="text" name="user" placeholder="Username"  />
        <input type="password" name="pwd" placeholder="Password" />
        <button type="submit">Login</button>
      </Form>
    </div>
  );
}



export async function action({ request }) {
  try {
    const formData = await request.formData();
    const loginDetails = Object.fromEntries(formData);
    
    console.log(loginDetails)
    const response = await axios.post('http://127.0.0.1:5000/auth',loginDetails);
        console.log('Login successful:', response.data);
    
  } catch (error) {
    console.error('Error data:', error);
  }

  return redirect("/admin");
}
