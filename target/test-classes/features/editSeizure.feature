@smoke @edit
Feature: Check the Edit Seizure feature

  Background:
    Given User is on the login page
    And User logs in
    And User navigates to Home page
    And User navigates to Manage Seizure page
    And User selects type of Seizure "Generalized absence seizure"
    And User selects felt it coming "No"
    And User Save seizure
    And Seizure successfully added displayed true

  Scenario: User edits existing Seizure data and adds durations time

    When User navigates to Journal and select existing first existing Seizure
    And User selects felt it coming "Yes"
    And User defines the duration as 1 minute and 30 seconds
    Then User Save seizure

    @trigger
  Scenario: User edits existing Seizure data and adds a trigger option
    When User navigates to Journal and select existing first existing Seizure
    And User selects Triggers section and adds "Stress" as Trigger
    Then User Save seizure
  @medication
  Scenario: User edits existing Seizure data and adds a Emergency medications option
    When User navigates to Journal and select existing first existing Seizure
    And User selects Emergency medications section and adds "Clobazam" as used Medication
    Then User Save seizure
    And User deletes first existing Seizure



  Scenario: User edits existing Seizure adds a Emergency medications option and adds a trigger option
    When User navigates to Journal and select existing first existing Seizure
    And User selects Emergency medications section and adds "Clobazam" as used Medication
    And User selects Triggers section and adds "Stress" as Trigger
    Then User Save seizure

  Scenario: User edits existing Seizure adds a Emergency medications option and adds a trigger option and deletes it
    When User navigates to Journal and select existing first existing Seizure
    And User selects Emergency medications section and adds "Clobazam" as used Medication
    And User selects Triggers section and adds "Stress" as Trigger
    Then User Save seizure
    And User deletes first existing Seizure










