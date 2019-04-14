$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/YUVARAJ/eclipse-workspace/SeleniumProject/Task4/src/test/resources/nz.co.flymysky.Feature/BookingPage.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To check the Booking Page in HomePage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The User should see the Find a Flight Page in HomePage",
  "keyword": "Given "
});
formatter.step({
  "name": "The User Should select all the datas in Find a Flight Page till Search Flight \"\u003cFrom\u003e\",\"\u003cTo\u003e\",\"\u003cfromDate\u003e\",\"\u003creturndate\u003e\",\"\u003cAdult\u003e\",\"\u003cchild\u003e\",\"\u003cinfant\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The User should see the flight details",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "From",
        "To",
        "fromDate",
        "returndate",
        "Adult",
        "child",
        "infant"
      ]
    },
    {
      "cells": [
        "Auckland",
        "Great Barrier Island (Claris)",
        "27/03/2019",
        "28/03/2019",
        "1",
        "2",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To check the Booking Page in HomePage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The User should see the Find a Flight Page in HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.the_User_should_see_the_Find_a_Flight_Page_in_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The User Should select all the datas in Find a Flight Page till Search Flight \"Auckland\",\"Great Barrier Island (Claris)\",\"27/03/2019\",\"28/03/2019\",\"1\",\"2\",\"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.the_User_Should_select_all_the_datas_in_Find_a_Flight_Page_till_Search_Flight(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The User should see the flight details",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_User_should_see_the_flight_details()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("C:/Users/YUVARAJ/eclipse-workspace/SeleniumProject/Task4/src/test/resources/nz.co.flymysky.Feature/WhereWeFly.feature");
formatter.feature({
  "name": "To check the WheremyFly",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To check all the links in WheremyFly and data need to be updated in requested page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Click the WhereMyFly link in HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionWhereMyFly.click_the_WhereMyFly_link_in_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Once we click the GreatBarrierIsland its need to be go to there requested page and update the data",
  "rows": [
    {
      "cells": [
        "2",
        "3",
        "12",
        "02/05/2019",
        "05/05/2019",
        "1",
        "1",
        "1"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionWhereMyFly.once_we_click_the_GreatBarrierIsland_its_need_to_be_go_to_there_requested_page_and_update_the_data(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Once we click the Whangarei link its need to be go to there requested page and update the data",
  "rows": [
    {
      "cells": [
        "2",
        "3",
        "12",
        "02/05/2019",
        "05/05/2019",
        "1",
        "1",
        "1"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionWhereMyFly.once_we_click_the_Whangarei_link_its_need_to_be_go_to_there_requested_page_and_update_the_data(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Once we click the SkyTaxi and Tour its need to be go there requested page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionWhereMyFly.once_we_click_the_SkyTaxi_and_Tour_its_need_to_be_go_there_requested_page()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat nz.co.flymysky.Stepdefinition.StepDefinitionWhereMyFly.once_we_click_the_SkyTaxi_and_Tour_its_need_to_be_go_there_requested_page(StepDefinitionWhereMyFly.java:43)\r\n\tat ✽.Once we click the SkyTaxi and Tour its need to be go there requested page(C:/Users/YUVARAJ/eclipse-workspace/SeleniumProject/Task4/src/test/resources/nz.co.flymysky.Feature/WhereWeFly.feature:9)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "All the links must work",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionWhereMyFly.all_the_links_must_work()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});