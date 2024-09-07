import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-wrap justify-between mb-8">
          {/* About Us Section */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-400">
              <p className="text-gray-400">
                Explore curated dining experiences and exceptional restaurants.
                Our mission is to enhance your culinary adventures.
              </p>
            </p>
          </div>
          {/* Quick Links Section */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Explore</h2>
            <ul>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/restaurants"
                  className="text-gray-400 hover:text-white transition"
                >
                  Restaurants
                </Link>
              </li>
              <li>
                <Link
                  to="/search/location"
                  className="text-gray-400 hover:text-white transition"
                >
                  Search by Location
                </Link>
              </li>
              <li>
                <Link
                  to="/search/image"
                  className="text-gray-400 hover:text-white transition"
                >
                  Search by Image
                </Link>
              </li>
            </ul>
          </div>
          {/* Follow Us Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                className="text-gray-400 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                className="text-gray-400 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.youtube.com"
                className="text-gray-400 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <p className="text-center text-gray-400">
            <span className="text-white">
              &copy; {new Date().getFullYear()}
            </span>
            <span className="text-white ml-1">Cuisine</span>
            <span className="text-red-500 ml-1">Quest</span>
            <span className="text-white">. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
