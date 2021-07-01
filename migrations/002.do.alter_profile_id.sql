ALTER TABLE profiles DROP id;

ALTER TABLE profiles ADD id SERIAL;

ALTER TABLE restaurants DROP id;

ALTER TABLE reataurants ADD id SERIAL; 