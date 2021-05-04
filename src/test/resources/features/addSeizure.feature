@smoke
Feature: Check the Add Seizure feature
  Background:
    Given User is on the login page
    And User logs in
    And User navigates to Home page

  Scenario: Login to Add Seizure functionality
    And User navigates to Manage Seizure page
    When User clicks on "Add" to display Add functionalities
    Then Add functionalities displayed "true"

  Scenario:
    When User add new Seizure
    Then User checks new Seizure


