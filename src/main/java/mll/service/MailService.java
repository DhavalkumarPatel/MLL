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
	public Boolean sendInvite(Invite invite)
	{
		Boolean isMailSent = false;
		
		try
		{
			sendMail(invite.getToken().getEmailId(), "Invite from Media Licencing Lab", "Your invitation link is :: " + invite.getUrl());
		}
		catch(Exception e)
		{
			isMailSent = false;
		}
		
		return isMailSent;
	}
	
	public static void sendMail(String receiverMail, String subjectLine, String msg) 
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

		try 
		{
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress("medialicensinglab@gmail.com", "Media Team"));
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(receiverMail));
			message.setSubject(subjectLine);
			message.setText(msg);

			Transport.send(message);
		}
		catch (Exception e) 
		{
			throw new RuntimeException(e);
		}
	}
}