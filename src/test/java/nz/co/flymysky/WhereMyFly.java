package nz.co.flymysky;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import nz.co.flymysky.Stepdefinition.Hook;

public class WhereMyFly extends Hook{
	public WhereMyFly() {
		
		PageFactory.initElements(driver, this);
	}
	
	
	@FindBy(xpath="(//a[text()='Great Barrier Island'])[1]")
	private WebElement greatBarrierIsland;


	public WebElement getGreatBarrierIsland() {
		return greatBarrierIsland;
	}
	
@FindBy(xpath="(//a[text()='Where We Fly'])[1]")
private WebElement whereMyFly;


public WebElement getWhereMyFly() {
	return whereMyFly;
}
	
public WebElement getDepart() {
	return depart;
}


@FindBy(name ="From")
private WebElement depart;
}
