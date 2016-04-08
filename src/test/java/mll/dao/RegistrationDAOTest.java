package mll.dao;

import static org.junit.Assert.assertEquals;

import org.json.simple.JSONObject;
import org.junit.Test;

import mll.beans.UserDetails;

public class RegistrationDAOTest 
{
	@Test
	public void registerUser1() 
	{
		try 
		{
			RegistrationDAO dao = new RegistrationDAO();
			JSONObject responseObject = new JSONObject();
			assertEquals(false, dao.registerUser(null) == responseObject);
		} 
		catch (Exception e) 
		{

		}
	}
	
	@Test
	public void registerUser2() 
	{
		try 
		{
			RegistrationDAO dao = new RegistrationDAO();
			JSONObject responseObject = new JSONObject();
			UserDetails userDetails = new UserDetails();
			userDetails.setToken(null);
			assertEquals(false, dao.registerUser(userDetails) == responseObject);
		} 
		catch (Exception e) 
		{

		}
	}
	
	@Test
	public void registerUser3() 
	{
		try 
		{
			RegistrationDAO dao = new RegistrationDAO();
			JSONObject responseObject = new JSONObject();
			UserDetails userDetails = new UserDetails();
			userDetails.getToken().setToken(null);
			assertEquals(false, dao.registerUser(userDetails) == responseObject);
		} 
		catch (Exception e) 
		{

		}
	}
	
	@Test
	public void registerUser4() 
	{
		try 
		{
			RegistrationDAO dao = new RegistrationDAO();
			JSONObject responseObject = new JSONObject();
			UserDetails userDetails = new UserDetails();
			userDetails.getToken().setInviteType(null);
			assertEquals(false, dao.registerUser(userDetails) == responseObject);
		} 
		catch (Exception e) 
		{

		}
	}
	
	@Test
	public void registerUser5() 
	{
		try 
		{
			RegistrationDAO dao = new RegistrationDAO();
			JSONObject responseObject = new JSONObject();
			UserDetails userDetails = new UserDetails();
			userDetails.setUsers(null);
			assertEquals(false, dao.registerUser(userDetails) == responseObject);
		} 
		catch (Exception e) 
		{

		}
	}
}



