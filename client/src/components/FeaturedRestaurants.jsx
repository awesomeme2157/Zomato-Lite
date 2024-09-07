import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import RestoLoader from "./Loader_RestoList";

const descriptions = [
  "A delightful experience with a mix of classic and contemporary dishes.",
  "Taste the best flavors of local cuisine with a modern twist.",
  "An extraordinary dining experience with exquisite dishes.",
  "Indulge in a variety of mouth-watering dishes in a cozy atmosphere.",
  "Fresh ingredients and innovative recipes make every meal special.",
  "A perfect place for food enthusiasts looking for unique flavors.",
];

const getRandomDescription = () => {
  return descriptions[Math.floor(Math.random() * descriptions.length)];
};

const FeaturedRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/featured");
        setRestaurants(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };
    fetchRestaurants();
  }, []);

  return (
    <>
      {Loading ? (
        <RestoLoader />
      ) : (
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
              {restaurants.map((restaurant, index) => (
                <Link key={index} to={`/api/${restaurant.restaurantId}`}>
                  <li className="group bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                    <div className="w-full h-48 mb-6 rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={`https://picsum.photos/200?random=${index}`}
                        alt={restaurant.restaurantName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 transition-all duration-300">
                      {restaurant.restaurantName}
                    </h3>
                    <p className="text-gray-600">{getRandomDescription()}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedRestaurants;
