@dataDriven @smoke
Feature: Check the Add Seizure feature

  Background:
    Given User is on the login page
    And User logs in
    And User navigates to Home page

  Scenario Outline: Adding Seizures
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
      | Focal aware seizure              | Yes                   |
      | Focal impaired awareness seizure | No                    |
      | Other Myoclonic seizures         | Yes                   |

  @deleteAllAddedSeizure
  Scenario: User edits existing Seizure data
    When User navigates to Journal and select existing first existing Seizure
    Then User deletes first existing Seizure until all Seizure deleted