package com.neuroventis.helpilepsy.step_definitions;

import com.neuroventis.helpilepsy.pages.TutorialPage;
import com.neuroventis.helpilepsy.utilities.ui.BrowserUtils;
import com.neuroventis.helpilepsy.utilities.ui.ConfigurationReader;
import com.neuroventis.helpilepsy.utilities.ui.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class AddSeizureStepDefs extends BaseStep {

    @Given("User is on the login page")
    public void user_is_on_the_login_page() {
        String URL = ConfigurationReader.getProperty("url");
        Driver.getDriver().get(URL);
        System.out.println("Open ::" + URL);
        BrowserUtils.wait(2);
        new TutorialPage().navigateToWelcomePage();
        Assert.assertEquals(pages.welcomePage().getCurrentUrl(), "https://d2ziclbl1px5mc.cloudfront.net/#!/welcome");
    }

    @Given("User logs in")
    public void user_logs_in() {
        pages.welcomePage().navigateToLoginPAge();
        Assert.assertEquals(pages.loginPage().getCurrentUrl(), "https://d2ziclbl1px5mc.cloudfront.net/#!/home?type=login");
        pages.loginPage().login();
        pages.loginPage().clickLoginButton();
    }

    @Given("User navigates to Home page")
    public void user_navigates_to_page() {
        pages.homePage().waitUntilSpinnerDisappear();
        BrowserUtils.wait(1);
        Assert.assertEquals(pages.homePage().getCurrentUrl(), "https://d2ziclbl1px5mc.cloudfront.net/#!/dashboard");
    }

    @Given("User navigates to Manage Seizure page")
    public void user_navigates_to_Manage_Seizure_page() {
        pages.homePage().navigateToManageSeizurePage();
        Assert.assertEquals(pages.manageSeizurePage().getCurrentUrl(), "https://d2ziclbl1px5mc.cloudfront.net/#!/manageSeizure");
    }

    @Then("Add an event popup displayed")
    public void add_an_event_popup_displayed() {
        Assert.assertEquals(pages.manageSeizurePage().isAddEventPupopDisplayed(), true);
    }

    @When("User clicks add an event button")
    public void user_clicks_add_an_event_button() {
        pages.homePage().openAddAnEventPopup();
    }


    @When("User selects type of Seizure {string}")
    public void user_selects_type_of_Seizure(String string) {
        BrowserUtils.wait(2);
        if (string.contains("Other")) {
            pages.manageSeizurePage().selectTypeOfSeizureOther(string);
        } else {
            pages.manageSeizurePage().selectTypeOfSeizure(string);
        }
    }


    @When("User selects felt it coming {string}")
    public void user_selects_felt_it_coming(String string) {
        pages.manageSeizurePage().selectFeltItComingOption(string);
    }


    @When("User Save seizure")
    public void user_Save_seizure() {
        pages.manageSeizurePage().saveSeizure();
    }

    @Then("Seizure successfully added displayed true")
    public void seizure_successfully_added_displayed_true() {
        Assert.assertTrue(pages.manageSeizurePage().saveSeizureInfo());
        pages.manageSeizurePage().endSaveSeizureProcess();
    }



    @Given("Seizure successfully added displayed true for editting")
    public void seizure_successfully_added_displayed_true_for_editting() {
        Assert.assertTrue(pages.manageSeizurePage().saveSeizureInfo());
        pages.manageSeizurePage().endSaveSeizureProcess();
        Assert.assertTrue(pages.homePage().getCurrentUrl().equalsIgnoreCase("https://d2ziclbl1px5mc.cloudfront.net/#!/dashboard"));
    }


    @When("User dont select type of Seizure")
    public void user_dont_select_type_of_Seizure() {
        pages.manageSeizurePage().selectTypeOfSeizureNull();
    }

    @Then("Popup displays configurable massage Warning")
    public void popup_displays_configurable_massage_Warning() {
        Assert.assertEquals(pages.manageSeizurePage().isWarningPopupDisplayed(), true);
    }

}
