import React, { useState, useEffect } from "react";
import { FaBook, FaShoppingCart } from "react-icons/fa";

// Placeholder for the actual imports
// import Library from './ui/library';
// import Checkout from './ui/checkout';
// import { fetchBooks } from './service/library';
// import { performCheckout } from './service/payment';

// Mock implementations for the purpose of this example
const fetchBooks = () =>
  Promise.resolve([
    { id: 1, title: "Book One", author: "Author A", isbn: "123456", price: "10.00" },
    { id: 2, title: "Book Two", author: "Author B", isbn: "123457", price: "15.00" },
  ]);

const Library = ({ onSelectBook }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {books.map((book) => (
        <div key={book.id} className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>ISBN: {book.isbn}</p>
            <p>Price: ${book.price}</p>
            <div className="card-actions justify-end">
              <label className="label cursor-pointer">
                <span className="label-text">Select</span>
                <input type="checkbox" className="checkbox" onChange={() => onSelectBook(book)} />
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Checkout = ({ selectedBooks }) => {
  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {selectedBooks.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.isbn}</td>
            <td>${book.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function App() {
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [activeTab, setActiveTab] = useState("library");

  const handleSelectBook = (book) => {
    setSelectedBooks((prev) => {
      const exists = prev.find((b) => b.id === book.id);
      if (exists) {
        return prev.filter((b) => b.id !== book.id);
      } else {
        return [...prev, book];
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="tabs">
        <a className={`tab tab-lifted ${activeTab === "library" ? "tab-active" : ""}`} onClick={() => setActiveTab("library")}>
          <FaBook /> Library
        </a>
        <a className={`tab tab-lifted ${activeTab === "checkout" ? "tab-active" : ""}`} onClick={() => setActiveTab("checkout")}>
          <FaShoppingCart /> Checkout
        </a>
      </div>
      <div className="content">{activeTab === "library" ? <Library onSelectBook={handleSelectBook} /> : <Checkout selectedBooks={selectedBooks} />}</div>
    </div>
  );
}

export default App;
