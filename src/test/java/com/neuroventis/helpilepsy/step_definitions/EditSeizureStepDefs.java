package com.neuroventis.helpilepsy.step_definitions;

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
    @Then("User saves changes and should be recorded")
    public void user_saves_changes_and_should_be_recorded() {
        pages.manageSeizurePage().saveSeizure();
    }

    @Then("User deletes first existing Seizure")
    public void user_deletes_first_existing_Seizure() {
        pages.journalPage().deleteFirstAddedSeizureFromJournal();
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


    @When("User edit existing")
    public void user_edit_existing() {

    }

    @When("User navigates to Journal and delete existing seizures")
    public void user_navigates_to_Journal_and_delete_existing_seizures() {

    }

    @Then("User move to HomePage")
    public void user_move_to_HomePage() {

    }




}
