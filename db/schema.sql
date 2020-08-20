--code before switching to heroku deploy/jawsdb
-- if exists drop database burger_db;
-- create database burger_db;

-- use burger_db

create table burger_eats (
    id int auto_increment not null primary key,
    burger_name varchar (30) not null,
    devoured boolean default 0
)