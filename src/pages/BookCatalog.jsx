import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import BookList from "../components/BookList";
import { books } from "../assets";
import { Link } from "react-router-dom";

const BookCatalog = () => {
  const firstName = "Sam";
  const lastName = "Tosh";
  //const fullName = firstName + " "+lastName;
  const fullName = `${firstName} ${lastName}`;
  
  console.log(fullName);

  const [filteredBooks, setFilteredBooks] = useState([]);

  // State to manage the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch books using useEffect and set the filteredBooks state
  useEffect(() => {
    setFilteredBooks(books);
  }, []);

  // Filter books based on search term
  useEffect(() => {
    // If the search term is empty, reset the filtered books to all books
    // This is to avoid showing all books when the search term is empty
    if (searchTerm.trim() === "") {
      setFilteredBooks(books);
      return;
    }

    // Filter books based on the search term
    const filtered = books.filter((book) => {
      const searchTermToLowerCase = searchTerm.toLowerCase();
      return (
        book.title.toLowerCase().includes(searchTermToLowerCase) ||
        book.author.toLowerCase().includes(searchTermToLowerCase) ||
        book.category.toLowerCase().includes(searchTermToLowerCase)
      );
    });
    setFilteredBooks(filtered);
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto relative mb-12">
        <div className="relative flex items-center w-full">
          <input
            type="text"
            placeholder="Search for books, authors, categories..."
            className="w-full py-4 pl-12 pr-6 text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm focu:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 hover:shadow-md"
            autoComplete="off"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />

          <button className="absolute right-2 bg-indigo-600 text-white w-12 h-12 rounded-full hover:bg-indigo-700 transition-colors flex items-center justify-center">
            <FaSearch />
          </button>
        </div>

        {/* Search results container => To be implemented Later 😎😎 */}
        {searchTerm && filteredBooks.length > 0 ? (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg maxh-96 overflow-y-auto ">
            {filteredBooks.slice(0, 5).map((book) => (
              <Link
                to={`/books/${book.id}`}
                key={book.id}
                className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
              >
                <div className="flex items-center">
                  <img
                    src={book.coverImage}
                    alt=""
                    className="w-10 h-14 object-cover rounded mr-3"
                  />
                  <div className="">
                    <p className="font-medium text-gray-800">{book.title}</p>
                    <p className="text-sm text-gray-500">{book.author}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : searchTerm && filteredBooks.length === 0 ? (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
            <p className="px-4 py-3 text-gray-500">No results found</p>
          </div>
        ) : null}
      </div>

      {/* Results Section => Books Display */}
      <div className="mb-8">
        <h3 className="font-semibold text-xl">Our Library</h3>
      </div>

      <BookList books={filteredBooks} />
    </div>
  );
};

export default BookCatalog;
