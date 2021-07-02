const express = require("express");
const ProfilesService = require("./profiles-service");
const profileRouter = express.Router();

const bodyParser = express.json();

const serializeProfile = (profile) => ({
  id: profile.id,
  first_name: profile.firstName,
  last_name: profile.lastName,
  username: profile.userName,
  password: profile.password,
  bandname: profile.bandname,
  bio: profile.bio,
});

profileRouter
  .route("/profiles")
  .get((req, res, next) => {
    const knexInstance = req.app.get("db");
    ProfilesService.getAllProfiles(knexInstance)
      .then((profiles) => {
        res.json(profiles);
      })
      .catch(next);
  })
  .post(bodyParser, (req, res, next) => {
    console.log("In the program");
    for (const field of ["firstName", "lastName", "userName"]) {
      console.log("In the for loop");
      if (!req.body[field]) {
        return res.status(400).send({
          error: { message: `'${field}' is required` },
        });
      }
    }
    console.log("Line 67 test");


    const { firstName, lastName, userName, password, bandname, bio } = req.body;

    const newProfile = {
      first_name: firstName,
      last_name: lastName,
      username: userName,
      password: password,
      bandname: bandname,
      bio: bio
    };

console.log("Line 80 test");
    ProfilesService.insertProfile(req.app.get("db"), newProfile)
      .then((profile) => {
        console.log("Passed line 52 then");
        res
          .status(201)
          .location(`/profiles/${profile.id}`)
          .json(serializeProfile(profile));
      })
      .catch(next);
  });

profileRouter.route("/profile/:profile_id").get((req, res, next) => {
  const { profile_id } = req.params;
  ProfilesService.getById(req.app.get("db"), profile_id).then((profile) => {
    if (!profile) {
      return res.status(404).json({
        error: { message: `Profile not found` },
      });
    }
    res.json(serializeProfile(profile)).catch(next);
  });
}).patch(bodyParser, (req, res, next) => {
  const { first_name, last_name, username, bandname, bio } = req.body
  const profileToUpdate = { first_name: first_name, last_name: last_name, username: username, bandname: bandname, bio: bio }

  if (!first_name && !last_name && !username && !bandname && !bio) {
    return res.status(400).json({
      error: {
        message: `Please select a field to update`
      }
    })
  }
  ProfilesService.updateProfile (
  req.app.get('db'),
			req.params.profile_id,
			profileToUpdate
		)
			.then((profile) => {
        console.log("Line 90 in profile router" + profile_id + " " + JSON.stringify(profile));
				res.send(`Profile with id ${req.params.profile_id} updated`).status(204).end()
			})
			//.catch(next)
	})
  .delete((req, res, next) => {
  ProfilesService.deleteProfile(req.app.get('db'), req.params.profile_id)
    .then(() => {
      res.send(`Profile with id ${profile_id} deleted`).status(204).end()
    })
    .catch(next)
})

profileRouter.route("/profile").get((req, res) => {
  res.status(200).send("Here is the logged in user");
});

profileRouter.route("/createprofile").post(bodyParser, (req, res) => {
  res.status(200).send("Here is the create profile page");
});

//change to post
profileRouter.route("/editprofile").get((req, res) => {
  res.status(200).send("Here is the edit profile page");
});

module.exports = profileRouter;
