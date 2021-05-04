@smoke
Feature: Check the Add Seizure feature
  Scenario: Login to Add Seizure functionality
    Given User is on the login page
    And User logs in
    And User navigates to Home page
    And User navigates to Manage Seizure page
    When User clicks on "Add" to display Add functionalities
    Then Add functionalities displayed "true"

    Scenario: