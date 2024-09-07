import React from "react";

const FeaturedDishes = () => {
  const dishes = [
    {
      name: "Sushi Platter",
      image:
        "https://b.zmtcdn.com/data/pictures/3/20127653/22cfc95ccc5701d0aa0b1bb4d76c6bca_o2_featured_v2.jpg",
      description: "Fresh sushi with a variety of flavors.",
    },
    {
      name: "Pizza Margherita",
      image:
        "https://b.zmtcdn.com/data/pictures/8/21294568/0a23465fe4cdd399df0019d89c7d2493.jpg?fit=around|750:500&crop=750:500;*,*",
      description: "Classic pizza with tomato, mozzarella, and basil.",
    },
    {
      name: "Spaghetti Carbonara",
      image:
        "https://media.istockphoto.com/id/1065506718/photo/carbonara-pasta-spaghetti-with-pancetta-egg-parmesan-cheese-and-cream-sauce-traditional.jpg?s=612x612&w=0&k=20&c=nGdJRIL75P4SRCDBFbY2_TjZbf_dS5Rqo774c8rkcLc=",
      description: "Creamy pasta with pancetta and parmesan cheese.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-6">
            Featured Dishes
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Explore some of the most popular dishes from our featured
            restaurants. Each dish is carefully prepared with the finest
            ingredients.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 transition-all duration-300">
                {dish.name}
              </h3>
              <p className="text-gray-600">{dish.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedDishes;
