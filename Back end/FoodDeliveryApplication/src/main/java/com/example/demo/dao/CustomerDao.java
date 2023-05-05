package com.example.demo.dao;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entity.Customer;

@CrossOrigin(origins = "http://localhost:4200")
@Repository
public interface CustomerDao  extends JpaRepository<Customer,Integer>{
	
	List<Customer>findBynameIgnoreCase (String name);

}
