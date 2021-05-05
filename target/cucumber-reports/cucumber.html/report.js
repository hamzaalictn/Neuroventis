$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DataDrivenAddSeizure.feature");
formatter.feature({
  "name": "Check the Add Seizure feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@dataDriven"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Adding Seizures",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User navigates to Manage Seizure page",
  "keyword": "And "
});
formatter.step({
  "name": "User selects type of Seizure \"\u003cSeizure Type\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User selects felt it coming \"\u003cFelt it coming Option\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User Save seizure",
  "keyword": "And "
});
formatter.step({
  "name": "Seizure successfully added displayed true",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Seizure Type",
        "Felt it coming Option"
      ]
    },
    {
      "cells": [
        "Generalized absence seizure",
        "No"
      ]
    },
    {
      "cells": [
        "Focal aware seizure",
        "Yes"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Home page",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_navigates_to_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding Seizures",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@dataDriven"
    }
  ]
});
formatter.step({
  "name": "User navigates to Manage Seizure page",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_navigates_to_Manage_Seizure_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects type of Seizure \"Generalized absence seizure\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_selects_type_of_Seizure(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects felt it coming \"No\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_selects_felt_it_coming(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Save seizure",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_Save_seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seizure successfully added displayed true",
  "keyword": "Then "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.seizure_successfully_added_displayed_true()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Home page",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_navigates_to_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding Seizures",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@dataDriven"
    }
  ]
});
formatter.step({
  "name": "User navigates to Manage Seizure page",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_navigates_to_Manage_Seizure_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects type of Seizure \"Focal aware seizure\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_selects_type_of_Seizure(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects felt it coming \"Yes\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_selects_felt_it_coming(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Save seizure",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_Save_seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seizure successfully added displayed true",
  "keyword": "Then "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.seizure_successfully_added_displayed_true()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/addSeizure.feature");
formatter.feature({
  "name": "Check the Add Seizure feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@add"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Home page",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_navigates_to_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to Add Seizure functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@add"
    },
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "User clicks add an event button",
  "keyword": "When "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_clicks_add_an_event_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add an event popup displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.add_an_event_popup_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Home page",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_navigates_to_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Seizure functionality Warning popup test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@add"
    },
    {
      "name": "@negatif"
    }
  ]
});
formatter.step({
  "name": "User navigates to Manage Seizure page",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_navigates_to_Manage_Seizure_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User dont select type of Seizure",
  "keyword": "When "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_dont_select_type_of_Seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects felt it coming \"Yes\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_selects_felt_it_coming(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Save seizure",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_Save_seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Popup displays configurable massage Warning",
  "keyword": "Then "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.popup_displays_configurable_massage_Warning()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Home page",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_navigates_to_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding Seizure Focal aware seizure",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@add"
    }
  ]
});
formatter.step({
  "name": "User navigates to Manage Seizure page",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_navigates_to_Manage_Seizure_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects type of Seizure \"Focal impaired awareness seizure\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_selects_type_of_Seizure(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects felt it coming \"Yes\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_selects_felt_it_coming(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Save seizure",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_Save_seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seizure successfully added displayed true",
  "keyword": "Then "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.seizure_successfully_added_displayed_true()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Home page",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_navigates_to_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generalized motor seizure added and deleted",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@add"
    }
  ]
});
formatter.step({
  "name": "User navigates to Manage Seizure page",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_navigates_to_Manage_Seizure_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects type of Seizure \"Other Myoclonic seizures\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_selects_type_of_Seizure(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects felt it coming \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_selects_felt_it_coming(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Save seizure",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_Save_seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seizure successfully added displayed true",
  "keyword": "Then "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.seizure_successfully_added_displayed_true()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/editSeizure.feature");
formatter.feature({
  "name": "Check the Edit Seizure feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@edit"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Home page",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_navigates_to_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Manage Seizure page",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_navigates_to_Manage_Seizure_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects type of Seizure \"Generalized absence seizure\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_selects_type_of_Seizure(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects felt it coming \"No\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_selects_felt_it_coming(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Save seizure",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_Save_seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seizure successfully added displayed true",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.seizure_successfully_added_displayed_true()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User edits existing Seizure data and adds durations time",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@edit"
    }
  ]
});
formatter.step({
  "name": "User navigates to Journal and select existing first existing Seizure",
  "keyword": "When "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.EditSeizureStepDefs.user_navigates_to_Journal_and_select_existing_first_existing_Seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects felt it coming \"Yes\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_selects_felt_it_coming(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User defines the duration as 1 minute and 30 seconds",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.EditSeizureStepDefs.user_defines_the_duration_as_minute_and_seconds(java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Save seizure",
  "keyword": "Then "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_Save_seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Home page",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_navigates_to_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Manage Seizure page",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_navigates_to_Manage_Seizure_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects type of Seizure \"Generalized absence seizure\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_selects_type_of_Seizure(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects felt it coming \"No\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_selects_felt_it_coming(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Save seizure",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_Save_seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seizure successfully added displayed true",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.seizure_successfully_added_displayed_true()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User edits existing Seizure data and adds a trigger option",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@edit"
    },
    {
      "name": "@trigger"
    }
  ]
});
formatter.step({
  "name": "User navigates to Journal and select existing first existing Seizure",
  "keyword": "When "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.EditSeizureStepDefs.user_navigates_to_Journal_and_select_existing_first_existing_Seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Triggers section and adds \"Stress\" as Trigger",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.EditSeizureStepDefs.user_selects_Triggers_section_and_adds_as_Trigger(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Save seizure",
  "keyword": "Then "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_Save_seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Home page",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_navigates_to_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Manage Seizure page",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_navigates_to_Manage_Seizure_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects type of Seizure \"Generalized absence seizure\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_selects_type_of_Seizure(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects felt it coming \"No\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_selects_felt_it_coming(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Save seizure",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_Save_seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seizure successfully added displayed true",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.seizure_successfully_added_displayed_true()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User edits existing Seizure data and adds a Emergency medications option",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@edit"
    },
    {
      "name": "@medication"
    }
  ]
});
formatter.step({
  "name": "User navigates to Journal and select existing first existing Seizure",
  "keyword": "When "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.EditSeizureStepDefs.user_navigates_to_Journal_and_select_existing_first_existing_Seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Emergency medications section and adds \"Clobazam\" as used Medication",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.EditSeizureStepDefs.user_selects_Emergency_medications_section_and_adds_as_used_Medication(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Save seizure",
  "keyword": "Then "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_Save_seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User deletes first existing Seizure",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.EditSeizureStepDefs.user_deletes_first_existing_Seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Home page",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_navigates_to_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Manage Seizure page",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_navigates_to_Manage_Seizure_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects type of Seizure \"Generalized absence seizure\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_selects_type_of_Seizure(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects felt it coming \"No\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_selects_felt_it_coming(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Save seizure",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_Save_seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seizure successfully added displayed true",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.seizure_successfully_added_displayed_true()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User edits existing Seizure adds a Emergency medications option and adds a trigger option",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@edit"
    }
  ]
});
formatter.step({
  "name": "User navigates to Journal and select existing first existing Seizure",
  "keyword": "When "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.EditSeizureStepDefs.user_navigates_to_Journal_and_select_existing_first_existing_Seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Emergency medications section and adds \"Clobazam\" as used Medication",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.EditSeizureStepDefs.user_selects_Emergency_medications_section_and_adds_as_used_Medication(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Triggers section and adds \"Stress\" as Trigger",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.EditSeizureStepDefs.user_selects_Triggers_section_and_adds_as_Trigger(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Save seizure",
  "keyword": "Then "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_Save_seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Home page",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_navigates_to_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Manage Seizure page",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_navigates_to_Manage_Seizure_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects type of Seizure \"Generalized absence seizure\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_selects_type_of_Seizure(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects felt it coming \"No\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_selects_felt_it_coming(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Save seizure",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_Save_seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seizure successfully added displayed true",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.seizure_successfully_added_displayed_true()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User edits existing Seizure adds a Emergency medications option and adds a trigger option and deletes it",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@edit"
    }
  ]
});
formatter.step({
  "name": "User navigates to Journal and select existing first existing Seizure",
  "keyword": "When "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.EditSeizureStepDefs.user_navigates_to_Journal_and_select_existing_first_existing_Seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Emergency medications section and adds \"Clobazam\" as used Medication",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.EditSeizureStepDefs.user_selects_Emergency_medications_section_and_adds_as_used_Medication(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Triggers section and adds \"Stress\" as Trigger",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.EditSeizureStepDefs.user_selects_Triggers_section_and_adds_as_Trigger(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Save seizure",
  "keyword": "Then "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_Save_seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User deletes first existing Seizure",
  "keyword": "And "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.EditSeizureStepDefs.user_deletes_first_existing_Seizure()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});