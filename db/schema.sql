--code before switching to heroku deploy/jawsdb
-- if exists drop database burger_db;
-- create database burger_db;

-- use burger_db

create table burger_eats (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (30) NOT NULL,
    devoured BOOLEAN default 0,
    PRIMARY KEY(id)
)