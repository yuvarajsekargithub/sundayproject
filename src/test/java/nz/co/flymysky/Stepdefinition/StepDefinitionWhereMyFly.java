package nz.co.flymysky.Stepdefinition;

import java.util.List;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import nz.co.flymysky.WhereMyFly;
import nz.co.flymysky.resource.Resource;

public class StepDefinitionWhereMyFly {
	Resource r = new Resource();
	Hook h = new Hook();
	WhereMyFly w = new WhereMyFly();

	
	@Given("Click the WhereMyFly link in HomePage")
	public void click_the_WhereMyFly_link_in_HomePage() {
		r.getURL("https://www.flymysky.co.nz/");    
	
	}

	@When("Once we click the GreatBarrierIsland its need to be go to there requested page and update the data")
	public void once_we_click_the_GreatBarrierIsland_its_need_to_be_go_to_there_requested_page_and_update_the_data(DataTable dataGreatBarrier) {
		List<String> data = dataGreatBarrier.asList(String.class);
		r.click(w.getWhereMyFly());
		r.click(w.getGreatBarrierIsland());
		r.select(w.getDepart(), data.get(0));
	
		
	
	}

	@When("Once we click the Whangarei link its need to be go to there requested page and update the data")
	public void once_we_click_the_Whangarei_link_its_need_to_be_go_to_there_requested_page_and_update_the_data(io.cucumber.datatable.DataTable dataTable) {
	    
	}

	@When("Once we click the SkyTaxi and Tour its need to be go there requested page")
	public void once_we_click_the_SkyTaxi_and_Tour_its_need_to_be_go_there_requested_page() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Then("All the links must work")
	public void all_the_links_must_work() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}


}
