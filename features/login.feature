Feature: Login

        Scenario Outline: Verify successful login
            Given User on launch page
             #When User login using valid credentials
             Then User enter valid "<username>" and "<password>"
             #Given User on products screen
             #Then Verify products heading
        Examples:
                  | username      | password     |
                  | standard_user | secret_sauce |

