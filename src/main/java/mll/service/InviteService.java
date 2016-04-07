package mll.service;

import java.io.BufferedReader;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import mll.beans.Invite;
import mll.dao.InviteDAO;

public class InviteService
{
	InviteDAO dao;
	
	public InviteService() 
	{
		dao = new InviteDAO();
	}
	
	@SuppressWarnings("unchecked")
	public JSONObject handleInviteRequest(HttpServletRequest request, HttpServletResponse response)
	{
		JSONObject responseObject = new JSONObject();
		
		Invite invite = populateInviteBeansFromRequest(request);
		
		if(null != invite.getActiontype())
		{
			if(invite.getActiontype().equalsIgnoreCase("generate"))
			{
				responseObject = generateInvite(invite);
			}
			else
			{
				responseObject = validateInvite(invite);
			}
		}
		else
		{
			responseObject.put("isGenerated", false);
			responseObject.put("isValid", false);
			responseObject.put("errorMessage", "Error while processing eith this invite due to invalid invite details.");
		}
		
		return responseObject;
	}
	
	
	@SuppressWarnings("unchecked")
	public JSONObject generateInvite(Invite invite)
	{
		try
		{
			invite = dao.generateInvite(invite);
				
			if(invite.getIsGenerated())
			{
				MailService mailService = new MailService();
				mailService.sendInvite(invite);
			}
			else
			{
				invite.setIsGenerated(false);
				invite.setErrorMessage("Request does not contain valid data. Please submit with proper invite details.");
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			invite.setIsGenerated(false);
			invite.setErrorMessage("Error while sending Invite. Please submit with proper invite details.");
		}
		
		JSONObject responseObject = new JSONObject();
		responseObject.put("isGenerated", invite.getIsGenerated());
		responseObject.put("errorMessage", invite.getErrorMessage());
		responseObject.put("URL", invite.getUrl());
		
		return responseObject;
	}
	
	@SuppressWarnings("unchecked")
	public JSONObject validateInvite(Invite invite)
	{
		try
		{
			invite = dao.validateInvite(invite);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			invite.setIsValid(false);
			invite.setErrorMessage("Error while validating Invite. Please submit again.");
		}
		
		JSONObject responseObject = new JSONObject();
		responseObject.put("isValid", invite.getIsValid());
		responseObject.put("errorMessage", invite.getErrorMessage());
		
		return responseObject;
	}
	
	public Invite populateInviteBeansFromRequest(HttpServletRequest request)
	{
		Invite invite = new Invite();
		
		try
		{
			StringBuffer requestStr = new StringBuffer();
		   	BufferedReader reader = request.getReader();
	    	String line = null;
	    	while ((line = reader.readLine()) != null)
	    	{
	    		requestStr.append(line);
	    	}
	    	
	    	JSONParser parser = new JSONParser();
	    	JSONObject tokenJsonObject = (JSONObject) parser.parse(requestStr.toString());
	    	
	    	invite.setActiontype((String) tokenJsonObject.get("actionType"));
	    	
	    	if(invite.getActiontype().equalsIgnoreCase("generate"))
	    	{
	    		invite.getToken().setEmailId((String) tokenJsonObject.get("email"));
	        	invite.getToken().setToken("");
	        	invite.getToken().setInviteType((String) tokenJsonObject.get("inviteType"));
	        	invite.getToken().setIssueDate(new Date());
	        	invite.getToken().setIsUsed(false);
	        	invite.getToken().setUserId((Integer) tokenJsonObject.get("userId"));
	    	}
	    	else
	    	{
	        	invite.getToken().setToken((String) tokenJsonObject.get("token"));
	        	invite.getToken().setInviteType((String) tokenJsonObject.get("inviteType"));
	    	}
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
		return invite;
	}
}