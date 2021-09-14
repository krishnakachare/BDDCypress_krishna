Feature: End to End Recast login functionality validation

    Users should be already signup


    Scenario Outline: validate Login test with valide cridentioals for the recast studio
        Given User Navigate to recast studio login page
        When User logged in using <username>
        And Password as <password>
        And User clicks on submit button
        And wait for load dashboard or home page
        Then Home page should be displayed and validate it


        Examples:
            |username                       |password          |
            |tecure.shrikrishna96@gmail.com |Shrikrishna_@2020 |


 Scenario Outline: validate Login test with invalide cridentioals for the recast studio
    Given User Navigate to recast studio login page
    When User logged in using "<username>"
    And Password as "<password>"
    And User clicks on submit button
    And wait for load dashboard or home page
    Then login page should be displayed and validate it


    Examples:
        | username                             | password              |
        | tecure.shrikrishna96@gmail.          | Shrikrishna_@         |

