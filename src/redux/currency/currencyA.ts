import {CurrencyItemType} from "./currencyR";

export const currencyA = {
    setCurrenciesArr: (currencyArr: Array<CurrencyItemType>) => ({type: "SET_CURRENCY_ARRAY", currencyArr}) as const,
    setExchangeRes: (exchangeRes: number) => ({type: "SET_EXCHANGE_RES", exchangeRes}) as const,
}