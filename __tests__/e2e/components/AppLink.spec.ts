import { LocaleHeader } from './../../../types/locales/header';
import { expect, test } from '@playwright/test';
import en from '../../../public/locales/en/header.json';
import ru from '../../../public/locales/ru/header.json';
import ua from '../../../public/locales/ua/header.json';

const locales: LocaleHeader[] = [en, ru, ua];

test.describe("AppLink", async () => {
    locales.forEach(async ({ header_nav_links, locale }) => {
        test.describe(`lang ${locale}`, async () => {
            test.use({ locale });

            test.beforeEach(async ({ page }) => {
                await page.goto(`http://localhost:3000/${locale}`);
            });

            header_nav_links.map(async ({ name, url, title }) => {
                test(`should navigate to the ${name} page`, async ({ page, locale }) => {
                    await page.click(`text=${name}`);
                    await expect(page).toHaveURL(`http://localhost:3000/${locale}${url}`);
                });

                test(`should have correct title ${name}`, async ({ page }) => {
                    const linkTitleAttribute = await page.getAttribute(`[title="${title}"]`, "title");
                    expect(linkTitleAttribute).toEqual(title);
                });
            });
        });
    });
});