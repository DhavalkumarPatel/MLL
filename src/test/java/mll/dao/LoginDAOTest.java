package mll.dao;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import mll.beans.Login;

public class LoginDAOTest {
	@Test
	public void testcase1() {

		try {
			Login login = new Login();

			//Positive case
			login.getUser().setUserName("admin");
			login.getUser().setPassword("password123");

			LoginDAO dao = new LoginDAO();

			assertEquals(true, dao.validateLogin(login).isValidUser() == true);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Test
	public void testcase2() {

		try {
			Login login = new Login();

			//Negative case
			login.getUser().setUserName("admin1");
			login.getUser().setPassword("password");
			LoginDAO dao = new LoginDAO();

			assertEquals(true, dao.validateLogin(login).isValidUser() == false);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Test
	public void testcase3() {

		try {
			Login login = new Login();

			//Positive case for error message
			login.getUser().setUserName("");
			login.getUser().setPassword("");
			LoginDAO dao = new LoginDAO();

			assertEquals(true, dao.validateLogin(login).isValidUser() == false && dao.validateLogin(login).getErrMsg() == "Username and/or password doesn't match. Please provide valid credentials.");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Test
	public void testcase4() {

		try {
			Login login = new Login();

			//Negative case for error message
			login.getUser().setUserName("");
			login.getUser().setPassword("");
			LoginDAO dao = new LoginDAO();

			assertEquals(true, dao.validateLogin(login).isValidUser() == false && dao.validateLogin(login).getErrMsg() != "");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Test
	public void testcase5() {

		try {
			Login login = new Login();

			//Positive case for type of the user
			login.getUser().setUserName("admin");
			login.getUser().setPassword("password123");
			LoginDAO dao = new LoginDAO();

			assertEquals(true, dao.validateLogin(login).getType() == "user");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Test
	public void testcase6() {

		try {
			Login login = new Login();

			//Negative case for type of the user
			login.getUser().setUserName("admin");
			login.getUser().setPassword("password123");
			LoginDAO dao = new LoginDAO();

			assertEquals(false, dao.validateLogin(login).getType() == "musician");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Test
	public void testcase7() {

		try {
			Login login = new Login();

			//Positive case for error msg
			login.getUser().setUserName("admin1");
			login.getUser().setPassword("password123");
			LoginDAO dao = new LoginDAO();

			assertEquals(true, dao.validateLogin(login).getErrMsg() == "Username and/or password doesn't match. Please provide valid credentials.");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// positive case for musician
	@Test
	public void testcase8() {

		try {
			Login login = new Login();

			login.getUser().setUserName("vishal123");
			login.getUser().setPassword("password123");
			LoginDAO dao = new LoginDAO();

			assertEquals(true, dao.validateLogin(login).getType() == "musician");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}


	//negative case for musician
	@Test
	public void testcase9() {

		try {
			Login login = new Login();

			login.getUser().setUserName("vishal123");
			login.getUser().setPassword("password123");
			LoginDAO dao = new LoginDAO();

			assertEquals(false, dao.validateLogin(login).getType() == "user");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
