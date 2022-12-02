import { type PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    projects: [
        { name: 'chromium',use: { ...devices['Desktop Chrome'] }},
        { name: 'firefox',use: { ...devices['Desktop Firefox'] }},
    ],
};

export default config;