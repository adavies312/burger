CREATE DATABASE  burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(300) NOT NULL,
    devoured BOOLEAN default false,
    PRIMARY KEY (id)
);