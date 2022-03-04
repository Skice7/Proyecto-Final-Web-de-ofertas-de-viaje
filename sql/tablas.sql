use heroku_99fe8b241e03000;

drop table if exists chollos;
create table chollos(
	id_chollo int primary key auto_increment,
	titulo varchar(100),
    ubicacion varchar(255),
    direccion varchar(255),
	imagen varchar(100),
	precio decimal,
	descripcion text,
	fecha_caducidad date
);

drop table if exists hoteles;
create table hoteles(
	id_hotel int primary key auto_increment,
	direccion varchar(255),
	estrellas int,
	id_chollo int,
    constraint id_chollo foreign key (id_chollo) references chollos (id_chollo)
);

drop table if exists users;
create table users(
	id_user int primary key auto_increment,
	nombre varchar(100),
    apellidos varchar(255),
    dni varchar(9),
    correo varchar(255),
    telefono int
);

