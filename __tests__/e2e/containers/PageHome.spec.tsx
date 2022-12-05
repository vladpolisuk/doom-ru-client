import { expect, test } from '@playwright/test';
import en from '../../../public/locales/en/home.json';
import ru from '../../../public/locales/ru/home.json';
import ua from '../../../public/locales/ua/home.json';

const locales = [en, ru, ua];

test.describe("Home", async () => {
    locales.forEach(async ({ home_section_search: { section_title }, home_title, locale }) => {
        test.describe(`lang ${locale}`, async () => {
            test.use({ locale });

            test.beforeEach(async ({ page }) => {
                await page.goto(`http://localhost:3000/${locale}`);
            });

            test(`should have correct page title`, async ({ page }) => {
                const title = await page.title();
                expect(title).toEqual(home_title);
            });

            test(`should have correct h1 title`, async ({ page }) => {
                const h1 = await page.textContent("h1");
                expect(h1).toEqual(section_title);
            });
        });
    });
});