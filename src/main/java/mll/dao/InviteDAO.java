package mll.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import mll.beans.Invite;
import mll.beans.Token;
import mll.utility.SessionFactoryUtil;

public class InviteDAO 
{
	public Invite generateInvite(Invite invite) throws Exception
	{
		Session session = null;
		Transaction tx = null;
		
		try
		{
			// Initialize the session and transaction
			session = SessionFactoryUtil.getSessionFactory().getCurrentSession();
			tx = session.beginTransaction();
			
			if(null != invite)
			{
				invite.getToken().setId((Integer) session.save(invite.getToken()));
				
				if(null != invite.getToken().getId())
				{
					invite.getToken().setToken("MLLTKN" + invite.getToken().getId());
					session.update(invite.getToken());
					invite.setIsGenerated(true);
					invite.setErrorMessage("Invite has been sent successfully.");
					invite.setUrl("http://ec2-52-37-104-21.us-west-2.compute.amazonaws.com:8080/MLL/index.html#/"+ invite.getToken().getInviteType() + "/registration/token/" + invite.getToken().getToken());
				}
				else
				{
					invite.setIsGenerated(false);
					invite.setErrorMessage("Error while generating token.");
				}
			}
			
			// Commit the transaction if all the data successfully saved
			tx.commit();
		}
		catch(Exception e)
		{
			invite.setIsGenerated(false);
			invite.setErrorMessage("Error while generating token.");
			
			if( null != tx)
			{
				// Rollback the transaction if any error comes during the process
				 tx.rollback();
			}
			throw e;
		}
		return invite;
	}
	
	@SuppressWarnings({ "unused", "unchecked" })
	public Invite validateInvite(Invite invite) throws Exception
	{
		Session session = null;
		Transaction tx = null;
		
		try
		{
			// Initialize the session and transaction
			session = SessionFactoryUtil.getSessionFactory().getCurrentSession();
			tx = session.beginTransaction();
			
			if(null != invite)
			{
				Query query = session.createQuery("FROM mll.beans.Token tc where tc.token=:token and tc.inviteType=:inviteType");
				query.setParameter("token", invite.getToken().getToken());
				query.setParameter("inviteType", invite.getToken().getInviteType());
				
				List<Token> results = query.list();
				
				if(null != results && results.size()>0)
				{
					if(null != results.get(0) && !results.get(0).getIsUsed())
					{
						invite.setToken(results.get(0));
						invite.setIsValid(true);
					}
					else
					{
						invite.setIsValid(false);
						invite.setErrorMessage("This token is already used.");
					}
				}
				else
				{
					invite.setIsValid(false);
					invite.setErrorMessage("Invalid Token.");
				}
			}
		}
		catch(Exception e)
		{
			invite.setIsGenerated(false);
			invite.setErrorMessage("Error while validate Invite.");
			e.printStackTrace();
		}
		return invite;
	}
}
