package mll.service;

import java.io.BufferedReader;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import mll.beans.Artist;
import mll.beans.Genre;
import mll.beans.Metadata;
import mll.beans.Owner;
import mll.beans.Song;
import mll.beans.UserDetails;
import mll.dao.RegistrationDAO;

public class RegistrationService {
	RegistrationDAO dao;

	public RegistrationService() {
		dao = new RegistrationDAO();
	}

	public String register(HttpServletRequest request, HttpServletResponse response) {
		String responseString = "";

		try {
			// Validate the request and populate the metadata beans for all
			
			UserDetails userdetails = null;

			userdetails = populateUserDetailBeanFromRequest(request);

			if (null != userdetails) {
				// Save all user files with metadata
				dao.registerUser(userdetails);

				// Set success response
				responseString = "Successfully Registered.";
			} else {
				// Request is invalid so set proper error message
				responseString = "Request does not contain valid data. Please upload with proper metadata information.";
			}
		} catch (Exception e) {
			e.printStackTrace();
			responseString = "Error while saving the data. Please upload with proper metadata information.";
		}

		return responseString;
	}

	/**
	 * This method takes http request as input and validates the request and if
	 * it is valid then creates the metadata list from the request object.
	 *
	 * @author Dhaval Patel
	 * @version 1.0
	 * @since 2016-03-24
	 */
	public UserDetails populateUserDetailBeanFromRequest(HttpServletRequest request) throws Exception {
		UserDetails userdetails = new UserDetails();

		StringBuffer requestStr = new StringBuffer();
		BufferedReader reader = request.getReader();
		String line = null;
		while ((line = reader.readLine()) != null) {
			requestStr.append(line);
		}

		JSONParser parser = new JSONParser();
		JSONObject mainObject = (JSONObject) parser.parse(requestStr.toString());

		userdetails.getToken().setToken((String) mainObject.get("token"));
		userdetails.setType((String) mainObject.get("type"));

		// set in userdetails.user
		userdetails.getUsers().setUserName((String) mainObject.get("userName"));
		userdetails.getUsers().setPassword((String) mainObject.get("password"));
		userdetails.getUsers().setEmailId((String) mainObject.get("emailId"));

		if (userdetails.getType().equalsIgnoreCase("user")) {
			
			userdetails.getAdminUser().setFirstName((String) mainObject.get("firstName"));
			userdetails.getAdminUser().setLastName((String) mainObject.get("lastName"));
			userdetails.getAdminUser().setCollege((String) mainObject.get("college"));
			userdetails.getAdminUser().setLevel((String) mainObject.get("level"));
			userdetails.getAdminUser().setGender((String) mainObject.get("gender"));
			userdetails.getAdminUser().setPreference((String) mainObject.get("preference"));
			userdetails.getAdminUser().setAge((String) mainObject.get("age"));

		} else {

			userdetails.getMusician().setName((String) mainObject.get("name"));
			
		}

		return userdetails;
	}

}