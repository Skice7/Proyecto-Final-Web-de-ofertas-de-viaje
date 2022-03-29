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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Hotel_chollo")//en caso que la tabala sea diferente
public class Hotel_chollo {

	//Atributos de entidad curso
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)//busca ultimo valor e incrementa desde id final de db
	private int id;
	
	@ManyToOne
	@JoinColumn(name = "id_chollo")
	Chollos id_chollo;
	
	@ManyToOne
	@JoinColumn(name = "id_hotel")
	Chollos id_hotel;

	public Hotel_chollo() {
		super();
	}

	public Hotel_chollo(int id, Chollos id_chollo, Chollos id_hotel) {
		super();
		this.id = id;
		this.id_chollo = id_chollo;
		this.id_hotel = id_hotel;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Chollos getId_chollo() {
		return id_chollo;
	}

	public void setId_chollo(Chollos id_chollo) {
		this.id_chollo = id_chollo;
	}

	public Chollos getId_hotel() {
		return id_hotel;
	}

	public void setId_hotel(Chollos id_hotel) {
		this.id_hotel = id_hotel;
	}

	@Override
	public String toString() {
		return "Hotel_chollo [id=" + id + ", id_chollo=" + id_chollo + ", id_hotel=" + id_hotel + "]";
	}

}
