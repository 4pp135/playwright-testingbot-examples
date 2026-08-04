// @ts-check
const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

/**
 * Build the TestingBot WebSocket endpoint with capabilities
 */
function getTestingBotEndpoint(browserName, browserVersion = 'latest', platform = 'WIN10') {
  const capabilities = {
    browserName,
    browserVersion,
    platform,
    'tb:options': {
      key: process.env.TESTINGBOT_KEY,
      secret: process.env.TESTINGBOT_SECRET,
    },
  };

  return `wss://cloud.testingbot.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`;
}

/**
 * @see https://playwright.dev/docs/test-configuration
 * @see https://testingbot.com/support/web-automate/playwright
 */
module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1, // TestingBot free/open-source plans usually have limited parallel sessions
  reporter: 'html',
  timeout: 60 * 1000,

  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        connectOptions: {
          wsEndpoint: getTestingBotEndpoint('chrome', 'latest', 'WIN10'),
        },
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        connectOptions: {
          wsEndpoint: getTestingBotEndpoint('firefox', 'latest', 'WIN10'),
        },
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        connectOptions: {
          wsEndpoint: getTestingBotEndpoint('safari', 'latest', 'SEQUOIA'),
        },
      },
    },
  ],
});
