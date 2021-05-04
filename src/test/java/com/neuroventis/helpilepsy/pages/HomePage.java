package com.neuroventis.helpilepsy.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends BasePage{

    @FindBy(xpath ="/html/body/div[1]/div/div/div/app-header/header/div[1]/div[3]/div")
    private WebElement addEventButton;


    @FindBy(xpath =" /html/body/div[2]/div[3]/div[14]/div[2]/div/div[2]/div[1]")
    private WebElement seizureButton;


    @FindBy(xpath =" /html/body/div[2]/div[3]/div[14]/div[2]/div/div[2]/div[1]")
    private WebElement appointmentButton;


    public String getCurrentUrl() {
        return driver.getCurrentUrl();
    }
    public void navigateToManageSeizurePage(){
    addEventButton.click();
    seizureButton.click();
    }
}
