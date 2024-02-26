import { Outlet,Link,useLoaderData, Form , redirect, useNavigation,} from "react-router-dom"
import axios from 'axios';


export default function Root() {
    const { books } = useLoaderData();
    const navigation = useNavigation();
    return (
      <>
        <div id="sidebar">
          <h1>BookStore</h1>
          <div>
            <Form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search books"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              >
              </div>


            </Form>
            <Form method="post">
              <button type="submit">Add</button>
            </Form>
          </div>
{/* Nav */}
          <nav>
          {books.length ? (
            <ul>
              {books.map((book) => (
                <li key={book.id}>
                  <Link to={`books/${book._id}`}>
                    {book.title || book.description ? (
                      <>
                        {book.title} {book.description}
                      </>
                    ) : (
                      <i>No Book</i>
                    )}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No books</i>
            </p>
          )}
          </nav>

        </div>

        <div id="detail" className={
          navigation.state === "loading" ? "loading" : ""
        }>
            <Outlet />
        </div>
      </>
    );
  }





export async function loader() {
  try {
    const response = await axios.get('http://127.0.0.1:5000/books');
    const books = response.data;
    console.log(books)
    return { books };
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error appropriately (e.g., show an error message to the user)
    return { books: [] }; // Return an empty array or handle the error case
  }
}



  


