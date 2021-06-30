CREATE TABLE IF NOT EXISTS profiles (
  id INTEGER,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  username TEXT,
  bandname TEXT,
  bio TEXT,
  pic_url VARCHAR
);

CREATE TABLE IF NOT EXISTS restaurants (
 id INTEGER,
 name TEXT NOT NULL,
 city TEXT NOT NULL,
 state TEXT NOT NULL,
 url VARCHAR,
 price VARCHAR
);

CREATE TABLE IF NOT EXISTS recommendations (
  id SERIAL,
  user_id INTEGER,
  restaurant_id INTEGER
);

CREATE TABLE IF NOT EXISTS bucket_list (
  id SERIAL,
  user_id INTEGER,
  restaurant_id INTEGER
);

INSERT INTO profiles (first_name, last_name, username, bandname, bio, pic_url)
VALUES ('Kahaleel', 'Nitti', 'user1', 'Automated', 'Front-line multi-state contingency', 'https://www.fillmurray.com/200/300'),
('Sean', 'Halpeine', 'user2', 'contingency', 'Sharable intangible structure', 'https://www.fillmurray.com/200/301'),
('Adriano', 'Ferier', 'user3', 'Implemented', 'Synergistic multi-state function', 'https://www.fillmurray.com/200/301' ),
('Kevin', 'Conroy', 'user4', 'Dave Hause', 'A human being, I am', 'https://www.yelp.com' );

INSERT INTO restaurants (name, city, state, url, price)
VALUES ('Dynabox', 'Aurora', 'Colorado', 'https://google.com', '$'),
('Teklist', 'Paterson', 'New Jersey', 'https://yelp.com', '$$'),
('Oyope', 'Hartford', 'Connecticut', 'https://weather.com', '$$$$');