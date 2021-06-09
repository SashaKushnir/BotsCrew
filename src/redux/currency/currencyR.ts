import {ActionsTypes} from "../store";
import {currencyA} from "./currencyA";

interface CurrencyInitialType {
    currencyArr?: Array<CurrencyItemType>,
    exchangeRes?: number
}
export interface CurrencyItemType {
    "currencyName": string
    "currencySymbol"?:string
    "id": string
}

const currencyInitial: CurrencyInitialType = {

}

export const currencyR = (currency: CurrencyInitialType = currencyInitial, action: ActionsTypes<typeof currencyA>) => {
    switch (action.type) {
        case "SET_CURRENCY_ARRAY":
            return {
                ...currency,
                currencyArr: [...action.currencyArr]
            }
        case "SET_EXCHANGE_RES":
            return {
                ...currency,
                exchangeRes: action.exchangeRes
            }
        default:
            return currency
    }
}