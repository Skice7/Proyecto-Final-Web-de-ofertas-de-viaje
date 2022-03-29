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

import MainApp.dto.Hoteles;
import MainApp.service.HotelesServiceImpl;

@RestController
@RequestMapping("/api")
public class HotelesController {

	@Autowired
	HotelesServiceImpl HotelesServiceImpl;

	@GetMapping("/Hoteles")
	public List<Hoteles> listarHoteles() {
		return HotelesServiceImpl.listarHoteles();
	}

	@PostMapping("/Hoteles")
	public Hoteles salvarHoteles(@RequestBody Hoteles Hoteles) {

		return HotelesServiceImpl.guardarHoteles(Hoteles);
	}

	@GetMapping("/Hoteles/{id}")
	public Hoteles HotelesXID(@PathVariable(name = "id") int id) {

		Hoteles Hoteles_xid = new Hoteles();

		Hoteles_xid = HotelesServiceImpl.HotelesXID(id);

		System.out.println("Hoteles XID: " + Hoteles_xid);

		return Hoteles_xid;
	}

	@PutMapping("/Hoteles/{id}")
	public Hoteles actualizarHoteles(@PathVariable(name = "id") int id, @RequestBody Hoteles Hoteles) {

		Hoteles Hoteles_seleccionado = new Hoteles();
		Hoteles Hoteles_actualizado = new Hoteles();

		Hoteles_seleccionado = HotelesServiceImpl.HotelesXID(id);

		Hoteles_seleccionado.setNombre(Hoteles.getNombre());
		Hoteles_seleccionado.setDireccion(Hoteles.getDireccion());
		Hoteles_seleccionado.setEstrellas(Hoteles.getEstrellas());
		
		Hoteles_actualizado = HotelesServiceImpl.actualizarHoteles(Hoteles_seleccionado);

		System.out.println("El Hoteles actualizado es: " + Hoteles_actualizado);

		return Hoteles_actualizado;
	}

	@DeleteMapping("/Hoteles/{id}")
	public void eleiminarHoteles(@PathVariable(name = "id") int id) {
		HotelesServiceImpl.eliminarHoteles(id);
	}
}

