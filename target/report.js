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
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-1GS0JJJ\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:202)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat nz.co.flymysky.Stepdefinition.Hook.beforeMethod(Hook.java:15)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:40)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:32765/status] to be available after 20009 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:100)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:197)\r\n\t... 47 more\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(FutureTask.java:205)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:156)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:75)\r\n\t... 48 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The User should see the Find a Flight Page in HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.the_User_should_see_the_Find_a_Flight_Page_in_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User Should select all the datas in Find a Flight Page till Search Flight \"Auckland\",\"Great Barrier Island (Claris)\",\"27/03/2019\",\"28/03/2019\",\"1\",\"2\",\"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.the_User_Should_select_all_the_datas_in_Find_a_Flight_Page_till_Search_Flight(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User should see the flight details",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_User_should_see_the_flight_details()"
});
formatter.result({
  "status": "skipped"
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