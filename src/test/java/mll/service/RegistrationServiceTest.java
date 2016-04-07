package mll.service;

import static org.junit.Assert.assertEquals;

import org.json.simple.JSONObject;
import org.junit.Test;

import mll.beans.AdminUser;
import mll.beans.Musician;
import mll.beans.Token;
import mll.beans.User;

public class RegistrationServiceTest {

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
	}
	
	
	@Test
	public void testpopulateUser1() throws Exception
	{
		RegistrationService service = new RegistrationService();
		assertEquals(true, service.populateUser(null) == null);
	}
	
	@Test
	public void testpopulateUser2() throws Exception
	{
		RegistrationService service = new RegistrationService();
		User user= new User();
		assertEquals(false, service.populateUser(getUserData()) == user);
	}
	
	@Test
	public void testpopulateUser3() throws Exception
	{
		RegistrationService service = new RegistrationService();
		
		assertEquals(false, service.populateMusician(null) == null);
	}
	
	
	@Test
	public void testpopulateUser4() throws Exception
	{
		RegistrationService service = new RegistrationService();
		Musician musician= new Musician();
		assertEquals(false, service.populateMusician(getMusicianData()) == musician);
	}
	
	@Test
	public void testpopulateUser5() throws Exception
	{
		RegistrationService service = new RegistrationService();
		
		assertEquals(false, service.populateMusician(null) == null);
	}
	
	
	@Test
	public void testpopulateUser6() throws Exception
	{
		RegistrationService service = new RegistrationService();
		AdminUser admin= new AdminUser();
		assertEquals(false, service.populateAdminUser(getAdminData()) == admin);
	}
	
	@Test
	public void testpopulateUser7() throws Exception
	{
		RegistrationService service = new RegistrationService();
		
		assertEquals(false, service.populateAdminUser(null) == null);
	}


	@Test
	public void testpopulateUser8() throws Exception
	{
		RegistrationService service = new RegistrationService();
		Token t= new Token();
		assertEquals(false, service.populateToken(getTokenData()) == t);
	}
	
	@Test
	public void testpopulateUser9() throws Exception
	{
		RegistrationService service = new RegistrationService();
		
		assertEquals(false, service.populateToken(null) == null);
	}
	
	@Test
	public void testpopulateUser10() throws Exception
	{
		RegistrationService service = new RegistrationService();
		
		assertEquals("MK12", service.populateToken(getTokenData()).getToken());
	}
}
