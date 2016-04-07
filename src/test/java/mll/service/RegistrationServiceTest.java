package mll.service;

import static org.junit.Assert.assertEquals;

import org.json.simple.JSONObject;
import org.junit.Test;

import mll.beans.AdminUser;
import mll.beans.Musician;
import mll.beans.Token;
import mll.beans.User;

public class RegistrationServiceTest {

	/*
	
	@Test
	public void testpopulateUser1() throws Exception
	{
		RegistrationService service = new RegistrationService();
		User user= new User();
		assertEquals(false, service.populateUser(null) == user);
	}
	
	
	@Test
	public void testpopulateUser2() throws Exception
	{
		RegistrationService service = new RegistrationService();
		
		assertEquals(true, service.populateUser(null) == null);
	}
	
	
	@Test
	public void testpopulateUser3() throws Exception
	{
		RegistrationService service = new RegistrationService();
		
		assertEquals(true, service.populateUser(getUserData()).getPassword() == "password");
	}
	
	
	@Test
	public void testpopulateUser4() throws Exception
	{
		RegistrationService service = new RegistrationService();
		
		assertEquals(true, service.populateUser(getUserData()).getId() == null);
	}
	
	
	@Test
	public void testpopulateMusician1() throws Exception
	{
		RegistrationService service = new RegistrationService();
		
		assertEquals(true, service.populateMusician(null) == null);
	}
	
	@Test
	public void testpopulateMusician2() throws Exception
	{
		RegistrationService service = new RegistrationService();
		
		assertEquals(true, service.populateMusician(getMusicianData()).getName() == "Soumya");
	}
	

	@Test
	public void testpopulateMusician3() throws Exception
	{
		RegistrationService service = new RegistrationService();
		Musician musician= new Musician();
		assertEquals(false, service.populateMusician(null) ==musician);
	}
	
	
	@Test
	public void testpopulateMusician4() throws Exception
	{
		RegistrationService service = new RegistrationService();
		
		assertEquals(true, service.populateMusician(getMusicianData()).getId() == null);
	}
	
	
	@Test
	public void testpopulateAdminUser1() throws Exception
	{
		RegistrationService service = new RegistrationService();
		
		assertEquals(true, service.populateAdminUser(null) == null);
	}


	@Test
	public void testpopulateAdminUser2() throws Exception
	{
		RegistrationService service = new RegistrationService();
		AdminUser au= new AdminUser();
		assertEquals(false, service.populateAdminUser(getAdminData()) == null);
	}
	
	@Test
	public void testpopulateAdminUser3() throws Exception
	{
		RegistrationService service = new RegistrationService();
		
		assertEquals(true, service.populateAdminUser(getAdminData()).getCollege() == "NEU");
	}
	
	@Test
	public void testpopulateAdminUser4() throws Exception
	{
		RegistrationService service = new RegistrationService();
		
		assertEquals(true, service.populateAdminUser(getAdminData()).getId() == null);
	}
	
	
	@Test
	public void testpopulateToken1() throws Exception
	{
		RegistrationService service = new RegistrationService();
		
		assertEquals(true, service.populateToken(null) == null);
	}
	

	
	@Test
	public void testpopulateToken2() throws Exception
	{
		RegistrationService service = new RegistrationService();
		
		assertEquals(true, service.populateToken(getTokenData()).getInviteType() == null);
	}
	
	@Test
	public void testpopulateToken3() throws Exception
	{
		RegistrationService service = new RegistrationService();
		
		assertEquals(false, service.populateToken(getTokenData()).getToken() == null);
	}
	
	

	@Test
	public void testpopulateToken4() throws Exception
	{
		RegistrationService service = new RegistrationService();
		Token t= new Token();
		
		assertEquals(false, service.populateToken(null) == t);
	}
	
	
	@SuppressWarnings("unchecked")
	public JSONObject getUserData()
	{
		JSONObject jo = new JSONObject();
		jo.put("userName", "Soumya");
		jo.put("password", "password");
		jo.put("emailId", "Soumya@gmail.com");
		return jo;
	}

	@SuppressWarnings("unchecked")
	public JSONObject getAdminData()
	{
		JSONObject jo = new JSONObject();
		jo.put("firstName", "Soumya");
		jo.put("lastName", "Sree");
		jo.put("college", "NEU");
		jo.put("level", "12");
		jo.put("gender", "Female");
		jo.put("preference", "none");
		jo.put("age", 24);
		return jo;
		
		

	}
	
	
	@SuppressWarnings("unchecked")
	public JSONObject getMusicianData()
	{
		JSONObject jo = new JSONObject();
		jo.put("name", "Soumya");
		return jo;
	}
	
	@SuppressWarnings("unchecked")
	public JSONObject getTokenData()
	{
		JSONObject jo = new JSONObject();
		jo.put("token", "MK12");
		
		return jo;
	}*/
	
}
