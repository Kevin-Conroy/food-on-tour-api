require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");

const app = express();

const morganOption = NODE_ENV === "production" ? "tiny" : "common";

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

const restaurants = [
  {
    id: 1,
    name: "Dynabox",
    city: "Aurora",
    state: "Colorado",
    website:
      "http://goo.gl/morbi/vel/lectus.js?placerat=neque&ante=sapien&nulla=placerat&justo=ante&aliquam=nulla&quis=justo&turpis=aliquam&eget=quis&elit=turpis&sodales=eget&scelerisque=elit&mauris=sodales&sit=scelerisque&amet=mauris&eros=sit&suspendisse=amet&accumsan=eros&tortor=suspendisse&quis=accumsan&turpis=tortor&sed=quis&ante=turpis&vivamus=sed&tortor=ante&duis=vivamus&mattis=tortor&egestas=duis&metus=mattis&aenean=egestas&fermentum=metus&donec=aenean&ut=fermentum&mauris=donec&eget=ut&massa=mauris&tempor=eget&convallis=massa&nulla=tempor&neque=convallis&libero=nulla&convallis=neque",
    price: "$",
  },
  {
    id: 2,
    name: "Teklist",
    city: "Paterson",
    state: "New Jersey",
    website:
      "https://pagesperso-orange.fr/quis/tortor/id/nulla/ultrices/aliquet/maecenas.json?nibh=faucibus&ligula=orci&nec=luctus&sem=et&duis=ultrices&aliquam=posuere&convallis=cubilia&nunc=curae&proin=nulla&at=dapibus&turpis=dolor&a=vel&pede=est&posuere=donec&nonummy=odio&integer=justo&non=sollicitudin&velit=ut&donec=suscipit&diam=a&neque=feugiat&vestibulum=et&eget=eros&vulputate=vestibulum&ut=ac&ultrices=est&vel=lacinia&augue=nisi&vestibulum=venenatis&ante=tristique&ipsum=fusce&primis=congue&in=diam&faucibus=id&orci=ornare&luctus=imperdiet&et=sapien&ultrices=urna&posuere=pretium&cubilia=nisl&curae=ut&donec=volutpat&pharetra=sapien&magna=arcu&vestibulum=sed&aliquet=augue&ultrices=aliquam&erat=erat&tortor=volutpat&sollicitudin=in&mi=congue&sit=etiam&amet=justo&lobortis=etiam&sapien=pretium&sapien=iaculis&non=justo&mi=in&integer=hac&ac=habitasse&neque=platea&duis=dictumst&bibendum=etiam&morbi=faucibus&non=cursus&quam=urna&nec=ut&dui=tellus&luctus=nulla&rutrum=ut&nulla=erat&tellus=id&in=mauris&sagittis=vulputate&dui=elementum&vel=nullam&nisl=varius",
    price: "$$",
  },
  {
    id: 3,
    name: "Oyope",
    city: "Hartford",
    state: "Connecticut",
    website:
      "https://multiply.com/condimentum/neque/sapien/placerat/ante.xml?sapien=a&sapien=odio&non=in&mi=hac&integer=habitasse&ac=platea&neque=dictumst&duis=maecenas&bibendum=ut&morbi=massa&non=quis&quam=augue&nec=luctus&dui=tincidunt&luctus=nulla&rutrum=mollis&nulla=molestie&tellus=lorem&in=quisque&sagittis=ut&dui=erat&vel=curabitur&nisl=gravida&duis=nisi&ac=at&nibh=nibh&fusce=in&lacus=hac&purus=habitasse&aliquet=platea&at=dictumst&feugiat=aliquam&non=augue&pretium=quam&quis=sollicitudin&lectus=vitae&suspendisse=consectetuer&potenti=eget&in=rutrum&eleifend=at&quam=lorem&a=integer&odio=tincidunt&in=ante&hac=vel&habitasse=ipsum&platea=praesent&dictumst=blandit&maecenas=lacinia&ut=erat&massa=vestibulum&quis=sed&augue=magna&luctus=at&tincidunt=nunc&nulla=commodo&mollis=placerat&molestie=praesent&lorem=blandit&quisque=nam&ut=nulla&erat=integer&curabitur=pede&gravida=justo&nisi=lacinia&at=eget&nibh=tincidunt&in=eget&hac=tempus&habitasse=vel&platea=pede&dictumst=morbi&aliquam=porttitor&augue=lorem&quam=id&sollicitudin=ligula&vitae=suspendisse&consectetuer=ornare&eget=consequat&rutrum=lectus&at=in&lorem=est&integer=risus&tincidunt=auctor&ante=sed&vel=tristique&ipsum=in&praesent=tempus&blandit=sit&lacinia=amet&erat=sem&vestibulum=fusce&sed=consequat&magna=nulla&at=nisl&nunc=nunc&commodo=nisl",
    price: "$$$$",
  },
];

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

app.get("/", (req, res) => {
  res.status(200).send("Here is the welcome page");
});

app.get("/profile", (req, res) => {
  res.status(200).send("Here is the logged in user");
});

app.get("/profile/:id", (req, res) => {
  const artist = artists.find((a) => a.id === parseInt(req.params.id));
  if (!artist) {
    res.status(404).send("Please search for a different artist");
  }

  res.status(200).send(artist);
});

app.get("/artists", (req, res) => {
  res.status(200).send(artists);
});

app.get("/searchcity", (req, res) => {
  res.status(200).send(restaurants);
});

app.get("/restaurants/:id", (req, res) => {
  const restaurant = restaurants.find((r) => r.id === parseInt(req.params.id));
  if (!restaurant) {
    res.status(404).send("Please choose a different restaurant");
  }
  res.status(200).send(restaurant);
});

app.post("/createprofile", (req, res) => {
  res.status(200).send()
})

app.patch("/editprofile", (req, res) => {
  res.status(200).send()
})

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === "production") {
    response = { error: { message: "server error" } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
