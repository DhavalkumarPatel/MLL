package mll.service;

import java.io.BufferedReader;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import mll.beans.UserDetails;
import mll.dao.RegistrationDAO;

public class RegistrationService 
{
	RegistrationDAO dao;

	public RegistrationService() 
	{
		dao = new RegistrationDAO();
	}

	@SuppressWarnings("unchecked")
	public JSONObject register(HttpServletRequest request, HttpServletResponse response)
	{
		JSONObject responseObject = new JSONObject();

		try 
		{
			UserDetails userdetails = populateUserDetailBeanFromRequest(request);

			if (null != userdetails) 
			{
				responseObject = dao.registerUser(userdetails);
			}
			else 
			{
				responseObject.put("isRegistered", false);
				responseObject.put("errorMessage", "Error while registration. Please submit with proper user details.");
			}
		} 
		catch (Exception e) 
		{
			e.printStackTrace();
			responseObject.put("isRegistered", false);
			responseObject.put("errorMessage", "Error while registration. Please submit with proper user details.");
		}

		return responseObject;
	}

	/**
	 * This method takes http request as input and validates the request and if
	 * it is valid then creates the metadata list from the request object.
	 *
	 * @author Dhaval Patel
	 * @version 1.0
	 * @since 2016-03-24
	 */
	public UserDetails populateUserDetailBeanFromRequest(HttpServletRequest request) throws Exception 
	{
		StringBuffer requestStr = new StringBuffer();
		BufferedReader reader = request.getReader();
		String line = null;
		while ((line = reader.readLine()) != null) {
			requestStr.append(line);
		}

		JSONParser parser = new JSONParser();
		JSONObject mainObject = (JSONObject) parser.parse(requestStr.toString());

		UserDetails userdetails = new UserDetails();
		userdetails.getToken().setToken((String) mainObject.get("token"));
		userdetails.setType((String) mainObject.get("type"));

		userdetails.getUsers().setUserName((String) mainObject.get("userName"));
		userdetails.getUsers().setPassword((String) mainObject.get("password"));
		userdetails.getUsers().setEmailId((String) mainObject.get("emailId"));

		if (userdetails.getType().equalsIgnoreCase("user")) 
		{
			userdetails.getAdminUser().setFirstName((String) mainObject.get("firstName"));
			userdetails.getAdminUser().setLastName((String) mainObject.get("lastName"));
			userdetails.getAdminUser().setCollege((String) mainObject.get("college"));
			userdetails.getAdminUser().setLevel((String) mainObject.get("level"));
			userdetails.getAdminUser().setGender((String) mainObject.get("gender"));
			userdetails.getAdminUser().setPreference((String) mainObject.get("preference"));
			userdetails.getAdminUser().setAge((Integer) mainObject.get("age"));

		} 
		else 
		{
			userdetails.getMusician().setName((String) mainObject.get("name"));
		}

		return userdetails;
	}

}