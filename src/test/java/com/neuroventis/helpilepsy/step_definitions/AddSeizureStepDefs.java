package com.neuroventis.helpilepsy.step_definitions;

import com.neuroventis.helpilepsy.pages.HomePage;
import com.neuroventis.helpilepsy.pages.LoginPage;
import com.neuroventis.helpilepsy.pages.TutorialPage;
import com.neuroventis.helpilepsy.pages.WelcomePage;
import com.neuroventis.helpilepsy.utilities.ui.ConfigurationReader;
import com.neuroventis.helpilepsy.utilities.ui.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class AddSeizureStepDefs {
    WelcomePage welcomepage = new WelcomePage();
    LoginPage loginPage = new LoginPage();
    HomePage homePage = new HomePage();

    @Given("User is on the login page")
    public void user_is_on_the_login_page() {
        String URL = ConfigurationReader.getProperty("url");
        Driver.getDriver().get(URL);
        System.out.println("Open ::" + URL);
        new TutorialPage().navigateToWelcomePage();
        Assert.assertEquals(welcomepage.getCurrentUrl(), "https://d2ziclbl1px5mc.cloudfront.net/#!/welcome");

    }

    @Given("User logs in")
    public void user_logs_in() {
        welcomepage.navigateToLoginPAge();
        Assert.assertEquals(loginPage.getCurrentUrl(), "https://d2ziclbl1px5mc.cloudfront.net/#!/home?type=login");
        loginPage.login();
        loginPage.clickLoginButton();
    }

    @Given("User navigates to Home page")
    public void user_navigates_to_page() {
        homePage.waitUntilSpinnerDisappear();
        //      BrowserUtils.wait(4); // Waits for the page to load.
        Assert.assertEquals(homePage.getCurrentUrl(), "https://d2ziclbl1px5mc.cloudfront.net/#!/dashboard");
    }
    @Given("User navigates to Manage Seizure page")
    public void user_navigates_to_Manage_Seizure_page() {
        homePage.navigateToManageSeizurePage();
        //Assert.assertEquals(ManageSeizurePage.getCurrentUrl(), "https://d2ziclbl1px5mc.cloudfront.net/#!/dashboard");

    }

    @When("User clicks on {string} to display Add functionalities")
    public void user_clicks_on_to_display_Add_functionalities(String string) {

    }

    @Then("Add functionalities displayed {string}")
    public void add_functionalities_displayed(String string) {

    }
}
