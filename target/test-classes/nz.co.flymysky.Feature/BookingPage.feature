Feature: Title of your feature

  Scenario Outline: To check the Booking Page in HomePage
    Given The User should see the Find a Flight Page in HomePage
    When The User Should select all the datas in Find a Flight Page till Search Flight "<From>","<To>","<fromDate>","<returndate>","<Adult>","<child>","<infant>"
    Then The User should see the flight details

    Examples: 
      | From     | To                            | fromDate   | returndate | Adult | child | infant |
      | Auckland | Great Barrier Island (Claris) | 27/03/2019 | 28/03/2019 |     1 |     2 |      1 |
