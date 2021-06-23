const express = require("express");
const RestaurantsService = require("./restaurants-service");
const restaurantRouter = express.Router();

const bodyParser = express.json();

const serializeRestaurant = (restaurant) => ({
  id: restaurant.id,
  name: restaurant.name,
  city: restaurant.city,
  state: restaurant.state,
  url: restaurant.url,
  price: restaurant.price,
});

restaurantRouter.route("/searchcity").get((req, res, next) => {
  const knexInstance = req.app.get("db");
  RestaurantsService.getAllRestaurants(knexInstance)
    .then((restaurants) => {
      res.json(restaurants);
    })
    .catch(next);
});

restaurantRouter.route("/addrecommendation").post(bodyParser, (req, res, next) => {
  for (const field of ["name", "city", "state"]) {
    if (!req.body[field]) {
      return res.status(400).send({
        error: { message: `'${field}' is required` },
      });
    }
  }

  const { name, city, state, url, price } = req.body;

  const newRestaurant = {
    name,
    city,
    state,
    url,
    price
  };

  RestaurantsService.insertRestaurant(req.app.get("db"), newRestaurant)
    .then((restaurant) => {
      res
        .status(201)
        .location(`/restaurants/${restaurant.id}`)
        .json(serializeRestaurant(restaurant));
    })
    .catch(next);
});

restaurantRouter.route("/restaurants/:restaurant_id").get((req, res, next) => {
  const { restaurant_id } = req.params;
  RestaurantsService.getById(req.app.get("db"), restaurant_id).then(
    (restaurant) => {
      if (!restaurant) {
        return res.status(404).json({
          error: { message: `Restaurant not found` },
        });
      }
      res.json(serializeRestaurant(restaurant)).catch(next);
    }
  );
});

module.exports = restaurantRouter;
