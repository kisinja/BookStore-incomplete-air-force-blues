import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { books, featuredBooks } from "../assets";
import BookCard from "../components/BookCard";
import CallToAction from "../components/CallToAction";

const HomePage = () => {
  const featuredCollection = books.filter((book) =>
    featuredBooks.includes(book.id)
  );
  console.log(featuredCollection);

  return (
    <>
      {/* Hero Section */}
      <section className=" relative bg-gradient-to-r from-indigo-600 mt-5 to-purple-600 text-white py-20 rounded-b-4xl">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 capitalize">
            Discover your next favorite book
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our curated collection of timeless classic and modern
            masterpieces.
          </p>
          <Link
            to="/book-catalog"
            className="inline-flex items-center bg-white text-indigo-600 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Browse Collection
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            Featured Collection
          </h2>
          <div className="w-20 h-2 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {featuredCollection &&
            featuredCollection.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction/>
    </>
  );
};

export default HomePage;

