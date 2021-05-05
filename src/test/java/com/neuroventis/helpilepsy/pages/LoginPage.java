package com.neuroventis.helpilepsy.pages;

import com.neuroventis.helpilepsy.utilities.ui.ConfigurationReader;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class LoginPage extends BasePage {

    // /html/body/div[1]/div/div/div/div/div/div/div/form/div[2]/input
    // //input[@type='email']

    @FindBy(xpath ="//input[@type='email']")
    private WebElement userName;

    @FindBy(xpath ="//input[@type='password']")
    private WebElement password;

    @FindBy(xpath ="//button[@ng-disabled='login_form.$invalid']")
    private WebElement loginbutton;


    public String getCurrentUrl() {
        return driver.getCurrentUrl();
    }
    public void login() {
        String userNameValue = ConfigurationReader.getProperty("username");
        String passwordValue = ConfigurationReader.getProperty("password");
        //wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(userName.toString()))).sendKeys(userNameValue);
        userName.sendKeys(userNameValue);
        //wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(password.toString()))).sendKeys(passwordValue);
        password.sendKeys(passwordValue);
    }

    public void clickLoginButton() {
        wait.until(ExpectedConditions.elementToBeClickable(loginbutton)).click();
    }


}
