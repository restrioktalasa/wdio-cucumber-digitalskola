@login
Feature: Login Test

  Background: 
    Given user on the login page

  @positivecase @testcase-01
  Scenario Outline: Login Successfull
    When user login with "<username>" as username and "<password>" as password
    Then user should be directed to homepage

    Examples:
      | username     |   password    | 
      | standard_user| secret_sauce  | 
      | visual_user  | secret_sauce  | 

  @negativecase @testcase-02
  Scenario Outline: Login Unsuccessfull
    When user login with "<username>" as username and "<password>" as password
    Then user should see error message "Epic sadface: Username and password do not match any user in this service"

    Examples:
      | username    |   password    | 
      | nothing_user| secret_sauce  | 
      | common_user | secret_sauce  | 


