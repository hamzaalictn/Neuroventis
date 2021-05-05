@smoke
Feature: Check the Edit Seizure feature
  Background:
    Given User is on the login page
    And User logs in
    And User navigates to Home page

  Scenario: User edits existing Seizure data
    And User navigates to Manage Seizure page
    And User selects type of Seizure "Generalized absence seizure"
    And User selects felt it coming "No"
    And User Save seizure
    And Seizure successfully added displayed true
    When User navigates to Journal and select existing first existing Seizure
    And User selects felt it coming "Yes"
    And User defines the duration as 1 minute and 30 seconds
    Then User saves changes and should be recorded

  Scenario: User edits existing Seizure data
    When User navigates to Journal and select existing first existing Seizure
    Then User deletes first existing Seizure


  Scenario: User deletes existing seizure
      When User navigates to Journal and delete existing seizures
      Then User move to HomePage




