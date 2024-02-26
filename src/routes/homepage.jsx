import React, { useState } from 'react';
import { Form, useLoaderData, redirect, Link } from "react-router-dom";
import axios from 'axios';


export default function Homepage() {


  return (
    <div >
        <header>
      <nav>
        <div className="logo">Bookstore</div>
        <ul className="nav-links">
          <li> <Link to={'/register'}>Register </Link> </li>
          <li> <Link to={'/login'}>Login </Link> </li>
        </ul>
      </nav>

    </header>
    </div>
  );
}


