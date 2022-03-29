package MainApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import MainApp.dao.IHotelesDAO;
import MainApp.dto.Hoteles;

@Service
public class HotelesServiceImpl implements IHotelesService {

	@Autowired
	IHotelesDAO ihotelesDAO;
	
	@Override
	public List<Hoteles> listarHoteles() {
		return ihotelesDAO.findAll();
	}

	@Override
	public Hoteles guardarHoteles(Hoteles Hoteles) {
		return ihotelesDAO.save(Hoteles);
	}

	@Override
	public Hoteles HotelesXID(int id) {
		return ihotelesDAO.findById(id).get();
	}

	@Override
	public Hoteles actualizarHoteles(Hoteles Hoteles) {
		return ihotelesDAO.save(Hoteles);
	}

	@Override
	public void eliminarHoteles(int id) {
		ihotelesDAO.deleteById(id);
		
	}

}
