import { Form, useLoaderData,redirect } from "react-router-dom";
import axios from 'axios';

export default function EditBook() {
  const { book } = useLoaderData();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Title</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="title"
          defaultValue={book.title}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="description"
          defaultValue={book.description}
        />
      </p>
      <label>
        <input
          type="text"
          name="quantity"
          placeholder="@jack"
          defaultValue={book.quantity}
        />
      </label>

      <label>
        <span>Avatar URL</span>
        <img src={require(`../images/${book.image}`)} alt="bookimage " />
        
        <input
          placeholder="change optional"
          aria-label="Avatar URL"
          type="file"
          name="image"
          accept='image/*'
        />
      </label>
    
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
}

export async function action({ request, params }) {
   
    try {
        const id = params.bookId;
        const formData = await request.formData();
        const updates = Object.fromEntries(formData);
      
        // Add the id to the updates object
        updates.id = id;
        console.log(updates)
        const response = await axios.patch('http://127.0.0.1:5000/books', updates);
        return redirect(`/books/${params.bookId}`);

        
      } catch (error) {
        console.error('Error updating data:', error);   
      }

    }