SET auto_increment_increment = 1;

insert into chollos (titulo,ubicacion,direccion,imagen,precio,descripcion,fecha_caducidad)
values 
("titulo1","ubicacion1","direccion1","imagen1",1,"descripcion1","2000-1-10"),
("titulo2","ubicacion2","direccion2","imagen2",2,"descripcion2","2000-2-20"),
("titulo3","ubicacion3","direccion3","imagen3",3,"descripcion3","2000-3-30"),
("titulo4","ubicacion4","direccion4","imagen4",4,"descripcion4","2000-4-10"),
("titulo5","ubicacion5","direccion5","imagen5",5,"descripcion5","2000-5-10");

insert into hoteles (nombre,direccion,estrellas)
values 
("nombre1","direccion1",1),
("nombre2","direccion2",2),
("nombre3","direccion3",3),
("nombre4","direccion4",4),
("nombre5","direccion5",5);

insert into hotele_cohllo (id_chollo,id_hotel)
values 
(1,1),
(1,2),
(1,3),
(2,4),
(5,5);

insert into users (username,apellidos,dni,correo,telefono,password,role)
values 
("admin","apellido1","12345678A","correo1@correo.com",123456789,"$2a$10$XURPShQNCsLjp1ESc2laoObo9QZDhxz73hJPaEv7/cBha4pk0AgP.","administrador"),
("nombre2","apellido2","22345678A","correo2@correo.com",223456789,"adaw","administrador"),
("nombre3","apellido3","32345678A","correo3@correo.com",323456789,"adaw","administrador");