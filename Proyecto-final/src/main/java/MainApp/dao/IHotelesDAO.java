package MainApp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import MainApp.dto.Hoteles;


public interface IHotelesDAO extends JpaRepository<Hoteles, Integer> {

}
