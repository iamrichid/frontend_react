import { useState } from "react";

const Books = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (book) => {
      setCart(prevCart => [...prevCart, book]);
    };
  
    const clearCart = () => {
      setCart([]);
    };
  
    const books = [
      {
        id: 1,
        title: "Book 1",
        author: "Author 1",
        price: 10.99,
        coverImage: "book1.jpg"
      },
      {
        id: 2,
        title: "Book 2",
        author: "Author 2",
        price: 12.99,
        coverImage: "book2.jpg"
      },
      {
        id: 3,
        title: "Book 3",
        author: "Author 3",
        price: 9.99,
        coverImage: "book3.jpg"
      }
    ];
    return(
        <div className="container">
            <div className="book-grid">
              {books.map(book => (
                <Book key={book.id} book={book} addToCart={addToCart} />
              ))}
            </div>
            <div className="cart">
              <h2>Cart</h2>
              <button onClick={clearCart}>Clear Cart</button>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>{item.title}</li>
                ))}
              </ul>
            </div>
          </div>
    );
}

const Book = ({ book, addToCart }) => {
    const handleAddToCart = () => {
      addToCart(book);
    };
  
    return (
      <div className="book">
        <img src={`/path/to/${book.coverImage}`} alt={book.title} />
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p>${book.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    );
  };



  export default Books