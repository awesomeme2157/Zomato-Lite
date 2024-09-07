import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-6 text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-4">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-black-600 transition-colors duration-300"
        >
          Go Back to Home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
