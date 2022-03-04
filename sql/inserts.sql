SET auto_increment_increment = 1;

insert into chollos (titulo,ubicacion,direccion,imagen,precio,descripcion,fecha_caducidad)
values 
("titulo1","ubicacion1","direccion1","imagen1",1,"descripcion1","2000-1-10"),
("titulo2","ubicacion2","direccion2","imagen2",2,"descripcion2","2000-2-20"),
("titulo3","ubicacion3","direccion3","imagen3",3,"descripcion3","2000-3-30"),
("titulo4","ubicacion4","direccion4","imagen4",4,"descripcion4","2000-4-10"),
("titulo5","ubicacion5","direccion5","imagen5",5,"descripcion5","2000-5-10");

insert into hoteles (direccion,estrellas,id_chollo)
values 
("direccion1",1,1),
("direccion2",2,2),
("direccion3",3,3),
("direccion4",4,4),
("direccion5",5,5);

insert into users (nombre,apellidos,dni,correo,telefono)
values 
("nombre1","apellido1","12345678A","correo1@correo.com",123456789),
("nombre2","apellido2","22345678A","correo2@correo.com",223456789),
("nombre3","apellido3","32345678A","correo3@correo.com",323456789),
("nombre4","apellido4","42345678A","correo4@correo.com",423456789),
("nombre5","apellido5","52345678A","correo5@correo.com",523456789);