package mll.dao;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import mll.beans.Invite;

public class InviteDAOTest 
{
	
	@Test
	public void generateInvite1() 
	{
		try 
		{
			InviteDAO dao = new InviteDAO();
			assertEquals(true, dao.generateInvite(null) == null);
		} 
		catch (Exception e) 
		{
		}
	}
	
	@Test
	public void generateInvite2() 
	{
		try 
		{
			InviteDAO dao = new InviteDAO();
			assertEquals(true, dao.generateInvite(new Invite()).getIsGenerated() == false);
		} 
		catch (Exception e) 
		{
		}
	}
	
	@Test
	public void generateInvite3() 
	{
		try 
		{
			InviteDAO dao = new InviteDAO();
			assertEquals(true, dao.generateInvite(new Invite()).getToken().getToken() == null);
		} 
		catch (Exception e) 
		{
		}
	}
	
	@Test
	public void validateInvite1() 
	{
		try 
		{
			InviteDAO dao = new InviteDAO();
			assertEquals(true, dao.validateInvite(null) == null);
		} 
		catch (Exception e) 
		{
		}
	}
	
	@Test
	public void validateInvite2() 
	{
		try 
		{
			InviteDAO dao = new InviteDAO();
			assertEquals(true, dao.validateInvite(new Invite()).getIsValid() == false);
		} 
		catch (Exception e) 
		{
		}
	}
	
	@Test
	public void validateInvite3() 
	{
		try 
		{
			InviteDAO dao = new InviteDAO();
			assertEquals(true, dao.validateInvite(new Invite()).getMessage().equals("Invalid Token."));
		} 
		catch (Exception e) 
		{
		}
	}
}
