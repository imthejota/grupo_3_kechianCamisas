use kechian

insert into produts (id, name, category, price, discount )
values (1, "las flores", "small", 10000, 30 )

insert into produts (id, name, category, price, discount )
values (2, "CamiSuli", "medium", 12312, 20)

insert into produts (id, name, category, price, discount )
values (3, "CamiSaki", "large", 17569, 15)


insert into sizes (id, size)
values (1, "small");

insert into sizes (id, size)
values (2, "medium");

insert into sizes (id, size)
values (3, "large");


insert into product_size (id, product_id, size.id)
values (1,5,1);

insert into product_size (id, product_id, size.id)
values (5,4,2);

insert into product_size (id, product_id, size.id)
values (7,2,3);



insert into users (id, firstName,lastName,location,email,password,category, image)
values (1,"mateo", "ga", "mendoza", "dh@kechian.com","$2a$10$twQ1dr4ocIusBY8no.KrmuNAVRUzW3rp/tqQV7CbAanNffcBLG.6C","cliente","default.png");


insert into users (id, firstName,lastName,location,email,password,category, image)
values (2,"franco", "ma", "jujuy", "francoMa@kechian.com","$2a$10$twQ1dr4ocIusBY8no.KrmuNAVRUzW3rp/tqQV7CbAanNffcBLG.6FG","cliente","default.png");

insert into users (id, firstName,lastName,location,email,password,category, image)
values (3,"augusto", "flo", "caba", "augustoflo@kechian.com","$2a$10$twQ1dr4ocIusBY8no.KrmuNAASDVRUzW3rp/tqQV7CbAanNffcBLG.6FG","admin","default.png");


insert into images (id, product_id)
values (1,6)

insert into images (id, product_id)
values (2,7)

insert into images (id, product_id)
values (3,8)