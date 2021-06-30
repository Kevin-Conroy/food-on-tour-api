const express = require("express");
const ProfilesService = require("./profiles-service");
const profileRouter = express.Router();

const artists = [
  {
    id: 1,
    firstName: "Kahaleel",
    lastName: "Nitti",
    bandname: "Automated",
    bio: "Front-line multi-state contingency",
    recommendations: "Voolia",
    profilePicture: "https://www.fillmurray.com/200/300",
  },
  {
    id: 2,
    firstName: "Sean",
    lastName: "Halpeine",
    bandname: "contingency",
    bio: "Sharable intangible structure",
    recommendations: "Divavu",
    profilePicture: "https://www.fillmurray.com/200/301",
  },
  {
    id: 3,
    firstName: "Adriano",
    lastName: "Ferier",
    bandname: "Implemented",
    bio: "Synergistic multi-state function",
    recommendations: "Voolia",
    profilePicture: "https://www.fillmurray.com/200/302",
  },
];

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
      if (!req.body[field]) {
        return res.status(400).send({
          error: { message: `'${field}' is required` },
        });
      }
    }

    const { firstName, lastName, userName, password, bandname, bio } = req.body;

    const newProfile = {
      first_name: firstName,
      last_name: lastName,
      username: userName,
      password,
      bandname,
      bio,
    };

    ProfilesService.insertProfile(req.app.get("db"), newProfile)
      .then((profile) => {
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
});

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
