USE kechian;

INSERT INTO products (id, name, category, price, discount, description)
VALUES (DEFAULT, "Las Flores", 1, 10000, 30,"a" ),(DEFAULT, "CamiSuli", 1, 12312, 20,"b"),(DEFAULT, "CamiSaki", 1, 17569, 15,"c");



INSERT INTO sizes (id, size)
VALUES (DEFAULT, "Small"),(DEFAULT, "Medium"),(DEFAULT, "Large"), (DEFAULT, "Extra large");


INSERT INTO product_size (id, product_id, size_id)
VALUES (DEFAULT,5,1),(DEFAULT,4,2),(DEFAULT,2,3); /* acá tira error porque es todo inventado y no dan los números */



INSERT INTO users (id, firstName,lastName,location,email,password,category, image)
VALUES (DEFAULT,"Jonathan", "Kechian", "Mendoza", "j@kechian.com","$2a$10$S71t6BVaKWDDPEmietxwme0dN81mzhz5M0mL0LUUA6LqohqfV0Cmq",1 ,"default.png"),(DEFAULT,"franco", "ma", "jujuy", "francoMa@kechian.com","$2a$10$twQ1dr4ocIusBY8no.KrmuNAVRUzW3rp/tqQV7CbAanNffcBLG.6FG",1,"default.png"),(DEFAULT,"augusto", "flo", "caba", "augustoflo@kechian.com","$2a$10$twQ1dr4ocIusBY8no.KrmuNAASDVRUzW3rp/tqQV7CbAanNffcBLG.6FG",1,"default.png");


INSERT INTO images (id, product_id, name)
VALUES (DEFAULT,6,"delfin"),(DEFAULT,7,"elefante"),(DEFAULT,8,"foca");