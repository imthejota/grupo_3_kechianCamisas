-- Creación de la base de datos
CREATE DATABASE kechian;

-- Creación de las tablas 

CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR NOT NULL,
    descripcion VARCHAR NOT NULL,
    categoria BOOLEAN NOT NULL, 
    precio FLOAT NOT NULL,
    descuento FLOAT NOT NULL
);

CREATE TABLE talles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    small VARCHAR NOT NULL,
    medium VARCHAR NOT NULL,
    large VARCHAR NOT NULL,
    extraLarge VARCHAR NOT NULL
);

CREATE TABLE producto_talle (
    id INT PRIMARY KEY AUTO_INCREMENT,
    producto_id INT NOT NULL,
    talle_id INT NOT NULL,
    FOREIGN KEY(producto_id) REFERENCES productos(id),
    FOREIGN KEY(talle_id) REFERENCES talles(id)
);

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR NOT NULL,
    lastName VARCHAR NOT NULL,
    location VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    category BOOLEAN NOT NULL,
    image VARCHAR NOT NULL
);

CREATE TABLE imagenes (
    id INT PRIMARY KEY AUTO_INCREMENT
    producto_id INT NOT NULL,
    FOREIGN KEY(producto_id) REFERENCES productos(id)
);
