Feature: To check the WheremyFly

  Scenario: To check all the links in WheremyFly and data need to be updated in requested page
    Given Click the WhereMyFly link in HomePage
    When Once we click the GreatBarrierIsland its need to be go to there requested page and update the data
      | 2 | 3 | 12 | 02/05/2019 | 05/05/2019 | 1 | 1 | 1 |
    And Once we click the Whangarei link its need to be go to there requested page and update the data
      | 2 | 3 | 12 | 02/05/2019 | 05/05/2019 | 1 | 1 | 1 |
    And Once we click the SkyTaxi and Tour its need to be go there requested page
    Then All the links must work
