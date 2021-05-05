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

    @FindBy(xpath = "//label[@for='felt_yes']/parent::div")
    private WebElement feltItComingButtonYes;

    @FindBy(xpath = "//label[@for='felt_no']/parent::div")
    private WebElement feltItComingButtonNo;

    //span[@nb-txt='events_content.seizure.save']
    //span[text()='Save Seizure']
    @FindBy(xpath = "//button[@class='btn-helpilepsy green']")
    private WebElement saveSeizureButton;

    @FindBy(xpath = "//span[text()='Delete Seizure']/parent::div")
    private WebElement deleteSeizureButton;

    @FindBy(xpath = "//span[text()='Confirm']/parent::div")
    private WebElement deleteSeizureConfirmButton;

    @FindBy(xpath = "//div[text()='Seizure successfully added']")
    private WebElement saveSeizureInfo;

    @FindBy(xpath = "(//button[text()='Ok'])[1]")
    private WebElement saveSeizureOKbutton;

    @FindBy(xpath = "//div[@ng-click='manageSeizureType()']")
    private WebElement selectTypeButton;

    @FindBy(xpath = "//div[text()='Add an event']")
    private WebElement addAnEventText;

    @FindBy(xpath = "//div[@class='modal-head error']")
    private WebElement warningPopupHeadline;

    @FindBy(xpath = "(//div[@class='close-button fa fa-times'])[1]")
    private WebElement selectTypeCloseButton;

    @FindBy(xpath = "//span[text()='Define the duration']")
    private WebElement defineTheDurationButton;

    @FindBy(xpath = "(//input[@type='number'])[1]")
    private WebElement defineTheDurationMinutesBox;

    @FindBy(xpath = "(//input[@type='number'])[2]")
    private WebElement defineTheDurationSecondsBox;

    @FindBy(xpath = "(//div[text()='Validate'])[1]")
    private WebElement defineTheDurationValidateButton;

    @FindBy(xpath = "//i[text()='Triggers']/parent::div")
    private WebElement triggerSectionButton;

    @FindBy(xpath = "//div[contains(@ng-if,'emergency')]/parent::div")
    private WebElement EmergencyMedicationSectionButton;

    @FindBy(xpath = "//span[text()='Stress']/parent::span/parent::div")
    private WebElement triggerStressButton;

    @FindBy(xpath = "//span[text()='Validate']/parent::div")
    private WebElement valideButton;

    @FindBy(xpath = "//span[text()='Clobazam']/parent::span/parent::div")
    private WebElement emergencyMedicationsClobazamButton;


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
        BrowserUtils.wait(3);
    }


    public boolean saveSeizureInfo() {
        return saveSeizureInfo.isDisplayed();
    }

    public boolean isAddEventPupopDisplayed() {
        wait.until(ExpectedConditions.visibilityOf(addAnEventText));
        return addAnEventText.isDisplayed();
    }


    public boolean isWarningPopupDisplayed() {
        wait.until(ExpectedConditions.visibilityOf(warningPopupHeadline));
        return warningPopupHeadline.isDisplayed();
    }

    public void selectTypeOfSeizureNull() {
        BrowserUtils.wait(2);
    }

    public void endSaveSeizureProcess() {
        saveSeizureOKbutton.click();
        BrowserUtils.wait(3);
    }

    public void defineDurationTime(Integer int1, Integer int2) {
        defineTheDurationButton.click();
        defineTheDurationMinutesBox.sendKeys(int1 + "");
        defineTheDurationSecondsBox.sendKeys(int2 + "");
        defineTheDurationValidateButton.click();
    }


    public void deleteSeizure() {
        deleteSeizureButton.click();
        deleteSeizureConfirmButton.click();
        BrowserUtils.wait(3);

    }


    public void selectTriggerSection() {
        triggerSectionButton.click();
    }

    public void addTrigger(String string) {
        if (string.equalsIgnoreCase("Stress"))
            triggerStressButton.click();
        valideButton.click();
    }


    public void selectEmergencyMedicationsUsedSection() {
        EmergencyMedicationSectionButton.click();
    }

    public void addUsedEmergencyMedication(String string) {
        if (string.equalsIgnoreCase("Clobazam"))
            emergencyMedicationsClobazamButton.click();
        valideButton.click();
    }
}
