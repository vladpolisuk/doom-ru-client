import { expect, test } from '@playwright/test';
import en from '../../../public/locales/en/home.json';
import ru from '../../../public/locales/ru/home.json';
import ua from '../../../public/locales/ua/home.json';

const locales = [en, ru, ua];

test.describe("AppInput", async () => {
    test(`should have input value`, async ({ page }) => {
        await page.goto("http://localhost:3000/en/");
        await page.type("data-testid=home-search-input", "Belgorod");
        const value = await page.inputValue("data-testid=home-search-input")
        expect(value).toEqual("Belgorod");
    });

    locales.forEach(async ({ home_section_search_input, locale }) => {
        test.describe(`lang ${locale}`, async () => {
            test.use({ locale });

            test.beforeEach(async ({ page }) => {
                await page.goto(`http://localhost:3000/${locale}`);
            });

            test(`should have correct title`, async ({ page }) => {
                const title = await page.getAttribute("data-testid=home-search-input", "title");
                const placeholder = await page.getAttribute("data-testid=home-search-input", "placeholder");
                expect(title).toEqual(home_section_search_input.title);
                expect(placeholder).toEqual(home_section_search_input.placeholder);
            });
        });
    });
});