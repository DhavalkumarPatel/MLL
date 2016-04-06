package mll.dao;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import mll.beans.AdminUser;
import mll.beans.Login;
import mll.beans.Musician;
import mll.beans.User;
import mll.utility.SessionFactoryUtil;

public class LoginDAO {

	/**
	 * This method takes the user object consisting of Login credentials and 
	 * returns a Login object depending on whether the user is a musician or 
	 * an admin user.  
	 * @author  Vishal Mehta
	 * @version 1.0
	 * @since   2016-04-06 
	 */
	public Login validateLogin(User user) throws Exception {
		// TODO Auto-generated method stub
		Session session = null;
		Transaction tx = null;
		Login login = new Login();
		int u_id = 0;
		String email = "";
		try
		{
			// Initialize the session and transaction
			session = SessionFactoryUtil.getSessionFactory().getCurrentSession();
			tx = session.beginTransaction();

			// Query the User, musician and AdminUser Objects to validate the login credentials and determine the type of the user.
			if((null != login.getUser().getUserName()) && (null != login.getUser().getPassword()))
			{
				Query query = session.createQuery("from User u where u.user_name = :username");
				query.setString("username", login.getUser().getUserName());
				User u = (User)query.list();

				if (null != u) {
					u_id = u.getId();
					email = u.getEmailId();

					Query musician = session.createQuery("from Musician m where m.id = :id");
					query.setInteger("id", u_id);
					Musician m = (Musician)musician.list();
					// If the user is the musician
					if (null != m) {

						u_id = m.getId();
						login.getUser().setEmailId(email);
						login.getUser().setId(u_id);
						login.setMusician(m);
						login.setType(Login.musicianType);
						login.setValidUser(true);
						login.setCanUpload(true);
						login.setErrMsg(null);

						// If the user is the Admin User
					} else {
						Query admin_user = session.createQuery("from AdminUser au where au.id = :id");
						query.setInteger("id", u_id);
						AdminUser au = (AdminUser)admin_user.list();

						login.getUser().setId(u_id);
						login.setAdmin(au);
						login.setType(Login.adminUserType);
						login.setValidUser(true);
						login.setCanBrowse(true); 
						login.setErrMsg(null);
					}
				}
				//if user doesn't exist in the system
				else {
					login.setValidUser(false);
					login.setErrMsg("Username doesn't exist in the system. Please register yourself.");
				}
			}
			// Invalid credentials.  
			else {
				login.setErrMsg("Username and password doesn't match. Please provide valid credentials.");
			}

			// Commit the transaction if all the data is successfully saved
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
		return login;
	}
}

