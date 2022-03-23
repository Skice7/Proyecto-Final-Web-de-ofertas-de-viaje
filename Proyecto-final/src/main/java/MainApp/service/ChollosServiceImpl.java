package MainApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import MainApp.dao.IChollosDAO;
import MainApp.dto.Chollos;

@Service
public class ChollosServiceImpl implements IChollosService{

	@Autowired
	IChollosDAO ichollosDAO;
	
	@Override
	public List<Chollos> listarChollos() {
		return ichollosDAO.findAll();
	}

	@Override
	public Chollos guardarChollos(Chollos Chollos) {
		return ichollosDAO.save(Chollos);
	}

	@Override
	public Chollos ChollosXID(int id) {
		return ichollosDAO.findById(id).get();
	}

	@Override
	public Chollos actualizarChollos(Chollos Chollos) {
		return ichollosDAO.save(Chollos);
	}

	@Override
	public void eliminarChollos(int id) {
		ichollosDAO.deleteById(id);
		
	}

}
