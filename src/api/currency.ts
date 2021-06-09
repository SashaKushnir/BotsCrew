import {myInstance} from "./api";

export const currencyApi = {
    getCurrencyArr: () => {
        return myInstance.get('/api/v7/currencies')
    },
    getExchangeRate: (currency1: string, currency2: string) => {
        return myInstance.get(`/api/v7/convert?q=${currency1 + "_" + currency2}&compact=ultra&apiKey=6cdd4a7aeed089c723d4`)
    }
}