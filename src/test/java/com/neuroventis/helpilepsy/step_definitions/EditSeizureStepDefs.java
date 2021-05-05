package com.neuroventis.helpilepsy.step_definitions;

import com.neuroventis.helpilepsy.pages.*;
import com.neuroventis.helpilepsy.utilities.ui.BrowserUtils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class EditSeizureStepDefs extends BaseStep{

    @Given("User adds Generalize Absence Seizure")
    public void user_adds_Generalize_Absence_Seizure() {
        String str = "Generalized absence seizure";
        pages.manageSeizurePage().selectTypeOfSeizureOther(str);

    }

    @When("User navigates to Journal and select existing Generalize Absence Seizure")
    public void user_navigates_to_Journal_and_select_existing_Generalize_Absence_Seizure() {

    }

    @When("User edit existing")
    public void user_edit_existing() {

    }

    @When("User navigates to Journal and delete existing seizures")
    public void user_navigates_to_Journal_and_delete_existing_seizures() {

    }

    @Then("User move to HomePage")
    public void user_move_to_HomePage() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }




}
