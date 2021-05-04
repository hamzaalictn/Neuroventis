package com.neuroventis.helpilepsy.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class TutorialPage extends BasePage {
    // https://d2ziclbl1px5mc.cloudfront.net/#!/welcome

    //*[@type='button'][1]/span/..
    @FindBy(xpath = "//*[@type='button'][1]/span/..")
    private WebElement HaveAccountButton;

    //*[@type='button'][2]
    @FindBy(xpath = "//*[@type='button'][2]")
    private WebElement createAccountButton;


}
