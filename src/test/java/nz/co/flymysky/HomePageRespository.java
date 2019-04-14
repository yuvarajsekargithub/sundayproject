package nz.co.flymysky;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import nz.co.flymysky.Stepdefinition.Hook;

public class HomePageRespository   {
	public HomePageRespository() {
		PageFactory.initElements(Hook.driver, this);
	}
	
	@FindBy(name="RDate")
	private WebElement returnDate;
	
	@FindBy(name="Children")
	private WebElement children;
	
	public WebElement getChildren() {
		return children;
	}

	public WebElement getInfants() {
		return infants;
	}

	@FindBy(id="Infants")
	private WebElement infants;
	
	public WebElement getReturnDate() {
		return returnDate;
	}

	@FindBy(name="chkbox")
	private WebElement Onewayflight;

	public WebElement getOnewayflight() {
		return Onewayflight;
	}

	@FindBy(xpath ="//select[@id='From']")
	private WebElement departing;
	
	public WebElement getDeparting() {
		return departing;
	}

	public WebElement getTravellingTo() {
		return travellingTo;
	}

	public WebElement getDepartureDate() {
		return departureDate;
	}

	public WebElement getAdults() {
		return adults;
	}

	public WebElement getSearchFlight() {
		return searchFlight;
	}

	@FindBy(id="To")
	private WebElement travellingTo;
	
	@FindBy(name="Date")
	private WebElement departureDate;
	
	@FindBy(id="Adults")
	private WebElement adults;
	
	@FindBy(xpath="//input[@id='searchLink']")
	private WebElement searchFlight;
	
	
	}



