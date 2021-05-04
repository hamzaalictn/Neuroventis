package com.neuroventis.helpilepsy.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class WelcomePage extends BasePage {


    @FindBy(xpath =" //div[@class='log btn-helpilepsy']")
    private WebElement haveAccountButton;


    public String getCurrentUrl() {
        return driver.getCurrentUrl();
    }

    public void navigateToLoginPAge() {
        haveAccountButton.click();
    }
    
}
