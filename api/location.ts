import axios, { AxiosInstance } from 'axios';

export class APILocation {
    api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: `https://ipapi.co`,
        })
    }

    public getCityAndCountry = async () => {
        const { data: { city, country_name } } = await this.api.get("/json");
        return { city, country: country_name };
    }

    public getIP = async () => {
        const { data } = await this.api.get("/ip");
        return data;
    }
}
