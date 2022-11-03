USE kechian;

INSERT INTO products (name, category, price, discount, description)
VALUES ( "Las Flores", 1, 10000, 30,"a" ),( "CamiSuli", 1, 12312, 20,"b"),( "CamiSaki", 1, 17569, 15,"c");



INSERT INTO sizes (size)
VALUES ( "Small"),( "Medium"),( "Large"), ( "Extra large");


INSERT INTO product_size (product_id, size_id)
VALUES (1,1),(3,2),(2,3); /* acá tira error porque es todo inventado y no dan los números */



INSERT INTO users (firstName,lastName,location,email,password,admin, image)
VALUES ("Jonathan", "Kechian", "Mendoza", "j@kechian.com","$2a$10$S71t6BVaKWDDPEmietxwme0dN81mzhz5M0mL0LUUA6LqohqfV0Cmq",1 ,"default.png"),("franco", "ma", "jujuy", "francoMa@kechian.com","$2a$10$twQ1dr4ocIusBY8no.KrmuNAVRUzW3rp/tqQV7CbAanNffcBLG.6FG",1,"default.png"),("augusto", "flo", "caba", "augustoflo@kechian.com","$2a$10$twQ1dr4ocIusBY8no.KrmuNAASDVRUzW3rp/tqQV7CbAanNffcBLG.6FG",1,"default.png");
