package com.neuroventis.helpilepsy.pages;

import com.neuroventis.helpilepsy.utilities.ui.BrowserUtils;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class ManageSeizurePage extends BasePage {


    @FindBy(xpath = "//span[text()='Generalized tonic-clonic seizure']")
    private WebElement generalizedTonicClonicSeizureButton;

    @FindBy(xpath = "//span[text()='Generalized absence seizure ']")
    private WebElement generalizedAbsenceSeizureButton;

    // (//span[text()='Generalized motor seizure'])[1]
    @FindBy(xpath = "(//div[@class='item-content'])[3]")
    private WebElement generalizedMotorSeizureButton;

    @FindBy(xpath = "//span[text()='Focal aware seizure']")
    private WebElement focalAwareSeizureButton;

    @FindBy(xpath = "//span[text()='Focal impaired awareness seizure']")
    private WebElement focalImpairedAwarenessAeizureButton;

    @FindBy(xpath = "//input[@placeholder='Type here']")
    private WebElement otherButton;

    @FindBy(xpath = "//div[@class='addButton btn btn-helpilepsy ng-scope']")
    private WebElement addButton;

    @FindBy(xpath = "//label[@for='felt_yes']")
    private WebElement feltItComingButtonYes;

    @FindBy(xpath = "//label[@for='felt_no']")
    private WebElement feltItComingButtonNo;

    //span[@nb-txt='events_content.seizure.save']
    //span[text()='Save Seizure']
    @FindBy(xpath = "//button[@class='btn-helpilepsy green']")
    private WebElement saveSeizureButton;

    @FindBy(xpath = "//div[text()='Seizure successfully added']")
    private WebElement saveSeizureInfo;

    @FindBy(xpath = "//div[@ng-click='manageSeizureType()']")
    private WebElement selectTypeButton;

    @FindBy(xpath = "//div[text()='Add an event']")
    private WebElement addAnEventText;

    @FindBy(xpath = "(//span[text()='Warning'])[1]")
    private WebElement warningPopupHeadline;

    @FindBy(xpath = "(//div[@class='close-button fa fa-times'])[1]")
    private WebElement selectTypeCloseButton;




    public void selectTypeOfSeizure(String str) {
        selectTypeButton.click();
        switch (str.trim()) {
            case "Generalized tonic-clonic seizure":
                generalizedTonicClonicSeizureButton.click();
                break;
            case "Generalized absence seizure":
                generalizedAbsenceSeizureButton.click();
                break;

            case "Generalized motor seizure":
                generalizedMotorSeizureButton.click();
                break;
            case "Focal aware seizure":
                focalAwareSeizureButton.click();
                break;
            case "Focal impaired awareness seizure":
                focalImpairedAwarenessAeizureButton.click();
                break;

        }
    }

    public void selectTypeOfSeizureOther(String str) {
        String[] arr = str.split("Other");
        selectTypeButton.click();
        otherButton.sendKeys(arr[1]);
        addButton.click();
    }

    public String getCurrentUrl() {
        return driver.getCurrentUrl();
    }

    public void selectFeltItComingOption(String str) {
        if (str.equalsIgnoreCase("Yes")) {
            feltItComingButtonYes.click();
        } else if ((str.equalsIgnoreCase("No"))) {
            feltItComingButtonNo.click();
        }
    }

    public void saveSeizure() {
        saveSeizureButton.click();
    }


    public String saveSeizureInfo() {
        return saveSeizureInfo.getText();
    }

    public boolean isAddEventPupopDisplayed() {

        wait.until(ExpectedConditions.visibilityOf(addAnEventText));
        return addAnEventText.isDisplayed();
    }


    public boolean isWarningPopupDisplayed() {
        return warningPopupHeadline.isDisplayed();
    }

    public void selectTypeOfSeizureNull() {
        selectTypeButton.click();
        selectTypeCloseButton.click();

    }
}
