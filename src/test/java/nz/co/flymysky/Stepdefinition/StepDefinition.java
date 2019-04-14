package nz.co.flymysky.Stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import nz.co.flymysky.HomePageRespository;
import nz.co.flymysky.resource.Resource;

public class StepDefinition {
	Resource r = new Resource();
	Hook h = new Hook();
	HomePageRespository home = new HomePageRespository();
	
	@Given("The User should see the Find a Flight Page in HomePage")
	public void the_User_should_see_the_Find_a_Flight_Page_in_HomePage() {
	    r.getURL("https://www.flymysky.co.nz/");
	    
	}

	/*@When("The User Should select all the datas in Find a Flight Page till Search Flight {string},{string},{string},{string}")
	public void the_User_Should_select_all_the_datas_in_Find_a_Flight_Page_till_Search_Flight(String From, String To, String fromDate, String Adult) {
	 r.sendKey(home.getDeparting(), From);
	 r.sendKey(home.getTravellingTo(), To);
	 r.click(home.getOnewayflight());
	 r.sendKey(home.getDepartureDate(), fromDate);
	}
*/
	/*@When("The User Should select all the datas in Find a Flight Page till Search Flight {string},{string},{string},{string}")
	public void the_User_Should_select_all_the_datas_in_Find_a_Flight_Page_till_Search_Flight(String From, String To, String fromDate, String Adult) {
		r.sendKey(home.getDeparting(), From);
		 r.sendKey(home.getTravellingTo(), To);
		 r.click(home.getOnewayflight());
		 r.sendKey(home.getDepartureDate(), fromDate);
	    r.sendKey(home.getAdults(), Adult);
	    r.click(home.getSearchFlight());
	}

*/	
	@When("The User Should select all the datas in Find a Flight Page till Search Flight {string},{string},{string},{string},{string},{string},{string}")
	public void the_User_Should_select_all_the_datas_in_Find_a_Flight_Page_till_Search_Flight(String From, String To, String fromDate, String returndate, String Adult, String child, String infant) throws InterruptedException {
	   r.sendKey(home.getDeparting(), From);
	   r.sendKey(home.getTravellingTo(), To);
	   r.sendKey(home.getDepartureDate(), fromDate);
	   r.sendKey(home.getAdults(), Adult);
	   r.sendKey(home.getChildren(), child);
	   r.sendKey(home.getInfants(), infant);
	   r.click(home.getSearchFlight());
	   
	
	
	}


	@Then("The User should see the flight details")
	public void the_User_should_see_the_flight_details() {
	    
		
		  
	}



}
