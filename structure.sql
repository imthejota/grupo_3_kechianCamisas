-- Creación de la base de datos
CREATE DATABASE kechian;

-- Creación de las tablas 

CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR NOT NULL,
    descripcion VARCHAR NOT NULL,
    categoria BOOLEAN NOT NULL, 
    imagen VARCHAR NOT NULL,
    precio FLOAT NOT NULL,
    descuento FLOAT NOT NULL
);

CREATE TABLE talles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    small VARCHAR NOT NULL,
    medium VARCHAR NOT NULL,
    large VARCHAR NOT NULL,
    extra_large VARCHAR NOT NULL
);

CREATE TABLE producto_talle (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    talle_id INT NOT NULL,
    FOREIGN KEY(product_id) REFERENCES productos(id),
    FOREIGN KEY(product_id) REFERENCES talles(id)
);

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR NOT NULL,
    lastname VARCHAR NOT NULL,
    location VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    category BOOLEAN NOT NULL,
    image VARCHAR NOT NULL
);


