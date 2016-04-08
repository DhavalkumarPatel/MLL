package mll.dao;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import mll.beans.Artist;
import mll.beans.Genre;
import mll.beans.Metadata;
import mll.beans.Owner;

public class SubmissionDAOTest 
{
	@Test
	public void saveMetadata1() 
	{
		try 
		{
			SubmissionDAO dao = new SubmissionDAO();
			assertEquals(true, dao.saveMetadata(null) == null);
		} 
		catch (Exception e) 
		{

		}
	}
	
	@Test
	public void saveMetadata2() 
	{
		try 
		{
			SubmissionDAO dao = new SubmissionDAO();
			List<Metadata> metadatas = new ArrayList<Metadata>();
			assertEquals(true, dao.saveMetadata(metadatas) == metadatas);
		} 
		catch (Exception e) 
		{

		}
	}
	
	@Test
	public void saveArtists1() 
	{
		try 
		{
			SubmissionDAO dao = new SubmissionDAO();
			assertEquals(true, dao.saveArtists(null, null, null) == null);
		} 
		catch (Exception e) 
		{

		}
	}
	
	@Test
	public void saveArtists2() 
	{
		try 
		{
			SubmissionDAO dao = new SubmissionDAO();
			List<Artist> artists = new ArrayList<Artist>();
			assertEquals(true, dao.saveArtists(artists, null, null) == artists);
		} 
		catch (Exception e) 
		{

		}
	}
	
	@Test
	public void saveGenres1() 
	{
		try 
		{
			SubmissionDAO dao = new SubmissionDAO();
			assertEquals(true, dao.saveGenres(null, null, null) == null);
		} 
		catch (Exception e) 
		{

		}
	}
	
	@Test
	public void saveGenres2() 
	{
		try 
		{
			SubmissionDAO dao = new SubmissionDAO();
			List<Genre> genres = new ArrayList<Genre>();
			assertEquals(true, dao.saveGenres(genres, null, null) == genres);
		} 
		catch (Exception e) 
		{

		}
	}
	
	@Test
	public void saveOwners1() 
	{
		try 
		{
			SubmissionDAO dao = new SubmissionDAO();
			assertEquals(true, dao.saveOwners(null, null, null) == null);
		} 
		catch (Exception e) 
		{

		}
	}
	
	@Test
	public void saveOwners2() 
	{
		try 
		{
			SubmissionDAO dao = new SubmissionDAO();
			List<Owner> owners = new ArrayList<Owner>();
			assertEquals(true, dao.saveOwners(owners, null, null) == owners);
		} 
		catch (Exception e) 
		{

		}
	}
	
}
