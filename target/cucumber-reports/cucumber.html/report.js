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
formatter.scenario({
  "name": "Login to Add Seizure functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
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
  "name": "User clicks on \"Add\" to display Add functionalities",
  "keyword": "When "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.user_clicks_on_to_display_Add_functionalities(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add functionalities displayed \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.neuroventis.helpilepsy.step_definitions.AddSeizureStepDefs.add_functionalities_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
});