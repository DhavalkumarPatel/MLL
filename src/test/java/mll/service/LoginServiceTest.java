package mll.service;

import static org.junit.Assert.assertEquals;

import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.junit.Test;

import mll.beans.Login;

public class LoginServiceTest {

	HttpServletRequest request  = null;
	@Test
	public void testPopulateUserDetails1() throws Exception
	{
		LoginService service = new LoginService();
		assertEquals(false, service.populateUserDetails(null) == null);
	}
	
	@Test
	public void testPopulateUserDetails2() throws Exception
	{
		LoginService service = new LoginService();
		
		Login login = new Login();
		
		login.getUser().setUserName("vishal123");
		login.getUser().setPassword("password123");
		
		assertEquals(true, service.populateUserDetails(getUser()).getUser().getUserName() == login.getUser().getUserName());
		assertEquals(true, service.populateUserDetails(getUser()).getUser().getPassword() == login.getUser().getPassword());
	}
	
	/*@Test
	public void testPopulateUserDetails3() throws Exception
	{
		LoginService service = new LoginService();
		
		Login login = new Login();
		login.getUser().setUserName("vishal123");
		login.getUser().setPassword("password123");
		
		assertEquals(true, service.populateUser(request).getUser().getUserName() == login.getUser().getUserName());
	}*/
	
	@SuppressWarnings("unchecked")
	public JSONObject getUser()
	{
		JSONObject jo = new JSONObject();
		
		jo.put("userName", "vishal123");
		jo.put("password", "password123");
		
		return jo;
	}
	
	
}
