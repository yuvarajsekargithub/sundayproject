package nz.co.flymysky.Stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook {
	public static WebDriver driver;
	@Before
	
	public static void beforeMethod() {
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\YUVARAJ\\eclipse-workspace\\SeleniumProject\\Task4\\Driver\\chromedriver.exe");
	driver= new ChromeDriver();
	
	}

	@After
	public static void afterMethod() {
	
	}
}
