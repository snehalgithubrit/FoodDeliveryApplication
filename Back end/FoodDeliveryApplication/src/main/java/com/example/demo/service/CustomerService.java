package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Customer;

public interface CustomerService {
	public List<Customer>findAllOrder();
	public Customer CreateNewOrder(Customer c);
	public Customer FindMyOrder(int id);
	public Customer updateOrder(Customer c);
	public String deleteOrder(int id);
	public List<Customer> getCustomerByName (String name);
	


}
