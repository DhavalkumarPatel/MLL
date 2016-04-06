package mll.service;

import mll.dao.InviteDAO;

public class InviteService
{
	InviteDAO dao;
	
	public InviteService() 
	{
		dao = new InviteDAO();
	}
	
}