package MainApp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import MainApp.dto.Chollos;

public interface IChollosDAO extends JpaRepository<Chollos, Integer>{

}
