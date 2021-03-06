@smoke @add
Feature: Check the Add Seizure feature

  Background:
    Given User is on the login page
    And User logs in
    And User navigates to Home page

  @login
  Scenario: Login to Add Seizure functionality
    When User clicks add an event button
    Then Add an event popup displayed

  @negatif
  Scenario: Add Seizure functionality Warning popup test
    And User navigates to Manage Seizure page
    When User dont select type of Seizure
    When User selects felt it coming "Yes"
    And User Save seizure
    Then Popup displays configurable massage Warning

  Scenario: Adding Seizure Focal aware seizure
    And User navigates to Manage Seizure page
    When User selects type of Seizure "Focal impaired awareness seizure"
    And User selects felt it coming "Yes"
    And User Save seizure
    Then Seizure successfully added displayed true

  Scenario: Generalized motor seizure added and deleted
    And User navigates to Manage Seizure page
    When User selects type of Seizure "Other Myoclonic seizures"
    And User selects felt it coming "NO"
    And User Save seizure
    Then Seizure successfully added displayed true







