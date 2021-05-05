@smoke
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
  Scenario: Warning pupop test
    And User navigates to Manage Seizure page
    When User dont select type of Seizure
    And User selects felt it coming "Yes"
    And User Save seizure
    Then Popup displays configurable massage Warning


  @dataDriven
  Scenario Outline: Adding Seizure
    And User navigates to Manage Seizure page
    When User selects type of Seizure "<Seizure Type>"
    And User selects felt it coming "<Felt it coming Option>"
    And User Save seizure
    Then Seizure successfully added displayed true


    Examples:
      | Seizure Type                     | Felt it coming Option |
      | Generalized absence seizure      | No                    |
      | Focal aware seizure              | Yes                   |
      | Generalized motor seizure        | Yes                   |
      | Focal aware seizure              | No                    |
      | Focal impaired awareness seizure | No                    |
      | Other Myoclonic seizures         | Yes                   |













