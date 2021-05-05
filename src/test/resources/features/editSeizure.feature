@editSeizure
Feature: Check the Edit Seizure feature
  Background:
    Given User is on the login page
    And User logs in
    And User navigates to Home page

  Scenario: User edits existing Seizure data
    And User navigates to Manage Seizure page
    And User adds Generalize Absence Seizure
    When User navigates to Journal and select existing Generalize Absence Seizure
    And User edit existing
    Then Add an event popup displayed

    Scenario: User deletes existing seizure
      When User navigates to Journal and delete existing seizures
      Then User move to HomePage





