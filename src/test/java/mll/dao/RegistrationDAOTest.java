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
			assertEquals(true, jo.get("isRegistered"));
		} 
		catch (Exception e) 
		{

		}
	}

	
	private UserDetails getListOfUserDetails_Valid_Data()
	{
		UserDetails metadatas = new UserDetails();;
		
		User user = new User();
		user.setEmailId("Soumya@gmail.com");
		user.setPassword("password");
		user.setUserName("Soumya");
		metadatas.setUsers(user);

		AdminUser admin = new AdminUser();
		admin.setAge(24);
		admin.setCollege("NEU");
		admin.setFirstName("Soumya Sree");
		admin.setGender("Female");
		admin.setLastName("Gajula");
		admin.setLevel("10");
		admin.setPreference("none");
		
		metadatas.setAdminUser(admin);
		

		Token token = new Token();
		token.setEmailId("Soumya@gmail.com");
		token.setInviteType("Musician");
		token.setIssueDate(new Date());
		token.setIsUsed(false);
		token.setToken("MLLTKN1");
		
		
		metadatas.setToken(token);
		
		Token token2 = new Token();
		token2.setEmailId("Sree@gmail.com");
		token2.setInviteType("Musician");
		token2.setIssueDate(new Date());
		token2.setIsUsed(false);
		token2.setToken("MLLTKN1");
		
		metadatas.setToken(token2);

		Musician musician = new Musician();
		musician.setName("Soumya");
		
		metadatas.setMusician(musician);
		
		return metadatas;
}
	
	@Test
	public void RegistrationDAO_Test_2() 
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

	
	private UserDetails getListOfUserDetails_InValid_Data()
	{
		UserDetails metadatas = new UserDetails();;
		
		User user = new User();
		user.setEmailId("Soumya@gmail.com");
		user.setPassword("password");
		user.setUserName("Soumya");
		metadatas.setUsers(user);

		AdminUser admin = new AdminUser();
		admin.setAge(24);
		admin.setCollege("NEU");
		admin.setFirstName("Soumya Sree");
		admin.setGender("Female");
		admin.setLastName("Gajula");
		admin.setLevel("10");
		admin.setPreference("none");
		
		metadatas.setAdminUser(admin);
		

		Token token = new Token();
		token.setEmailId("Soumya@gmail.com");
		token.setInviteType("Musician");
		token.setIssueDate(new Date());
		token.setIsUsed(false);
		token.setToken("MLLTKN1");
		
		
		metadatas.setToken(token);
		
		

		Musician musician = new Musician();
		musician.setName("Soumya");
		
		metadatas.setMusician(musician);
		
		return metadatas;
		
		
		
	}
}


