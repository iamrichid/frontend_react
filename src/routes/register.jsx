import React, { useState } from 'react';
import { Form, useLoaderData, redirect } from "react-router-dom";
import axios from 'axios';


export default function Register() {


  return (
    <div id="register-page">
      <h1>Register an account</h1>
      <Form method="post" id="register-page-form">
        <input type="text" name="user" placeholder="Username" />
        <input type="password" name="pwd" placeholder="Password" />
        <input type="password" name="verifypwd" placeholder="Verify Password"  /> 
        <button type="submit">Create Account</button>
      </Form>
    </div>
  );
}


export async function action({ request }) {
  try {
    const formData = await request.formData();
    const regDetails = Object.fromEntries(formData);
    
    console.log(regDetails)

    const response = await axios.post('http://127.0.0.1:5000/register',regDetails);
    console.log('Registration successful:', response.data);
    return redirect("/login");

  } catch (error) {
    console.error('Could not register', error);
  }

  
}
