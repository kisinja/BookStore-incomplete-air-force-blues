import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white h-max rounded-2xl ">
            {/* Text Details */}
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Start Reading?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Join our community of book lovers today and get a 10% off your first purchase.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/book-catalog" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                        Shop Now
                    </Link>
                    <Link to="/contact" className="bg-transparent border-2 border-white hover:text-indigo-600  px-6 py-3 rounded-lg font-medium hover:bg-white transition-colors text-white">
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CallToAction