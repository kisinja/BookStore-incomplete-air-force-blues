import React, { useState } from 'react'
import { FaBookmark, FaRegBookmark, FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {

    const [isBookmarked, setIsBookmarked] = useState(false);

    return (
        <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group'>
            {/* Book cover image */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={book.coverImage || "https://i.pinimg.com/736x/86/a3/1e/86a31e35b4b769ae5861db102a9e0404.jpg"}
                    alt={book.title}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                />

                <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className="absolute top-3 right-3 p-2 bg-white/80 rounded-full backdrop-blur-sm hover:bg-white transition-colors"
                >
                    {
                        isBookmarked ? (
                            <FaBookmark className='text-indigo-600' />
                        ) : (
                            <FaRegBookmark className='text-gray-600 hover:text-indigo-600' />
                        )
                    }
                </button>
            </div>

            {/* Book details */}
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-800 line-clamp-2">
                        <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full whitespace-nowrap ml-2">
                            {book.category}
                        </span>
                    </h3>
                </div>

                <p className="text-gray-600 text-sm mb-">by {book.author}</p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <FaStar className="text-yellow-500 mr-1" />
                        <span className="text-gray-700 font-medium">{book.rating}</span>
                    </div>

                    <span className="text-lg font-bold text-indigo-600">${book.price}</span>
                </div>

                {/* Action buttons */}
                <div className="mt-4 flex space-x-2 justify-center items-center">
                    <Link to={`/books/${book.id}`} className=' bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 px-4 rounded-lg transition-colors'>
                        View Details
                    </Link>

                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-3 rounded-lg transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;