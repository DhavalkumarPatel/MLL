package mll.dao;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class SubmissionDAOTest 
{
	@Test
	 public void test_case_1() 
	 {
		 SubmissionDAO dao = new SubmissionDAO();
		 assertEquals(10, dao.testAutomation(5, 5));
	 }
}
