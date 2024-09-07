import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RestoDetail = () => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const { Id } = useParams();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/${Id}`);
        setDetail(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
        setLoading(false);
      }
    };
    fetchDetail();
  }, [Id]);

  if (loading) return <Loader />;
  if (!detail)
    return <div className="text-center text-xl mt-10">No restaurant found</div>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto pt-6 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Restaurant Image */}
          <div className="relative h-64 sm:h-80">
            <img
              src="https://picsum.photos/1200/600?random=1"
              alt={detail.restaurantName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Restaurant Details */}
          <div className="p-6">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold text-gray-900">
                {detail.restaurantName}
              </h2>
              <div className="flex items-center space-x-2">
                <span className="bg-green-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {detail.aggregateRating} ★
                </span>
                <span className="text-sm text-gray-500">Zomato Lite</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-1">{detail.cuisines}</p>

            {/* Address and Phone */}
            <div className="mt-4 space-y-2">
              <p className="text-gray-700 flex items-start">
                <svg
                  className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {detail.address}, {detail.city}
              </p>
              <p className="text-gray-700 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                1234567890
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex justify-between items-center">
              {[
                {
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  label: "10am-10pm",
                  color: "yellow",
                },
                {
                  icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                  label: "Call",
                  color: "green",
                },
                {
                  icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
                  label: "Get Directions",
                  color: "blue",
                },
                {
                  icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                  label: "Add to Fav",
                  color: "gray",
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`bg-${item.color}-100 text-${item.color}-600 rounded-full p-3 hover:bg-${item.color}-200 transition-colors duration-200`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <p className="text-xs mt-2 text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RestoDetail;
