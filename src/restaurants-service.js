const RestaurantsService = {
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
    console.log("At insert service");
    return knex
      .insert({ id: newRestaurant.id, name: newRestaurant.name, city: newRestaurant.city, state: newRestaurant.state, url: newRestaurant.url })
      .into("restaurants")
      .returning("*")
      .then((rows) => {
        console.log("In the service then block");
        return rows[0];
      });

      //.insert({id: newProfile.id, first_name: newProfile.first_name, last_name: newProfile.last_name, username: newProfile.username, bandname: newProfile.bandname, bio: newProfile.bio, pic_url: newProfile.pic_url })
  },
  deleteRestaurant(knex, id) {
    return knex("restaurant").where({ id }).delete();
  },
  updateRestaurant(knex, id, newRestaurantFields) {
    return knex("restaurants").where({ id }).update(newRestaurantFields);
  },
  insertRecommendation(knex, newRecommendation) {
    return knex
      .insert(newRecommendation)
      .into("recommendations")
      .returning("*")
      .then((rows) => {
        return rows[0];
      });
  },
  insertBucketListItem(knex, newBucketListItem) {
    return knex
    .insert({ id: newBucketListItem.id, user_id: newBucketListItem.user_id, restaurant_id: newBucketListItem.restaurant_id })
    .into("bucket_list")
    .returning("*")
    .then((rows) => {
      return rows[0];
    })
  }
  
};

module.exports = RestaurantsService;
