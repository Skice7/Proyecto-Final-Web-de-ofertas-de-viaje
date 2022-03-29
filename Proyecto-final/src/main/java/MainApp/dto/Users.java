package MainApp.dto;

import java.util.List;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name="users")//en caso que la tabala sea diferente
public class Users {

	//Atributos de entidad curso
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)//busca ultimo valor e incrementa desde id final de db
	private long id_user;
	private String username;
	private String apellidos;
	private String dni;
	private String correo;
	private int telefono;
	private String password;
	private String role;
	
	public Users() {
		super();
	}

	public Users(long id_user, String username, String apellidos, String dni, String correo, int telefono, String password,
			String role) {
		super();
		this.id_user = id_user;
		this.username = username;
		this.apellidos = apellidos;
		this.dni = dni;
		this.correo = correo;
		this.telefono = telefono;
		this.password = password;
		this.role = role;
	}

	public long getId_user() {
		return id_user;
	}

	public void setId_user(long id_user) {
		this.id_user = id_user;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getDni() {
		return dni;
	}

	public void setDni(String dni) {
		this.dni = dni;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public int getTelefono() {
		return telefono;
	}

	public void setTelefono(int telefono) {
		this.telefono = telefono;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "Users [id_user=" + id_user + ", nombre=" + username + ", apellidos=" + apellidos + ", dni=" + dni
				+ ", correo=" + correo + ", telefono=" + telefono + ", password=" + password + ", role=" + role + "]";
	}

	

}
	
	