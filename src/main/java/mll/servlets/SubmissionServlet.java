package mll.servlets;

import java.io.IOException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import mll.service.SubmissionService;

public class SubmissionServlet extends HttpServlet
{
	private static final long serialVersionUID = 1L;
	SubmissionService subService = null;
	
	public void init(ServletConfig config) throws ServletException 
	{
		subService = new SubmissionService();
	}
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		// Upload request
		String responseString = subService.uploadMedia(request, response);
		request.setAttribute("responseString", responseString);
		System.out.println(responseString);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		doGet(request, response);
	}
}
