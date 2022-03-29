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

import MainApp.dto.Chollos;
import MainApp.service.ChollosServiceImpl;

@RestController
@RequestMapping("/api")
public class ChollosController {

	@Autowired
	ChollosServiceImpl ChollosServiceImpl;

	@GetMapping("/Chollos")
	public List<Chollos> listarChollos() {
		return ChollosServiceImpl.listarChollos();
	}

	@PostMapping("/Chollos")
	public Chollos salvarChollos(@RequestBody Chollos Chollos) {

		return ChollosServiceImpl.guardarChollos(Chollos);
	}

	@GetMapping("/Chollos/{id}")
	public Chollos ChollosXID(@PathVariable(name = "id") int id) {

		Chollos Chollos_xid = new Chollos();

		Chollos_xid = ChollosServiceImpl.ChollosXID(id);

		System.out.println("Chollos XID: " + Chollos_xid);

		return Chollos_xid;
	}

	@PutMapping("/Chollos/{id}")
	public Chollos actualizarChollos(@PathVariable(name = "id") int id, @RequestBody Chollos Chollos) {

		Chollos Chollos_seleccionado = new Chollos();
		Chollos Chollos_actualizado = new Chollos();

		Chollos_seleccionado = ChollosServiceImpl.ChollosXID(id);

		Chollos_seleccionado.setTitulo(Chollos.getTitulo());
		Chollos_seleccionado.setUbicacion(Chollos.getUbicacion());
		Chollos_seleccionado.setImagen(Chollos.getImagen());
		Chollos_seleccionado.setPrecio(Chollos.getPrecio());
		Chollos_seleccionado.setDescripcion(Chollos.getDescripcion());
		Chollos_seleccionado.setFecha_caducidad(Chollos.getFecha_caducidad());

		Chollos_actualizado = ChollosServiceImpl.actualizarChollos(Chollos_seleccionado);

		System.out.println("El Chollos actualizado es: " + Chollos_actualizado);

		return Chollos_actualizado;
	}

	@DeleteMapping("/Chollos/{id}")
	public void eleiminarChollos(@PathVariable(name = "id") int id) {
		ChollosServiceImpl.eliminarChollos(id);
	}
}
