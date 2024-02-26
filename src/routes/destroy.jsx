import { redirect } from "react-router-dom";
import axios from 'axios';


export async function action({ params }) {
    try {
      const id = params.bookId;
      const response = await axios.delete(`http://127.0.0.1:5000/books/${id}`);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  
    return redirect("/admin");
  }
