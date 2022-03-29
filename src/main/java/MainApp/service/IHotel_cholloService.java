package MainApp.service;

import MainApp.dto.Hotel_chollo;
import java.util.List;

public interface IHotel_cholloService {

	public List<Hotel_chollo> listarHotel_chollo(); //Listar All 
	
	public Hotel_chollo guardarHotel_chollo(Hotel_chollo Chollos);	//Guarda un Chollos CREATE
	
	public Hotel_chollo Hotel_cholloXID(int id); //Leer datos de un Chollos READ
	
	public Hotel_chollo actualizarHotel_chollo(Hotel_chollo Hotel_chollo); //Actualiza datos del Chollos UPDATE
	
	public void eliminarHotel_chollo(int id);// Elimina el Chollos DELETE
	
}
