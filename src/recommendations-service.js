const RecommendationsService = {
    getAllRestaurants(knex) {
      return knex.select("*").from("restaurants");
    },
  
    getById(knex, id) {
      return knex.from("restaurants").select("*").where("id", id).first();
    },
  
    getByName(knex, name) {
      return knex.from("restaurants").select("*").where("name", name).first();
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
    deleteRecommendation(knex, id) {
      return knex("recommendations").where({ id }).delete();
    },

    updateRecommendation(knex, id, newRestaurantFields) {
      return knex("restaurants").where({ id }).update(newRestaurantFields);
    },
  };
  
  module.exports = RecommendationsService;