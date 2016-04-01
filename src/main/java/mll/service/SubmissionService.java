package mll.service;

import java.io.BufferedReader;
import java.util.ArrayList;
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
			List<Metadata> metadatas = populateMetadataBeans(request);
						
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
	public List<Metadata> populateMetadataBeans(HttpServletRequest request) throws Exception
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
	
	
	/**
	* This method takes metadata object and json objects as input 
	* and fetches the song information from those objects.
	*
	* @author  Dhaval Patel
	* @version 1.0
	* @since   2016-03-25 
	*/
	public Metadata populateSong(Metadata metadata, JSONObject mainObject, JSONObject generalInformation, JSONObject ownershipInformation) throws Exception
	{
		Song song = new Song();
	    song.setBeatsPerMin((Long)generalInformation.get("beatRate"));
	    song.setContentURL((String) mainObject.get("file"));
	    song.setSourceOfContent("DROPBOX");
	    song.setTitle((String) generalInformation.get("title"));
	    song.setCopyrightNo((String) ownershipInformation.get("copyright"));    
	    song.setPublishingCompany((String) ownershipInformation.get("pubCompany")); 
	    song.setPro((String) ownershipInformation.get("pbo")); 

	    //Download from dropbox
	    DropboxService ds = new DropboxService();
	    song.setContent(ds.getContentFromDropbox((String) mainObject.get("file")));
	    
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
	public Metadata populateSongGenres(Metadata metadata, JSONObject generalInformation) throws Exception
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