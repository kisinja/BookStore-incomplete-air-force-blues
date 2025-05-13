import React from "react";

const ContactPage = () => {
  return (
    <section className="container mx-auto py-4 bg-white mt-6 rounded-lg shadow-md">
      {/* Text container */}
      <div className="flex flex-col gap-2 items-center text-center px-8">
        <h1 className="font-bold text-2xl">Contact Us</h1>
        <p className="mt-2 text-gray-600 tracking-wide">
          We would love to hear from you! Please reach out with any questions or
          feedback.
        </p>
      </div>

      {/* Form container */}
      <form className="py-8 px-12 rounded-lg flex flex-col gap-3">

        {/* Getting the Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="block text-gray-600">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full"
          />
        </div>

        {/* Getting the Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full"
          />
        </div>

        {/* Getting the Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="block text-gray-600">
            Message
          </label>
          <textarea
            type="text"
            placeholder="Type your message here..."
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full"
          />
        </div>

        {/* Submit button */}
        <button className="py-2 px-4 w-max text-white bg-indigo-600 rounded font-semibold cursor-pointer hover:bg-indigo-700 disabled:bg-indigo-400" type="submit">
            Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
