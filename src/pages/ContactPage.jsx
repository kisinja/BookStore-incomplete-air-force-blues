import React, { useState } from "react";

const ContactPage = () => {

    // State variables for form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // State variables for loading, error, and success messages
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    // Formspree form ID from environment variables
    const FORM_ID = import.meta.env.VITE_FORM_SPREE_FORM_ID;

    const handleSubmit = async (e) => {
        // Prevent default form submission
        e.preventDefault();

        // set loading state to true
        setLoading(true);

        // setting error and success message to null and empty string
        setError(null);
        setSuccessMessage("");

        try {
            const response = await fetch(`https://formspree.io/f/${FORM_ID}`,{
                method:'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    name,
                    email,
                    message
                })
            });

            const text = await response.text();
            console.log(text);
            if(response.ok){
                setSuccessMessage("Your message has been sent successfully!");
                setName("");
                setEmail("");
                setMessage("");
            }
        } catch (err) {
            console.log(err);
            setError("An error occurred while sending your message. Please try again later.");
        } finally{
            setLoading(false);
        }
    };

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

        {/* Error message */}
        {error && <p className="text-red-600 text-xs px-12 mt-3 font-semibold">{error}</p>}

        {/* Success message */}
        {successMessage && <p className="text-green-600 text-xs px-12 mt-3 font-semibold">{successMessage}</p>}

      {/* Form container */}
      <form onSubmit={handleSubmit} className="py-8 px-12 rounded-lg flex flex-col gap-3">
        {/* Getting the Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="block text-gray-600">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* Submit button */}
        <button
          className="py-2 px-4 w-max text-white bg-indigo-600 rounded font-semibold cursor-pointer hover:bg-indigo-700 disabled:bg-indigo-400 mx-auto"
          type="submit"
          disabled={loading}
        >
          {
            loading ? "Sending..." : "Send Message"
          }
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
