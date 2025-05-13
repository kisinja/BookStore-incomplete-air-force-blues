import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { books } from "../assets";
import Button from "../components/Button";
import BookList from "../components/BookList";
import { FaRegStar, FaStar } from "react-icons/fa6";

const BookDetails = () => {
  // Get bookId from URL parameters using useParams() hook from react-router-dom
  // This allows us to access the bookId passed in the URL
  const params = useParams();

  // State to hold the book item details
  const [bookItem, setBookItem] = useState({});

  const [relatedBooks, setRelatedBooks] = useState([]);

  console.log(bookItem);

  // Destructuring the bookId from the params object
  const { bookId } = params;

  // Fetch book details using bookId and set the bookItem state
  // The useEffect hook runs when the component mounts and whenever bookId changes
  useEffect(() => {
    const book = books.find((book) => book.id === parseInt(bookId));
    setBookItem(book);
  }, [bookId]);

  // Fetch the related Books
  useEffect(() => {
    const related = books.filter(
      (book) => book.category === bookItem.category && book.id !== bookItem.id
    );
    setRelatedBooks(related);
  }, [bookItem.category, bookItem.id]);

  // If bookItem is not found, return a message indicating that the book was not found
  if (!bookItem) {
    return <div>Book not found</div>;
  }

  // Calculating the star ratings display
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hashalfStars = rating % 1 >= 0.5;

    for(let i = 1; i <= 5; i++){
        if(i <= fullStars){
            stars.push(
                <FaStar key={i} className="text-yellow-400" />
            )
        } else if(i === fullStars + 1 && hashalfStars){
            stars.push(
                <FaStar className="text-yellow-400 opacity-50" />
            )
        } else{
            stars.push(
                <FaRegStar className="text-yellow-400" />
            )
        }
    }

    return stars;
  };

  if(!bookItem){
    return <div>Book not found</div>
  }

  if (bookItem){
    return (
    <>
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-md mt-3 flex flex-col md:flex-row gap-4 h-max">
        {/* IMAGE CONTAINER */}
        <div className="w-full md:w-1/2 h-full">
          <img
            src={bookItem.coverImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* DETAILS CONTAINER */}
        <div className="w-full md:w-1/2 p-4 flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-blue-600 bg-blue-100 rounded-2xl w-max p-1">
                {bookItem.category}
              </span>
              <h2 className="text-gray-900 text-2xl font-bold">
                {bookItem.title}
              </h2>
              <p className="text-gray-600 text-lg">by {bookItem.author}</p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-blue-700 font-bold text-xl">
                ${bookItem.price}
              </span>
              <p className="text-green-500 font-light">
                {bookItem.stock > 0 ? (
                  `In Stock (${bookItem.stock} available)`
                ) : (
                  <span className="text-red-500">Out of Stock</span>
                )}
              </p>
            </div>
          </div>

          {/* RATINGS SECTION => tO BE DONE LATER */}
          <div className="flex gap-2">
            {
                renderStars(bookItem.rating)
            }
          </div>

          {/* BUTTONS SECTION */}
          <div className="flex gap-4 mt-4 w-full">
            <Button type="addToCart" />
            <Button type="preview" />
          </div>

          {/* DESCRIPTION SECTION */}
          <div>
            <h3 className="text-blue-600 font-medium text-sm pb-2 border-b border-blue-600 w-max">
              Description
            </h3>

            <p className="text-lg font-normal tracking-wide text-gray-600 pt-2 ">
              {bookItem.description}
            </p>
          </div>

          {/* OTHER DETAILS */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex flex-col">
              <h4 className="text-sm font-medium text-gray-500">Publisher</h4>
              <span className="mt-1 text-sm text-gray-900">
                {bookItem.publisher}
              </span>
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm font-medium text-gray-500">Published</h4>
              <span className="mt-1 text-sm text-gray-900">
                {bookItem.publishedYear}
              </span>
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm font-medium text-gray-500">Pages</h4>
              <span className="mt-1 text-sm text-gray-900">
                {bookItem.pages}
              </span>
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm font-medium text-gray-500">Language</h4>
              <span className="mt-1 text-sm text-gray-900">
                {bookItem.language}
              </span>
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm font-medium text-gray-500">ISBN</h4>
              <span className="mt-1 text-sm text-gray-900">
                {bookItem.isbn}
              </span>
            </div>
          </div>
        </div>
      </div>

      {relatedBooks.length > 0 && (
        <div className="container mx-auto p-4 shadow-md bg-gray-100 my-6 rounded-lg">
          {/* RELATED BOOKS SECTION */}
          <div className="flex flex-col gap-6">
            <h2 className="text-gray-700 text-xl font-semibold">
              Related to '{bookItem.title}'
            </h2>

            <BookList books={relatedBooks} />
          </div>
        </div>
      )}
    </>
  );
  }
};

export default BookDetails;
