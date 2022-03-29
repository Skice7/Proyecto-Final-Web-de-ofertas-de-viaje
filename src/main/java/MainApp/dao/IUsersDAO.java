package MainApp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import MainApp.dto.Users;

public interface IUsersDAO extends JpaRepository<Users, Long>{

	Users findByUsername(String username);
	
}
