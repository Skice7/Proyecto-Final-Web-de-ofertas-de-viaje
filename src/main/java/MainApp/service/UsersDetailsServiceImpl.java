package MainApp.service;

import static java.util.Collections.emptyList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import MainApp.dao.IUsersDAO;
import MainApp.dao.IUsersDAO;
import MainApp.dto.Users;
import MainApp.dto.Users;

@Service
public class UsersDetailsServiceImpl implements UserDetailsService {

	private IUsersDAO iUsersDAO;

	public UsersDetailsServiceImpl(IUsersDAO iUsersDAO) {
		this.iUsersDAO = iUsersDAO;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Users Users = iUsersDAO.findByUsername(username);
		if (Users == null) {
			throw new UsernameNotFoundException(username);
		}
		return new User(Users.getUsername(), Users.getPassword(), emptyList());
	}
	
}
