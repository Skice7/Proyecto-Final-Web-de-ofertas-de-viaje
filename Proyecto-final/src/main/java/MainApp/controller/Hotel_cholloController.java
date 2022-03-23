package MainApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import MainApp.dto.Hotel_chollo;
import MainApp.service.Hotel_cholloServiceImpl;

@RestController
@RequestMapping("/api")
public class Hotel_cholloController {

	@Autowired
	Hotel_cholloServiceImpl Hotel_cholloServiceImpl;

	@GetMapping("/Hotel_chollo")
	public List<Hotel_chollo> listarHotel_chollo() {
		return Hotel_cholloServiceImpl.listarHotel_chollo();
	}

	@PostMapping("/Hotel_chollo")
	public Hotel_chollo salvarHotel_chollo(@RequestBody Hotel_chollo Hotel_chollo) {

		return Hotel_cholloServiceImpl.guardarHotel_chollo(Hotel_chollo);
	}

	@GetMapping("/Hotel_chollo/{id}")
	public Hotel_chollo Hotel_cholloXID(@PathVariable(name = "id") int id) {

		Hotel_chollo Hotel_chollo_xid = new Hotel_chollo();

		Hotel_chollo_xid = Hotel_cholloServiceImpl.Hotel_cholloXID(id);

		System.out.println("Hotel_chollo XID: " + Hotel_chollo_xid);

		return Hotel_chollo_xid;
	}

	@PutMapping("/Hotel_chollo/{id}")
	public Hotel_chollo actualizarHotel_chollo(@PathVariable(name = "id") int id,
			@RequestBody Hotel_chollo Hotel_chollo) {

		Hotel_chollo Hotel_chollo_seleccionado = new Hotel_chollo();
		Hotel_chollo Hotel_chollo_actualizado = new Hotel_chollo();

		Hotel_chollo_seleccionado = Hotel_cholloServiceImpl.Hotel_cholloXID(id);

		Hotel_chollo_seleccionado.setId_chollo(Hotel_chollo.getId_chollo());
		Hotel_chollo_seleccionado.setId_hotel(Hotel_chollo.getId_hotel());

		Hotel_chollo_actualizado = Hotel_cholloServiceImpl.actualizarHotel_chollo(Hotel_chollo_seleccionado);

		System.out.println("El Hotel_chollo actualizado es: " + Hotel_chollo_actualizado);

		return Hotel_chollo_actualizado;
	}

	@DeleteMapping("/Hotel_chollo/{id}")
	public void eleiminarHotel_chollo(@PathVariable(name = "id") int id) {
		Hotel_cholloServiceImpl.eliminarHotel_chollo(id);
	}
}
