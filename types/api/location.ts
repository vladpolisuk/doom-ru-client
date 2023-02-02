import { AxiosInstance } from 'axios';
import { APIResponseType } from ".";

export type GetLocationAPIType = () => {
    /** Get city and country information by current location*/
    getCityAndCountry: ReturnType<GetCityAndCountryType>;
    /** Get IP by current location */
    getIP: ReturnType<GetIPType>;
};

export type GetCityAndCountryType = (api: AxiosInstance) =>
    () => APIResponseType<{ city: string, country: string }>;

export type GetIPType = (api: AxiosInstance) =>
    () => APIResponseType<string>;