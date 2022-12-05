import axios, { AxiosInstance } from 'axios';

export class APILocation {
    locationAPI: AxiosInstance;

    constructor() {
        this.locationAPI = axios.create({
            baseURL: `https://ipapi.co`,
        })
    }

    public getCityAndCountry = async () => {
        const { data: { city, country_name } } = await this.locationAPI.get("/json");
        return { city, country: country_name };
    }

    public getIP = async () => {
        const { data } = await this.locationAPI.get("/ip");
        return data
    }
}
