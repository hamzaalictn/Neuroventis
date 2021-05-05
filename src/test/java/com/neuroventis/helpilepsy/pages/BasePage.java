package com.neuroventis.helpilepsy.pages;

import com.neuroventis.helpilepsy.utilities.ui.BrowserUtils;
import com.neuroventis.helpilepsy.utilities.ui.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public abstract class  BasePage {
    protected WebDriver driver = Driver.getDriver();
    protected WebDriverWait wait = new WebDriverWait(driver,10 );

    @FindBy(xpath = "//div[@class='nb-swipe-selectors ball']/div[1]")
    private WebElement fistInfoButton;

    @FindBy(xpath = "//div[@class='nb-swipe-selectors ball']/div[2]")
    private WebElement secondInfoButton;

    @FindBy(xpath = "//div[@class='nb-swipe-selectors ball']/div[3]")
    private WebElement thirdInfoButton;

    @FindBy(xpath = "//div[@data-ng-if='HEADER.right_elem.dynamic_content']")
    private WebElement letsgoButton;


    @FindBy(xpath = "//div[@class='spinner']")
    private WebElement spinner;





    public BasePage(){
        PageFactory.initElements(driver,this);
        driver.manage().timeouts().implicitlyWait(14, TimeUnit.SECONDS);
    }
    public void navigateTo(String component){
        String locator = "//a[text() = '" + component + "']";
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(locator))).click();
    }


    public void navigateToWelcomePage() {
        fistInfoButton.click(); // Check the first information button of the tutorial
        BrowserUtils.wait(1);
        secondInfoButton.click(); // Check the second information button of the tutorial
        BrowserUtils.wait(1);
        thirdInfoButton.click();  // Check the third information button of the tutorial
        String loginLocator =letsgoButton.toString();
        letsgoButton.click();
    }

    public void waitUntilSpinnerDisappear(){
        wait.until(ExpectedConditions.invisibilityOf(spinner));
    }


}
