package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
@Entity
@Table(name="customer")
public class Customer {
	@Column(name="id")
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@Column(name="name")
	@NotBlank(message = "customer name can not be empty")
	@Size(max = 20,message = "customer name can't be more than 20 characters")
	@Size(min=2, message="customer name must be more than 5 characters")
	private String name;
	@Column(name="phonenumber")
	@Pattern(regexp="(^$|[0-9]{10})")
	@NotNull(message = "phonenumber can not be null")
	@Size(max =10,message = "phonenumber name can't be more than 10 characters")
	@Size(min=10, message="phonenumber name must be more than 10 characters")
	private String phonenumber;
	@Column(name="email")
	@NotBlank(message = "email name can not be empty")
	@Size(max = 30,message = "email name can't be more than 30 characters")
	@Size(min=10, message="email name must be more than 10 characters")
	private String email;
	@Column(name="address")
	@NotBlank(message = "address name can not be empty")
	@Size(max =50,message = "address name can't be more than 30 characters")
	@Size(min=10, message="address name must be more than 5 characters")
	private String address;
	@Column(name="foodId")
	private Integer foodId;
	@ManyToOne(targetEntity=Foodservice.class,fetch=FetchType.EAGER)
	@JoinColumn(name="foodId",insertable = false,updatable = false)
	private Foodservice Foodservice;
	public Customer() {
		
	}
	public Customer(int id, String name, String phonenumber, String email, String address,Integer foodId) {
		super();
		this.id = id;
		this.name = name;
		this.phonenumber = phonenumber;
		this.email = email;
		this.address = address;
		this.foodId = foodId;
	}
	public Foodservice getfoodservice() {
		return Foodservice;
	}

	public void setfoodservice (Foodservice foodservice ) {
		this.Foodservice= foodservice ;
	}
		
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getname() {
		return name;
	}
	public void setname(String name) {
		this.name=name;
	}
	public String getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Integer getfoodId() {
		return foodId;
	}
	public void setfoodId(Integer foodId) {
		this.foodId=foodId;
	}
	
	

}
