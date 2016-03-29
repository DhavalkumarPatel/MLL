package mll.dao;

public class SubmissionDAOTest 
{
	/*
	@Test
	public void test_case_1() 
	{
		try 
		{
			List<Metadata> metadatas = getListOfMetadata();
			SubmissionDAO dao = new SubmissionDAO();

			metadatas = dao.saveMetadata(metadatas);

			for (Metadata metadata : metadatas) 
			{
				assertEquals(false, metadata.getSong().getId() == null);
			}
			
			for (Metadata metadata : metadatas) 
			{
				for (Artist artist : metadata.getArtists()) 
				{
					if (null != artist) 
					{
						assertEquals(false, artist.getId() == null);
					}
				}
				
				for (Genre genre : metadata.getGenres()) 
				{
					if (null != genre) 
					{
						assertEquals(false, genre.getId() == null);
					}
				}
				
				for (Owner owner : metadata.getOwners()) 
				{
					if (null != owner)
					{
						assertEquals(false, owner.getId() == null);
					}
				}
			}
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
	}*/
}
