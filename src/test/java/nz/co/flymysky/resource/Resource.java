package nz.co.flymysky.resource;

import java.util.List;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import nz.co.flymysky.Stepdefinition.Hook;

public class Resource extends Hook  {

	public void getURL(String url) {
		Hook.driver.get(url);
		
	}
	
	public void sendKey(WebElement element, String data) {
		element.sendKeys(data);
	}
	
	public void click(WebElement element) {
		element.click();

	}
	
	public void waitto() throws InterruptedException {
		Thread.sleep(3000);
}
	
	public void select(WebElement element , String data) {
	Select s = new Select(element);
	int i = Integer.parseInt(data);
	s.selectByIndex(i);

}
	
		
	public static void windowHandle() {
		try {
			driver.getWindowHandle();	
		} catch (Exception e) {
		
		}
		
		
	}

	public static boolean elementDisabled(WebElement element) {
		boolean flag = false;
		waitForElementVisibility(element);
		String disabled = element.getAttribute("class");
		if (disabled.contains("disabled")) {
			flag = true;
		}
		return flag;
		
		
	}

	public static void waitForElementVisibility(WebElement element) {
		WebDriverWait wait = new WebDriverWait(driver, 60);
		wait.until(ExpectedConditions.visibilityOf(element));
	}
		
	public boolean verifyText(List<String> list, String text ) {
		boolean flag = false;
		for (String string : list) {
			if(string.contains(text)) {
				flag = true;
				break;
			}
		}
		
		return flag;
		
	}

	public void jsscrollPageDown(WebElement element) {
		int yScrollPosition = element.getLocation().getY();
		JavascriptExecutor js = ((JavascriptExecutor)driver);
		js.executeScript("window.scrollBy(0, " + yScrollPosition + ")", "");
		
		
	}
	
}
	
	

