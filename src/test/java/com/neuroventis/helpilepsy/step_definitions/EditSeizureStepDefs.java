package com.neuroventis.helpilepsy.step_definitions;

import com.neuroventis.helpilepsy.utilities.ui.BrowserUtils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class EditSeizureStepDefs extends BaseStep{

    @Given("User adds Generalize Absence Seizure")
    public void user_adds_Generalize_Absence_Seizure() {
        String str = "Generalized absence seizure";
        pages.manageSeizurePage().selectTypeOfSeizure(str);

    }


    @When("User navigates to Journal and select existing first existing Seizure")
    public void user_navigates_to_Journal_and_select_existing_first_existing_Seizure() {
        pages.homePage().navigateToJournalPage();
        Assert.assertEquals(pages.journalPage().getCurrentUrl(), "https://d2ziclbl1px5mc.cloudfront.net/#!/journal");
        pages.journalPage().waitUntilLoadingbarDisappear();
        pages.journalPage().selectFirstAddedSeizureForEdit();
    }


    @When("User defines the duration as {int} minute and {int} seconds")
    public void user_defines_the_duration_as_minute_and_seconds(Integer int1, Integer int2) {
        pages.manageSeizurePage().defineDurationTime(int1,int2);
    }

    @Then("User deletes first existing Seizure")
    public void user_deletes_first_existing_Seizure() {
        pages.journalPage().selectFirstAddedSeizureForEdit();
        BrowserUtils.wait(3);
        pages.manageSeizurePage().deleteSeizure();
    }

    @Then("User deletes first existing Seizure until all Seizure deleted")
    public void user_deletes_first_existing_Seizure_until_all_Seizure_deleted() {

        boolean existingSeizure = pages.journalPage().IsAllAddedSeizuresDeleted();
        while (existingSeizure) {
            pages.journalPage().deleteFirstAddedSeizureFromJournal();
            pages.manageSeizurePage().deleteSeizure();
        }
    }

    @When("User selects Triggers section")
    public void user_selects_Triggers_section() {


    }
    @When("User selects Triggers section and adds {string} as Trigger")
    public void user_selects_Triggers_section_and_adds_as_Trigger(String string) {
        pages.manageSeizurePage().selectTriggerSection();
        pages.manageSeizurePage().addTrigger(string);
    }

    @Then("Seizure successfully editted  true")
    public void seizure_successfully_editted_true() {
        BrowserUtils.switchToWindow("https://d2ziclbl1px5mc.cloudfront.net/#!/dashboard");
    }

    @When("User selects Emergency medications section and adds {string} as used Medication")
    public void user_selects_Emergency_medications_section_and_adds_as_used_Medication(String string) {
        pages.manageSeizurePage().selectEmergencyMedicationsUsedSection();
        pages.manageSeizurePage().addUsedEmergencyMedication(string);
    }






}
