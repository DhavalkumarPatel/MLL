package mll.utility;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class EncryptionTest {

	//Positive case
	@Test
	public void testcase1() {

		try {
			String password = "password123";
			assertEquals(true, Encryption.encryptPassword(password).equals("482c811da5d5b4bc6d497ffa98491e38"));

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	//Negative case
	@Test
	public void testcase2() {

		try {
			String password = "password@123";
			assertEquals(false, Encryption.encryptPassword(password).equals("482c811da5d5b4bc6d497ffa98491e38"));

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
