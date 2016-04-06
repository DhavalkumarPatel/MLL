package mll.service;

import java.io.BufferedReader;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import mll.beans.Login;
import mll.beans.User;
import mll.dao.LoginDAO;

public class LoginService
{
	LoginDAO dao;

	public LoginService() 
	{
		dao = new LoginDAO();
	}
	
	/**
	* This method takes http request and response objects as input and 
	* first validates the request and if it is valid then it calls DAO to validate
	* the login credentials and return appropriate message to service.
	*
	* @author Vishal Mehta
	* @version 1.0
	* @since   2016-04-06 
	*/
	
	public Login validateLogin(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
		Login login = new Login();
		
		try
		{
			// Validate the request and populate the user beans if the request is valid.
			User user = null;
			user = populateUser(request);
			
			if(null != user)
			{
				// validate login 
				login = dao.validateLogin(user);
			}
			else
			{
				return null;		
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return login;
	}

	/**
	* This method takes http request as input and validates the 
	* request and if it is valid then sets the username and password 
	* for a particular user from the request object.
	*
	* @author  Vishal Mehta
	* @version 1.0
	* @since   2016-04-06 
	*/
	
	private User populateUser(HttpServletRequest request) {
		// TODO Auto-generated method stub
		Login login = new Login();
		User user =  new User();

		try {
			StringBuffer requestStr = new StringBuffer();
			BufferedReader reader = request.getReader();
			String line = null;
			while ((line = reader.readLine()) != null)
			{
				requestStr.append(line);
			}

			JSONParser parser = new JSONParser();
			JSONObject mainObject = (JSONObject) parser.parse(requestStr.toString());
			
			if (null != user) {

				user.setUserName((String)mainObject.get("userName"));
				user.setPassword((String)mainObject.get("password"));
				login.setUser(user);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		return user;
	}

}