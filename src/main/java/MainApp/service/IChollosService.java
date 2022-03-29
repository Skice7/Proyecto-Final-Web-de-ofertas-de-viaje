package MainApp.service;

import java.util.List;

import MainApp.dto.Chollos;

public interface IChollosService {

	//Metodos del CRUD
			public List<Chollos> listarChollos(); //Listar All 
			
			public Chollos guardarChollos(Chollos Chollos);	//Guarda un Chollos CREATE
			
			public Chollos ChollosXID(int id); //Leer datos de un Chollos READ
			
			public Chollos actualizarChollos(Chollos Chollos); //Actualiza datos del Chollos UPDATE
			
			public void eliminarChollos(int id);// Elimina el Chollos DELETE
	
}
