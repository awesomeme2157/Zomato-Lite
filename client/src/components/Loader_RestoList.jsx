import React from "react";

const Loader = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-6">
            Featured Restaurants
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Explore some of the most popular restaurants from our list. Each
            restaurant offers a unique dining experience.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {Array.from({ length: 6 }).map((_, index) => (
            <li
              key={index}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden bg-gradient-to-r from-gray-300 to-gray-400 animate-pulse"></div>
              <div className="h-6 bg-gray-300 rounded mb-4 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Loader;
