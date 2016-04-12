package mll.service;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import mll.beans.Invite;

public class MailService
{
	/**
	* This method takes Invite object as an input and send 
	* the invite as an email to the recipient. 
	* @author  Dhaval Patel
	* @version 1.0
	* @since   2016-04-06 
	*/
	public Boolean sendInvite(Invite invite)
	{
		Boolean isMailSent = false;
		
		try
		{
			sendMail(invite.getToken().getEmailId(), "Invite from Media Licencing Lab", "Hi, \n\n"+ invite.getToken().getMessageBody() + "\n\nYour invitation link is :: " + invite.getUrl() + "\n\nThanks,\nMedia Team");
		}
		catch(Exception e)
		{
			isMailSent = false;
		}
		
		return isMailSent;
	}
	
	/**
	* This method takes receiverMail, subjectLine, message as input 
	* and sends the mail to the recipient. 
	* @author  Dhaval Patel
	* @version 1.0
	* @since   2016-04-06 
	*/
	public static void sendMail(String receiverMail, String subjectLine, String msg) 
	{
		try 
		{
			final String username = "medialicensinglab@gmail.com";
			final String password = "mll@team19";
	
			Properties props = new Properties();
			props.put("mail.smtp.host", "smtp.gmail.com");
			props.put("mail.smtp.socketFactory.port", "465");
			props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
			props.put("mail.smtp.auth", "true");
			props.put("mail.smtp.port", "465");
	
			Session session = Session.getInstance(props, new javax.mail.Authenticator() 
			{
				@Override
				protected PasswordAuthentication getPasswordAuthentication() 
				{
					return new PasswordAuthentication(username, password);
				}
			});

			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress("medialicensinglab@gmail.com", "Media Team"));
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(receiverMail));
			message.setSubject(subjectLine);
			message.setText(msg);

			Transport.send(message);
		}
		catch (Exception e) 
		{
			e.printStackTrace();
		}
	}
}