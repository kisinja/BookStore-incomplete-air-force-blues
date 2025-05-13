import React from 'react'
import { FaBookOpen, FaCartShopping } from 'react-icons/fa6';

const Button = ({type}) => {
  return (
    <button className={`py-2 px-4 rounded-lg cursor-pointer flex items-center justify-center w-1/2 ${type === "addToCart" ? "bg-blue-500 text-white" : "bg-white text-blue-500 border border-blue-500"}`}>

        {
            type === "addToCart" ? (
                <FaCartShopping className='mr-2' />
            ) : (
                <FaBookOpen className='mr-2' />
            )
        }
    
      {
        type === "addToCart" ? "Add to Cart" : "Preview"
      }
    </button>
  );
};

export default Button;