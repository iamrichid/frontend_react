import { Form, useLoaderData,redirect } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [image, setImage] = useState(null);

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append text data
    formData.append('title', e.target.elements.title.value);
    formData.append('description', e.target.elements.description.value);
    formData.append('quantity', e.target.elements.quantity.value);
    formData.append('instock', e.target.elements.instock.value);

    // Append image
    formData.append('image', image);

    try {
      const result = await axios.post(
        'http://127.0.0.1:5000/books',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      console.log('Upload successful', result);
      
    } catch (error) {
      console.error('Upload failed', error);
    }

    return redirect(`/book`);
  };

  const onInputChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
     
      <Form  onSubmit={submitImage} id="contact-form" >
        <label htmlFor='title'>Title</label>
        <input type='text' name='title' placeholder='Title of book' />

        <label htmlFor='description'>Description:</label>
        <input type='text' name='description' placeholder='Description' />

        <label htmlFor='quantity'>Quantity:</label>
        <input type='text' name='quantity' placeholder='Quantity' />

        <label htmlFor='instock'>Instock</label>
        <select name='instock' id='instock'>
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </select>

        <label htmlFor='image'>Image:</label>
        <input type='file' name='image' onChange={onInputChange} accept='image/*' />

        <button type='submit'>Submit</button>
      </Form>
 
  );
}
