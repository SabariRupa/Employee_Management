package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import javax.xml.crypto.Data;

import org.hibernate.grammars.hql.HqlParser.SortDirectionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Employees;
import com.example.demo.Repository.EmployeeRepository;
import com.example.demo.Service.EmployeeService;

@CrossOrigin("*")
@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;
    @GetMapping(value="/get")
    public List<Employees> getAllEmployees(){
        return employeeService.getAllEmployeesService();
    }
    @GetMapping(value="/{currentPage}/{itemsPerPage}/{sortBy}/{sortOrder}")
    public Page<Employees> getData(@PathVariable(value="currentPage") int page,
                                              @PathVariable(value= "itemsPerPage") int size,
                                              @PathVariable(value= "sortBy") String field,
                                              @PathVariable(value= "sortOrder") String direction) {
    	return employeeService.getData(page, size, field, direction);
    }	
    @PostMapping
    public Employees createEmployee(@RequestBody Employees employee) {
        return employeeService.createEmployeeService(employee);
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<Employees>> getEmployeeById(@PathVariable  int id){
        return employeeService.getEmployeeByIdService(id);
    }

    @PutMapping("{id}")
	public Employees updateBookDetails(@RequestBody Employees emp)
	{
		return employeeService.updateEmployeeDetailsService(emp);
	}
    @DeleteMapping("{id}")
	public String deleteDetails(@PathVariable int id)
	{
		return employeeService.deleteDetailsService(id);
	}
    @DeleteMapping
    public String deleteAllDetails()
    {
    	return employeeService.deleteAllDetailsService();
    }
}