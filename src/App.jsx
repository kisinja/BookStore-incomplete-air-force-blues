import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookCatalog from './pages/BookCatalog';
import BookDetails from './pages/BookDetails';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <div className='px-6 md:px-12 lg:px-24 bg-pattern min-h-screen'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-catalog" element={<BookCatalog />} />
        <Route path="/books/:bookId" element={<BookDetails />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;