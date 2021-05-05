$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/addSeizure.feature");
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
formatter.scenarioOutline({
  "name": "Adding Seizure",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@dataDriven"
    }
  ]
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
        "No"
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
  "name": "Adding Seizure",
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
  "name": "Adding Seizure",
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
  "name": "Adding Seizure",
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
  "name": "Adding Seizure",
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
  "name": "Adding Seizure",
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
  "name": "Adding Seizure",
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
});