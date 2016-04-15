package mll.service;

import java.util.List;

import mll.beans.Metadata;

public class NuxeoService
{
	//private static String NUXEOURL = "http://localhost:8080/nuxeo/site/automation";
	//private static String USERNAME = "Administrator";
	//private static String PASSWORD = "Administrator";
	
	//HttpAutomationClient client = null;
	//Session session = null;
	
	public NuxeoService() 
	{
		try
		{
			//client = new HttpAutomationClient(NUXEOURL);
			//session = (Session) client.getSession(USERNAME, PASSWORD);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
	
	public void uploadMedia(List<Metadata> metadatas)
	{
		try
		{
			if(null != metadatas)
			{
				for(Metadata metadata : metadatas)
				{
					if(null != metadata && null != metadata.getSong() && null != metadata.getSong().getId())
					{
						// Fetch the root of Nuxeo repository
						/*Document root = (Document) session.newRequest("Document.Fetch").set("value", "/").execute();
						
						File file=new File("C:\\song.mp3");
						FileBlob fb = new FileBlob(file);
						fb.setMimeType("audio/mp3");
						
						// create a file document
						session.newRequest("Document.Create").setInput(root).set("type", "File").set("name", "myfile"+metadata.getSong().getId()).set("properties", "dc:title=MLL-SONG "+metadata.getSong().getId()).execute();
						session.newRequest("Blob.Attach").setHeader(Constants.HEADER_NX_VOIDOP, "true").setInput(fb).set("document", "/myfile"+metadata.getSong().getId()).execute();
						
						//Fetch the document for JSON
						Document document = (Document) session.newRequest(DocumentService.GetDocumentChild).setInput(new PathRef("/")).set("name", "myfile"+metadata.getSong().getId()).execute();
						document.set("dc:description", metadata.getMetadataJson().toString());
						document = (Document) session.newRequest("Document.Update").setInput(document).set("properties", document).execute();*/
					}
				}
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
}