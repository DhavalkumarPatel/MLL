package mll.servlets;

import java.io.IOException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import mll.service.InviteService;

public class InviteServlet extends HttpServlet
{
	private static final long serialVersionUID = 1L;
	InviteService subService = null;
	
	public void init(ServletConfig config) throws ServletException 
	{
		subService = new InviteService();
	}
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException  
	{
		//String responseString = subService.uploadMedia(request, response);
		//request.setAttribute("responseString", responseString);
		//response.setContentType("text/plain");
       // response.setCharacterEncoding("UTF-8");
        //response.getWriter().write(responseString);
        //System.out.println(responseString);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		doGet(request, response);
	}
}