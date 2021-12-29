package lm.admin.controller;

import lm.admin.dto.AuthenticationRequest;
import lm.admin.model.Admin;
import lm.admin.model.MyUserDetails;
import lm.admin.service.AdminService;
import lm.admin.service.MyUserDetailsService;
import lm.admin.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/admins")
public class AdminController {


    @Autowired
    private AdminService adminService ;

    @Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUtil jwtTokenUtil;

	@Autowired
	private MyUserDetailsService userDetailsService;

    @GetMapping()
    public List<Admin> getAll() {
        return this.adminService.getAll();
    }

    @GetMapping("{id}")
    public Admin getOne(@PathVariable Long id) {
        return this.adminService.getOne(id);
    }

    @PostMapping()
    public void create(@RequestBody Admin admin) {
        adminService.create(admin);
    }

//    @PutMapping("{id}")
//    public User updateUser(@PathVariable(value = "id") Long user_id, @RequestBody User user) {
//        return this.userService.updateUser(user);
//    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        adminService.delete(id);
    }

    @CrossOrigin(origins = "*")
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {

		try {
			Authentication a = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
			);
		}
		catch (BadCredentialsException e) { throw new Exception("Incorrect username or password", e); }
		final MyUserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
		final String jwt = jwtTokenUtil.generateToken(userDetails);
		return ResponseEntity.ok(new lm.admin.z.AuthenticationResponse(jwt , userDetails));
	}

}


