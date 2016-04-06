package mll.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import mll.beans.Login;
import mll.service.LoginService;

public class LoginServlet extends HttpServlet
{
	private static final long serialVersionUID = 1L;
	LoginService subService = null;
	Login login = new Login();
	
	public void init(ServletConfig config) throws ServletException 
	{
		subService = new LoginService();
	}
	
	@SuppressWarnings("unchecked")
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException  
	{
		login = subService.validateLogin(request, response);
		
		//Create a new JSON resonse object 
		JSONObject responseObject = new JSONObject();
		
		/** Check if the error message is null , if not then check the user type.
		 * If user is musician, put all its details in JSON response object and if
		 * the user is admin user, put all its details in JSON response object. Otherwise,
		 * put error message and print on console.
		 */
		
		if (login.getErrMsg() != null) {
			if (login.getType() == Login.musicianType) {
				responseObject.put("name", login.getMusician().getName());
				responseObject.put("email", login.getUser().getEmailId());
				responseObject.put("isValidUser", login.isValidUser());
				responseObject.put("type", login.getType());
				responseObject.put("userId", login.getUser().getId());
				responseObject.put("canUpload", login.isCanUpload());
			} else {
				responseObject.put("firstName", login.getAdmin().getFirstName());
				responseObject.put("lastName", login.getAdmin().getLastName());
				responseObject.put("college", login.getAdmin().getCollege());
				responseObject.put("level", login.getAdmin().getLevel());
				responseObject.put("gender", login.getAdmin().getGender());
				responseObject.put("preference", login.getAdmin().getPreference());
				responseObject.put("age", login.getAdmin().getAge());
				responseObject.put("isValidUser", login.isValidUser());
				responseObject.put("type", login.getType());
				responseObject.put("userId", login.getUser().getId());
				responseObject.put("canBrowse", login.isCanUpload());
			}
	
		} else {
			responseObject.put("error", login.getErrMsg());
		}

		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
		out.print(responseObject);
		out.flush();
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		doGet(request, response);
	}
}
