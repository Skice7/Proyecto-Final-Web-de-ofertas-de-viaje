package MainApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import MainApp.dao.IHotel_cholloDAO;
import MainApp.dto.Hotel_chollo;

@Service
public class Hotel_cholloServiceImpl implements IHotel_cholloService {

	@Autowired
	IHotel_cholloDAO ihotel_cholloDAO;
	
	@Override
	public List<Hotel_chollo> listarHotel_chollo() {
		// TODO Auto-generated method stub
		return ihotel_cholloDAO.findAll();
	}

	@Override
	public Hotel_chollo guardarHotel_chollo(Hotel_chollo Hotel_chollo) {
		// TODO Auto-generated method stub
		return ihotel_cholloDAO.save(Hotel_chollo);
	}

	@Override
	public Hotel_chollo Hotel_cholloXID(int id) {
		// TODO Auto-generated method stub
		return ihotel_cholloDAO.findById(id).get();
	}

	@Override
	public Hotel_chollo actualizarHotel_chollo(Hotel_chollo Hotel_chollo) {
		// TODO Auto-generated method stub
		return ihotel_cholloDAO.save(Hotel_chollo);
	}

	@Override
	public void eliminarHotel_chollo(int id) {
		// TODO Auto-generated method stub
		ihotel_cholloDAO.deleteById(id);
	}

}
