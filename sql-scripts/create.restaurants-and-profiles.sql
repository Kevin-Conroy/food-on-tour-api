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

