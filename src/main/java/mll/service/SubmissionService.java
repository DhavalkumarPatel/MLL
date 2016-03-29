package mll.service;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import mll.beans.Artist;
import mll.beans.Genre;
import mll.beans.Metadata;
import mll.beans.Owner;
import mll.beans.Song;
import mll.dao.SubmissionDAO;

public class SubmissionService 
{
	SubmissionDAO dao;
	
	public SubmissionService() 
	{
		dao = new SubmissionDAO();
	}
	
	/**
	* This method takes http request and response objects as input and 
	* first validates the request and if it is valid then save the media
	* files and related media information.
	*
	* @author  Dhaval Patel
	* @version 1.0
	* @since   2016-03-24 
	*/
	public String uploadMedia(HttpServletRequest request, HttpServletResponse response)
	{
		String responseString = "";
		
		try
		{
			// Validate the request and populate the metadata beans for all songs if request is valid
			List<Metadata> metadatas = getListOfMetadata();
						
			if(null != metadatas && !metadatas.isEmpty())
			{
				// Save all media files with metadata
				dao.saveMetadata(metadatas);
				
				// Set success response
				responseString = "Media files uploaded successfully.";
			}
			else
			{
				// Request is invalid so set proper error message
				responseString = "Request does not contain valid data. Please upload with proper metadata information.";
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			responseString = "Error while saving the data. Please upload with proper metadata information.";
		}
		
		return responseString;
	}
	
	/**
	* This method takes http request as input and validates the 
	* request and if it is valid then creates the metadata list 
	* from the request object.
	*
	* @author  Dhaval Patel
	* @version 1.0
	* @since   2016-03-24 
	*/
	private List<Metadata> populateMetadataBeans(HttpServletRequest request) throws Exception
	{
		List<Metadata> metadatas = new ArrayList<Metadata>();
		Metadata metadata =  new Metadata();
		
		StringBuffer requestStr = new StringBuffer();
	   	BufferedReader reader = request.getReader();
    	String line = null;
    	while ((line = reader.readLine()) != null)
    	{
    		requestStr.append(line);
    	}
    	
    	JSONParser parser = new JSONParser();
    	JSONObject mainObject = (JSONObject) parser.parse(requestStr.toString());
	    JSONObject generalInformation =  (JSONObject) mainObject.get("generalInformation");
	    JSONObject ownershipInformation =  (JSONObject) mainObject.get("ownershipInformation");
	    JSONObject soundInformation =  (JSONObject) mainObject.get("soundInformation");
	    
	    // Populate Song Information	    
	    populateSong(metadata, mainObject, generalInformation, ownershipInformation);
	    
	    // Populate Song Artists Information	 
	    populateSongArtists(metadata, generalInformation);
	    
	    // Populate Song Genres Information	 
	    populateSongGenres(metadata, generalInformation);
	    
	    // Populate Song Writers Information	 
	    populateSongWriters(metadata, ownershipInformation);
	    
	    // Populate Song Recorders Information	 
	    populateSongRecorders(metadata, soundInformation);
	    
		metadatas.add(metadata);
		return metadatas;
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
		artist1.setName("Dhaval Patel");
		artist1.setSkills("Singing");
		Artist artist2 = new Artist();
		artist2.setName("Pavel");
		artist2.setSkills("Musician");
		metadata.getArtists().add(artist1);
		metadata.getArtists().add(artist2);

		Owner owner1 = new Owner();
		owner1.setDivisonOfOwnership("Half");
		owner1.setName("Dhaval");
		owner1.setOwnerType("WRITER");
		owner1.setPrimaryEmail("patel.dha@husky.neu.edu");
		owner1.setSecondaryEmail(null);
		owner1.setPrimaryPhone("4572355210");
		owner1.setSecondaryPhone("1236547891");
		Owner owner2 = new Owner();
		owner2.setDivisonOfOwnership("Half");
		owner2.setName("Pavel");
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
	
	/**
	* This method takes dropbox url and download the content
	* on from the given url if its valid.
	*
	* @author  Dhaval Patel
	* @version 1.0
	* @since   2016-03-25
	*/
	private Byte[] getContentFromDropbox(String urlStr) throws Exception
	{
		URL url = new URL(urlStr);
		InputStream in = new BufferedInputStream(url.openStream());
		ByteArrayOutputStream out = new ByteArrayOutputStream();
		byte[] content = new byte[1024];
		int n = 0;
		while (-1 != (n = in.read(content))) 
		{
		    out.write(content, 0, n);
		}
		out.close();
		in.close();
		
		Byte[] byteObjects = new Byte[content.length];
		int i=0;    
		for(byte b: content)
		{
			byteObjects[i++] = b;
		}
		return byteObjects;
	}
	
	/**
	* This method takes metadata object and json objects as input 
	* and fetches the song information from those objects.
	*
	* @author  Dhaval Patel
	* @version 1.0
	* @since   2016-03-25 
	*/
	private Metadata populateSong(Metadata metadata, JSONObject mainObject, JSONObject generalInformation, JSONObject ownershipInformation) throws Exception
	{
		Song song = new Song();
	    song.setBeatsPerMin((Long)generalInformation.get("beatRate"));
	    song.setContentURL((String) mainObject.get("file"));
	    song.setSourceOfContent("DROPBOX");
	    song.setTitle((String) generalInformation.get("title"));
	    song.setContent(getContentFromDropbox((String) mainObject.get("file")));
	    song.setCopyrightNo((String) ownershipInformation.get("copyright"));    
	    song.setPublishingCompany((String) ownershipInformation.get("pubCompany")); 
	    song.setPro((String) ownershipInformation.get("pbo")); 
	    metadata.setSong(song);
	    
	    return metadata;
	}
	
	/**
	* This method takes metadata object and json object as input 
	* and fetches the song artist information from json array.
	*
	* @author  Dhaval Patel
	* @version 1.0
	* @since   2016-03-25 
	*/
	private Metadata populateSongArtists(Metadata metadata, JSONObject generalInformation) throws Exception
	{
		JSONArray artists= (JSONArray) generalInformation.get("artists");
	    for(int i=0; i<artists.size(); i++)
	    {
	    	Artist artist = new Artist();
	    	artist.setName((String) ((JSONObject)artists.get(i)).get("name"));
	    	metadata.getArtists().add(artist);
	    }
	    
	    return metadata;
	}
	
	/**
	* This method takes metadata object and json object as input 
	* and fetches the song genres information from json array.
	*
	* @author  Dhaval Patel
	* @version 1.0
	* @since   2016-03-25 
	*/
	private Metadata populateSongGenres(Metadata metadata, JSONObject generalInformation) throws Exception
	{
		JSONArray genres = (JSONArray) generalInformation.get("genres");
	    for(int i=0; i<genres.size(); i++)
	    {
	    	Genre genre = new Genre();
	    	genre.setGenre((String) genres.get(i));
	    	metadata.getGenres().add(genre);
	    }
	    
	    return metadata;
	}
	
	/**
	* This method takes metadata object and json object as input 
	* and fetches the sound writers information from json array.
	*
	* @author  Dhaval Patel
	* @version 1.0
	* @since   2016-03-25 
	*/
	private Metadata populateSongWriters(Metadata metadata, JSONObject ownershipInformation) throws Exception
	{
		JSONArray songwriters = (JSONArray) ownershipInformation.get("songwriters");
	    for(int i=0; i<songwriters.size(); i++)
	    {
	    	JSONObject writer =  (JSONObject) songwriters.get(i);
	    	Owner owner = new Owner();
	    	
	    	owner.setDivisonOfOwnership("Half");
			owner.setName((String)writer.get("name"));
			owner.setOwnerType("WRITER");
			owner.setPrimaryEmail((String)writer.get("primaryEmail"));
			owner.setSecondaryEmail((String)writer.get("secondaryEmail"));
			owner.setPrimaryPhone((String)writer.get("primaryPhone"));
			owner.setSecondaryPhone((String)writer.get("secondaryPhone"));
	    	
	    	metadata.getOwners().add(owner);
	    }
	    
	    return metadata;
	}
	
	/**
	* This method takes metadata object and json object as input 
	* and fetches the sound recorders information from json array.
	*
	* @author  Dhaval Patel
	* @version 1.0
	* @since   2016-03-25 
	*/
	private Metadata populateSongRecorders(Metadata metadata, JSONObject soundInformation) throws Exception
	{
		JSONArray recorders = (JSONArray) soundInformation.get("soundOwners");
	    for(int i=0; i<recorders.size(); i++)
	    {
	    	JSONObject recorder =  (JSONObject) recorders.get(i);
	    	Owner owner = new Owner();
	    	
	    	owner.setDivisonOfOwnership("Half");
			owner.setName((String)recorder.get("name"));
			owner.setOwnerType("RECORDING");
			owner.setPrimaryEmail((String)recorder.get("primaryEmail"));
			owner.setSecondaryEmail((String)recorder.get("secondaryEmail"));
			owner.setPrimaryPhone((String)recorder.get("primaryPhone"));
			owner.setSecondaryPhone((String)recorder.get("secondaryPhone"));
	    	
	    	metadata.getOwners().add(owner);
	    }
	    
	    return metadata;
	}
}