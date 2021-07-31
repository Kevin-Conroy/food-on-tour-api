BEGIN;

INSERT INTO profiles (first_name, last_name, username, bandname, bio, pic_url)
VALUES ('Joey', 'Tribiani', 'user1', 'Automated', 'Front-line multi-state contingency', 'https://www.fillmurray.com/200/300'),
('Sean', 'Halpeine', 'user2', 'Contingency', 'Sharable intangible structure', 'https://www.fillmurray.com/200/301'),
('Adriano', 'Ferier', 'user3', 'Implemented', 'Synergistic multi-state function', 'https://www.fillmurray.com/200/301' )

INSERT INTO restaurants (name, city, state, url, price)
VALUES ('Dynabox', 'Aurora', 'Colorado', 'https://google.com', '$'),
('Teklist', 'Paterson', 'New Jersey', 'https://yelp.com', '$$'),
('Oyope', 'Hartford', 'Connecticut', 'https://weather.com', '$$$$');

COMMIT;
