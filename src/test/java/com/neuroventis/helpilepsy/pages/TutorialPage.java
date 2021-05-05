package com.neuroventis.helpilepsy.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class TutorialPage extends BasePage {
    @FindBy(xpath = "//*[@type='button'][1]/span/..")
    private WebElement HaveAccountButton;

    @FindBy(xpath = "//*[@type='button'][2]")
    private WebElement createAccountButton;


}
