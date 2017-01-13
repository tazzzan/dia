package com.dia.app.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Table
@Entity
public class Profile implements Serializable {

	@Transient
	private static final long serialVersionUID = 6601786678789991064L;
	
	
	@Id
	@Column(name = "ID")
    @GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Column(name = "1st_Name")
	private String profileFirstName;
	
	@Column(name = "2nd_Name")
	private String profileSecondName;
	
	@Column(name = "nick_Name")
	private String profileNickName;
	
	@Column(name = "UNI")
	private String profileUni; 
	
	
	/**
	 * Constructors
	 */
	
	public Profile() {
		
	}
	
	public Profile(String profileNickName, String profileUni) {
		this.profileNickName = profileNickName; 
		this.profileUni = profileUni;
	}

	/**
	 * Functions
	 */
	
	
	
	/**
	 * Getters and Setters
	 */

	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getProfileFirstName() {
		return profileFirstName;
	}


	public void setProfileFirstName(String profileFirstName) {
		this.profileFirstName = profileFirstName;
	}


	public String getProfileSecondName() {
		return profileSecondName;
	}


	public void setProfileSecondName(String profileSecondName) {
		this.profileSecondName = profileSecondName;
	}


	public String getProfileNickName() {
		return profileNickName;
	}


	public void setProfileNickName(String profileNickName) {
		this.profileNickName = profileNickName;
	}


	public String getProfileUni() {
		return profileUni;
	}


	public void setProfileUni(String profileUni) {
		this.profileUni = profileUni;
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	

}
