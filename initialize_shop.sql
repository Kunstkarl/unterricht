CREATE TABLE produkte(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    preis NUMERIC
);

INSERT INTO produkte (name, preis) VALUES ("USB-Stick", 19.99);
INSERT INTO produkte (name, preis) VALUES ("Festplatte", 89.99);
INSERT INTO produkte (name, preis) VALUES ("Mauspad", 6.66);
