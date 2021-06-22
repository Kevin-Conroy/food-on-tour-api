const RestaurantsService = {
    getAllRestaurants(knex) {
      return knex.select("*").from("restaurants");
    },
  
    getById(knex, id) {
      return knex.from("restaurants").select("*").where("id", id).first();
    },
    insertRestaurant(knex, newRestaurant) {
      return knex
        .insert(newRestaurant)
        .into("restaurants")
        .returning("*")
        .then((rows) => {
          return rows[0];
        });
    },
    deleteRestaurant(knex, id) {
      return knex("restaurant").where({ id }).delete();
    },
    updateRestaurant(knex, id, newRestaurantFields) {
      return knex("restaurants").where({ id }).update(newRestaurantFields);
    },
  };
  
  module.exports = RestaurantsService;