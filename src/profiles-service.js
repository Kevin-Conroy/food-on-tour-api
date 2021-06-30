const ProfilesService = {
  getAllProfiles(knex) {
    return knex.select("*").from("profiles");
  },

  getById(knex, id) {
    return knex.from("profiles").select("*").where("id", id).first();
  },
  insertProfile(knex, newProfile) {
    console.log("Profile service test" + JSON.stringify(newProfile));
    try{
    return knex
      .insert(newProfile)
      .into("profiles")
      //.raw("INSERT INTO profiles (first_name, last_name, username, bandname, bio, pic_url) VALUES ('Kahaleel', 'Nitti', 'user1', 'Automated', 'Front-line multi-state contingency', 'https://www.fillmurray.com/200/300')")
      .returning("*")
      .then((rows) => {
       // return rows[0];
       console.log("In the then block" + JSON.stringify(rows));
       return "x";
      });
    } catch(err)
  {console.log("Caught an error " + err)}
  },
  deleteProfile(knex, id) {
    return knex("profiles").where({ id }).delete();
  },
  updateBookmark(knex, id, newProfileFields) {
    return knex("profiles").where({ id }).update(newProfileFields);
  },
};

module.exports = ProfilesService;
