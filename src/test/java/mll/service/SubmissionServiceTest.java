package mll.service;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.junit.Test;

import mll.beans.Artist;
import mll.beans.Genre;
import mll.beans.Metadata;
import mll.beans.Owner;
import mll.beans.Song;


public class SubmissionServiceTest 
{
	@Test
	public void test_case_2() 
	{
		try 
		{
			
			SubmissionService service = new SubmissionService();
			HttpServletRequest request = null;
			HttpServletResponse response = null;
			String message=service.uploadMedia(request, response);
			System.out.println(message);
			assertEquals(message, "Media files uploaded successfully", message);
	
		}
		catch (Exception e) 
		{

		}
	}
	
	
	@Test
	public void test_case_3() 
	{
		try 
		{
			SubmissionService service = new SubmissionService();
			JSONParser parser = new JSONParser();
			String request = "generalInformation";
	    	
			JSONObject generalInformation =  (JSONObject) parser.parse(request);
		
			List<Metadata> metadata= (List<Metadata>) service.populateMetadataBeans((HttpServletRequest) generalInformation);
			
			
			for (Iterator<Metadata> iterator = metadata.iterator(); iterator.hasNext();) {
				//Metadata metadata1 = iterator.next();
				assertEquals(false, ((Metadata) metadata).getSong().getId() == null);
			}	
			
			}
		catch (Exception e) 
		{

		}
	}
	
	
	

	@Test
	public void test_case_4() 
	{
		try 
		{
			SubmissionService service = new SubmissionService();
			JSONParser parser = new JSONParser();
			String request = "parse";
			String request1 = "generalInformation";
			String request2 = "ownershipInformation";
			//List<Metadata> metadatas = new ArrayList<Metadata>();
			Metadata metadata =  new Metadata();
			
	    	
			JSONObject generalInformation =  (JSONObject) parser.parse(request1);
			JSONObject ownershipInformation =  (JSONObject) parser.parse(request2);
			JSONObject mainObject = (JSONObject) parser.parse(request.toString());
		
			
			metadata= (Metadata) getListOfMetadata();
			Metadata SongMetadata=  service.populateSong(metadata, mainObject, generalInformation, ownershipInformation);
			
			
			
				assertEquals(false, SongMetadata == null);
				
			
		}
		catch (Exception e) 
		{

		}
	}
	
	
	private List<Metadata> getListOfMetadata()
	{
		List<Metadata> metadatas = new ArrayList<Metadata>();
		Metadata metadata = new Metadata();

		Song song = new Song();
		song.setBeatsPerMin((long) 0.10);
		song.setCopyRightDate(new Date());
		song.setCopyrightNo("CN1");
		song.setPro("Dhaval Patel");
		song.setPublishingCompany("NEU");
		song.setTitle("title");
		song.setSourceOfContent("HARDDRIVE"); // "DROPBOX" "GOOGLEDRIVE"
		Byte[] b = new Byte[1];
		if (song.getSourceOfContent().equalsIgnoreCase("HARDDRIVE")) {
			b[0] = 0;
		} else if (song.getSourceOfContent().equalsIgnoreCase("DROPBOX")) {
			b[0] = 0;
		}
		song.setContent(b);
		metadata.setSong(song);

		Artist artist1 = new Artist();
		artist1.setName("soumya");
		artist1.setSkills("Sdance");
		Artist artist2 = new Artist();
		artist2.setName("sree");
		artist2.setSkills("Musician");
		metadata.getArtists().add(artist1);
		metadata.getArtists().add(artist2);

		Owner owner1 = new Owner();
		owner1.setDivisonOfOwnership("full");
		owner1.setName("Dhaval");
		owner1.setOwnerType("WRITER");
		owner1.setPrimaryEmail("patel.dha@husky.neu.edu");
		owner1.setSecondaryEmail(null);
		owner1.setPrimaryPhone("4572355210");
		owner1.setSecondaryPhone("1236547891");
		Owner owner2 = new Owner();
		owner2.setDivisonOfOwnership("Half");
		owner2.setName("sree");
		owner2.setOwnerType("RECORDING");
		owner2.setPrimaryEmail("pavel.chr@husky.neu.edu");
		owner2.setSecondaryEmail(null);
		owner2.setPrimaryPhone("4572355210");
		owner2.setSecondaryPhone("1236547891");
		metadata.getOwners().add(owner1);
		metadata.getOwners().add(owner2);

		Genre genre1 = new Genre();
		genre1.setGenre("Genre1");
		Genre genre2 = new Genre();
		genre2.setGenre("Genre2");

		metadata.getGenres().add(genre1);
		metadata.getGenres().add(genre2);

		metadatas.add(metadata);
		return metadatas;
	}
}

	
