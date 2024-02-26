import { Form, useLoaderData } from "react-router-dom";
import axios from 'axios';

export default function Book() {

const { book } = useLoaderData();

  return (
  // <h1>Something here</h1>
    <div id="contact">
      <div>
        <h1>
          {book.title || book.description ? (
            <>
              {book.title} {book.description}
            </>
          ) : (
            <i>No Title</i>
          )}{" "}
        </h1>

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
              method="post"
              action="destroy"
>
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
   );
}


export async function loader({ params }) {
  try {
    const response = await axios.get(`http://127.0.0.1:5000/books/${params.bookId}`);
    const book = response.data
    console.log(book);
    return {book}
  
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error appropriately (e.g., show an error message to the user)
    return { book: null }; // Return null or handle the error case
  }
}