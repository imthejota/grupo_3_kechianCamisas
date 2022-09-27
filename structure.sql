-- Creación de la base de datos
CREATE DATABASE kechian;

-- Creación de las tablas 

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    category BOOLEAN NOT NULL, 
    price FLOAT NOT NULL,
    discount FLOAT NOT NULL
);

CREATE TABLE sizes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    small VARCHAR NOT NULL,
    medium VARCHAR NOT NULL,
    large VARCHAR NOT NULL,
    extraLarge VARCHAR NOT NULL
);

CREATE TABLE product_size (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    size_id INT NOT NULL,
    FOREIGN KEY(product_id) REFERENCES products(id),
    FOREIGN KEY(size_id) REFERENCES sizes(id)
);

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR NOT NULL,
    lastName VARCHAR NOT NULL,
    location VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    category BOOLEAN NOT NULL,
    image VARCHAR NOT NULL
);

CREATE TABLE images (
    id INT PRIMARY KEY AUTO_INCREMENT
    product_id INT NOT NULL,
    name VARCHAR NOT NULL,
    FOREIGN KEY(product_id) REFERENCES productos(id)
);
