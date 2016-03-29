package mll.dao;

import static org.junit.Assert.assertEquals;

public class SubmissionDAOTest 
{
	 public void test_case_1() 
	 {
		 SubmissionDAO dao = new SubmissionDAO();
		 assertEquals(10, dao.testAutomation(5, 5));
	 }
}
