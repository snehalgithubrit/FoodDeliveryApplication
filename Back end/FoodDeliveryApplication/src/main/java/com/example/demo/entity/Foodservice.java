package com.example.demo.entity;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="foodservice")
public class Foodservice {
	@Column(name="foodId")
	@Id
	private int foodId;
	@Column(name="foodName")
	private String foodName;
	@Column(name="foodDis")
	private String foodDis;
	@Column(name="foodprice")
	private double foodprice;
	@OneToMany(mappedBy="Foodservice")
	private Set<Customer>customer;
	public Foodservice() {
		
	}
	public Foodservice(int foodId, String foodName, String foodDis, double foodprice) {
		super();
		this.foodId = foodId;
		this.foodName = foodName;
		this.foodDis = foodDis;
		this.foodprice = foodprice;
	}
	public int getFoodId() {
		return foodId;
	}
	public void setFoodId(int foodId) {
		this.foodId = foodId;
	}
	public String getFoodName() {
		return foodName;
	}
	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}
	public String getFoodDis() {
		return foodDis;
	}
	public void setFoodDis(String foodDis) {
		this.foodDis = foodDis;
	}
	public double getFoodprice() {
		return foodprice;
	}
	public void setFoodprice(double foodprice) {
		this.foodprice = foodprice;
	}

}
