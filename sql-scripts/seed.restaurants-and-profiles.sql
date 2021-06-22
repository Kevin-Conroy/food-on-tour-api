BEGIN;

INSERT INTO profiles (id, first_name, last_name, username, bandname, bio, pic_url)
VALUES ('1', 'Kahaleel', 'Nitti', 'user1', 'Automated', 'Front-line multi-state contingency', 'https://www.fillmurray.com/200/300'),
('2', 'Sean', 'Halpeine', 'user2', 'contingency', 'Sharable intangible structure', 'https://www.fillmurray.com/200/301'),
('3', 'Adriano', 'Ferier', 'user3', 'Implemented', 'Synergistic multi-state function', 'https://www.fillmurray.com/200/301' ),
('4', 'Kevin', 'Conroy', 'user4', 'Dave Huase', 'A human being, I am', 'https://www.yelp.com' );

INSERT INTO restaurants (id, name, city, state, url, price)
VALUES ('1', 'Dynabox', 'Aurora', 'Colorado', 'https://google.com', '$'),
('2', 'Teklist', 'Paterson', 'New Jersey', 'https://yelp.com', '$$'),
('3', 'Oyope', 'Hartford', 'Connecticut', 'https://weather.com', '$$$$');

COMMIT;
