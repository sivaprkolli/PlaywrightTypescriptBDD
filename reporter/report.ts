const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "./",
  reportName: "Playwright Automation Report",
  metadata: {
    browser: {
      name: "chrome",
      version: "121",
    },
    device: "Local test machine",
    platform: {
      name: "Mac",
      version: "Sonama",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Playwright project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "1.1" }
    //   { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
    //   { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
    ],
  },
});
