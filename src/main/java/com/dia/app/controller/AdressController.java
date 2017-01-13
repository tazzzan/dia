package com.dia.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.dia.app.model.Profile;
import com.dia.app.service.ProfileService;
@Controller
@RequestMapping("/login/loginTab")
public class AdressController {
	  @Autowired private ProfileService ps;
	   
	  /**
	   * This handler method is invoked when
	   * http://localhost:8080/pizzashop is requested.
	   * The method returns view name "index"
	   * which will be resolved into /WEB-INF/index.jsp.
	   *  See src/main/webapp/WEB-INF/servlet-context.xml
	   */
	  @RequestMapping(method = RequestMethod.GET)
	  public String insertProfile() {
		  	  Profile ilja = new Profile("Ilja", "Strath");
			   ps.add(ilja);  
		  	return "";
	  }
		  
//		  @RequestMapping(method = RequestMethod.GET)
//		    public String getIndexPage() {
//		        return "UserManagement";
//		    }

	
}
