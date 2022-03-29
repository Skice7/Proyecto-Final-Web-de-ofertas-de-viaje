package MainApp.dto;

import java.util.List;
import java.util.Date;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name="chollos")//en caso que la tabala sea diferente
public class Chollos {

	//Atributos de entidad curso
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)//busca ultimo valor e incrementa desde id final de db
	private int id_chollo;
	private String titulo;
	private String ubicacion;
	private String imagen;
	private double precio;
	private String descripcion;
	private Date fecha_caducidad;
	
	@OneToMany
    @JoinColumn(name="id")
    private List<Hotel_chollo> hotel_chollo;
	
	
	public Chollos() {
		super();
	}


	public Chollos(int id_chollo, String titulo, String ubicacion, String imagen, double precio, String descripcion,
			Date fecha_caducidad, List<Hotel_chollo> hotel_chollo) {
		super();
		this.id_chollo = id_chollo;
		this.titulo = titulo;
		this.ubicacion = ubicacion;
		this.imagen = imagen;
		this.precio = precio;
		this.descripcion = descripcion;
		this.fecha_caducidad = fecha_caducidad;
		this.hotel_chollo = hotel_chollo;
	}


	public int getId_chollo() {
		return id_chollo;
	}


	public void setId_chollo(int id_chollo) {
		this.id_chollo = id_chollo;
	}


	public String getTitulo() {
		return titulo;
	}


	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}


	public String getUbicacion() {
		return ubicacion;
	}


	public void setUbicacion(String ubicacion) {
		this.ubicacion = ubicacion;
	}


	public String getImagen() {
		return imagen;
	}


	public void setImagen(String imagen) {
		this.imagen = imagen;
	}


	public double getPrecio() {
		return precio;
	}


	public void setPrecio(double precio) {
		this.precio = precio;
	}


	public String getDescripcion() {
		return descripcion;
	}


	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}


	public Date getFecha_caducidad() {
		return fecha_caducidad;
	}


	public void setFecha_caducidad(Date fecha_caducidad) {
		this.fecha_caducidad = fecha_caducidad;
	}


	@Override
	public String toString() {
		return "Chollos [id_chollo=" + id_chollo + ", titulo=" + titulo + ", ubicacion=" + ubicacion + ", imagen="
				+ imagen + ", precio=" + precio + ", descripcion=" + descripcion + ", fecha_caducidad="
				+ fecha_caducidad + ", hoteles=" + hotel_chollo + "]";
	}

	
}

