USE kechian;

INSERT INTO categories (name)
VALUES ("Lisa"),("Estampada");

INSERT INTO products (name, price, discount, description, category_id)
VALUES ("Camisa Rovira", 8500, 30,"Camisa de lino con cuello sin botones. Moldería Classic fit. Composición: 50% lino, 50% rayón",1),
("Camisa Vedell", 7000, 20,"Camisa de poplin a cuadros con cuello italiano. Moldería Slim fit. Composición: 100% algodón", 2),
("Camisa Wescott", 6500, 15,"Camisa de lino con spandex a rayas y cuello solapa. Moldería Slim fit. Composición: 50% lino, 50% rayón", 2),
("Camisa Anglet", 9000, 10, "Camisa de poplin con cuello italiano. Moldería Classic fit. Composición: 100% algodón", 1);

INSERT INTO sizes (size)
VALUES ("Small"),("Medium"),("Large"),("Extra large");

INSERT INTO product_size (product_id, size_id)
VALUES (1,2),(2,4),(3,1),(4,3); 

INSERT INTO users (firstName, lastName, location, email, password, admin, image)
VALUES ("Jonathan", "Kechian", "Mendoza", "j@kechian.com","$2a$10$S71t6BVaKWDDPEmietxwme0dN81mzhz5M0mL0LUUA6LqohqfV0Cmq",1 ,"default.png"),
("Trinidad", "Echevarria", "Santa Fe", "trinidadEche@kechian.com","$2a$10$twQ1dr4ocIusBY8no.KrmuNAVRUzW3rp/tqQV7CbAanNffcBLG.6FG",1,"default.png"),
("Marcela", "Perez", "Córdoba", "marcelaPerez@gmail.com","$2a$10$twQ1dr4ocIusBY8no.KrmuNAASDVRUzW3rp/tqQV7CbAanNffcBLG.6FG",0,"default.png");
