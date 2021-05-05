$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DataDrivenAddSeizure.feature");
formatter.feature({
  "name": "Check the Add Seizure feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@dataDriven"
    },
    {
      "name": "@smoke"
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
    },
    {
      "cells": [
        "Generalized motor seizure",
        "Yes"
      ]
    },
    {
      "cells": [
        "Focal aware seizure",
        "Yes"
      ]
    },
    {
      "cells": [
        "Focal impaired awareness seizure",
        "No"
      ]
    },
    {
      "cells": [
        "Other Myoclonic seizures",
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
      "name": "@dataDriven"
    },
    {
      "name": "@smoke"
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
      "name": "@dataDriven"
    },
    {
      "name": "@smoke"
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
      "name": "@dataDriven"
    },
    {
      "name": "@smoke"
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
  "name": "User selects type of Seizure \"Generalized motor seizure\"",
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
  "name": "Adding Seizures",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@dataDriven"
    },
    {
      "name": "@smoke"
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
      "name": "@dataDriven"
    },
    {
      "name": "@smoke"
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
      "name": "@dataDriven"
    },
    {
      "name": "@smoke"
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
  "name": "User edits existing Seizure data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@dataDriven"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@deleteAllAddedSeizure"
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
  "name": "User deletes first existing Seizure until all Seizure deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.EditSeizureStepDefs.user_deletes_first_existing_Seizure_until_all_Seizure_deleted()"
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
  "name": "Warning pupop test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
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
  "name": "Generalized motor seizure",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
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
  "name": "User edits existing Seizure data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
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
  "name": "User saves changes and should be recorded",
  "keyword": "Then "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.EditSeizureStepDefs.user_saves_changes_and_should_be_recorded()"
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
  "name": "User edits existing Seizure data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
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
  "name": "User deletes first existing Seizure",
  "keyword": "Then "
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
formatter.scenario({
  "name": "User deletes existing seizure",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User navigates to Journal and delete existing seizures",
  "keyword": "When "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.EditSeizureStepDefs.user_navigates_to_Journal_and_delete_existing_seizures()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User move to HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.EditSeizureStepDefs.user_move_to_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});