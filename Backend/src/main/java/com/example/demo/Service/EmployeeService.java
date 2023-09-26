package com.example.demo.Service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Employees;
import com.example.demo.Repository.EmployeeRepository;
@Service
public class EmployeeService {
	@Autowired
	EmployeeRepository employeeRepository;
	    public List<Employees> getAllEmployeesService(){
	        return employeeRepository.findAll();
	    }
	    public Page<Employees> getData( int page,int size,String field,String direction) {
	    	Pageable paging;
	   if(direction.equals("asc")) {
	   paging=PageRequest.of(page-1, size).withSort(Sort.by(field));
	   }
	   else {
		   paging=PageRequest.of(page-1, size).withSort(Sort.by(field).descending());       
	   }
	  return  employeeRepository.findAll(paging);
	    }	
	    public Employees createEmployeeService(Employees employee) {
	        return employeeRepository.save(employee);
	    }
	    public ResponseEntity<Optional<Employees>> getEmployeeByIdService(int id){
	        Optional<Employees> employee = employeeRepository.findById(id);
	        return ResponseEntity.ok(employee);
	    }
		public Employees updateEmployeeDetailsService(Employees b)
		{
			System.out.println("Changes Made Have Been Successfully Updated");
			return employeeRepository.save(b);		
		}
		public String deleteDetailsService(int id)
		{
			employeeRepository.deleteById(id);
			return "Id : "+id+" is deleted";
		}
	    public String deleteAllDetailsService()
	    {
	    	employeeRepository.deleteAll();
	    	return "All employees deleted";
	    }
}
