package lm.admin.service;

import lm.admin.model.Admin;
import lm.admin.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository ;

    public List<Admin> getAll() {
       return adminRepository.findAll() ;
    }

    public Admin getOne(Long id) {
        return adminRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    }

    public Admin create(Admin admin) {
        return adminRepository.save(admin) ;
    }

    public void delete(Long id) {
        adminRepository.deleteById(id);
    }
}
