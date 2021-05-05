package com.neuroventis.helpilepsy.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends BasePage{

    @FindBy(xpath ="//div[text()='Add']")
    private WebElement addEventButton;

    @FindBy(xpath ="//div[text()='Seizure']/parent::div")
    private WebElement addEventSeizureButton;

    @FindBy(xpath ="//div[text()='Mon']/parent::div")
    private WebElement mondayButton;
    @FindBy(xpath ="//div[text()='Tue']/parent::div")
    private WebElement tuesdayButton;
    @FindBy(xpath ="//div[text()='Wed']/parent::div")
    private WebElement wednesdayButton;
    @FindBy(xpath ="//div[text()='Thu']/parent::div")
    private WebElement thursdayButton;
    @FindBy(xpath ="//div[text()='Fri']/parent::div")
    private WebElement fridayButton;
    @FindBy(xpath ="//div[text()='Sat']/parent::div")
    private WebElement saturdayButton;
    @FindBy(xpath ="//div[text()='Sun']/parent::div")
    private WebElement sundayButton;
    @FindBy(xpath ="(//div[@class='img'])[1]")
    private WebElement dashboardButton;
    @FindBy(xpath ="(//div[@class='img'])[2]")
    private WebElement JournalButton;
    @FindBy(xpath ="(//div[@class='img'])[3]")
    private WebElement medicationButton;
    @FindBy(xpath ="(//div[@class='img'])[4]")
    private WebElement settingsButton;




    public String getCurrentUrl() {
        return driver.getCurrentUrl();
    }
    public void navigateToManageSeizurePage(){
    addEventButton.click();
    addEventSeizureButton.click();
    }


    public void openAddAnEventPopup() {
        addEventButton.click();
    }
}
