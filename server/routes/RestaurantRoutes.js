const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

// Get featured restaurants
router.get("/featured", async (req, res) => {
  try {
    const featuredRestaurants = await Restaurant.find({}).limit(6);
    res.json(featuredRestaurants);
  } catch (error) {
    console.error("Error fetching featured restaurants:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all cuisines
router.get("/cuisines", async (req, res) => {
  try {
    const cuisines = await Restaurant.distinct("cuisines");
    res.json(cuisines);
  } catch (error) {
    console.error("Error fetching cuisines:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all cities
router.get("/cities", async (req, res) => {
  try {
    const cities = await Restaurant.distinct("city");
    res.json(cities);
  } catch (error) {
    console.error("Error fetching cities:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get a restaurant by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Restaurant ID is required" });
    }

    const restaurant = await Restaurant.findOne({ restaurantId: id });

    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }

    res.json(restaurant);
  } catch (error) {
    console.error("Error fetching restaurant:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
