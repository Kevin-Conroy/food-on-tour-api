const ProfilesService = {
  getAllProfiles(knex) {
    return knex.select("*").from("profiles");
  },

  getById(knex, id) {
    return knex.from("profiles").select("*").where("id", id).first();
  },
  getByLogin(knex, username, password) {
    return knex.from("profiles").select("*").where("username", username).andWhere("password", password).first();
  },
  insertProfile(knex, newProfile) {
    return knex
      .insert(newProfile)
      .into("profiles")
      .returning("*")
      .then((rows) => {
        return rows[0];
      });
  },
  deleteProfile(knex, id) {
    return knex("profiles").where({ id }).delete();
  },
  updateProfile(knex, id, newProfileFields) {
    return knex("profiles").where({ id }).update(newProfileFields);
  },
};

module.exports = ProfilesService;
