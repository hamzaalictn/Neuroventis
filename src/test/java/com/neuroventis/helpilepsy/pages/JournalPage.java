package com.neuroventis.helpilepsy.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class JournalPage extends BasePage {

    @FindBy(xpath = "//div[@class='loading-bar']")
    private WebElement loadingbar;

    @FindBy(xpath = "(//div[@class='text actionable ng-scope'])[1]")
    private WebElement firstAddedSeizureEditButton;
    

    public String getCurrentUrl() {
        return driver.getCurrentUrl();
    }

    public void waitUntilLoadingbarDisappear(){
        wait.until(ExpectedConditions.invisibilityOf(loadingbar));
    }

    public void selectFirstAddedSeizureForEdit() {
        firstAddedSeizureEditButton.click();
    }




    public void deleteFirstAddedSeizureFromJournal() {
        firstAddedSeizureEditButton.click();
    }

    public boolean IsAllAddedSeizuresDeleted() {
        return firstAddedSeizureEditButton.isDisplayed();
    }
}
