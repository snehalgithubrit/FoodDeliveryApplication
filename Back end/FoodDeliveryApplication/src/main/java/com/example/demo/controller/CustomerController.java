package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Customer;
import com.example.demo.service.CustomerService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins= "http://localhost:4200")
public class CustomerController {

	@Autowired
	CustomerService service;
	@GetMapping("/showorderlist")
	public List<Customer> getAllCustomer() 
	{
		return service.findAllOrder();
	}
	
	@PostMapping("/createneworder")
	public ResponseEntity<Customer> addcustomer(@Valid @RequestBody Customer c) {

		return new ResponseEntity<Customer>(service.CreateNewOrder(c), HttpStatus.CREATED);
	}
	@GetMapping("findmyorder/{id}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable("id") int customerid) {
		return new ResponseEntity<Customer>(service.FindMyOrder(customerid), HttpStatus.OK);
	}
	@PutMapping("updateOrder/{id}")
	@CrossOrigin(origins= "http://localhost:4200")
	public ResponseEntity<Customer> updateOrder(@Valid  @RequestBody Customer c) {
		return new ResponseEntity<Customer>(service.updateOrder(c),HttpStatus.OK);
	}
	@DeleteMapping("deletemyorder/{id}")
	public ResponseEntity<Boolean> deleteOrder(@PathVariable("id") int customerid) {
		service.deleteOrder(customerid);
		boolean flag = true;
		return new ResponseEntity<Boolean>(flag, HttpStatus.OK);
	}
	@GetMapping("/search/{Name}")
	public List<Customer> getCustomerByCname(String cname)
	{
		//postTitle=postTitle.toLowerCase();
		return service.getCustomerByName(cname);
	}
	
}
