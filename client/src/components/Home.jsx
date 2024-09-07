import React from "react";
import { Navbar } from "./Navbar";
// import Loader_RestoList from "./Loader_RestoList";
// import Loader from "./Loader";
import FesturedDishes from "./FeaturedDishes";
import FeaturedRestaurants from "./FeaturedRestaurants";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div>Home</div>
      {/* <Loader /> */}

      <FesturedDishes />
      <FeaturedRestaurants />
    </>
  );
};
