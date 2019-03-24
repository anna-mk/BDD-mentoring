@all
Feature: BDD

  @epam
  Scenario: Verify EPAM Careers page title
    When I open "https://www.epam.com/" url
    When I wait until "Logo" is present
    And I click on "Careers"
    When I wait until "JobForm" is present
    Then Page title should be "Explore Professional Growth Opportunities | EPAM Careers"

  @others
  Scenario Outline: I should be able to access <URL>
    When I open "<URL>" url
    Then Page title should be "<Title>"

    Examples:
      | URL                                | Title                                                            |
      | https://www.protractortest.org/#/  | Protractor - end-to-end testing for AngularJS                    |
      | https://stackoverflow.com/         | Stack Overflow - Where Developers Learn, Share, & Build Careers  |
