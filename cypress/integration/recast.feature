Feature: validate Login functionality in recast studio
 I already signup 

    Scenario: validate Login with valid credentails
        Given I move on recast login page 
        When I type username and password 
        And I click on login button
        And I waiting for load login page
        Then I should navigate to reacast dashboard and validate it

    Scenario: validate Login with invalid credentials 
        Given I navigate to the recast login page 
        When I type invalid username and password 
        And I click on login button
        Then I should not be logged in and validate it

























