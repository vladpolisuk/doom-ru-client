import axios, { AxiosInstance } from 'axios';

/**
 * The common location api of the application 
 * @property `api` AxiosInstance
 * @methods getCityAndCountry
 * @methods getIP
 * @example 
 * const api = new APILocation();
 * await api.getIP(); // 00.000.000.000
 */
export class APILocation {
    /**
     * The axios instance of the api
     * @type `AxiosInstance`
     * @memberof `APILocation`
     * @private
     */
    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({ baseURL: `https://ipapi.co` })
    }

    /**
     * Get city and country information by current location
     * @memberof `APILocation`
     * @params void
     * @returns \{ city, country \} 
     * @public
     */
    public getCityAndCountry = async () => {
        const { data: { city, country_name } } = await this.api.get("/json");
        return { city, country: country_name };
    }
        
    /**
     * Get IP by current location
     * @memberof `APILocation`
     * @params void
     * @returns ip
     * @public
     */
    public getIP = async () => {
        const { data } = await this.api.get("/ip");
        return data;
    }
}
