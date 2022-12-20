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

            const { name, url } = header_nav_links[0];

            test(`should navigate to the ${name} page`, async ({ page, locale }) => {
                await page.goto(`http://localhost:3000/${locale}`);
                await page.click(`text=${name}`);
                await expect(page).toHaveURL(`http://localhost:3000/${locale}${url}`);
            });
        });
    });
});