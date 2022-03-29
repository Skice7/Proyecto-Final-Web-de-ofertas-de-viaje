use heroku_99fe8b241e03000;

drop table if exists hotel_chollo;
drop table if exists hoteles;
drop table if exists chollos;
drop table if exists users;

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

create table hoteles(
	id_hotel int primary key auto_increment,
	nombre varchar(255),
	direccion varchar(255),
	estrellas int
);

create table hotel_chollo(
	id int primary key auto_increment,
	id_chollo int,
    id_hotel int,
    constraint id_chollo foreign key (id_chollo) references chollos (id_chollo) ON DELETE CASCADE ON UPDATE CASCADE,
    constraint id_hotel foreign key (id_hotel) references hoteles (id_hotel) ON DELETE CASCADE ON UPDATE CASCADE
);

create table users(
	id_user int primary key auto_increment,
	username varchar(100),
	apellidos varchar(255),
	dni varchar(9),
	correo varchar(255),
	telefono int,
    password varchar(255),
    role varchar(50)
);

