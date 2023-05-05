package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.CustomerDao;
import com.example.demo.entity.Customer;
import com.example.demo.exception.ResourceNotFoundException;

@Service
public class CustomerServiceImpl implements CustomerService {
	@Autowired
	CustomerDao dao;
	@Override
	public List<Customer> findAllOrder() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Customer CreateNewOrder(Customer c) {
		// TODO Auto-generated method stub
		Customer existingcustomer=dao.findById(c.getId()).orElse(null);
		   if(existingcustomer==null)
		    {
			
				c.setname(c.getname());
				c.setPhonenumber(c.getPhonenumber());
				c.setEmail(c.getEmail());
				c.setAddress(c.getAddress());
				c.setfoodId(c.getfoodId());
				return dao.save(c);
		}
		else
		{
			throw new ResourceNotFoundException("order already placed \n if u want u can update order thank you !!");
		}

			}
	

	
	@Override
	
	public Customer updateOrder(Customer c) {
		// TODO Auto-generated method stub
Customer existingcustomer=dao.findById(c.getId()).orElseThrow(() -> new ResourceNotFoundException("order not exist with this id  :"));
		
		
              
              existingcustomer.setname(c.getname());
              existingcustomer.setPhonenumber(c.getPhonenumber());
              existingcustomer.setEmail(c.getEmail());
              existingcustomer.setAddress(c.getAddress());
              existingcustomer.setfoodId(c.getfoodId());
		      return dao.save(existingcustomer);
	}
	

	@Override
	public String deleteOrder(int id) {
		// TODO Auto-generated method stub
		Customer existsID=dao.findById(id).orElse(null);
		if(existsID!=null)
		{
		dao.deleteById(id);
		return "Order deleted!!";
		}
		else
		{
		throw new ResourceNotFoundException("order id not available in list");

		}
	}

	@Override
	public Customer FindMyOrder(int id) {
		// TODO Auto-generated method stub
		return this.dao.findById(id).orElseThrow(() -> new ResourceNotFoundException("order not exist with this id :" + id));
	}

	@Override
	public List<Customer> getCustomerByName(String name) {
		// TODO Auto-generated method stub
		return this.dao.findBynameIgnoreCase(name);
	}

	

	

}
