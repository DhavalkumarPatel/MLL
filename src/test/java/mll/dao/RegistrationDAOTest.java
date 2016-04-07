package mll.dao;

import static org.junit.Assert.assertEquals;

import java.util.Date;

import org.json.simple.JSONObject;
import org.junit.Test;

import mll.beans.AdminUser;
import mll.beans.Musician;
import mll.beans.Token;
import mll.beans.User;
import mll.beans.UserDetails;

public class RegistrationDAOTest {

	@Test
	public void RegistrationDAO_Test_1() 
	{
		try 
		{
			UserDetails userdetails = getListOfUserDetails_Valid_Data();
			RegistrationDAO dao = new RegistrationDAO();
			JSONObject jo = dao.registerUser(userdetails);
			assertEquals(false, jo.get("isRegistered"));
		} 
		catch (Exception e) 
		{

		}
	}

	
	@Test
	public void RegistrationDAO_Test_2() 
	{
		try 
		{
			UserDetails userdetails = getListOfUserDetails_Valid_Data();
			RegistrationDAO dao = new RegistrationDAO();
			JSONObject jo = dao.registerUser(userdetails);
			assertEquals("Token is already used.", jo.get("errorMessage"));
		} 
		catch (Exception e) 
		{

		}
	}

	
	
	@Test
	public void RegistrationDAO_Test_3() 
	{
		try 
		{
			UserDetails userdetails = getListOfUserDetails_InValid_Data();
			RegistrationDAO dao = new RegistrationDAO();
			JSONObject jo = dao.registerUser(userdetails);
			assertEquals(false, jo.get("isRegistered"));
		} 
		catch (Exception e) 
		{

		}
		
	}
	
	

	@Test
	public void RegistrationDAO_Test_4() 
	{
		try 
		{
			UserDetails userdetails = getListOfUserDetails_InValid_Data();
			RegistrationDAO dao = new RegistrationDAO();
			JSONObject jo = dao.registerUser(userdetails);
			assertEquals("Error while saving data.", jo.get("errorMessage"));
		} 
		catch (Exception e) 
		{

		}
		
	}
	
	
	

	@Test
	public void RegistrationDAO_Test_5() 
	{
		try 
		{
			UserDetails userdetails = getListOfUserDetails();
			RegistrationDAO dao = new RegistrationDAO();
			JSONObject jo = dao.registerUser(userdetails);
			assertEquals(false, jo.get("isRegistered"));
		} 
		catch (Exception e) 
		{

		}
		
	}
	

	@Test
	public void RegistrationDAO_Test_6() 
	{
		try 
		{
			UserDetails userdetails = getListOfUserDetails();
			RegistrationDAO dao = new RegistrationDAO();
			JSONObject jo = dao.registerUser(userdetails);
			assertEquals("Token is already used.", jo.get("errorMessage"));
		} 
		catch (Exception e) 
		{

		}
		
	}

	
	private UserDetails getListOfUserDetails_InValid_Data()
	{
		UserDetails userdetails = new UserDetails();;
		
		User user = new User();
		user.setEmailId("Soumya@gmail.com");
		user.setPassword("password");
		user.setUserName("Soumya");
		user.setId(1);
		userdetails.setUsers(user);

		AdminUser admin = new AdminUser();
		admin.setAge(24);
		admin.setCollege("NEU");
		admin.setFirstName("Soumya Sree");
		admin.setGender("Female");
		admin.setLastName("Gajula");
		admin.setLevel("10");
		admin.setPreference("none");
		
		userdetails.setAdminUser(admin);
		userdetails.setType("musician");
		
		

		Musician musician = new Musician();
		musician.setName("Soumya");
		
		userdetails.setMusician(musician);
		
		return userdetails;
}
	
	
	private UserDetails getListOfUserDetails()
	{
		UserDetails userdetails = new UserDetails();;
		
		User user = new User();
		user.setEmailId("Soumya@gmail.com");
		user.setPassword("password");
		user.setUserName("Soumya");
		
		userdetails.setUsers(user);

		AdminUser admin = new AdminUser();
		admin.setAge(24);
		admin.setCollege("NEU");
		admin.setFirstName("Soumya Sree");
		admin.setGender("Female");
		admin.setLastName("Gajula");
		admin.setLevel("10");
		admin.setPreference("none");
		
		userdetails.setAdminUser(admin);
		userdetails.setType("musician");
		

		Token token = new Token();
		token.setEmailId("Soumya@gmail.com");
		token.setInviteType("Musician");
		token.setIssueDate(new Date());
		token.setIsUsed(true);
		token.setToken("MLLTKN1");
		
		
		userdetails.setToken(token);
		
		

		Musician musician = new Musician();
		musician.setName("Soumya");
		
		userdetails.setMusician(musician);
		
		return userdetails;
		
		
		
	}
	
	

	private UserDetails getListOfUserDetails_Valid_Data()
	{
		UserDetails userdetails = new UserDetails();
		
		User user = new User();
		user.setEmailId("Soumya@gmail.com");
		user.setPassword("password");
		user.setUserName("Soumya");
		user.setId(1);
		
		userdetails.setUsers(user);
		
		userdetails.setType("user");

		AdminUser admin = new AdminUser();
		admin.setAge(24);
		admin.setCollege("NEU");
		admin.setFirstName("Soumya Sree");
		admin.setGender("Female");
		admin.setLastName("Gajula");
		admin.setLevel("10");
		admin.setPreference("none");
		admin.setId(2);
		
		userdetails.setAdminUser(admin);
		userdetails.setType("user");


		Token token = new Token();
		token.setEmailId("Soumya@gmail.com");
		token.setInviteType("Musician");
		token.setIssueDate(new Date());
		token.setIsUsed(false);
		token.setToken("MLL");
		
		
		userdetails.setToken(token);
		
		

		Musician musician = new Musician();
		musician.setName("Soumya");
		
		userdetails.setMusician(musician);
		userdetails.setType("musician");
		
		return userdetails;
}
}



