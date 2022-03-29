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
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="hoteles")//en caso que la tabala sea diferente
public class Hoteles {

	//Atributos de entidad curso
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)//busca ultimo valor e incrementa desde id final de db
	private int id_hotel;
	private String nombre;
	private String direccion;
	private int estrellas;
	private String img;
	
	@OneToMany
    @JoinColumn(name="id")
    private List<Hotel_chollo> hotel_chollo;

	public Hoteles() {
		super();
	}

	public Hoteles(int id_hotel, String nombre, String direccion, int estrellas, String img,
			List<Hotel_chollo> hotel_chollo) {
		super();
		this.id_hotel = id_hotel;
		this.nombre = nombre;
		this.direccion = direccion;
		this.estrellas = estrellas;
		this.img = img;
		this.hotel_chollo = hotel_chollo;
	}



	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public int getid_hotel() {
		return id_hotel;
	}

	public void setid_hotel(int id_hotel) {
		this.id_hotel = id_hotel;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public int getEstrellas() {
		return estrellas;
	}

	public void setEstrellas(int estrellas) {
		this.estrellas = estrellas;
	}

	@Override
	public String toString() {
		return "Hoteles [id_hotel=" + id_hotel + ", nombre=" + nombre + ", direccion=" + direccion + ", estrellas="
				+ estrellas + ", img=" + img + ", hotel_chollo=" + hotel_chollo + "]";
	}


	
	
}

