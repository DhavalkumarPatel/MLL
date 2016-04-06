package mll.service;

import mll.dao.LoginDAO;

public class LoginService
{
	LoginDAO dao;
	
	public LoginService() 
	{
		dao = new LoginDAO();
	}
	
}