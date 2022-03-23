package MainApp.service;

import java.util.List;

import MainApp.dto.Hoteles;

public interface IHotelesService {

	//Metodos del CRUD
	public List<Hoteles> listarHoteles(); //Listar All 
	
	public Hoteles guardarHoteles(Hoteles Hoteles);	//Guarda un Hoteles CREATE
	
	public Hoteles HotelesXID(int id); //Leer datos de un Hoteles READ
	
	public Hoteles actualizarHoteles(Hoteles Hoteles); //Actualiza datos del Hoteles UPDATE
	
	public void eliminarHoteles(int id);// Elimina el Hoteles DELETE
	
}
