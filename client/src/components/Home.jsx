import React from "react";
import Navbar from "./Navbar";
import FesturedDishes from "./FeaturedDishes";
import FeaturedRestaurants from "./FeaturedRestaurants";
import Footer from "./Footer";
import Map from "./Map";
import Hero from "./Hero";
// import GoogleMapComponent from "./GoogleMap";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Goat/> */}
      <FeaturedRestaurants />
      <FesturedDishes />
      <Map />
      <Footer />
    </>
  );
};
