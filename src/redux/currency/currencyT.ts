import {commonA} from "../common/commonA";
import {currencyApi} from "../../api/currency";
import {Action, Dispatch} from "redux";
import {ActionsTypes} from "../store";
import {currencyA} from "./currencyA";
import {CurrencyItemType} from "./currencyR";

export const getFullListOfCurrencies = () => async (d: Dispatch<ActionsTypes<typeof commonA | typeof currencyA>>) => {
    try {
        d(commonA.fetchingToggle(true))
        const res = await currencyApi.getCurrencyArr()
        if(!res.statusText) {
            const currencytoArr = Object.values(res.data.results)
            d(currencyA.setCurrenciesArr(currencytoArr as Array<CurrencyItemType>))
            localStorage.setItem("currencies", JSON.stringify(currencytoArr))
        }
        console.log(res)
        d(commonA.fetchingToggle(false))
    } catch (e) {
        d(commonA.fetchingToggle(true))
    }
}

export const exchange = (currency1: string, currency2: string, numInp: string) => async (d: Dispatch<ActionsTypes<typeof commonA | typeof currencyA>>) => {
    try {
        const propKey = currency1 + "_" + currency2
        d(commonA.fetchingToggle(true))
        const res = await currencyApi.getExchangeRate(currency1, currency2)
        if(!res.statusText) {
            d(currencyA.setExchangeRes(res.data[propKey] * parseFloat(numInp)))
        } else {

        }
        d(commonA.fetchingToggle(false))

        console.log(res)
    } catch (e) {
        d(commonA.fetchingToggle(false))
    }
}

export const exchangeAll = (currencyItem: string, currencyArr: Array<CurrencyItemType>) => async (d: Dispatch<ActionsTypes<typeof commonA | typeof currencyA>>) => {
    try {
        let resulter: any = []
        // I didn't find a way to get data with 1 request so tried to do so many... It prevented my account reaching limits
        // After that I'd simply show data
        // Sorry for not ready task but time is over()()()
        d(commonA.fetchingToggle(true))
        for(let i = 0; i< currencyArr.length/50; i++) {
            resulter[i] = await currencyApi.getExchangeRate(currencyItem, currencyArr[i].id)
        }
        console.log(resulter)
    } catch (e) {
        d(commonA.fetchingToggle(false))
    }
}