package mll.service;

import mll.dao.RegistrationDAO;

public class RegistrationService
{
	RegistrationDAO dao;
	
	public RegistrationService() 
	{
		dao = new RegistrationDAO();
	}
	
}