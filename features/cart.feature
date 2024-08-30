@addtocart
Feature: Add Item to Cart

  Background:
    Given user on the login page
    When user login with "standard_user" as username and "secret_sauce" as password
    Then user should be directed to homepage

  @positivecase @testcase-03
  Scenario: Add item to cart
    When user adds an item to the cart
    Then user should see the item in the cart

@positivecase @testcase-04
  Scenario: Remove item from cart
    When user remove the item from cart
    Then cart should be empty
