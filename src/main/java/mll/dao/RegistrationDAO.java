package mll.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import mll.beans.Artist;
import mll.beans.Genre;
import mll.beans.Metadata;
import mll.beans.Owner;
import mll.beans.Token;
import mll.beans.User;
import mll.beans.UserDetails;
import mll.utility.SessionFactoryUtil;

public class RegistrationDAO {

	/**
	* This method takes list of Metadata objects as an input and save 
	* all the metadata information into database configured in hibernate 
	* configuration file.
	*
	* @author  Dhaval Patel
	* @version 1.0
	* @since   2016-03-24 
	*/
	public UserDetails registerUser(UserDetails userdetails) throws Exception
	{
		Session session = null;
		Transaction tx = null;
		
		
		try
		{
			// Initialize the session and transaction
			session = SessionFactoryUtil.getSessionFactory().getCurrentSession();
			tx = session.beginTransaction();
			
			if(validateToken(userdetails.getToken()))
			{
				updateToken(userdetails);
				if(userdetails.getType()=="user")
				{
				saveUserdetails(userdetails.getUsers(),session);
				userdetails.setIsRegistered(true);
				}
				else if (userdetails.getType()=="musician")
				{
					saveMusiciandetails(userdetails.getUsers(),session);
					userdetails.setIsRegistered(true);
					
					
				}
								
			}
			
			else 
			{
				userdetails.setIsRegistered(false);
				userdetails.setErrorMessage("Token is already generated and is used");
			}
				
			// Commit the transaction if all the data successfully saved
			tx.commit();
		}
		catch(Exception e)
		{
			if( null != tx)
			{
				// Rollback the transaction if any error comes during the process
				 tx.rollback();
			}
			throw e;
		}
		return userdetails;
	}
	
	/**
	* This method takes list of artists of the song, id of the song
	* and session object as input and save all the artists in Artist
	* table 
	*
	* @author  Dhaval Patel
	* @version 1.0
	* @since   2016-03-24 
	*/
	private User saveUserdetails(User user, Session session) throws Exception
	
	{
		if(null != user)
		{
			user.setId((Integer)session.save(user));
				
		}
		return user;
	}
	
	
private User saveMusiciandetails(User user, Session session) throws Exception
	
	{
		if(null != user)
		{
			user.setId((Integer)session.save(user));
				
		}
		return user;
	}


private void updateToken(UserDetails userdetails) throws Exception
{
	userdetails.setToken(userdetails.getToken());
	
}

	
}
